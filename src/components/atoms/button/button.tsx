import * as React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
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
}

function Button({ label, type, size = "Large", wrapperStyle, disabled, testID, isLoading, onPress }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress });

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
        />
      </View>
    );
  }

  return (
    <View style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}>
      <LinkButtonBase
        height={53}
        isLoading={isLoading}
        disabled={disabled}
        testID={testID}
        title={label}
        onPress={handlePress}
        color={Colours.darkHotPink}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
  },
  medium: {
    width: Style.adjust(210),
  },
  small: {
    width: Style.adjust(170),
  },
  large: {
    width: Style.DEVICE_WIDTH - 70,
  },
});

export default Button;

export function getWidth(size: Sizes) {
  switch (size) {
    case BUTTON_SIZES.SMALL:
      return styles.small;
    case BUTTON_SIZES.MEDIUM:
      return styles.medium;
    case BUTTON_SIZES.LARGE:
    default:
      return styles.large;
  }
}
