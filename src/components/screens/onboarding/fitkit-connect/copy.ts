import { isSamsung } from "@utils";
import { Platform } from "react-native";

export const alertCopy = {
  title: "Do you have Google Fit downloaded?",
  message:
    "You must have the Google Fit app downloaded on your device prior to connecting in order for syncing to work.",
  confirmLabel: "Yes - let’s go!",
  cancelLabel: "Go back",
};

export const androidAlertCopy = {
  title: "Ready to connect to Google Fit?",
  message: "Before you connect, make sure you have the Google Fit app downloaded on your device.",
  dismissLabel: "Go back",
  downloadLabel: "Download Google Fit",
  confirmLabel: "Yes - I’m ready",
};

const healthAppName = Platform.select({ ios: "Apple Health", android: "Google Fit" });
const heading = Platform.select({
  ios: "Sync to Apple Health",
  android: isSamsung() ? "Connect a health app" : "Connect to Google Fit",
});
const connectMessage = isSamsung()
  ? "Connect to a health app so we can reward you for your daily activities. You can adjust this in your settings any time."
  : `Connect to ${healthAppName} so we can reward you for your daily activities. You can adjust this in your device settings at any time.`;
export const fitKitConnectCopy = {
  heading,
  connectMessage,
  connectButton: "Let's connect",
};
