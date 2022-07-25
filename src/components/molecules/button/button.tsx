import * as React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Colours } from "@styles";
import { usePressedInWithDelay } from "@hooks";
import { ButtonBase } from "./button.base";
import { Sizes } from "./button.types";
import { buttonStyles, getButtonDimensions } from "./button.styles";

interface IProps {
  isLoading?: boolean;
  onPress: () => void;
  label: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  wrapperStyle?: ViewStyle;
  disabled?: boolean;
  testID?: string;
  size?: Sizes;
  delay?: number;
  disableAnimation?: boolean;
  show?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
  textColor?: string;
  showBadge?: boolean;
  height?: number;
}

function Button(props: IProps) {
  const {
    label,
    size = "Large",
    wrapperStyle,
    disabled,
    testID,
    isLoading,
    onPress,
    delay,
    disableAnimation,
    show = true,
    backgroundColor = Colours.primary.p600,
    borderColor,
    shadowColor = Colours.primary.p600Shadow,
    textColor = Colours.neutral.white,
    showBadge = false,
    height,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  if (!show) {
    return null;
  }

  const buttonDimensions = getButtonDimensions(size);

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle, buttonDimensions])}>
      <ButtonBase
        borderColor={borderColor}
        backgroundColor={backgroundColor || Colours.primary.p600}
        shadowColor={shadowColor || Colours.primary.p600Shadow}
        color={textColor || Colours.neutral.white}
        testID={testID}
        height={height || buttonDimensions.height}
        isLoading={isLoading}
        disabled={disabled}
        title={label}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        onPress={handlePress}
        borderRadius={50}
        delay={delay}
        disableAnimation={disableAnimation}
        showBadge={showBadge}
      />
    </View>
  );
}

export default Button;
