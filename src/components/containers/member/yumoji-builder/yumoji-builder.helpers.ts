import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import Logger from "@services/logging/logger";

export function showDoneModal(updateUserAvatar: () => void) {
  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          Logger.logMixpanelEvent("avatar_save", { type: "saved" });
          updateUserAvatar();
        },
        isPrimaryOnePressOnly: true,
        heading: "Great choices!",
        subheading:
          "Do you want to keep all the changes you made? (Equipped items on the YU screen are not affected by this change)",
        ctaLabel: "Save changes",
        ctaLabelSecondary: "Discard changes",
        onPressSecondary: () => {
          Navigation.dismissModal(MODALS.generic);
        },
      },
    },
  });
}

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
