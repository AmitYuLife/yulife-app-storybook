import { Client } from "bugsnag-react-native";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import Intercom from "@intercom/intercom-react-native";
import Mixpanel from "react-native-mixpanel";
import bugsnag from "../bugsnag";
import LeanplumClient from "./leanplum";
import { MixpanelEvent, MixpanelEventMetadata } from "@services/logging/types";
import { Platform } from "react-native";

class LoggerInstance {
  private appVersion: string;
  private appVersionMajorMinor: string;
  private appVersionRegex = /(\d+.\d+).(\d+)/;
  private bugsnag: Client;
  public readonly leanplum: LeanplumClient;

  constructor() {
    this.init();
    this.bugsnag = bugsnag();
    this.leanplum = new LeanplumClient();
    this.appVersion = DeviceInfo.getVersion();
    this.appVersionMajorMinor = DeviceInfo.getVersion().replace(this.appVersionRegex, "$1");
  }

  private init = async () => {
    await Mixpanel.sharedInstanceWithToken(Config.MIXPANEL_API_TOKEN);
    await Intercom.init(
      Platform.select({ ios: Config.INTERCOM_API_KEY_IOS, android: Config.INTERCOM_API_KEY_ANDROID }),
      Config.INTERCOM_APP_ID
    );
  };

  private addDefaultEventProperties = (props: Record<string, any>): Record<string, any> => {
    return {
      ...props,
      app_version: this.appVersion,
      app_version_major_minor: this.appVersionMajorMinor,
    };
  };

  public setIntercomHash = async (hash: string) => {
    await Intercom.setUserHash(hash);
  };

  public setUserId = (userId: string) => {
    Intercom.registerIdentifiedUser({ userId });
    Mixpanel.identify(userId);
    this.bugsnag.setUser(userId, "", "");
    this.leanplum.setUserId(userId);
  };

  public logEvent = (event: string, metadata: Record<string, any> = {}) => {
    Intercom.logEvent(event, this.addDefaultEventProperties(metadata));
    Mixpanel.trackWithProperties(event, this.addDefaultEventProperties(metadata));
  };

  public logMixpanelEvent = (event: MixpanelEvent, metadata: MixpanelEventMetadata = {}) => {
    Mixpanel.trackWithProperties(event, this.addDefaultEventProperties(metadata));
  };

  public logIntercomEven = (event: string, metadata: Record<string, any> = {}) => {
    Intercom.logEvent(event, this.addDefaultEventProperties(metadata));
  };

  public setUserProperties = (props: Record<string, any>, customAttrs = false) => {
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

    this.bugsnag.notify(error, function (event) {
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
