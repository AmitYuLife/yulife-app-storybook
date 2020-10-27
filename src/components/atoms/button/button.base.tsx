import React, { ComponentProps, useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import Text from "../text/text";
import { Style } from "@styles";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: () => void;
  isLoading?: boolean;
  title: string;
  borderColor?: string;
  color?: string;
  backgroundColor?: string;
  shadowColor?: string;
  borderRadius?: number;
  height: number;
  delay?: number;
  disableAnimation?: boolean;
}

interface IState {
  isPressedIn: boolean;
  translateYAnimation: Animated.Value;
}

const SHADOW_ALLOWANCE = 4;
const SHADOW_DIFF = 3;

export function ButtonBase(props: IProps) {
  const { onPress, height = 50, borderRadius = props.height / 2, delay, disableAnimation } = props;
  const [translateYAnimation] = useState(new Animated.Value(0));
  const { isPressedIn, handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });

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
    <View style={[styles.flex, { height: height + SHADOW_ALLOWANCE }]}>
      <Shadow {...props} height={height - SHADOW_DIFF} borderRadius={borderRadius} disabled={props.disabled} />
      <Main
        {...props}
        height={height - SHADOW_DIFF}
        borderRadius={borderRadius}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        isPressedIn={isPressedIn}
        translateYAnimation={translateYAnimation}
      />
      <DisabledOverlay {...props} />
    </View>
  );
}

function Shadow({ height, borderRadius, shadowColor, testID, disabled }: IProps) {
  const opacity = disabled ? 0.5 : 1;
  return (
    <View style={[styles.shadow, { height, borderRadius, backgroundColor: shadowColor, opacity }]}>
      <View testID={`${testID}-disabled-overlay`} />
    </View>
  );
}

function DisabledOverlay({ disabled, borderRadius, height, borderColor }: IProps) {
  const border = borderColor ? { borderWidth: 1, borderColor: "rgba(255,255,255,0.5)" } : {};
  return !disabled ? null : (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        styles.main,
        {
          height: height + SHADOW_ALLOWANCE,
        },
      ]}
    >
      <View style={[styles.disableOverlay, border, { height: height - SHADOW_DIFF, borderRadius }]} />
    </View>
  );
}

function Main({
  translateYAnimation,
  borderRadius = 50,
  height,
  backgroundColor,
  borderColor,
  color,
  isLoading,
  testID,
  disabled,
  onPressIn,
  onPressOut,
  onPress,
  title,
}: IProps & IState & ComponentProps<typeof TouchableWithoutFeedback>) {
  const border = borderColor ? { borderColor, borderWidth: 1 } : {};

  return (
    <TouchableWithoutFeedback
      testID={testID}
      accessibilityLabel={disabled ? "disabled" : "enabled"}
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      <Animated.View
        style={[
          styles.main,
          { backgroundColor, height, borderRadius, transform: [{ translateY: translateYAnimation }], ...border },
        ]}
        testID={`${testID}-text-view`}
      >
        {isLoading ? (
          <ActivityIndicator color={color} />
        ) : (
          <Text bold={true} style={[styles.title, { color }]}>
            {title}
          </Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default ButtonBase;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  title: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 16,
  } as TextStyle,
  shadow: {
    width: "100%",
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
  } as ViewStyle,
  flex: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  disableOverlay: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
  } as ViewStyle,
});
