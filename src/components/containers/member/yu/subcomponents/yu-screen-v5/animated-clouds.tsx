import React, { FC, memo, useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";
import { Style, TOP_BAR, StyleSheet } from "@styles";
import { Cloud } from "@atoms";
import { DETOX_ENABLED } from "@services/socket";

const COLLAPSE_ANIMATION_DURATION = 400;
const ANIMATION_DURATION = 30000;
const DISTANCE = Style.adjust(60);

interface Props {
  colour?: string;
  dispersed?: boolean;
}

export const AnimatedClouds: FC<Props> = memo(({ colour, dispersed }) => {
  const cloudContainerTranslateX = useRef(new Animated.Value(0)).current;
  const cloudContainer2TranslateX = useRef(new Animated.Value(0)).current;

  const cloudTranslateX = useRef(new Animated.Value(0)).current;
  const cloud2TranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.parallel([
      Animated.parallel([
        Animated.timing(cloudContainerTranslateX, {
          duration: COLLAPSE_ANIMATION_DURATION,
          toValue: dispersed ? Style.adjust(-56) - Style.DEVICE_WIDTH * 0.55 : 0,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(cloudContainer2TranslateX, {
          duration: COLLAPSE_ANIMATION_DURATION,
          toValue: dispersed ? Style.DEVICE_WIDTH * 0.15 : 0,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
    ]);

    animation.start();
    return () => animation.stop();
  }, [dispersed]);

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

  const cloudWrapperStyle = [
    styles.cloud,
    {
      transform: [{ translateX: cloudContainerTranslateX }],
    },
  ];

  const cloud2WrapperStyle = [
    styles.cloud2,
    {
      transform: [{ translateX: cloudContainer2TranslateX }],
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Animated.View style={cloudWrapperStyle}>
        <Animated.View style={{ transform: [{ translateX: cloudTranslateX }] }}>
          <Cloud colour={colour} />
        </Animated.View>
      </Animated.View>
      <Animated.View style={cloud2WrapperStyle}>
        <Animated.View style={{ transform: [{ translateX: cloud2TranslateX }] }}>
          <Cloud colour={colour} />
        </Animated.View>
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
