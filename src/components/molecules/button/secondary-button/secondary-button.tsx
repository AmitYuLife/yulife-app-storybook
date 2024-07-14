import React, { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { buttonStyles, getButtonDimensions } from "../button.styles";
import { Sizes } from "../button.types";
import { Colours } from "@styles";
import ButtonBase from "../button.base";
import { t } from "@locale";

type DefaultProps = {
  wrapperStyle?: ViewStyle;
  onPress: () => void;
  delay?: number;
  disabled?: boolean;
  iconUri?: string;
  leftIcon?: JSX.Element;
  testID?: string;
  show?: boolean;
  size?: Sizes;
  isLoading?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
};

type TranslationProps = DefaultProps & {
  /** should be a valid key used for t() */
  translationKey: string;
  /** arguments needed for t() */
  translationArgs?: any;
};

type LabelProps = DefaultProps & {
  /** @deprecated SHOULD ONLY BE USED FOR BACKEND COPY */
  translatedLabel: string;
};

type Props = TranslationProps | LabelProps;

export const SecondaryButton = (props: Props) => {
  const {
    onPress,
    delay,
    disabled,
    testID,
    show = true,
    size,
    leftIcon,
    iconUri,
    isLoading,
    borderColor,
    backgroundColor,
    textColor,
    wrapperStyle,
    accessibilityLabel,
    accessible,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const buttonDimensions = getButtonDimensions(size);

  const title = useMemo(
    () => ("translationKey" in props ? t(props.translationKey, props.translationArgs) : props.translatedLabel),
    [props]
  );

  if (!show) {
    return null;
  }

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, buttonDimensions, wrapperStyle])}>
      <ButtonBase
        height={buttonDimensions?.height}
        disabled={disabled}
        testID={testID}
        isLoading={isLoading}
        title={title}
        leftIcon={leftIcon}
        iconUri={iconUri}
        onPress={handlePress}
        borderColor={borderColor || Colours.primary.p600}
        color={textColor || Colours.primary.p600}
        backgroundColor={backgroundColor || "transparent"}
        borderRadius={50}
        delay={delay}
        accessibilityLabel={accessibilityLabel}
        accessible={accessible}
        size={size}
      />
    </View>
  );
};
