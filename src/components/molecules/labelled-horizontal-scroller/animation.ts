import { Animated } from "react-native";

export function getInactiveTextOpacityValue({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) {
  return scrollX.interpolate({
    inputRange: [index * itemWidth - itemWidth, index * itemWidth, index * itemWidth + itemWidth],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
}

export function getActiveTextOpacityValue({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) {
  return scrollX.interpolate({
    inputRange: [
      index * itemWidth - itemWidth,
      index * itemWidth - itemWidth + itemWidth / 2,
      index * itemWidth,
      index * itemWidth + itemWidth - itemWidth / 2,
      index * itemWidth + itemWidth,
    ],
    outputRange: [0, 1, 1, 1, 0],
    extrapolate: "clamp",
  });
}
