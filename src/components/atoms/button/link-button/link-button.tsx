import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { Colours } from "@styles";
import LinkButtonBase from "./link-button.base";
import { DEFAULT_HEIGHT, styles } from "../button.styles";

interface Props {
  wrapperStyle?: ViewStyle;
  onPress: () => void;
  delay?: number;
  disabled?: boolean;
  testID?: string;
  label: string;
  underline?: boolean;
  show?: boolean;
}

export const LinkButton = (props: Props) => {
  const { wrapperStyle, onPress, delay, disabled, testID, label, underline, show = true } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  if (!show) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}>
      <LinkButtonBase
        height={DEFAULT_HEIGHT}
        disabled={disabled}
        testID={testID}
        title={label}
        onPress={handlePress}
        color={Colours.primary.p600}
        delay={delay}
        underline={underline}
      />
    </View>
  );
};
