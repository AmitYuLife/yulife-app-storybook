import * as Application from "expo-application";
import Intercom from "@intercom/intercom-react-native";
import { Mixpanel } from "mixpanel-react-native";
import { MixpanelEvent, MixpanelEventMetadata, UserSupportLevel } from "@services/logging/types";
import { region } from "@locale";
import moment from "moment";
import Logger from "@services/logger/logger";

const MAX_EVENTS_PER_SECOND = 10;

class EngagementTrackingInstance {
  private userId = "";
  private updatingUser: boolean = false;
  private initialised = false;
  private appVersion: string;
  private appVersionMajorMinor: string;
  private appVersionRegex = /(\d+.\d+).(\d+)/;
  private mixpanel: Mixpanel | null = null;
  private eventRates: Map<string, { count: number; resetTime: number }> = new Map();
  private disabledEvents: Set<string> = new Set();
  /** We want to wait until we identify the user before sending it to the MP SDK */
  private anonymousEvents: { name: MixpanelEvent; metadata: MixpanelEventMetadata }[] = [];

  constructor() {
    const version = Application.nativeApplicationVersion ?? "1.0";
    this.appVersion = version;
    this.appVersionMajorMinor = version.replace(this.appVersionRegex, "$1");
  }

  public init = async () => {
    if (!this.initialised) {
      const mixpanelKey = region.getConfig("mixpanelKey");
      const baseUrl = region.getConfig("mixpanelBaseUrl");
      this.mixpanel = new Mixpanel(mixpanelKey, false, false);
      await this.mixpanel.init(undefined, undefined, baseUrl);
      this.initialised = true;
    }
  };

  public logOut = async () => {
    this.userId = "";

    if (this.initialised) {
      this.mixpanel?.clearSuperProperties();
      this.mixpanel?.reset();

      try {
        await Intercom.logout(); // we should always logout from intercom because sometimes things get weirdly cached...
      } catch (err) {
        Logger.error(err, {
          location: "engagement-tracking.logOut",
        });
      }
    }
  };

  private addDefaultEventProperties = (props: Record<string, unknown>): Record<string, unknown> => {
    return {
      ...props,
      user_utc_offset: moment().utcOffset(),
      app_version: this.appVersion,
      app_version_major_minor: this.appVersionMajorMinor,
    };
  };

  public getMixpanelDeviceId = () => this.mixpanel?.getDeviceId?.();

  public setUserId = async (userId: string, intercomHash: string, supportLevel: UserSupportLevel) => {
    if (this.updatingUser) {
      return;
    }

    if (!this.mixpanel) {
      return;
    }

    try {
      this.updatingUser = true;
      if (this.userId) {
        // already logged in - ignore everything
        if (this.userId === userId) {
          this.updatingUser = false;
          return;
        }

        await this.logOut();
      }

      await this.mixpanel.identify(userId);
      this.userId = userId;

      this.anonymousEvents.forEach(({ name, metadata }) => {
        this.logMixpanelEvent(name, metadata);
      });
      this.anonymousEvents = [];

      await this.setIntercomUser(userId, intercomHash, supportLevel);
    } finally {
      this.updatingUser = false;
    }
  };

  private setIntercomUser = async (userId: string, hash: string, supportLevel: UserSupportLevel) => {
    const isUserLoggedIn = await Intercom.isUserLoggedIn();

    if (isUserLoggedIn) {
      return;
    }

    if (supportLevel === UserSupportLevel.Basic) {
      // user isn't meant to have access to chat - don't log them into Intercom
      return;
    }

    try {
      await Intercom.setUserHash(hash);
      await Intercom.loginUserWithUserAttributes({ userId });
    } catch (err) {
      Logger.error(err, {
        location: "engagement-tracking.setIntercomUser",
      });
    }
  };

  public logEvent = async (event: string, metadata: Record<string, unknown> = {}) => {
    if (!this.initialised || !this.userId) {
      return;
    }

    if (this.shouldSuppressEvent(event)) {
      return;
    }

    const data = this.addDefaultEventProperties(metadata);
    const isUserLoggedIn = await Intercom.isUserLoggedIn();
    this.logMixpanelEvent(event as MixpanelEvent, data);

    if (!isUserLoggedIn) {
      return;
    }

    try {
      await Intercom.logEvent(event, data);
    } catch (err) {
      Logger.error(err, {
        location: "engagement-tracking.logEvent",
      });
    }
  };

  public sendTokenToIntercom = async (deviceToken: string) => {
    const isUserLoggedIn = await Intercom.isUserLoggedIn();

    if (this.userId && deviceToken && isUserLoggedIn) {
      await Intercom.sendTokenToIntercom(deviceToken);
    }
  };

  private shouldSuppressEvent = (event: string): boolean => {
    const now = Date.now();
    const rateLimit = this.eventRates.get(event);

    if (!rateLimit || now > rateLimit.resetTime) {
      this.eventRates.set(event, { count: 1, resetTime: now + 1000 });
      this.disabledEvents.delete(event);
      return false;
    }

    if (this.disabledEvents.has(event)) {
      return true;
    }

    if (rateLimit.count >= MAX_EVENTS_PER_SECOND) {
      this.disabledEvents.add(event);
      Logger.warn(`Rate limited engagement event: ${event}`);
      return true;
    }

    rateLimit.count++;
    return false;
  };

  public logMixpanelEvent = (event: MixpanelEvent, metadata: MixpanelEventMetadata = {}) => {
    if (!this.initialised || !this.mixpanel) {
      return;
    }

    if (this.shouldSuppressEvent(event)) {
      // Event is rate limited, skip logging
      return;
    }

    if (!this.userId) {
      this.anonymousEvents.push({ name: event, metadata: { ...metadata, time: Date.now() } });
      return;
    }

    this.mixpanel.track(event, this.addDefaultEventProperties(metadata));
  };

  public setUserLanguagePreferenceOnIntercom = async (languageOverride: string) => {
    const isUserLoggedIn = await Intercom.isUserLoggedIn();
    if (!this.initialised || !this.userId || !isUserLoggedIn) {
      return;
    }

    try {
      await Intercom.updateUser({ languageOverride });
    } catch (err) {
      Logger.error(err, {
        location: "engagement-tracking.setUserLanguagePreferenceOnIntercom",
      });
    }
  };

  public setUserProperties = async (props: Record<string, unknown>, customAttrs = false) => {
    if (!this.initialised || !this.userId) {
      return;
    }

    const eventProperties = this.addDefaultEventProperties(props);
    const isUserLoggedIn = await Intercom.isUserLoggedIn();
    if (this.mixpanel) {
      this.mixpanel.getPeople().set(eventProperties);
    }

    if (!isUserLoggedIn) {
      return;
    }

    try {
      if (customAttrs) {
        await Intercom.updateUser({ customAttributes: eventProperties as Record<string, string | number | boolean> });
      } else {
        await Intercom.updateUser(eventProperties as Record<string, string | number | boolean>);
      }
    } catch (err) {
      Logger.error(err, {
        location: "engagement-tracking.setUserProperties",
      });
    }
  };
}

const EngagementTracking = new EngagementTrackingInstance();

export default EngagementTracking;
