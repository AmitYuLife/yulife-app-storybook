import { Animated } from "react-native";

export const getWrapperScaleValue = ({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) =>
  scrollX.interpolate({
    inputRange: [index * itemWidth - itemWidth, index * itemWidth, index * itemWidth + itemWidth],
    outputRange: [1, 1.5, 1],
    extrapolate: "clamp",
  });

export const getInactiveTextOpacityValue = ({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) =>
  scrollX.interpolate({
    inputRange: [index * itemWidth - itemWidth, index * itemWidth, index * itemWidth + itemWidth],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

export const getActiveTextOpacityValue = ({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) =>
  scrollX.interpolate({
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

const TRANSLATE_Y_VALUE = -4;
export const getTranslateYValue = ({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) =>
  scrollX.interpolate({
    inputRange: [
      index * itemWidth - itemWidth,
      index * itemWidth - itemWidth + itemWidth / 2,
      index * itemWidth,
      index * itemWidth + itemWidth - itemWidth / 2,
      index * itemWidth + itemWidth,
    ],
    outputRange: [0, TRANSLATE_Y_VALUE, TRANSLATE_Y_VALUE, TRANSLATE_Y_VALUE, 0],
    extrapolate: "clamp",
  });
