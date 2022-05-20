import AsyncStorage from "@react-native-community/async-storage";
import { Leanplum } from "@leanplum/react-native-sdk";
import region from "@services/region";

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
