import React, { FC, memo, useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { Style, TOP_BAR } from "@styles";
import { Cloud } from "@atoms";
import { DETOX_ENABLED } from "@services/socket";

const ANIMATION_DURATION = 30000;
const DISTANCE = Style.adjust(60);

interface Props {
  colour?: string;
}

export const AnimatedClouds: FC<Props> = memo(({ colour }) => {
  const cloudTranslateX = useRef(new Animated.Value(0)).current;
  const cloud2TranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(cloudTranslateX, {
            duration: ANIMATION_DURATION / 4,
            toValue: -DISTANCE / 2,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(cloudTranslateX, {
            duration: ANIMATION_DURATION / 4,
            toValue: 0,
            useNativeDriver: true,
            easing: Easing.in(Easing.ease),
          }),
          Animated.timing(cloudTranslateX, {
            duration: ANIMATION_DURATION / 4,
            toValue: DISTANCE / 2,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(cloudTranslateX, {
            duration: ANIMATION_DURATION / 4,
            toValue: 0,
            useNativeDriver: true,
            easing: Easing.in(Easing.ease),
          }),
        ]),
        Animated.sequence([
          Animated.timing(cloud2TranslateX, {
            duration: ANIMATION_DURATION / 2,
            toValue: -DISTANCE,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.timing(cloud2TranslateX, {
            duration: ANIMATION_DURATION / 2,
            toValue: 0,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
      ])
    );

    animation.start();
    return () => animation.stop();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.cloud, { transform: [{ translateX: cloudTranslateX }] }]}>
        <Cloud colour={colour} />
      </Animated.View>
      <Animated.View style={[styles.cloud2, { transform: [{ translateX: cloud2TranslateX }] }]}>
        <Cloud colour={colour} />
      </Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: Style.adjust(340) + TOP_BAR.PADDING_TOP,
    display: "flex",
    width: Style.DEVICE_WIDTH,
  },
  cloud: {
    position: "absolute",
    left: Style.DEVICE_WIDTH * 0.45,
    bottom: Style.DEVICE_WIDTH * 0.34,
  },
  cloud2: {
    position: "absolute",
    left: Style.DEVICE_WIDTH * 0.85,
    bottom: Style.DEVICE_WIDTH * 0.5,
  },
});
