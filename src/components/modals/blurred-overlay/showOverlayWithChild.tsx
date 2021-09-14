import { ReactElement } from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

export function showOverlayWithChild(children: ReactElement) {
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
      },
    },
  });
}
