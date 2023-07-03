import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import Intercom from "@intercom/intercom-react-native";
import Mixpanel from "react-native-mixpanel";
import getBugsnagClient, { BugsnagClient } from "../bugsnag";
import LeanplumClient from "./leanplum";
import { MixpanelEvent, MixpanelEventMetadata } from "@services/logging/types";
import { Event } from "@bugsnag/react-native";
import region from "@services/region";

class LoggerInstance {
  private userId = "";
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
    if (this.initialised) {
      await Intercom.logout();
      Mixpanel.clearSuperProperties();
      Mixpanel.reset();
    }

    this.userId = "";
  };

  private addDefaultEventProperties = (props: Record<string, any>): Record<string, any> => {
    return {
      ...props,
      app_version: this.appVersion,
      app_version_major_minor: this.appVersionMajorMinor,
    };
  };

  public setUserId = async (userId: string, intercomHash: string) => {
    if (this.userId) {
      // already logged in - ignore everything
      if (this.userId === userId) {
        return;
      }

      await this.logOut();
    }

    this.userId = userId;
    this.bugsnag.setUser(userId, "", "");
    Mixpanel.identify(userId);
    await this.setIntercomUser(userId, intercomHash);
    this.leanplum.setUserId(userId);
  };

  private setIntercomUser = async (userId: string, hash: string) => {
    this.userId = null;
    await Intercom.logout();
    await Intercom.setUserHash(hash);
    await Intercom.loginUserWithUserAttributes({ userId });
    this.userId = userId;
  };

  public logEvent = (event: string, metadata: Record<string, any> = {}) => {
    if (!this.initialised || !this.userId) {
      return;
    }

    const data = this.addDefaultEventProperties(metadata);

    Intercom.logEvent(event, data);
    Mixpanel.trackWithProperties(event, data);
  };

  public logMixpanelEvent = (event: MixpanelEvent, metadata: MixpanelEventMetadata = {}) => {
    if (!this.initialised) {
      return;
    }

    Mixpanel.trackWithProperties(event, this.addDefaultEventProperties(metadata));
  };

  public setUserLanguagePreferenceOnIntercom = (languageOverride: string) => {
    if (!this.initialised || !this.userId) {
      return;
    }

    Intercom.updateUser({ languageOverride });
  };

  public setUserProperties = (props: Record<string, any>, customAttrs = false) => {
    if (!this.initialised || !this.userId) {
      return;
    }

    const eventProperties = this.addDefaultEventProperties(props);
    if (customAttrs) {
      Intercom.updateUser({ customAttributes: eventProperties });
    } else {
      Intercom.updateUser(eventProperties);
    }

    Mixpanel.set(eventProperties);
  };

  public error = (error: Error, tags: Record<string, string | number | boolean>) => {
    if (Config.ENV === "dev") {
      // tslint:disable-next-line
      console.error(error, tags);
    }

    this.bugsnag.notify(error, function (event: Event) {
      // TODO: Omit tags we don't want to see in bugsnag
      if (Object.keys(tags).length) {
        for (const tag of Object.keys(tags)) {
          event.addMetadata("tags", tag, tags[tag]);
        }
      }
      // If this function returns false, the event won't be emitted
    });
  };
}

const Logger = new LoggerInstance();

export default Logger;
