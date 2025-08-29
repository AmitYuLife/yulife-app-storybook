import * as React from "react";
import { Animated } from "react-native";
import { BlurView } from "@react-native-community/blur";

import { StyleSheet } from "@styles";
interface IProps {
  blurRef: number;
  wrapperOpacity: Animated.Value;
  wrapperPosition: Animated.Value;
}

// @TODO: Check if we can purge this in favour of blurred-wrapper

export default function Blur({ wrapperOpacity, wrapperPosition }: IProps) {
  return (
    <Animated.View
      style={{
        ...StyleSheet.absoluteFillObject,
        opacity: wrapperOpacity,
        transform: [
          {
            translateX: wrapperPosition,
          },
        ],
      }}
    >
      <BlurView blurAmount={15} blurType="light" style={StyleSheet.absoluteFillObject} />
    </Animated.View>
  );
}
