import * as React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Colours } from "@styles";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { ButtonBase } from "./button.base";
import { Sizes } from "./button.types";
import { buttonStyles, getWidth } from "./button.styles";
import { DEFAULT_HEIGHT } from "./button.styles";

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
  shadowColor?: string;
  textColor?: string;
  showBadge?: boolean;
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
    shadowColor = Colours.primary.p600Shadow,
    textColor = Colours.neutral.white,
    showBadge = false,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  if (!show) {
    return null;
  }

  const widthStyles = getWidth(size);

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle, widthStyles])}>
      <ButtonBase
        backgroundColor={backgroundColor}
        shadowColor={shadowColor}
        testID={testID}
        height={DEFAULT_HEIGHT}
        isLoading={isLoading}
        disabled={disabled}
        title={label}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        onPress={handlePress}
        color={textColor}
        borderRadius={50}
        delay={delay}
        disableAnimation={disableAnimation}
        showBadge={showBadge}
      />
    </View>
  );
}

export default Button;
