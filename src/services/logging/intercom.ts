import Intercom from "@intercom/intercom-react-native";
import Logger from "./logger";

export class IntercomClient {
  public static displayMessenger = async () => {
    try {
      await Intercom.displayMessenger();
    } catch (e) {
      Logger.error(e, { location: "IntercomClient.displayMessenger" });
    }
  };

  public static displayMessageComposer = async () => {
    try {
      await Intercom.displayMessageComposer();
    } catch (e) {
      Logger.error(e, { location: "IntercomClient.displayMessageComposer" });
    }
  };

  public static sendTokenToIntercom = async (token: string) => {
    try {
      await Intercom.sendTokenToIntercom(token);
    } catch (e) {
      Logger.error(e, { location: "IntercomClient.sendTokenToIntercom" });
    }
  };
}
