import { Colours } from "@styles";
import React, { ComponentProps, memo, useEffect, useState } from "react";
import {
  Animated,
  ActivityIndicator,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  Insets,
  GestureResponderEvent,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { usePressedInWithDelay } from "@hooks";
import { Style, TemplateTextType, StyleSheet } from "@styles";
import { getOptionallyDisabledColor } from "@styles/getOptionallyDisabledColor";
import { TextTemplate } from "@atoms/text/text-template";
import { BadgeIcon } from "@atoms/icon/badge-icon";
import { Image } from "@atoms";
import { Sizes } from "./button.types";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  title?: string;
  leftIcon?: React.ReactNode;
  iconUri?: string;
  rightIcon?: React.ReactNode;
  borderColor?: string;
  color?: string;
  backgroundColor?: string;
  backgroundGradient?: string[];
  shadowColor?: string;
  borderRadius?: number;
  height: number;
  delay?: number;
  disableAnimation?: boolean;
  children?: React.ReactElement;
  hideShadow?: boolean;
  showBadge?: boolean;
  accessibilityLabel?: string;
  accessible?: boolean;
  focusable?: boolean;
  hitSlop?: number | Insets;
  size: Sizes;
  contentWrapperStyle?: ViewStyle;
  contentTextStyle?: TemplateTextType;
}

interface IState {
  isPressedIn: boolean;
  translateYAnimation: Animated.Value;
}

const SHADOW_DIFF = 8;
const SHADOW_TRIM = 2;

