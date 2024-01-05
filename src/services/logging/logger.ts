import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import Intercom from "@intercom/intercom-react-native";
import Mixpanel from "react-native-mixpanel";
import getBugsnagClient, { BugsnagClient } from "../bugsnag";
import LeanplumClient from "./leanplum";
import { MixpanelEvent, MixpanelEventMetadata } from "@services/logging/types";
import { Event } from "@bugsnag/react-native";
import { region } from "@locale";
import { Platform } from "react-native";
import { EncryptedStorageKey, Storage } from "@utils/storage";

class LoggerInstance {
  private userId = "";
  private updatingUser: boolean = false;
  private initialised = false;
  private intercomLoggedIn = false;
  private intercomLoading = false;
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
    this.userId = "";
    this.intercomLoggedIn = false;

    if (this.initialised) {
      Mixpanel.clearSuperProperties();
      Mixpanel.reset();
      try {
        await Intercom.logout();
        await Storage.removeEncryptedItem(EncryptedStorageKey.intercomHash);
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
      app_version: this.appVersion,
      app_version_major_minor: this.appVersionMajorMinor,
    };
  };

  public setUserId = async (userId: string, intercomHash: string, gameIntercomLoginOnce?: boolean) => {
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

      gameIntercomLoginOnce
        ? await this.setIntercomUserOnce(userId, intercomHash)
        : await this.setIntercomUser(userId, intercomHash);
      this.bugsnag.setUser(userId, "", "");
      Mixpanel.identify(userId);
      this.leanplum.setUserId(userId);
      this.userId = userId;
    } finally {
      this.updatingUser = false;
    }
  };

  private setIntercomUserOnce = async (userId: string, hash: string) => {
    const intercomHash = await Storage.getEncryptedItem(EncryptedStorageKey.intercomHash);

    if (intercomHash === hash || this.intercomLoading) {
      this.intercomLoggedIn = true;
      return;
    }

    try {
      this.intercomLoading = true;
      await Intercom.setUserHash(hash);
      await Intercom.loginUserWithUserAttributes({ userId });
      this.intercomLoggedIn = true;
      await Storage.setEncryptedItem(EncryptedStorageKey.intercomHash, hash);
    } catch (err) {
      this.error(err, {
        location: "logger.setIntercomUserOnce",
      });
      this.intercomLoggedIn = false;
    } finally {
      this.intercomLoading = false;
    }
  };

  private setIntercomUser = async (userId: string, hash: string) => {
    try {
      //If we're already logged in Intercom.loginUserWithUserAttributes throws an exception.
      await Intercom.logout();
    } catch (error) {
      // But if we are not logged in Intercom.logout throws an exception.
      // This can be ignored as it should happen only first time we log in.
      // This situation although silly, can't be avoided,
      // because we can not check if user is logged in or not, so we have to try.
    }

    try {
      await Intercom.setUserHash(hash);
      await Intercom.loginUserWithUserAttributes({ userId });
      this.intercomLoggedIn = true;
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
    Mixpanel.trackWithProperties(event, data);
    if (!this.intercomLoggedIn) {
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

  public logMixpanelEvent = (event: MixpanelEvent, metadata: MixpanelEventMetadata = {}) => {
    if (!this.initialised) {
      return;
    }

    Mixpanel.trackWithProperties(event, this.addDefaultEventProperties(metadata));
  };

  public setUserLanguagePreferenceOnIntercom = async (languageOverride: string) => {
    if (!this.initialised || !this.userId || !this.intercomLoggedIn) {
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
    Mixpanel.set(eventProperties);
    if (!this.intercomLoggedIn) {
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
