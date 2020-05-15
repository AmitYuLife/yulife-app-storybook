import * as React from "react";
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
}: IGenericModalProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading} bold={true} testID={GENERIC_SCREEN_HEADING(heading)}>
        {heading}
      </Text>
      <Text style={styles.subheading}>{subheading}</Text>
      <Button
        testID={GENERIC_SCREEN_CTA(ctaLabel)}
        isLoading={isPrimaryLoading}
        wrapperStyle={styles.buttonWrapper}
        label={ctaLabel}
        onPress={onPress || (() => null)}
        type="Primary"
      />
      {
        !(onPressSecondary && ctaLabelSecondary) ? null : (
          <Button
            testID={GENERIC_SCREEN_CTA(ctaLabelSecondary)}
            wrapperStyle={styles.buttonWrapperSecondary}
            label={ctaLabelSecondary}
            onPress={onPressSecondary || (() => null)}
            type="Secondary"
            isLoading={isSecondaryLoading}
          />
        )
      }
    </View >
  );
}
