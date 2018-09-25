import { AppState, NetInfo } from "react-native";
import { Navigation } from "react-native-navigation";
import { eventChannel } from "redux-saga";

export function appStateChannel() {
    return eventChannel((emitter) => {
        AppState.addEventListener("change", emitter);

        const unlisten = () => {
            AppState.removeEventListener("change", emitter);
        };

        return unlisten;
    });
}

export function appNetworkChannel() {
    return eventChannel((emitter) => {
        NetInfo.addEventListener("connectionChange", emitter);

        const unlisten = () => {
            NetInfo.removeEventListener("connectionChange", emitter);
        };

        return unlisten;
    });
}

export function appNavigationChannel() {
    return eventChannel((emitter) => {
        Navigation.events().registerComponentDidAppearListener(emitter);
        return () => null;
    });
}
