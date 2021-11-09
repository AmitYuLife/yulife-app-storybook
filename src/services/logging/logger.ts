import { Client } from "bugsnag-react-native";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import Intercom from "react-native-intercom";
import Mixpanel from "react-native-mixpanel";
import bugsnag from "../bugsnag";
import LeanplumClient from "./leanplum";

class LoggerInstance {
  private appVersion: string = DeviceInfo.getVersion();
  private bugsnag: Client;
  public readonly leanplum: LeanplumClient;

  constructor() {
    Mixpanel.sharedInstanceWithToken(Config.MIXPANEL_API_TOKEN);
    this.bugsnag = bugsnag();
    this.leanplum = new LeanplumClient();
  }

  public setIntercomHash = async (hash: string) => {
    await Intercom.setUserHash(hash);
  };

  public setUserId = (userId: string) => {
    Intercom.registerIdentifiedUser({ userId });
    Mixpanel.identify(userId);
    this.bugsnag.setUser(userId, "", "");
    this.leanplum.setUserId(userId);
  };

  public logEvent(event: string, metadata: Record<string, any> = {}) {
    metadata.app_version = this.appVersion;
    Intercom.logEvent(event, metadata);
    Mixpanel.trackWithProperties(event, metadata);
  }

  public logMixpanelEvent(event: string, metadata: Record<string, any> = {}) {
    metadata.app_version = this.appVersion;
    Mixpanel.trackWithProperties(event, metadata);
  }

  public logIntercomEvent(event: string, metadata: Record<string, any> = {}) {
    metadata.app_version = this.appVersion;
    Intercom.logEvent(event, metadata);
  }

  public setUserProperties(props: Record<string, any>, customAttrs = false) {
    if (customAttrs) {
      Intercom.updateUser({ custom_attributes: props });
    } else {
      Intercom.updateUser(props);
    }

    Mixpanel.set(props);
  }

  public error(error: Error, tags: Record<string, string | number | boolean>) {
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
  }
}

const Logger = new LoggerInstance();

export default Logger;
