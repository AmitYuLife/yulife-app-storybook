import { Platform } from "react-native";

export const androidAlertCopy = {
  title: "Ready to connect to Google Fit?",
  message: "Before you connect, make sure you have the Google Fit app downloaded on your device.",
  dismissLabel: "Go back",
  downloadLabel: "Download Google Fit",
  confirmLabel: "Yes - I’m ready",
};

const androidMessage =
  "We need to collect your health and personal data to track and reward your activity. Tap below to sync to Google Fit and get started!";
const iOSMessage =
  "We haven’t received any data from Apple Health yet today. Please check back in a few minutes or follow the instructions below to troubleshoot.";

export const fitKitNotAuthorizedCopy = {
  buttonLabel: "Yes, let's connect",
  message: Platform.select({ ios: iOSMessage, android: androidMessage }),
};
