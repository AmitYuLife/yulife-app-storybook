import AsyncStorage from "@react-native-community/async-storage";
import { Inbox, Leanplum, LeanplumInbox } from "@leanplum/react-native-sdk";

import region from "@services/region";
import { Platform } from "react-native";
import moment from "moment";

export default class LeanplumClient {
  public isDevMode = false;
  private STORAGE_KEY = "@YuStore:leanplum";
  private started = false;
  private enabled = true;

  constructor() {
    const config = region.getConfig("leanplum");

    if (!config.prodKey && !config.appId) {
      this.enabled = false;
      return;
    }

    this.bootstrap();
  }

  private bootstrap = async () => {
    const config = region.getConfig("leanplum");
    this.isDevMode = await this.checkIfDevMode();

    if (this.isDevMode) {
      Leanplum.setAppIdForDevelopmentMode(config.appId, config.devKey);
    } else {
      Leanplum.setAppIdForProductionMode(config.appId, config.prodKey);
    }

    this.start();
  };

  private checkIfDevMode = async () => {
    try {
      const key = await AsyncStorage.getItem(this.STORAGE_KEY);
      return key === "dev";
    } catch (e) {
      return false;
    }
  };

  private start = () => {
    if (this.started) {
      return;
    }

    Leanplum.start();
    this.started = true;
  };

  public setUserId = (userId: string) => {
    if (!this.enabled) {
      return;
    }

    Leanplum.setUserId(userId);
  };

  public toggleDevelopmentMode = async () => {
    try {
      const isDevMode = await this.checkIfDevMode();
      await AsyncStorage.setItem(this.STORAGE_KEY, isDevMode ? "prod" : "dev");
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

  public onInboxUpdate = (callback: () => void) => {
    if (!this.enabled) {
      return;
    }

    return LeanplumInbox.onForceContentUpdate(callback);
  };
}
