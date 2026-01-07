import * as React from "react";
import { ViewStyle, View, Insets } from "react-native";
import { Colours, TemplateTextType, StyleSheet } from "@styles";
import { usePressedInWithDelay } from "@hooks";
import { ButtonBase } from "./button.base";
import { Sizes } from "./button.types";
import { buttonStyles, getButtonDimensions } from "./button.styles";
import { ButtonAnimation } from "./animation/button-animation";
import { AnimateYuCoin } from "./animate-yu-coin/animate-yu-coin";
import { ButtonLabelProps, ButtonTranslationProps, useButtonTitle } from "./button.use-title";
import { BUTTON_BASE } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

type DefaultProps = {
  isLoading?: boolean;
  onPress: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
  accessibilityLabel?: string;
  accessible?: boolean;
  focusable?: boolean;
  animate?: boolean;
  animateYuCoin?: boolean;
  hitSlop?: number | Insets;
  contentWrapperStyle?: ViewStyle;
  contentTextStyle?: TemplateTextType;
};

export type IButtonProps = ButtonTranslationProps<DefaultProps> | ButtonLabelProps<DefaultProps>;

function Button(props: IButtonProps) {
  const {
    size = "Large",
    wrapperStyle,
    disabled,
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
    accessibilityLabel,
    accessible,
    focusable,
    animate,
    animateYuCoin,
    hitSlop,
    contentWrapperStyle,
    contentTextStyle,
  } = props;

  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const { title, testID } = useButtonTitle(props);

  if (!show) {
    return null;
  }

  const buttonDimensions = getButtonDimensions(size);

  return (
    <View style={StyleSheet.flatten([buttonStyles.wrapper, wrapperStyle, buttonDimensions])}>
      {!animateYuCoin ? null : <AnimateYuCoin />}
      <ButtonBase
        borderColor={borderColor}
        backgroundColor={backgroundColor || Colours.primary.p600}
        shadowColor={shadowColor || Colours.primary.p600Shadow}
        color={textColor || Colours.neutral.white}
        testID={testID || BUTTON_BASE(title, disabled)}
        height={height || buttonDimensions.height}
        isLoading={isLoading}
        disabled={disabled}
        title={title}
        leftIcon={props.leftIcon}
        hitSlop={hitSlop}
        rightIcon={props.rightIcon}
        onPress={handlePress}
        borderRadius={50}
        delay={delay}
        disableAnimation={disableAnimation}
        showBadge={showBadge}
        accessible={accessible}
        focusable={focusable}
        accessibilityLabel={accessibilityLabel}
        size={size}
        contentWrapperStyle={contentWrapperStyle}
        contentTextStyle={contentTextStyle}
      />
      {!animate || DETOX_ENABLED ? null : <ButtonAnimation />}
    </View>
  );
}

export default Button;
