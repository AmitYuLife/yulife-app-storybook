import { ReactElement } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { drawBehind } from "@navigation/root";

export function showOverlayWithChild(children: ReactElement, withBlurBackground = true) {
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
      },
    },
  });
}
