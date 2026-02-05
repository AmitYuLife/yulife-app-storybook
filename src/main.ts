import { DevSettings, LogBox } from "react-native";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import registerScreens from "./navigation/index";
import { DETOX_ENABLED } from "@services/socket";
import AppLoadingContainer from "./components/containers/app-loading/app-loading.container";

if (DETOX_ENABLED) {
  LogBox.ignoreLogs([
    "Open debugger to view warnings.",
    "Deprecation warning",
    "Can't perform",
    "currentlyFocusedField is deprecated",
    "Warning: An effect function",
    "An effect function",
    "Possible Unhandled",
    "An error occurred!",
    "[Datadog SDK]",
  ]);
}

Navigation.registerComponent(ROUTES.appLoading, () => AppLoadingContainer);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setAppLoading();

  // register all the screens
  registerScreens();
  Navigation.setDefaultOptions();

  if (__DEV__) {
    DevSettings.addMenuItem("Debug Menu", () => {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: ROUTES.debug,
                id: ROUTES.debug,
                passProps: {
                  isModal: true,
                },
              },
            },
          ],
        },
      });
    });
  }
});

if (__DEV__) {
  LogBox.ignoreLogs(["[Datadog SDK]"]);
}
