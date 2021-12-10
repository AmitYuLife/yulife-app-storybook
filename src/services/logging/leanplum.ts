import AsyncStorage from "@react-native-community/async-storage";
import { Leanplum } from "@leanplum/react-native-sdk";
import Config from "react-native-config";

export default class LeanplumClient {
  public isDevMode = false;
  private STORAGE_KEY = "@YuStore:leanplum";
  private started = false;
  private enabled = true;

  constructor() {
    if (!Config.LEANPLUM_API_PROD_KEY && !Config.LEANPLUM_APP_ID) {
      this.enabled = false;
      return;
    }

    this.bootstrap();
  }

  private bootstrap = async () => {
    this.isDevMode = await this.checkIfDevMode();

    if (this.isDevMode) {
      Leanplum.setAppIdForDevelopmentMode(Config.LEANPLUM_APP_ID, Config.LEANPLUM_API_DEV_KEY);
    } else {
      Leanplum.setAppIdForProductionMode(Config.LEANPLUM_APP_ID, Config.LEANPLUM_API_PROD_KEY);
    }
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

    this.start();
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
}
