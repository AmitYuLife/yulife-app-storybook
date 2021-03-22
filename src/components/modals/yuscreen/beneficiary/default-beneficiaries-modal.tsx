import React from "react";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ConfirmationScreen } from "./confirmation.screen";

interface Props {
  onConfirmPress: () => void;
  onCancelPress: () => void;
}

export default function AddBeneficiaryModal(props: Props) {
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
      title="Would you like these to be your default beneficiaries for other products going forwards?"
      firstLabel="Yes"
      secondLabel="No"
      onFirstButtonPress={onYesPress}
      onSecondButtonPress={onNoPress}
    />
  );
}
