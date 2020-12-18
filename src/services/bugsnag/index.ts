import { Client, Configuration } from "bugsnag-react-native";
import Config from "react-native-config";

let client: Client; // singleton

export default function getClient() {
  const config = new Configuration();

  config.apiKey = Config.BUGSNAG_API_KEY;
  config.autoCaptureSessions = true;
  config.releaseStage = Config.ENV;

  if (Config.ENV === "dev" || Config.ENV === "test") {
    // don't send in dev or test mode
    config.beforeSendCallbacks.push((report) => false && report);
  }

  if (!client) {
    client = new Client(config);
  }

  return client;
}
