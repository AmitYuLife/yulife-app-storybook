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
  connectMessage: `Connect to ${healthAppName} so we can reward you for your daily activities. You can adjust this in your device settings at any time.`,
  connectButton: "Let's connect",
};
