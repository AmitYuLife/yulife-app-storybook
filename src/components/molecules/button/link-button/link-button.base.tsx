import React, { ComponentProps, useRef } from "react";
import { Animated, TouchableWithoutFeedback, View, ViewStyle, TextStyle, GestureResponderEvent } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { Text } from "@atoms";
import { Style, Colours, StyleSheet } from "@styles";
import { Pressable } from "@molecules";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: () => void;
  title: string;
  borderColor?: string;
  color?: string;
  height: number;
  delay?: number;
  underline?: boolean;
}

export function LinkButtonBase(props: IProps) {
  const { onPress, height = 50, delay, underline } = props;
  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });

  return (
    <View style={[styles.flex, { height }]}>
      <Main
        height={height}
        color={props.color}
        testID={props.testID}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={props.disabled}
        onPress={handlePress}
        title={props.title}
        underline={underline}
      />
    </View>
  );
}

type IMainProps = IProps & ComponentProps<typeof TouchableWithoutFeedback>;

function Main({ height, color, testID, disabled, onPressIn, onPressOut, onPress, title, underline }: IMainProps) {
  const disabledStyles = disabled ? styles.disabled : {};
  const fadeAnim = useRef(new Animated.Value(1)).current;

  function handlePressIn(e: GestureResponderEvent) {
    Animated.timing(fadeAnim, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();

    onPressIn(e);
  }

  function handlePressOut(e: GestureResponderEvent) {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

    onPressOut(e);
  }

  return (
    <Pressable
      delay={1000}
      testID={testID}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole={"button"}
    >
      <Animated.View style={[styles.main, { height, opacity: fadeAnim }]} testID={`${testID}-text-view`}>
        <Text bold={true} style={[styles.title, { color }, underline && styles.underline, disabledStyles]}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

export default LinkButtonBase;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  underline: {
    textDecorationLine: "underline",
    textDecorationColor: Colours.primary.p600,
  } as TextStyle,
  disabled: {
    opacity: 0.3,
  },
  pressedIn: {
    opacity: 0.5,
  },
  title: {
    fontSize: Style.adjust(16),
    letterSpacing: 0.4,
  } as TextStyle,
  flex: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
});
