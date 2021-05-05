import NetInfo from "@react-native-community/netinfo";
import { AppState, Linking } from "react-native";
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
  return eventChannel((emitter) => NetInfo.addEventListener(emitter));
}

export function appComponentDidAppearChannel() {
  return eventChannel((emitter) => {
    const screenEventListener = Navigation.events().registerComponentDidAppearListener(({ componentId }) =>
      emitter(componentId)
    );

    return () => {
      if (screenEventListener) {
        screenEventListener.remove();
      }
    };
  });
}

export function appComponentDidDisappearChannel() {
  return eventChannel((emitter) => {
    const screenEventListener = Navigation.events().registerComponentDidDisappearListener(({ componentId }) =>
      emitter(componentId)
    );

    return () => {
      if (screenEventListener) {
        screenEventListener.remove();
      }
    };
  });
}

export function iosLinkingChannel() {
  return eventChannel((emitter) => {
    Linking.addEventListener("url", emitter);

    const unlisten = () => {
      Linking.removeEventListener("url", emitter);
    };

    return unlisten;
  });
}
