import { ROUTES } from "@navigation/constants";
import { getRouteState } from "@redux/app/app.selectors";
import { getShouldQuestMapAnimateOnboardingStart } from "@redux/quest-map/quest-map.selectors";
import { DETOX_ENABLED } from "@services/socket";
import { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { useSelector } from "react-redux";

export const ANIMATION_LOOP_DURATION = 1500;
export const BOOM_DURATION = 320;
export const BEAT_DURATION = 160;
export const BEAT_PEAK_DURATION = 16;
const IDLE_OPACITY = 0.4;

type Props = {
  levelIsActive: boolean;
  nextAvailableTimer: number | null;
  pulseMaxSize: number;
  pulseSize: number;
};

export function usePulseAnimation({ levelIsActive, nextAvailableTimer, pulseMaxSize, pulseSize }: Props) {
  const routeState = useSelector(getRouteState);
  const shouldQuestMapAnimate = useSelector(getShouldQuestMapAnimateOnboardingStart);
  const levelBubbleScaleAnimationRef = useRef(new Animated.Value(1)).current;
  const levelTextScaleAnimationRef = useRef(new Animated.Value(1)).current;
  const borderOpacityAnimationRef = useRef(new Animated.Value(0)).current;
  const pulseScaleAnimationRef = useRef(new Animated.Value(0)).current;
  const pulseOpacityAnimationRef = useRef(new Animated.Value(IDLE_OPACITY)).current;
  const activeScreen = routeState === ROUTES.quests;
  const pulseScaleInterpolation = {
    inputRange: [0, 1],
    outputRange: [1, pulseMaxSize / pulseSize],
  };

  const preventsAnimation =
    DETOX_ENABLED || !levelIsActive || nextAvailableTimer < 0 || !activeScreen || shouldQuestMapAnimate;

  useEffect(() => {
    if (preventsAnimation) {
      return;
    }

    const PULSE_ANIMATION = Animated.sequence([
      pulse({ pulseOpacityAnimationRef, pulseScaleAnimationRef, scale: 10, duration: BOOM_DURATION }),
      Animated.parallel([scale(pulseScaleAnimationRef, 0), opacify(pulseOpacityAnimationRef, 0)]),
      opacify(pulseOpacityAnimationRef, IDLE_OPACITY),
      pulse({ pulseOpacityAnimationRef, pulseScaleAnimationRef, scale: 4, duration: BOOM_DURATION }),
      Animated.delay(ANIMATION_LOOP_DURATION - BOOM_DURATION * 2),
    ]);

    const BUBBLE_ANIMATION = Animated.sequence([
      pulseOut(levelBubbleScaleAnimationRef, levelTextScaleAnimationRef, borderOpacityAnimationRef),
      Animated.delay(BEAT_PEAK_DURATION),
      pulseIn(levelBubbleScaleAnimationRef, levelTextScaleAnimationRef, borderOpacityAnimationRef),
      Animated.delay(ANIMATION_LOOP_DURATION - BEAT_PEAK_DURATION - BEAT_DURATION * 2),
    ]);

    const animation = Animated.loop(Animated.parallel([PULSE_ANIMATION, BUBBLE_ANIMATION]));

    animation.start();

    return animation.stop;
  }, [preventsAnimation]);

  return {
    levelBubbleScale: levelBubbleScaleAnimationRef,
    levelTextScale: levelTextScaleAnimationRef,
    levelBubbleBorderOpacity: borderOpacityAnimationRef,
    pulseOpacity: pulseOpacityAnimationRef,
    pulseScale: pulseScaleAnimationRef.interpolate(pulseScaleInterpolation),
  };
}

function pulse({
  pulseScaleAnimationRef,
  pulseOpacityAnimationRef,
  scale,
  duration,
}: {
  pulseScaleAnimationRef: Animated.Value;
  pulseOpacityAnimationRef: Animated.Value;
  scale: number;
  duration: number;
}) {
  return Animated.parallel([
    Animated.timing(pulseScaleAnimationRef, {
      toValue: scale,
      useNativeDriver: true,
      duration,
    }),
    Animated.timing(pulseOpacityAnimationRef, {
      toValue: 0,
      useNativeDriver: true,
      duration,
    }),
  ]);
}

const scale = (ref: Animated.Value, toValue: number, duration = 0) =>
  Animated.timing(ref, {
    toValue,
    useNativeDriver: true,
    duration,
  });

const opacify = (ref: Animated.Value, toValue: number, duration = 0) =>
  Animated.timing(ref, {
    toValue,
    useNativeDriver: true,
    duration,
  });

const pulseOut = (bubbleScale: Animated.Value, textScale: Animated.Value, borderOpacity: Animated.Value) =>
  Animated.parallel([
    scale(bubbleScale, 1.1, BEAT_DURATION),
    scale(textScale, 1.1, BEAT_DURATION),
    opacify(borderOpacity, 1, BEAT_DURATION),
  ]);

const pulseIn = (bubbleScale: Animated.Value, textScale: Animated.Value, borderOpacity: Animated.Value) =>
  Animated.parallel([
    scale(bubbleScale, 1, BEAT_DURATION),
    scale(textScale, 1, BEAT_DURATION),
    opacify(borderOpacity, 0, BEAT_DURATION),
  ]);
