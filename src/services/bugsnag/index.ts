import Config from "react-native-config";
import Bugsnag, { Event } from "@bugsnag/expo";
import { Platform } from "react-native";
import BugsnagPluginReactNativeNavigation from "@bugsnag/plugin-react-native-navigation";
import { Navigation } from "react-native-navigation";

export type BugsnagClient = typeof Bugsnag;
let client: BugsnagClient;

export default function getClient(): BugsnagClient {
  if (Platform.OS === "web") {
    return;
  }

  if (!client) {
    Bugsnag.start({
      plugins: [new BugsnagPluginReactNativeNavigation(Navigation)],
      onError: function (event: Event) {
        if (event.errors?.[0]?.errorMessage) {
          const { errorMessage } = event.errors[0];
          const isNetworkError = /Network request failed/.test(errorMessage);
          // Ignore the network errors
          if (isNetworkError) {
            return false;
          }
        }
        // Add additional diagnostic information
        // event.addMetadata(...)

        // Return `false` if you'd like to stop this error being reported
        // We can also control with 'enabledReleaseStages' config which environments
        // we want to report errors if we want to remove next line
        if (Config.ENV === "dev") {
          return false;
        }

        if (Config.ENV === "test") {
          console.error(JSON.stringify(event, null, 2));
          return false;
        }

        return true;
      },
    });
  }

  client = Bugsnag;

  return client;
}
