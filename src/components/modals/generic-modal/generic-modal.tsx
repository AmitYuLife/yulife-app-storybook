import React from "react";
import GenericScreen, { IGenericModalProps } from "@screens/member/generic-screen/generic.screen";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@hooks";

const GenericModal = ({
  heading,
  subheading,
  ctaLabel,
  onPress,
  onPressSecondary,
  ctaLabelSecondary,
  isPrimaryLoading,
  isPrimaryOnePressOnly,
  isSecondaryLoading,
  onPressBack,
  textAlign,
  image,
}: IGenericModalProps) => {
  const backHandler = () => {
    if (onPressBack) {
      onPressBack();
      return true;
    }

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
      textAlign={textAlign}
      image={image}
    />
  );
};

export default GenericModal;
