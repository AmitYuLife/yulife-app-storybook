import { Inbox, Leanplum, LeanplumInbox } from "@leanplum/react-native-sdk";

import { region } from "@locale";
import { Platform } from "react-native";
import moment from "moment";
import { Storage, StorageKey } from "@utils/storage";

class LeanplumClient {
  public isDevMode = false;
  private enabled = true;

  public bootstrap = async () => {
    const config = region.getConfig("leanplum");

    if (!config.prodKey && !config.appId) {
      this.enabled = false;
      return;
    }

    this.isDevMode = await this.checkIfDevMode();

    if (this.isDevMode) {
      Leanplum.setAppIdForDevelopmentMode(config.appId, config.devKey);
    } else {
      Leanplum.setAppIdForProductionMode(config.appId, config.prodKey);
    }

    Leanplum.start();
  };

  public hasStarted = () => Leanplum.hasStarted();

  private checkIfDevMode = async () => {
    try {
      const key = await Storage.getItem(StorageKey.leanplum);
      return key === "dev";
    } catch (e) {
      return false;
    }
  };

  public setUserId = async (userId: string) => {
    if (!this.enabled) {
      return;
    }

    Leanplum.setUserId(userId);
  };

  public toggleDevelopmentMode = async () => {
    try {
      const isDevMode = await this.checkIfDevMode();
      await Storage.setItem(StorageKey.leanplum, isDevMode ? "prod" : "dev");
    } catch (e) {
      // safe fail
    }
  };

  public getInbox = async (): Promise<Inbox> => {
    if (!this.enabled) {
      return { count: 0, unreadCount: 0, unreadMessages: [], messagesIds: [], allMessages: [] };
    }

    const inbox = await LeanplumInbox.inbox();

    if (Platform.OS === "ios") {
      return inbox;
    }

    const { allMessages, ...inboxOpts } = inbox;
    return {
      ...inboxOpts,
      allMessages: allMessages.map((item) => ({
        ...item,
        // deliveryTimestamp on Android will be eg: 'Wed Feb 22 14:53:58 GMT 2023'
        deliveryTimestamp: moment.utc(item.deliveryTimestamp, "ddd MMM DD HH:mm:ss Z YYYY").toISOString(),
      })),
    };
  };

  public readInbox = async (messageId: string) => {
    if (!this.enabled) {
      return;
    }

    return LeanplumInbox.read(messageId);
  };

  public refreshInbox = async () => {
    if (!this.enabled) {
      return;
    }

    return Leanplum.forceContentUpdate();
  };

  public markAsRead = async (messageId: string) => {
    if (!this.enabled) {
      return;
    }

    return LeanplumInbox.markAsRead(messageId);
  };

  public onInboxUpdate = (callback: () => void) => {
    if (!this.enabled) {
      return;
    }

    return LeanplumInbox.onForceContentUpdate(callback);
  };

  public setUserLastUpdated = () => {
    return Leanplum.setUserAttributes({ lastUpdated: new Date() });
  };
}

export default new LeanplumClient();
