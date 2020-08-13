import React, { ComponentProps } from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback, View, ViewStyle, TextStyle } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import Text from "../text/text";
import { Style } from "@styles";

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

function Main({
  height,
  color,
  testID,
  disabled,
  onPressIn,
  onPressOut,
  onPress,
  title,
}: IProps & ComponentProps<typeof TouchableWithoutFeedback>) {
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
      <Animated.View style={[styles.main, { height }]} testID={`${testID}-text-view`}>
        <Text style={[styles.title, { color }, disabledStyles]}>{title}</Text>
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
