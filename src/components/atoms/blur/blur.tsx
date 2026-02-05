import * as React from "react";
import { Animated } from "react-native";
import { BlurView } from "expo-blur";

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
      <BlurView
        intensity={15}
        tint="light"
        experimentalBlurMethod="dimezisBlurView"
        style={StyleSheet.absoluteFillObject}
      />
    </Animated.View>
  );
}
