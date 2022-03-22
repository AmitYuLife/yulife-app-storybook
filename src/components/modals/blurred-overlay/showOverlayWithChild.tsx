import { ReactElement } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { ViewStyle } from "react-native";
import Logger from "@services/logging/logger";

export function showOverlayWithChild(
  children: ReactElement,
  withBlurBackground = true,
  wrapperStyle?: ViewStyle,
  modalId?: string
) {
  if (modalId) {
    Logger.logEvent("screen_view", { name: modalId });
  }

  return Navigation.showOverlay({
    component: {
      id: MODALS.blurredOverlay,
      name: MODALS.blurredOverlay,
      options: {
        layout: {
          componentBackgroundColor: "transparent",
        },
        overlay: {
          interceptTouchOutside: true,
        },
      },
      passProps: {
        children,
        withBlurBackground,
        wrapperStyle,
      },
    },
  });
}
