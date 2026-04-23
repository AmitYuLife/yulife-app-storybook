import Intercom from "@intercom/intercom-react-native";
import Logger from "@services/logger/logger";

export class IntercomClient {
  public static displayMessenger = async () => {
    try {
      await Intercom.present();
    } catch (e) {
      Logger.notify(e, { location: "IntercomClient.displayMessenger" });
    }
  };

  public static displayMessageComposer = async () => {
    try {
      await Intercom.presentMessageComposer();
    } catch (e) {
      Logger.notify(e, { location: "IntercomClient.displayMessageComposer" });
    }
  };

  public static sendTokenToIntercom = async (token: string) => {
    try {
      await Intercom.sendTokenToIntercom(token);
    } catch (e) {
      Logger.notify(e, { location: "IntercomClient.sendTokenToIntercom" });
    }
  };
}
