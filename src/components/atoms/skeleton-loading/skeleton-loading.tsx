import React, { FC, useRef, useEffect } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { Colours } from "@styles";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  style: ViewStyle;
}

const SkeletonLoading: FC<IProps> = ({ style }) => {
  const fadeInFadeOut = useRef(new Animated.Value(0)).current;

  const translateX = fadeInFadeOut.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.loop(
      Animated.timing(fadeInFadeOut, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Animated.View style={[styles.wrapper, { opacity: translateX, ...style }]} />;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.metallic.m100,
    borderRadius: 8,
  } as ViewStyle,
});

export default SkeletonLoading;
