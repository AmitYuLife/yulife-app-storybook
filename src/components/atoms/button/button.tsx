import * as React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Colours } from "@styles";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { ButtonBase } from "./button.base";
import { BUTTON_TYPES, Types, Sizes } from "./button.types";
import { TertiaryButtonBase } from "./tertiary-button/tertiary-button.base";
import { BUTTON_ICON } from "./tertiary-button/tertiary-button.helpers";
import { DEFAULT_HEIGHT, styles, getWidth } from "./button.styles";

interface IProps {
  isLoading?: boolean;
  type: Types;
  onPress: () => void;
  label: string;
  tertiarySubLabel?: string;
  wrapperStyle?: ViewStyle;
  disabled?: boolean;
  testID?: string;
  size?: Sizes;
  delay?: number;
  disableAnimation?: boolean;
  show?: boolean;
  backgroundColor?: string;
  shadowColor?: string;
  textColor?: string;
  leftIcon?: BUTTON_ICON;
  rightIcon?: BUTTON_ICON;
  iconSvgXml?: string;
  height?: number;
}

function Button(props: IProps) {
  const {
    label,
    tertiarySubLabel,
    type,
    size = "Large",
    wrapperStyle,
    disabled,
    testID,
    isLoading,
    onPress,
    delay,
    disableAnimation,
    show = true,
    backgroundColor = Colours.darkHotPink,
    shadowColor = Colours.darkHotPinkShadow,
    textColor = "white",
    leftIcon,
    rightIcon,
    iconSvgXml,
    height,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  if (!show) {
    return null;
  }

  const widthStyles = getWidth(size);

  if (type === BUTTON_TYPES.PRIMARY) {
    return (
      <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle, widthStyles])}>
        <ButtonBase
          backgroundColor={backgroundColor}
          shadowColor={shadowColor}
          testID={testID}
          height={DEFAULT_HEIGHT}
          isLoading={isLoading}
          disabled={disabled}
          title={label}
          onPress={handlePress}
          color={textColor}
          borderRadius={50}
          delay={delay}
          disableAnimation={disableAnimation}
        />
      </View>
    );
  }

  if (type === BUTTON_TYPES.SECONDARY) {
    return (
      <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle, widthStyles])}>
        <ButtonBase
          height={DEFAULT_HEIGHT}
          disabled={disabled}
          testID={testID}
          isLoading={isLoading}
          title={label}
          onPress={handlePress}
          borderColor={Colours.darkHotPink}
          color={Colours.darkHotPink}
          borderRadius={50}
          delay={delay}
          disableAnimation={disableAnimation}
        />
      </View>
    );
  }

  if (type === BUTTON_TYPES.TERTIARY) {
    return (
      <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle, widthStyles])}>
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
        />
      </View>
    );
  }

  return null;
}

export default Button;
