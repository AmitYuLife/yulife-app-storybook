import Config from "react-native-config";
import Bugsnag, { Event } from "@bugsnag/expo";
import { Platform } from "react-native";
import { noop } from "lodash";

export type BugsnagClient = typeof Bugsnag;
let client: BugsnagClient;

// Silence `no bugsnag session due to enabledReleaseStages` in local dev
// they don't have a better way of doing this
const bugsnagLogger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: function (...args: Parameters<typeof console["log"]>) {
    console.log(...args);
  },
};

export default function getClient(): BugsnagClient {
  if (Platform.OS === "web") {
    return;
  }

  if (!client) {
    Bugsnag.start({
      logger: bugsnagLogger,
      releaseStage: Config.ENV,
      enabledReleaseStages: ["develop", "uat", "production"],
      onError: function (event: Event) {
        if (event.errors?.[0]?.errorMessage) {
          const { errorMessage } = event.errors[0];
          const isNetworkError = /Network request failed/.test(errorMessage);
          if (isNetworkError) {
            return false;
          }
        }

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
