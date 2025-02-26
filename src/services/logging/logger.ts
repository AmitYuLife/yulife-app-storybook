import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import Intercom from "@intercom/intercom-react-native";
import Mixpanel from "react-native-mixpanel";
import getBugsnagClient, { BugsnagClient } from "../bugsnag";
import LeanplumClient from "./leanplum";
import { MixpanelEvent, MixpanelEventMetadata, UserSupportLevel } from "@services/logging/types";
import { Event } from "@bugsnag/expo";
import { region } from "@locale";
import { Platform } from "react-native";
import moment from "moment";

class LoggerInstance {
  private userId = "";
  private updatingUser: boolean = false;
  private initialised = false;
  private appVersion: string;
  private appVersionMajorMinor: string;
  private appVersionRegex = /(\d+.\d+).(\d+)/;
  private bugsnag: BugsnagClient;
  public leanplum: LeanplumClient;

  constructor() {
    this.bugsnag = getBugsnagClient();
    this.appVersion = DeviceInfo.getVersion();
    this.appVersionMajorMinor = DeviceInfo.getVersion().replace(this.appVersionRegex, "$1");
  }

  public init = async () => {
    if (!this.initialised) {
      const mixpanelKey = region.getConfig("mixpanelKey");
      await Mixpanel.sharedInstanceWithToken(mixpanelKey);
      this.leanplum = new LeanplumClient();
      this.initialised = true;
    }
  };

  public logOut = async () => {
    const isUserLoggedIn = await Intercom.isUserLoggedIn();

    this.userId = "";

    if (this.initialised) {
      Mixpanel.clearSuperProperties();
      Mixpanel.reset();

      if (!isUserLoggedIn) {
        // no need to log them out of Intercom as they weren't logged in
        return;
      }

      try {
        await Intercom.logout();
      } catch (err) {
        this.error(err, {
          location: "logger.logOut",
        });
      }
    }
  };

  private addDefaultEventProperties = (props: Record<string, any>): Record<string, any> => {
    return {
      ...props,
      user_utc_offset: moment().utcOffset(),
      app_version: this.appVersion,
      app_version_major_minor: this.appVersionMajorMinor,
    };
  };

  public setUserId = async (userId: string, intercomHash: string, supportLevel: UserSupportLevel) => {
    if (this.updatingUser) {
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

      await this.setIntercomUser(userId, intercomHash, supportLevel);
      this.bugsnag.setUser(userId, "", "");
      Mixpanel.identify(userId);
      this.leanplum.setUserId(userId);
      this.userId = userId;
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
      this.error(err, {
        location: "logger.setIntercomUser",
      });
    }
  };

  public logEvent = async (event: string, metadata: Record<string, any> = {}) => {
    if (!this.initialised || !this.userId) {
      return;
    }

    const data = this.addDefaultEventProperties(metadata);
    const isUserLoggedIn = await Intercom.isUserLoggedIn();
    Mixpanel.trackWithProperties(event, data);

    if (!isUserLoggedIn) {
      return;
    }

    try {
      await Intercom.logEvent(event, data);
    } catch (err) {
      this.error(err, {
        location: "logger.logEvent",
      });
    }
  };

  public sendTokenToIntercom = async (deviceToken: string) => {
    if (this.userId && deviceToken) {
      await Intercom.sendTokenToIntercom(deviceToken);
    }
  };

  public logMixpanelEvent = (event: MixpanelEvent, metadata: MixpanelEventMetadata = {}) => {
    if (!this.initialised) {
      return;
    }

    Mixpanel.trackWithProperties(event, this.addDefaultEventProperties(metadata));
  };

  public setUserLanguagePreferenceOnIntercom = async (languageOverride: string) => {
    const isUserLoggedIn = await Intercom.isUserLoggedIn();
    if (!this.initialised || !this.userId || !isUserLoggedIn) {
      return;
    }

    try {
      await Intercom.updateUser({ languageOverride });
    } catch (err) {
      this.error(err, {
        location: "logger.setUserLanguagePreferenceOnIntercom",
      });
    }
  };

  public setUserProperties = async (props: Record<string, any>, customAttrs = false) => {
    if (!this.initialised || !this.userId) {
      return;
    }

    const eventProperties = this.addDefaultEventProperties(props);
    const isUserLoggedIn = await Intercom.isUserLoggedIn();
    Mixpanel.set(eventProperties);

    if (!isUserLoggedIn) {
      return;
    }

    try {
      if (customAttrs) {
        await Intercom.updateUser({ customAttributes: eventProperties });
      } else {
        await Intercom.updateUser(eventProperties);
      }
    } catch (err) {
      this.error(err, {
        location: "logger.setUserProperties",
      });
    }
  };

  public error = (error: Error, tags: Record<string, string | number | boolean>) => {
    if (Config.ENV === "dev") {
      // tslint:disable-next-line
      console.error(error, tags);
    }

    if (Platform.OS !== "web") {
      this.bugsnag.notify(error, function (event: Event) {
        // TODO: Omit tags we don't want to see in bugsnag
        if (Object.keys(tags).length) {
          for (const tag of Object.keys(tags)) {
            event.addMetadata("tags", tag, tags[tag]);
          }
        }
        // If this function returns false, the event won't be emitted
      });
    }
  };
}

const Logger = new LoggerInstance();

export default Logger;
