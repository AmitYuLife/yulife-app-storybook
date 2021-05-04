import { Animated } from "react-native";

export const getInactiveTextOpacityValue = ({ scrollY = new Animated.Value(0), index = 0, itemHeight = 0 }) =>
  scrollY.interpolate({
    inputRange: [index * itemHeight - itemHeight, index * itemHeight, index * itemHeight + itemHeight],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

export const getActiveTextOpacityValue = ({ scrollY = new Animated.Value(0), index = 0, itemHeight = 0 }) =>
  scrollY.interpolate({
    inputRange: [
      index * itemHeight - itemHeight,
      index * itemHeight - itemHeight + itemHeight / 2,
      index * itemHeight,
      index * itemHeight + itemHeight - itemHeight / 2,
      index * itemHeight + itemHeight,
    ],
    outputRange: [0, 1, 1, 1, 0],
    extrapolate: "clamp",
  });
