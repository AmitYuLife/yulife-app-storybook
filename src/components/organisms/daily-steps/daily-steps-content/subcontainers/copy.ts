import { isSamsung } from "@utils";
import { Platform } from "react-native";

const androidMessage = isSamsung()
  ? "In order to reward you for your daily activity we will need to connect to a Health app. Tap below to get started!"
  : "In order to reward you for your daily activity we will need to connect to Google Fit. Tap below to get started!";

const iOSFirstTimeMessage =
  "In order to reward you for your daily activity we will need to connect to Apple Health. Tap below to get started!";
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
