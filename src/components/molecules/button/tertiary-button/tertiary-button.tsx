import React from "react";
import { View, ViewStyle } from "react-native";
import TertiaryButtonBase from "./tertiary-button.base";
import { buttonStyles, getButtonDimensions } from "../button.styles";
import { BUTTON_ICON } from "./tertiary-button.helpers";
import { Sizes } from "../button.types";
import { Style, StyleSheet } from "@styles";
import { TERTIARY_BUTTON } from "@ids";

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
  height?: number;
  show?: boolean;
  size?: Sizes;
  iconUri?: string;
  rightIconUri?: string;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
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
    height = DEFAULT_HEIGHT,
    show = true,
    size,
    iconUri,
    rightIconUri,
    LeftIcon,
    RightIcon,
  } = props;

  const buttonDimensions = getButtonDimensions(size);

  if (!show) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle, buttonDimensions])}>
      <TertiaryButtonBase
        disabled={disabled}
        testID={testID || TERTIARY_BUTTON(label)}
        title={label}
        subTitle={tertiarySubLabel}
        onPress={onPress}
        delay={delay}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        height={height}
        iconUri={iconUri}
        rightIconUri={rightIconUri}
        LeftIcon={LeftIcon}
        RightIcon={RightIcon}
      />
    </View>
  );
};

export { BUTTON_ICON };
