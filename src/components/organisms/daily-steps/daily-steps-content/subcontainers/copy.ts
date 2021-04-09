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
const iOSFirstTimeMessage =
  "We need to collect your health and personal data to track and reward your activity. Tap below to sync to Apple Health and get started!";
const iOSMotionUnauthorisedMessage =
  "In order to get rewarded for your steps and mindfulness, please update your Motion and Fitness permissions.";
const buttonLabel = "Yes, let's connect";
const iOSMotionUnauthorisedButtonLabel = "Open permissions";
const iOSPostPromptMessage =
  "We haven’t received any data from Apple Health today. Please check back in a few minutes or tap below to troubleshoot.";
const postPromptIOSButtonLabel = "Get help connecting";

interface IGetFitKitNotAuthorizedCopy {
  hasRequestedPermission: boolean;
  isIosMotionAuthorised: boolean;
}

export const getFitKitNotAuthorizedCopy = ({
  hasRequestedPermission,
  isIosMotionAuthorised,
}: IGetFitKitNotAuthorizedCopy) => {
  if (Platform.OS === "ios" && !isIosMotionAuthorised) {
    return {
      buttonLabel: iOSMotionUnauthorisedButtonLabel,
      message: iOSMotionUnauthorisedMessage,
    };
  }

  if (Platform.OS === "ios" && !hasRequestedPermission) {
    return {
      buttonLabel,
      message: iOSFirstTimeMessage,
    };
  }

  return {
    buttonLabel: Platform.select({ ios: postPromptIOSButtonLabel, android: buttonLabel }),
    message: Platform.select({ ios: iOSPostPromptMessage, android: androidMessage }),
  };
};
