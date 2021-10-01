import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

export function showAwardModal(onPress: () => void, yucoin: number) {
  Navigation.showModal({
    component: {
      id: MODALS.collectReward,
      name: MODALS.collectReward,
      passProps: {
        date: "Great work! \nYour Yumoji is ready for adventure.",
        onPress,
        ctaLabel: "Done",
        yucoin,
      },
    },
  });
}
