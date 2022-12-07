import { MutableRefObject } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import Logger from "@services/logging/logger";

export const showAwardModal = (onPress: () => void, yucoin: number) => {
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
};

export const returnToYuScreen = () => {
  Navigation.dismissAllModals();
  Navigation.popTo(ROUTES.yuScreen);
};

export const showExitModal = (isBackPressed: MutableRefObject<boolean>) => {
  const setInitialState = () => {
    Navigation.dismissModal(MODALS.generic);
    isBackPressed.current = false;
  };

  showYuModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        heading: "Exit Yumoji builder?",
        subheading: "Are you sure you want to exit? You will lose any unsaved changes.",
        ctaLabel: "Exit",
        onPress: () => {
          Logger.logMixpanelEvent("avatar_save", { type: "discarded" });
          returnToYuScreen();
        },
        ctaLabelSecondary: "Keep Editing",
        onPressSecondary: setInitialState,
        onPressBack: setInitialState,
      },
    },
  });
};
