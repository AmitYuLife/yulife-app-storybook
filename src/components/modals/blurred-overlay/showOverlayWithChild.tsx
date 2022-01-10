import { ReactElement } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { drawBehind } from "@navigation/root";
import { FlexStyle } from "react-native";

export function showOverlayWithChild(
  children: ReactElement,
  withBlurBackground = true,
  flexDirection: FlexStyle["flexDirection"] = "row"
) {
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
        statusBar: {
          drawBehind,
        },
      },
      passProps: {
        children,
        withBlurBackground,
        flexDirection,
      },
    },
  });
}
