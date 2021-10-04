import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";

export function showAwardModal(onPress: () => void, yucoin: number) {
  showYuModal({
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
