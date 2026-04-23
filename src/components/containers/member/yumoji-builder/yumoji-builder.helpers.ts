import { MutableRefObject } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import EngagementTracking from "@services/logging/engagement-tracking";
import { t } from "@locale";

export const showAwardModal = (onPress: () => void, yucoin: number) => {
  showYuModal({
    component: {
      id: MODALS.collectReward,
      name: MODALS.collectReward,
      passProps: {
        heading: t("screens.yumoji_builder.award_modal.heading"),
        onPress,
        ctaLabel: t("labels.cta.done"),
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
        heading: t("screens.yumoji_builder.exit_modal.heading"),
        subheading: t("screens.yumoji_builder.exit_modal.subheading"),
        ctaLabel: t("labels.cta.exit"),
        onPress: () => {
          EngagementTracking.logMixpanelEvent("avatar_save", { type: "discarded" });
          returnToYuScreen();
        },
        ctaLabelSecondary: t("screens.yumoji_builder.exit_modal.cta_label_secondary"),
        onPressSecondary: setInitialState,
        onPressBack: setInitialState,
      },
    },
  });
};