export function ButtonBase(props: IProps) {
  const {
    children = null,
    onPress,
    height = Style.adjust(50),
    borderRadius = height / 2,
    delay,
    disableAnimation,
    hideShadow,
    showBadge,
    shadowColor,
    testID,
    disabled,
    backgroundColor,
    backgroundGradient,
    borderColor,
    color,
    isLoading,
    title,
    iconUri,
    leftIcon,
    rightIcon,
    accessibilityLabel,
    accessible,
    focusable,
    hitSlop,
    size,
    contentWrapperStyle,
    contentTextStyle,
  } = props;
  const [translateYAnimation] = useState(new Animated.Value(0));
  const { isPressedIn, handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({
    onPress: !isLoading ? onPress : undefined,
    delay,
  });

  useEffect(() => {
    if (disableAnimation) {
      return;
    }

    Animated.timing(translateYAnimation, {
      toValue: isPressedIn ? 2 : 0,
      duration: 60,
      useNativeDriver: true,
    }).start();
  }, [isPressedIn, translateYAnimation, disableAnimation]);

  return (
    <View style={[styles.flex, { height }]}>
      {hideShadow ? null : (
        <Shadow
          shadowColor={shadowColor}
          testID={testID}
          height={height - SHADOW_DIFF - SHADOW_TRIM}
          borderRadius={borderRadius}
          disabled={disabled}
        />
      )}
      <Main
        backgroundColor={backgroundColor}
        backgroundGradient={backgroundGradient}
        borderColor={borderColor}
        color={color}
        isLoading={isLoading}
        testID={testID}
        disabled={disabled}
        title={title}
        iconUri={iconUri}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        height={height - (hideShadow ? 0 : SHADOW_DIFF)}
        borderRadius={borderRadius}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        isPressedIn={isPressedIn}
        translateYAnimation={translateYAnimation}
        showBadge={showBadge}
        accessibilityLabel={accessibilityLabel}
        focusable={focusable}
        accessible={accessible}
        hitSlop={hitSlop}
        size={size}
        contentWrapperStyle={contentWrapperStyle}
        contentTextStyle={contentTextStyle}
      >
        <View>{children}</View>
      </Main>
    </View>
  );
}

type ShadowProps = "height" | "borderRadius" | "shadowColor" | "testID" | "disabled";

function Shadow({ height, borderRadius, shadowColor, testID, disabled }: Pick<IProps, ShadowProps>) {
  const backgroundColor = getOptionallyDisabledColor({ color: shadowColor, disabled });

  return (
    <View style={[styles.shadow, { height, borderRadius, backgroundColor }]}>
      <View testID={`${testID}-disabled-overlay`} />
    </View>
  );
}

function Main({
  translateYAnimation,
  borderRadius = 50,
  height,
  backgroundColor,
  backgroundGradient,
  borderColor,
  color,
  isLoading,
  testID,
  disabled,
  onPressIn,
  onPressOut,
  onPress,
  title,
  leftIcon,
  iconUri,
  rightIcon,
  showBadge,
  children,
  accessibilityLabel,
  accessible,
  hitSlop,
  size,
  contentWrapperStyle,
  contentTextStyle,
}: IProps & IState & ComponentProps<typeof TouchableWithoutFeedback>) {
  const adjustedColor = getOptionallyDisabledColor({ color, disabled });
  const adjustedBorderColor = getOptionallyDisabledColor({ color: borderColor, disabled });
  const border = borderColor ? { borderColor: adjustedBorderColor, borderWidth: 1 } : {};

  return (
    <TouchableWithoutFeedback
      testID={testID}
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole={"button"}
      accessibilityState={{ disabled, busy: isLoading }}
      accessible={accessible}
      hitSlop={hitSlop}
    >
      <View style={styles.mainWrapper}>
        <Animated.View
          style={[styles.main, backgroundStyles.wrapper, { height, transform: [{ translateY: translateYAnimation }] }]}
        >
          <Background disabled={disabled} backgroundColor={backgroundColor} backgroundGradient={backgroundGradient} />
        </Animated.View>
        <Animated.View
          style={[styles.main, { height, borderRadius, transform: [{ translateY: translateYAnimation }], ...border }]}
        >
          <Content
            testID={`${testID}-text-view`}
            title={title}
            leftIcon={leftIcon}
            iconUri={iconUri}
            rightIcon={rightIcon}
            isLoading={isLoading}
            color={adjustedColor}
            size={size}
            contentWrapperStyle={contentWrapperStyle}
            contentTextStyle={contentTextStyle}
          >
            {children}
          </Content>
        </Animated.View>
        {showBadge ? (
          <View style={styles.badge}>
            <BadgeIcon />
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

interface ContentProps {
  title: string;
  leftIcon?: React.ReactNode;
  iconUri?: string;
  rightIcon?: React.ReactNode;
  isLoading: boolean;
  color: string;
  children: React.ReactNode;
  testID: string;
  size: Sizes;
  contentWrapperStyle?: ViewStyle;
  contentTextStyle?: TemplateTextType;
}

function Content({
  title,
  leftIcon,
  iconUri,
  rightIcon,
  isLoading,
  color,
  children,
  testID,
  size,
  contentWrapperStyle,
  contentTextStyle,
}: ContentProps) {
  if (isLoading) {
    return <ActivityIndicator color={color} />;
  }

  if (title) {
    return (
      <View style={[styles.buttonContent, contentWrapperStyle]}>
        <LeftIcon leftIcon={leftIcon} iconUri={iconUri} />
        <TextTemplate
          type={contentTextStyle || (["Coin", "Narrow"].includes(size) ? "l1b" : "b2b")}
          testID={testID}
          color={color}
        >
          {title}
        </TextTemplate>
        {rightIcon ? <View style={styles.rightIcon}>{rightIcon}</View> : null}
      </View>
    );
  }

  return children;
}

const LeftIcon = memo(({ leftIcon, iconUri }: Pick<ContentProps, "leftIcon" | "iconUri">) => {
  if (leftIcon) {
    return <View style={styles.leftIcon}>{leftIcon}</View>;
  }

  if (iconUri) {
    return (
      <View style={styles.leftIcon}>
        <Image width={Style.adjust(16)} height={Style.adjust(16)} resizeMode="contain" source={{ uri: iconUri }} />
      </View>
    );
  }

  return null;
});

export default ButtonBase;

const Background = memo(
  ({
    backgroundGradient,
    backgroundColor = "transparent",
    disabled,
  }: {
    backgroundGradient: string[];
    backgroundColor: string;
    disabled: boolean;
  }) => {
    if (backgroundGradient?.length) {
      return <LinearGradient style={backgroundStyles.wrapper} colors={backgroundGradient} />;
    }

    const adjustedBackgroundColor = getOptionallyDisabledColor({ color: backgroundColor, disabled });

    return (
      <View style={StyleSheet.flatten([backgroundStyles.wrapper, { backgroundColor: adjustedBackgroundColor }])} />
    );
  }
);

const backgroundStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    start: 0,
    end: 0,
    bottom: 0,
    borderRadius: 999,
  } as ViewStyle,
});

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    width: "100%",
  } as ViewStyle,
  main: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    overflow: "hidden",
  } as ViewStyle,
  shadow: {
    width: "100%",
    position: "absolute",
    top: 6,
    start: 0,
    end: 0,
  } as ViewStyle,
  flex: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  disableOverlay: {
    width: "100%",
    backgroundColor: Colours.overlay.white50,
  } as ViewStyle,
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    marginEnd: Style.adjust(9),
  },
  rightIcon: {
    marginStart: Style.adjust(9),
  },
  badge: {
    position: "absolute",
    top: Style.adjust(-8),
    end: Style.adjust(16),
  },
});
