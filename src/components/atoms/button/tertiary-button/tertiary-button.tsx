import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import TertiaryButtonBase from "./tertiary-button.base";
import { getWidth, buttonStyles } from "../button.styles";
import { BUTTON_ICON } from "./tertiary-button.helpers";
import { Sizes } from "../button.types";
import { Style } from "@styles";

interface Props {
  wrapperStyle?: ViewStyle;
  onPress: () => void;
  delay?: number;
  disabled?: boolean;
  testID?: string;
  label: string;
  tertiarySubLabel?: string;
  leftIcon?: BUTTON_ICON;
  rightIcon?: BUTTON_ICON;
  iconSvgXml?: string;
  height?: number;
  show?: boolean;
  size?: Sizes;
  iconUri?: string;
}

const DEFAULT_HEIGHT = Style.adjust(60);

export const TertiaryButton = (props: Props) => {
  const {
    wrapperStyle,
    onPress,
    delay,
    disabled,
    testID,
    label,
    tertiarySubLabel,
    leftIcon,
    rightIcon,
    iconSvgXml,
    height = DEFAULT_HEIGHT,
    show = true,
    size,
    iconUri,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const widthStyles = getWidth(size);

  if (!show) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle, widthStyles])}>
      <TertiaryButtonBase
        disabled={disabled}
        testID={testID}
        title={label}
        subTitle={tertiarySubLabel}
        onPress={handlePress}
        delay={delay}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        iconSvgXml={iconSvgXml}
        height={height}
        iconUri={iconUri}
      />
    </View>
  );
};
