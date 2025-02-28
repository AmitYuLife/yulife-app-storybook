import { LogBox } from "react-native";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import registerScreens from "./navigation/index";
import { DETOX_ENABLED } from "@services/socket";
import { OptionsModalPresentationStyle } from "react-native-navigation";
import { getRNNStatusBarStyle } from "@styles/status-bar.styles";

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

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setAppLoading();

  // register all the screens
  registerScreens();
  setDefaultOptions();
});

// TODO: purge when upgrading to RN >=76
if (__DEV__) {
  require("react-native-devsettings");
}

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
    statusBar: getRNNStatusBarStyle(),
    topBar: {
      animate: false,
      drawBehind: true,
      visible: false,
    },
  });
}
