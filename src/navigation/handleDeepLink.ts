import { store } from "@redux/_core/store";
import { GET_HISTORICAL_DATA } from "@redux/daily-steps/daily-steps.actions";
import { getQueryStringObject } from "@services/utils";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { MODALS } from "./constants";
import { labels, setUnauthenticatedRoot } from "./root";

export default async function handleDeepLink(fullUrl: string, hasToken: boolean) {
    const url = fullUrl.replace("yulifeapp://yulife/", "").replace(Config.JOIN_URL, "");

    switch (true) {
        case url.startsWith(labels[0].name):
            if (hasToken) {
                labels[0].onPress();
            }
            return;
        case url.startsWith(labels[1].name):
            if (hasToken) {
                labels[1].onPress();
            }
            return;
        case url.startsWith(labels[2].name):
            if (hasToken) {
                labels[2].onPress();
            }
            return;
        case url.startsWith("historical-data"):
            if (hasToken) {
                store.dispatch({ type: GET_HISTORICAL_DATA });
            }
            return;
        case url.startsWith("feedback"):
            if (hasToken) {
                await Navigation.showModal({
                    component: {
                        id: MODALS.feedback,
                        name: MODALS.feedback,
                        passProps: {
                            closeModal: () => Navigation.dismissModal(MODALS.feedback)
                        }
                    }
                });
            }
            return;
        case url.startsWith("signup/confirm"): // OTP
            if (!hasToken) {
                const props = getQueryStringObject(url);
                if (props.redirectUrl === "/member") {
                    await setUnauthenticatedRoot(props);
                }
            }
            return;
        default:
            return;
    }
}
