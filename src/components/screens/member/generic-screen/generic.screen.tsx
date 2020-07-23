import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "../../../atoms";
import styles from "./generic.styles";
import { GENERIC_SCREEN_HEADING, GENERIC_SCREEN_CTA } from "@ids";

export interface IGenericModalProps {
  onPress?: () => void;
  heading: string;
  subheading: string;
  ctaLabel: string;
  onPressSecondary?: () => void;
  ctaLabelSecondary?: string;
  isPrimaryLoading?: boolean;
  isPrimaryOnePressOnly?: boolean;
  isSecondaryLoading?: boolean;
}

export default function GenericScreen({
  heading,
  subheading,
  ctaLabel,
  onPress,
  onPressSecondary,
  ctaLabelSecondary,
  isPrimaryLoading,
  isSecondaryLoading,
  isPrimaryOnePressOnly = false,
}: IGenericModalProps) {
  const [hasPressedPrimary, setHasTouchedPrimary] = useState(false);
  const onPressPrimary = () => {
    if (isPrimaryOnePressOnly) {
      setHasTouchedPrimary(true);
    }

    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading} bold={true} testID={GENERIC_SCREEN_HEADING(heading)}>
        {heading}
      </Text>
      <Text style={styles.subheading}>{subheading}</Text>
      <Button
        testID={GENERIC_SCREEN_CTA(ctaLabel)}
        isLoading={isPrimaryLoading || hasPressedPrimary}
        wrapperStyle={styles.buttonWrapper}
        label={ctaLabel}
        onPress={onPressPrimary}
        type="Primary"
      />
      {!(onPressSecondary && ctaLabelSecondary) ? null : (
        <Button
          testID={GENERIC_SCREEN_CTA(ctaLabelSecondary)}
          wrapperStyle={styles.buttonWrapperSecondary}
          label={ctaLabelSecondary}
          onPress={onPressSecondary || (() => null)}
          type="Secondary"
          isLoading={isSecondaryLoading}
        />
      )}
    </View>
  );
}
