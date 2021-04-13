import { Platform, YellowBox } from "react-native";
import { Navigation, OptionsModalPresentationStyle } from "react-native-navigation";
import registerScreens from "./navigation/index";
import { migrateOldAppVersionToken } from "./services/storage";
import { DETOX_ENABLED } from "@services/socket";
import { initStripe } from "./services/stripe";

if (DETOX_ENABLED) {
  YellowBox.ignoreWarnings([
    "Deprecation warning",
    "Can't perform",
    "currentlyFocusedField is deprecated",
    "Warning: An effect function",
    "An effect function",
    "Possible Unhandled",
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

  await migrateOldAppVersionToken();

  // register all the screens
  registerScreens();

  setDefaultOptions();

  // Init stripe
  initStripe();
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
    popGesture: true,
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
