import { Platform, YellowBox } from "react-native";
import { Navigation, OptionsModalPresentationStyle } from "react-native-navigation";
import registerScreens from "./navigation/index";
import { DETOX_ENABLED } from "@services/socket";
import region from "@services/region";

if (DETOX_ENABLED) {
  YellowBox.ignoreWarnings([
    "Deprecation warning",
    "Can't perform",
    "currentlyFocusedField is deprecated",
    "Warning: An effect function",
    "An effect function",
    "Possible Unhandled",
    "RNCPushNotificationIOS",
  ]);
}

const LOADING_ROUTE = "yulife.Loading";

Navigation.registerComponent(
  LOADING_ROUTE,
  () => require("./components/containers/app-loading/app-loading.container").default
);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      component: {
        id: LOADING_ROUTE,
        name: LOADING_ROUTE,
      },
    },
  });

  await region.hydratePreferredRegion();

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
