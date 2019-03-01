import { Client } from "bugsnag-react-native";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import Intercom from "react-native-intercom";
import Mixpanel from "react-native-mixpanel";
import bugsnag from "../bugsnag";

class LoggerInstance {
    private appVersion: string = DeviceInfo.getVersion();
    private bugsnag: Client;

    constructor() {
        Mixpanel.sharedInstanceWithToken(Config.MIXPANEL_API_TOKEN);
        this.bugsnag = bugsnag();
    }

    public setIntercomHash = async (hash: string) => {
        return Intercom.setUserHash(hash);
    };

    public setUserId = (userId: string) => {
        Intercom.registerIdentifiedUser({ userId });
        Mixpanel.identify(userId);
        this.bugsnag.setUser(userId, "", "");
    };

    public logEvent(event: string, metadata: { [x: string]: any } = {}) {
        metadata.app_version = this.appVersion;
        Intercom.logEvent(event, metadata);
        Mixpanel.trackWithProperties(event, metadata);
    }

    public logMixpanelEvent(event: string, metadata: { [x: string]: any } = {}) {
        metadata.app_version = this.appVersion;
        Mixpanel.trackWithProperties(event, metadata);
    }

    public logIntercomEvent(event: string, metadata: { [key: string]: any } = {}) {
        metadata.app_version = this.appVersion;
        Intercom.logEvent(event, metadata);
    }

    public setUserProperties(props: {}, customAttrs = false) {
        if (customAttrs) {
            Intercom.updateUser({ custom_attributes: props });
        } else {
            Intercom.updateUser(props);
        }
        Mixpanel.set(props);
    }

    public logRevenue(productIdentifier: string, quantity: number, price: number, receipt: string) {
        Mixpanel.trackChargeWithProperties(price * quantity, {
            productIdentifier,
            receipt
        });
    }

    public logMixpanelError(e: Error | string, where: string) {
        this.logMixpanelEvent("app_catched_error", { message: typeof e === "string" ? e : e.message, where });
    }
}

const Logger = new LoggerInstance();

export default Logger;
