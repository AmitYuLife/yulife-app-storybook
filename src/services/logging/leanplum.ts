import { Leanplum } from "@leanplum/react-native-sdk";
import Config from "react-native-config";

export default class LeanplumClient {
  private started = false;
  private enabled = true;

  constructor() {
    if (!Config.LEANPLUM_API_KEY && !Config.LEANPLUM_APP_ID) {
      this.enabled = false;
      return;
    }

    if (Config.LEANPLUM_API_KEY.startsWith("prod_")) {
      Leanplum.setAppIdForProductionMode(Config.LEANPLUM_APP_ID, Config.LEANPLUM_API_KEY);
    } else {
      Leanplum.setAppIdForDevelopmentMode(Config.LEANPLUM_APP_ID, Config.LEANPLUM_API_KEY);
    }
  }

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
}
