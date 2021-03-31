import { Platform } from "react-native";

export const alertCopy = {
  title: "Do you have Google Fit downloaded?",
  message:
    "You must have the Google Fit app downloaded on your device prior to connecting in order for syncing to work.",
  confirmLabel: "Yes - let’s go!",
  cancelLabel: "Go back",
};

const healthAppName = Platform.select({ ios: "Apple Health", android: "Google Fit" });
const heading = Platform.select({ ios: "Sync to Apple Health", android: "Connect to Google Fit" });
export const fitKitConnectCopy = {
  heading,
  connectMessage: `By clicking connect you are allowing YuLife to access your health data from ${healthAppName}, so that we can track your daily activities and provide you with rewards. You will be able to adjust what data we can see in your settings.`,
  connectButton: "Let's connect",
};
