import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

export function showEarnRateOverlay() {
  Navigation.showOverlay({
    component: {
      id: MODALS.earnRate,
      name: MODALS.earnRate,
      options: {
        layout: {
          componentBackgroundColor: "transparent",
        },
      },
    },
  });
}
