import { t } from "@locale";
import { isSamsung } from "@utils";
import { Platform } from "react-native";

interface IGetFitKitNotAuthorizedCopy {
  hasRequestedPermission: boolean;
  isIosMotionAuthorised: boolean;
}

export const getFitKitNotAuthorizedCopy = ({
  hasRequestedPermission,
  isIosMotionAuthorised,
}: IGetFitKitNotAuthorizedCopy) => {
  const androidMessage = isSamsung()
    ? t("screens.daily.fitkit.unauthorised.android.is_samsung_message")
    : t("screens.daily.fitkit.unauthorised.android.message");

  const iOSFirstTimeMessage = t("screens.daily.fitkit.unauthorised.ios.first_time_message");
  const iOSMotionUnauthorisedMessage = t("screens.daily.fitkit.unauthorised.ios.motion_unauthorised_message");
  const buttonLabel = t("screens.daily.fitkit.unauthorised.button_label");
  const iOSMotionUnauthorisedButtonLabel = t("screens.daily.fitkit.unauthorised.ios.motion_unauthorised_button_label");
  const iOSPostPromptMessage = t("screens.daily.fitkit.unauthorised.ios.post_prompt_message");
  const postPromptIOSButtonLabel = t("screens.daily.fitkit.unauthorised.ios.post_prompt_button_label");

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
