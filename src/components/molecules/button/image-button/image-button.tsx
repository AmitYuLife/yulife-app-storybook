/**
 * Button with child image
 * Manual color, can be gradient e.g. Calm
 * Initialized in https://yulife.atlassian.net/browse/TP-789
 */

import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours } from "@styles";
import { usePressedInWithDelay } from "@hooks";
import { ButtonBase } from "../button.base";
import { buttonStyles, getButtonDimensions } from "../button.styles";
import { Sizes } from "../button.types";
import { Icon } from "@atoms";

type IconType = "calm" | "headspace" | "fiit" | "meditopia";

interface IProps {
  isLoading?: boolean;
  onPress: () => void;
  disabled?: boolean;
  testID?: string;
  delay?: number;
  disableAnimation?: boolean;
  show?: boolean;
  backgroundColor?: string;
  backgroundGradient?: string[];
  shadowColor?: string;
  size?: Sizes;
  icon: IconType;
  wrapperStyle?: ViewStyle;
}

export function ImageButton(props: IProps) {
  const {
    disabled,
    testID,
    isLoading,
    onPress,
    delay,
    disableAnimation,
    show = true,
    size = "Large",
    backgroundColor = Colours.primary.p600,
    backgroundGradient,
    shadowColor = Colours.primary.p600Shadow,
    icon,
    wrapperStyle,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  if (!show) {
    return null;
  }

  const buttonDimensions = getButtonDimensions(size);

  const Logo = logoHashMap[icon];

  if (!Logo) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, buttonDimensions, wrapperStyle])}>
      <ButtonBase
        backgroundColor={backgroundColor}
        backgroundGradient={backgroundGradient}
        shadowColor={shadowColor}
        testID={testID}
        height={buttonDimensions?.height}
        isLoading={isLoading}
        disabled={disabled}
        onPress={handlePress}
        borderRadius={50}
        delay={delay}
        disableAnimation={disableAnimation}
      >
        <Logo />
      </ButtonBase>
    </View>
  );
}

const logoHashMap = {
  calm: Icon.Calm,
  headspace: Icon.Headspace,
  fiit: Icon.Fiit,
  meditopia: Icon.MeditopiaLogoWithText,
} as Record<IconType, () => JSX.Element>;

export default ImageButton;
