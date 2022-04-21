import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { buttonStyles, getButtonDimensions } from "../button.styles";
import { Sizes } from "../button.types";
import { Colours } from "@styles";
import ButtonBase from "../button.base";

interface Props {
  wrapperStyle?: ViewStyle;
  onPress: () => void;
  delay?: number;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  testID?: string;
  label: string;
  show?: boolean;
  size?: Sizes;
  isLoading?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const SecondaryButton = (props: Props) => {
  const {
    onPress,
    delay,
    disabled,
    testID,
    label,
    show = true,
    size,
    leftIcon,
    isLoading,
    borderColor = Colours.primary.p600,
    backgroundColor = "transparent",
    textColor = Colours.primary.p600,
    wrapperStyle,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const buttonDimensions = getButtonDimensions(size);

  if (!show) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle, buttonDimensions])}>
      <ButtonBase
        height={buttonDimensions?.height}
        disabled={disabled}
        testID={testID}
        isLoading={isLoading}
        title={label}
        leftIcon={leftIcon}
        onPress={handlePress}
        borderColor={borderColor}
        color={textColor}
        backgroundColor={backgroundColor}
        borderRadius={50}
        delay={delay}
      />
    </View>
  );
};
