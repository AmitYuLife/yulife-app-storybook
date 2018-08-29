import { Client } from "bugsnag-react-native";
import Config from "react-native-config";
import Intercom from "react-native-intercom";
import Mixpanel from "react-native-mixpanel";
import bugsnag from "../bugsnag";

class LoggerInstance {

    private bugsnag: Client;

    constructor() {
        Mixpanel.sharedInstanceWithToken(Config.MIXPANEL_API_TOKEN);
        this.bugsnag = bugsnag();
    }

    public setUserId = (userId: string) => {
        Intercom.registerIdentifiedUser({ userId });
        Mixpanel.identify(userId);
        this.bugsnag.setUser(userId, "", "");
    }

    public logEvent(event: string, props?: {}) {
        if (props) {
            Intercom.logEvent(event, props);
            Mixpanel.trackWithProperties(event, props);
        } else {
            Intercom.logEvent(event, null);
            Mixpanel.track(event);
        }
    }

    public logMixpanelEvent(event: string, props?: {}) {
        if (props) {
            Mixpanel.trackWithProperties(event, props);
        } else {
            Mixpanel.track(event);
        }
    }

    public logIntercomEvent(event: string, props?: {}) {
        if (props) {
            Intercom.logEvent(event, props);
        } else {
            Intercom.logEvent(event, null);
        }
    }

    public setUserProperties(props: {}) {
        Intercom.updateUser(props as any);// tslint:disable-line
        Mixpanel.set(props);
    }

    public logRevenue(productIdentifier: string, quantity: number, price: number, receipt: string) {
        Mixpanel.trackChargeWithProperties(price * quantity, {
            productIdentifier,
            receipt
        });
    }
}

const Logger = new LoggerInstance();

export default Logger;
