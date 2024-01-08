import { Platform, LogBox } from "react-native";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import registerScreens from "./navigation/index";
import { DETOX_ENABLED } from "@services/socket";
import { OptionsModalPresentationStyle } from "react-native-navigation";
import AudioPlayerService from "@services/audio-player";
import TrackPlayer from "react-native-track-player";

if (DETOX_ENABLED) {
  LogBox.ignoreLogs([
    "Deprecation warning",
    "Can't perform",
    "currentlyFocusedField is deprecated",
    "Warning: An effect function",
    "An effect function",
    "Possible Unhandled",
    "An error occurred!",
  ]);
}

Navigation.registerComponent(
  ROUTES.appLoading,
  () => require("./components/containers/app-loading/app-loading.container").default
);

TrackPlayer.registerPlaybackService(() => AudioPlayerService.registerAudioPlayerListeners);
Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setAppLoading();

  // register all the screens
  registerScreens();
  setDefaultOptions();
});

function setDefaultOptions() {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
      push: {
        waitForRender: true,
      },
    },
    bottomTabs: {
      animate: false,
      drawBehind: true,
      visible: false,
    },
    layout: {
      backgroundColor: "white", // ios
      componentBackgroundColor: "white", // android
      orientation: ["portrait"],
    },
    modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
    // If we enable popGesture we will need to patch ios native popGesture. It doesn't emit an event, so we don't know when it was done and can't add custom back handling logic to it. :pepe-f:
    popGesture: false,
    statusBar: {
      drawBehind: false,
      visible: true,
      style: Platform.select({ ios: "dark", android: "light" }),
    },
    topBar: {
      animate: false,
      drawBehind: true,
      visible: false,
    },
  });
}
