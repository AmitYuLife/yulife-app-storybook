import React, { ComponentProps, useState, useEffect } from "react";
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
  height: number;
}

interface MainProps {
  translateYAnimation: Animated.Value;
}

export function LinkButtonBase(props: IProps) {
  const { onPress, height = 50 } = props;
  const [translateYAnimation] = useState(new Animated.Value(0));
  const { isPressedIn, handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress });

  useEffect(() => {
    Animated.timing(translateYAnimation, {
      toValue: isPressedIn ? 2 : 0,
      duration: 60,
      useNativeDriver: true,
    }).start();
  }, [isPressedIn, translateYAnimation]);

  return (
    <View style={[styles.flex, { height }]}>
      <Main
        translateYAnimation={translateYAnimation}
        height={height}
        color={props.color}
        isLoading={props.isLoading}
        testID={props.testID}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        title={props.title}
      />
    </View>
  );
}

function Main({
  translateYAnimation,
  height,
  color,
  isLoading,
  testID,
  disabled,
  onPressIn,
  onPressOut,
  onPress,
  title,
}: IProps & MainProps & ComponentProps<typeof TouchableWithoutFeedback>) {
  const disabledStyles = disabled ? styles.disabled : {};
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
        style={[styles.main, { height, transform: [{ translateY: translateYAnimation }] }]}
        testID={`${testID}-text-view`}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={[styles.title, { color }, disabledStyles]}>{title}</Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default LinkButtonBase;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  disabled: {
    opacity: 0.3,
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
