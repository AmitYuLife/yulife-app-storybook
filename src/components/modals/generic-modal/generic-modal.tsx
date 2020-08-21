import React from "react";
import { GenericScreen } from "../../screens";
import { IGenericModalProps } from "../../screens/member/generic-screen/generic.screen";

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
