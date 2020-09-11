import * as React from "react";
import { StyleSheet, ViewStyle, View, Platform } from "react-native";
import { Colours, Style } from "@styles";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { ButtonBase } from "./button.base";
import { LinkButtonBase } from "./link-button.base";
import { BUTTON_TYPES, Types, Sizes, BUTTON_SIZES } from "./button.types";

interface IProps {
  isLoading?: boolean;
  type: Types;
  onPress: () => void;
  label: string;
  wrapperStyle?: ViewStyle;
  disabled?: boolean;
  testID?: string;
  size?: Sizes;
  delay?: number;
  disableAnimation?: boolean;
}

function Button(props: IProps) {
  const {
    label,
    type,
    size = "Large",
    wrapperStyle,
    disabled,
    testID,
    isLoading,
    onPress,
    delay,
    disableAnimation,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  const widthStyles = getWidth(size);

  if (type === BUTTON_TYPES.PRIMARY) {
    return (
      <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle, widthStyles])}>
        <ButtonBase
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          testID={testID}
          height={53}
          isLoading={isLoading}
          disabled={disabled}
          title={label}
          onPress={handlePress}
          color="white"
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
          height={53}
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

  return (
    <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}>
      <LinkButtonBase
        height={53}
        disabled={disabled}
        testID={testID}
        title={label}
        onPress={handlePress}
        color={Colours.darkHotPink}
        delay={delay}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
  },
  fill: {
    width: "100%",
  },
  medium: {
    width: Style.adjust(210),
  },
  small: {
    width: Platform.select({
      ios: Style.adjust(170, { shrinkThreshold: Style.DEVICE_WIDTH < 400, shrinkMultiplier: 0.1 }),
      android: Style.adjust(150),
    }),
  },
  large: {
    width: Style.DEVICE_WIDTH - 70,
  },
});

export default Button;

export function getWidth(size: Sizes) {
  switch (size) {
    case BUTTON_SIZES.FILL:
      return styles.fill;
    case BUTTON_SIZES.SMALL:
      return styles.small;
    case BUTTON_SIZES.MEDIUM:
      return styles.medium;
    case BUTTON_SIZES.LARGE:
    default:
      return styles.large;
  }
}
