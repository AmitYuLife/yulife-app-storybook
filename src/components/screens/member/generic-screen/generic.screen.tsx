import * as React from "react";
import { View } from "react-native";
import { Button, Text } from "../../../atoms";
import styles from "./generic.styles";

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
      <Text style={styles.heading} bold={true}>
        {heading}
      </Text>
      <Text style={styles.subheading}>{subheading}</Text>
      <Button
        isLoading={isPrimaryLoading}
        wrapperStyle={styles.buttonWrapper}
        label={ctaLabel}
        onPress={onPress || (() => null)}
        type="Primary"
      />
      {!(onPressSecondary && ctaLabelSecondary) ? null : (
        <Button
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
