import React from "react";
import { GenericScreen } from "../../screens";
import { IGenericModalProps } from "../../screens/member/generic-screen/generic.screen";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";

export default function GenericModal(props: IGenericModalProps) {
  const {
    heading,
    subheading,
    ctaLabel,
    onPress,
    onPressSecondary,
    ctaLabelSecondary,
    isPrimaryLoading,
    isPrimaryOnePressOnly,
    isSecondaryLoading,
  } = props;

  const backHandler = () => {
    Navigation.dismissModal(MODALS.generic);
    return true;
  };

  useBackHandler(backHandler);

  return (
    <GenericScreen
      heading={heading}
      subheading={subheading}
      ctaLabel={ctaLabel}
      onPress={onPress}
      onPressSecondary={onPressSecondary}
      ctaLabelSecondary={ctaLabelSecondary}
      isPrimaryLoading={isPrimaryLoading}
      isPrimaryOnePressOnly={isPrimaryOnePressOnly}
      isSecondaryLoading={isSecondaryLoading}
    />
  );
}
