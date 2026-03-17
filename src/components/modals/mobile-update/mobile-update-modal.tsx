import React from "react";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import MobileUpdateModalScreen, {
  IMobileUpdateModalProps,
} from "@components/modals/mobile-update/update-mobile-modal.screen";
import { openYulife } from "@services/app-link";

const MobileUpdateModal = (props: IMobileUpdateModalProps) => {
  const { heading, subheading } = props;

  const backHandler = () => {
    Navigation.dismissModal(MODALS.mobileUpdate);
    return true;
  };

  useBackHandler(backHandler);

  return (
    <MobileUpdateModalScreen
      heading={heading}
      subheading={subheading}
      onPress={openYulife}
      onPressSecondary={() => Navigation.dismissModal(MODALS.mobileUpdate)}
    />
  );
};

export default MobileUpdateModal;
