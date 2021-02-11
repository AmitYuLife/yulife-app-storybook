import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

export function showEarnRateOverlay() {
  Navigation.showModal({
    component: {
      id: MODALS.earnRate,
      name: MODALS.earnRate,
    },
  });
}
