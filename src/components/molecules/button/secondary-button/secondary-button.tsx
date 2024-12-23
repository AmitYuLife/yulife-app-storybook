import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { buttonStyles, getButtonDimensions } from "../button.styles";
import { Sizes } from "../button.types";
import { Colours, TemplateTextType } from "@styles";
import ButtonBase from "../button.base";
import { ButtonLabelProps, ButtonTranslationProps, useButtonTitle } from "../button.use-title";

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

  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const buttonDimensions = getButtonDimensions(size);
  const { title, testID } = useButtonTitle(props);

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
        contentWrapperStyle={contentWrapperStyle}
        contentTextStyle={contentTextStyle}
      />
    </View>
  );
};
