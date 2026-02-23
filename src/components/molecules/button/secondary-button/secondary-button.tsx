import React from "react";
import { View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { buttonStyles, getButtonDimensions } from "../button.styles";
import { Sizes } from "../button.types";
import { TemplateTextType, StyleSheet } from "@styles";
import ButtonBase from "../button.base";
import { ButtonLabelProps, ButtonTranslationProps, useButtonTitle } from "../button.use-title";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

type DefaultProps = {
  wrapperStyle?: ViewStyle;
  onPress: () => void;
  delay?: number;
  disabled?: boolean;
  iconUri?: string;
  leftIcon?: React.ReactNode;
  testID?: string;
  show?: boolean;
  size?: Sizes;
  isLoading?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
  contentWrapperStyle?: ViewStyle;
  contentTextStyle?: TemplateTextType;
};

type Props = ButtonTranslationProps<DefaultProps> | ButtonLabelProps<DefaultProps>;

export const SecondaryButton = (props: Props) => {
  const {
    onPress,
    delay,
    disabled,
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
    contentWrapperStyle,
    contentTextStyle,
  } = props;

  const { theme } = useTheme();

  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const buttonDimensions = getButtonDimensions(size);
  const { title, testID } = useButtonTitle(props);

  if (!show) {
    return null;
  }

  const resolvedBorderColor = borderColor || theme.colors.primary.p600;
  const resolvedTextColor = textColor || theme.colors.primary.p600;

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
        borderColor={resolvedBorderColor}
        color={resolvedTextColor}
        backgroundColor={backgroundColor || "transparent"}
        borderRadius={50}
        delay={delay}
        accessibilityLabel={accessibilityLabel}
        accessible={accessible}
        size={size}
        contentWrapperStyle={contentWrapperStyle}
        contentTextStyle={contentTextStyle}
      />
    </View>
  );
};
