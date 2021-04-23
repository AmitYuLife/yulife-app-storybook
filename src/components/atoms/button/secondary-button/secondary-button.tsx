import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { DEFAULT_HEIGHT, getWidth, buttonStyles } from "../button.styles";
import { Sizes } from "../button.types";
import { Colours } from "@styles";
import ButtonBase from "../button.base";

interface Props {
  wrapperStyle?: ViewStyle;
  onPress: () => void;
  delay?: number;
  disabled?: boolean;
  testID?: string;
  label: string;
  show?: boolean;
  size?: Sizes;
  isLoading?: boolean;
}

export const SecondaryButton = (props: Props) => {
  const { wrapperStyle, onPress, delay, disabled, testID, label, show = true, size, isLoading } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const widthStyles = getWidth(size);

  if (!show) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle, widthStyles])}>
      <ButtonBase
        height={DEFAULT_HEIGHT}
        disabled={disabled}
        testID={testID}
        isLoading={isLoading}
        title={label}
        onPress={handlePress}
        borderColor={Colours.primary.p600}
        color={Colours.primary.p600}
        borderRadius={50}
        delay={delay}
      />
    </View>
  );
};
