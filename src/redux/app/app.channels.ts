import { Navigation } from "@navigation/main";
import NetInfo from "@react-native-community/netinfo";
import { AppState, AppStateStatus, Linking, Platform } from "react-native";
import { eventChannel } from "redux-saga";

export function appStateChannel() {
  return eventChannel<AppStateStatus>((emitter) => {
    const appState = AppState.addEventListener("change", emitter);
    const unlisten = () => {
      appState.remove();
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

    const commandListener = Platform.select({
      ios: null,
      android: Navigation.events().registerCommandListener((name, params) => {
        const { componentId } = params;
        if (componentId && name === "mergeOptions") {
          emitter(componentId);
        }
      }),
    });

    return () => {
      if (screenEventListener) {
        screenEventListener.remove();
      }

      if (commandListener) {
        commandListener.remove();
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
    const linking = Linking.addEventListener("url", emitter);

    const unlisten = () => {
      linking.remove();
    };

    return unlisten;
  });
}

export function memoryWarningChannel() {
  return eventChannel((emitter) => {
    const memoryState = AppState.addEventListener("memoryWarning", () => emitter(true));

    const unlisten = () => {
      memoryState.remove();
    };

    return unlisten;
  });
}
