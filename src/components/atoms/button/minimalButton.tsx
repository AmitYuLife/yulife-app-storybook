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
import Text from "../text/text";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: () => void;
  isLoading?: boolean;
  title: string;
  titleStyle?: TextStyle;
  color?: string;
  backgroundColor?: string;
  shadowColor?: string;
  borderRadius?: number;
  height: number;
}

interface IState {
  pressedIn: boolean;
  translateYAnimation: Animated.Value;
}

const SHADOW_ALLOWANCE = 4;
const SHADOW_DIFF = 3;

export default function MinimalButton(props: IProps) {
  const { onPress, height = 50, borderRadius = props.height / 2 } = props;
  const [translateYAnimation] = useState(new Animated.Value(0));
  const [pressedIn, setPressedInState] = React.useState(false as IState["pressedIn"]);
  useEffect(() => {
    Animated.timing(translateYAnimation, {
      toValue: pressedIn ? 2 : 0,
      duration: 60,
      useNativeDriver: true,
    }).start();
  }, [pressedIn, translateYAnimation]);
  const handlePressIn = React.useCallback(() => {
    setPressedInState(true);
  }, []);

  const handlePressOut = React.useCallback(() => {
    setPressedInState(false);
    onPress();
  }, [onPress]);
  return (
    <View style={[styles.flex, { height: height + SHADOW_ALLOWANCE }]}>
      <Shadow {...props} height={height - SHADOW_DIFF} borderRadius={borderRadius} pressedIn={pressedIn} />
      <Main
        {...props}
        height={height - SHADOW_DIFF}
        borderRadius={borderRadius}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        pressedIn={pressedIn}
        translateYAnimation={translateYAnimation}
      />
      <DisabledOverlay {...props} />
    </View>
  );
}

function Shadow({ height, borderRadius, shadowColor, testID }: IProps & Pick<IState, "pressedIn">) {
  return (
    <View style={[styles.shadow, { height, borderRadius, backgroundColor: shadowColor }]}>
      <View testID={`${testID}-disabled-overlay`} />
    </View>
  );
}

function DisabledOverlay({ disabled }: IProps) {
  return !disabled ? null : <View style={styles.disableOverlay} />;
}

function Main({
  translateYAnimation,
  borderRadius = 50,
  height,
  backgroundColor,
  color,
  isLoading,
  testID,
  disabled,
  onPressIn,
  onPressOut,
  title,
  titleStyle,
}: IProps & IState & ComponentProps<typeof TouchableWithoutFeedback>) {
  return (
    <TouchableWithoutFeedback
      testID={testID}
      accessibilityLabel={disabled ? "disabled" : "enabled"}
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          styles.main,
          { backgroundColor, height, borderRadius, transform: [{ translateY: translateYAnimation }] },
        ]}
        testID={`${testID}-text-view`}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={[styles.title, { color }, titleStyle]}>{title}</Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  title: {
    fontSize: 18,
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
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.5)",
  } as ViewStyle,
});
