import React, { ComponentProps, useRef } from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import Text from "../text/text";
import { Style } from "@styles";
import { PressableWithDelay } from "@components/molecules";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: () => void;
  title: string;
  borderColor?: string;
  color?: string;
  height: number;
}

export function LinkButtonBase(props: IProps) {
  const { onPress, height = 50 } = props;
  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress });

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
      />
    </View>
  );
}

type IMainProps = IProps & ComponentProps<typeof TouchableWithoutFeedback>;

function Main({ height, color, testID, disabled, onPressIn, onPressOut, onPress, title }: IMainProps) {
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
    <PressableWithDelay
      testID={testID}
      accessibilityLabel={disabled ? "disabled" : "enabled"}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={[styles.main, { height, opacity: fadeAnim }]} testID={`${testID}-text-view`}>
        <Text style={[styles.title, { color }, disabledStyles]}>{title}</Text>
      </Animated.View>
    </PressableWithDelay>
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
  disabled: {
    opacity: 0.3,
  },
  pressedIn: {
    opacity: 0.5,
  },
  title: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 16,
  } as TextStyle,
  flex: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
});
