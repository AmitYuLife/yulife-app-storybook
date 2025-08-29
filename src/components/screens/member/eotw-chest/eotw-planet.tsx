import React, { FC, memo, useEffect, useMemo, useRef } from "react";
import { Animated, Easing, ImageSourcePropType, ImageStyle, View, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";
import { DETOX_ENABLED } from "@services/socket";
import EOTWYumojiIcon, { YUMOJI_HEIGHT } from "./eotw-yumoji-pin";
import {
  INITIAL_ANIMATION_DELAY,
  SPINNING_ANIMATION_FADE_OUT_DURATION,
  PLANET_FADE_IN_DURATION,
  PIN_FADE_OUT_DURATION,
  PIN_FADE_IN_DURATION,
  UNREVEALED_PLANET_FADE_OUT_DURATION,
  SPINNING_ANIMATION_FADE_IN_DURATION,
  PLANET_CONTAINER_RADIUS,
  STAR_RADIUS,
  PLANET_RADIUS,
  STAR_FADE_IN_DELAY,
  STAR_FADE_IN_DURATION,
  STAR_ASSET,
  FLOATING_ANIMATION,
  EXPLOSION_ANIMATION,
} from "./eotw-planet-animation-config";
import { PLANET_AVATAR } from "@ids";

export interface IPlanetProps {
  position: { left: number; bottom: number };
  icon: ImageSourcePropType;
  avatar: ImageSourcePropType;
  state: PLANET_STATE;
  travel?: boolean;
  testID?: string;
}

export enum PLANET_STATE {
  PASSED = "PASSED",
  PREVIOUS = "PREVIOUS",
  CURRENT = "CURRENT",
  NEXT = "NEXT",
  PENDING = "PENDING",
}

export const PLANET_ASSETS = {
  Earth: require("./assets/planets/Earth.png"),
  Red: require("./assets/planets/Red.png"),
  Bright: require("./assets/planets/Bright.png"),
  Orange: require("./assets/planets/Orange.png"),
  Mercury: require("./assets/planets/Mercury.png"),
  Saturn: require("./assets/planets/Saturn.png"),
  Purple: require("./assets/planets/Purple.png"),
  Ring: require("./assets/planets/Ring.png"),
  Lunar: require("./assets/planets/Lunar.png"),
  Sun: require("./assets/planets/Sun.png"),
  UnrevealedPlanet_1: require("./assets/planets/unrevealed_planet_1.png"),
  UnrevealedPlanet_2: require("./assets/planets/unrevealed_planet_2.png"),
  UnrevealedPlanet_3: require("./assets/planets/unrevealed_planet_3.png"),
  paths: require("./assets/planets/paths.png"),
};

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const EOTWPlanet: FC<IPlanetProps> = memo(({ position: { bottom, left }, icon, state, avatar, travel, testID }) => {
  const explosionRef = useRef<LottieView>(null);

  const animationValues = useRef({
    yumojiScale: new Animated.Value(state === PLANET_STATE.PREVIOUS ? 1 : 0),
    starOpacity: new Animated.Value(0),
    spinningAnimationScale: new Animated.Value(state === PLANET_STATE.CURRENT ? 1 : 0.1),
    planetScale: new Animated.Value(state === PLANET_STATE.PREVIOUS || state === PLANET_STATE.PASSED ? 1 : 0.1),
    unrevealedPlanetOpacity: new Animated.Value(1),
  });

  const travelAnimations = useMemo(
    () =>
      new Map([
        [
          PLANET_STATE.PREVIOUS,
          Animated.sequence([
            Animated.delay(INITIAL_ANIMATION_DELAY + SPINNING_ANIMATION_FADE_OUT_DURATION + PLANET_FADE_IN_DURATION),
            Animated.timing(animationValues.current.yumojiScale, {
              duration: PIN_FADE_OUT_DURATION,
              toValue: 0,
              useNativeDriver: true,
            }),
          ]),
        ],
        [
          PLANET_STATE.CURRENT,
          Animated.sequence([
            Animated.delay(INITIAL_ANIMATION_DELAY),
            Animated.timing(animationValues.current.spinningAnimationScale, {
              duration: SPINNING_ANIMATION_FADE_OUT_DURATION,
              toValue: 0,
              useNativeDriver: true,
            }),
            {
              start: (cb) => {
                explosionRef.current.play();
                cb({ finished: true });
              },
              stop: () => null,
              reset: () => null,
            },
            Animated.timing(animationValues.current.planetScale, {
              duration: PLANET_FADE_IN_DURATION,
              toValue: 1,
              useNativeDriver: true,
              easing: Easing.bounce,
            }),
            Animated.delay(PIN_FADE_OUT_DURATION),
            Animated.timing(animationValues.current.yumojiScale, {
              duration: PIN_FADE_IN_DURATION,
              toValue: 1,
              useNativeDriver: true,
              easing: Easing.elastic(1.3),
            }),
          ]),
        ],
        [
          PLANET_STATE.NEXT,
          Animated.sequence([
            Animated.delay(INITIAL_ANIMATION_DELAY),
            Animated.timing(animationValues.current.unrevealedPlanetOpacity, {
              duration: UNREVEALED_PLANET_FADE_OUT_DURATION,
              toValue: 0,
              useNativeDriver: true,
            }),
            Animated.timing(animationValues.current.spinningAnimationScale, {
              duration: SPINNING_ANIMATION_FADE_IN_DURATION,
              toValue: 1,
              useNativeDriver: true,
            }),
          ]),
        ],
      ]),
    []
  );

  const styles = useMemo(
    () => ({
      containerStyle: {
        bottom: bottom - PLANET_CONTAINER_RADIUS / 2,
        start: left - PLANET_CONTAINER_RADIUS / 2,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: PLANET_CONTAINER_RADIUS,
        height: PLANET_CONTAINER_RADIUS,
      } as ViewStyle,
      planetStyle: {
        width: PLANET_CONTAINER_RADIUS,
        height: PLANET_CONTAINER_RADIUS,
        transform: [{ scale: animationValues.current.planetScale }],
      } as Animated.WithAnimatedObject<ImageStyle>,
      star: {
        position: "absolute",
        top: (PLANET_CONTAINER_RADIUS - STAR_RADIUS) / 2,
        start: (PLANET_CONTAINER_RADIUS - STAR_RADIUS) / 2,
        width: STAR_RADIUS,
        height: STAR_RADIUS,
        opacity: state === PLANET_STATE.PREVIOUS ? animationValues?.current?.starOpacity : 1,
      } as Animated.WithAnimatedObject<ImageStyle>,
      spinningAnimation: {
        width: PLANET_CONTAINER_RADIUS,
        height: PLANET_CONTAINER_RADIUS,
        position: "absolute",
        transform: [{ scale: animationValues.current.spinningAnimationScale }],
      } as Animated.WithAnimatedObject<ViewStyle>,
      explosionAnimation: {
        width: PLANET_CONTAINER_RADIUS,
        height: PLANET_CONTAINER_RADIUS,
        position: "absolute",
      } as Animated.WithAnimatedObject<ViewStyle>,
      pinContainer: {
        position: "absolute",
        paddingBottom: YUMOJI_HEIGHT + PLANET_RADIUS - 15,
        transform: [
          {
            translateY: animationValues?.current?.yumojiScale.interpolate({
              inputRange: [0, 1],
              outputRange: [YUMOJI_HEIGHT / 2, 0],
            }),
          },
        ],
      } as Animated.WithAnimatedObject<ViewStyle>,
    }),
    [bottom, left, state]
  );

  useEffect(() => {
    if (!travel || !travelAnimations.has(state)) {
      return;
    }

    const animation = travelAnimations.get(state);
    animation.start();

    return () => {
      animation.stop();
    };
  }, [travel]);

  useEffect(() => {
    const animation = Animated.timing(animationValues.current.starOpacity, {
      delay: STAR_FADE_IN_DELAY,
      duration: STAR_FADE_IN_DURATION,
      toValue: 1,
      useNativeDriver: true,
    });
    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <View style={styles.containerStyle}>
      {state !== PLANET_STATE.PENDING ? null : (
        <Animated.Image
          source={PLANET_ASSETS.UnrevealedPlanet_3}
          style={{
            width: PLANET_CONTAINER_RADIUS,
            height: PLANET_CONTAINER_RADIUS,
          }}
        />
      )}
      {state !== PLANET_STATE.NEXT ? null : (
        <Animated.Image
          source={PLANET_ASSETS.UnrevealedPlanet_2}
          style={{
            opacity: animationValues?.current?.unrevealedPlanetOpacity,
            width: PLANET_CONTAINER_RADIUS,
            height: PLANET_CONTAINER_RADIUS,
          }}
        />
      )}

      {state !== PLANET_STATE.PASSED && state !== PLANET_STATE.PREVIOUS && state !== PLANET_STATE.CURRENT ? null : (
        <Animated.Image source={icon} style={styles.planetStyle} testID={testID} />
      )}

      {state !== PLANET_STATE.PREVIOUS && state !== PLANET_STATE.CURRENT ? null : (
        <Animated.View style={styles.pinContainer} testID={PLANET_AVATAR}>
          <EOTWYumojiIcon avatar={avatar} scale={animationValues?.current?.yumojiScale} />
        </Animated.View>
      )}

      {state !== PLANET_STATE.PASSED && state !== PLANET_STATE.PREVIOUS ? null : (
        <Animated.Image source={STAR_ASSET} style={styles.star} />
      )}
      {state !== PLANET_STATE.CURRENT && state !== PLANET_STATE.NEXT ? null : (
        <AnimatedLottieView
          resizeMode="cover"
          style={styles.spinningAnimation}
          source={FLOATING_ANIMATION}
          autoPlay={true}
          loop={DETOX_ENABLED ? false : true}
        />
      )}

      {state !== PLANET_STATE.CURRENT ? null : (
        <AnimatedLottieView
          resizeMode="cover"
          style={styles.explosionAnimation}
          ref={explosionRef}
          source={EXPLOSION_ANIMATION}
          autoPlay={false}
          loop={false}
        />
      )}
    </View>
  );
});

export default EOTWPlanet;
