import React from "react";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import { ConfirmationScreen } from "./confirmation.screen";
import { t } from "@locale";

interface Props {
  onConfirmPress: () => void;
  onCancelPress: () => void;
}

const AddBeneficiaryModal = (props: Props) => {
  const { onConfirmPress, onCancelPress } = props;

  const dismissModal = () => {
    Navigation.dismissModal(MODALS.defaultBeneficiaries);
  };

  const backHandler = () => {
    dismissModal();
    return true;
  };

  useBackHandler(backHandler);

  const onYesPress = () => {
    onConfirmPress();
    dismissModal();
  };

  const onNoPress = () => {
    onCancelPress();
    dismissModal();
  };

  return (
    <ConfirmationScreen
      title={t("modals.add_beneficiary.default_confirmation.title")}
      firstLabel={t("labels.cta.yes")}
      secondLabel={t("labels.cta.no")}
      onFirstButtonPress={onYesPress}
      onSecondButtonPress={onNoPress}
    />
  );
};

export default AddBeneficiaryModal;
