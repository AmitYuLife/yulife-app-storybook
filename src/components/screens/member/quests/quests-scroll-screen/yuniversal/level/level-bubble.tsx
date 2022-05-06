import React, { FC, memo, useCallback, useRef, useEffect, useMemo, useState } from "react";
import { Animated, Easing } from "react-native";
import { G, Path, Circle, Text, ClipPath } from "react-native-svg";
import moment from "moment";
import { DETOX_ENABLED } from "@services/socket";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import useInterval from "@use-it/interval";
import { getQuestScreenTimer } from "@utils";
import { getLevelIcon } from "./level-slot-helpers";

export interface ILevelBubbleProps {
  x: number;
  y: number;
  isActive?: boolean;
  text?: string | number;
  rating: number;
  icon?: "lock" | "chest";
  backgroundColour: string;
  shadowColour: string;
  textColour: string;
  pressColour: string;
  nextLevelAvailableAt?: string;
  onPress: () => void;
}

const _LevelBubble: FC<ILevelBubbleProps> = ({
  x,
  y,
  isActive,
  text,
  rating,
  icon,
  backgroundColour,
  shadowColour,
  textColour,
  pressColour,
  nextLevelAvailableAt,
  onPress,
}) => {
  const [nextAvailableTimer, setNextAvailableTimer] = useState(null);
  const circleClipId = `circleClip_${x}_${y}`;
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const animatedPressOpacity = useRef(new Animated.Value(0)).current;

  useInterval(
    () => {
      const diff = moment(nextLevelAvailableAt).diff(moment(), "seconds");
      const timer = getQuestScreenTimer(diff);
      setNextAvailableTimer(timer);
    },
    nextLevelAvailableAt ? 1000 : null
  );

  const animatedPulse = useRef(new Animated.Value(0)).current;
  const pulse = useMemo(() => {
    const startingOpacity = nextLevelAvailableAt ? 0.4 : 0.8;
    return [
      {
        r: animatedPulse.interpolate({ inputRange: [0, 1], outputRange: [20, 60] }),
        opacity: animatedPulse.interpolate({ inputRange: [0, 1], outputRange: [startingOpacity, 0] }),
      },
      {
        r: animatedPulse.interpolate({ inputRange: [0, 0.25, 0.25, 1], outputRange: [50, 60, 20, 50] }),
        opacity: animatedPulse.interpolate({
          inputRange: [0, 0.25, 0.25, 1],
          outputRange: [startingOpacity / 4, 0, startingOpacity, startingOpacity / 4],
        }),
      },
      {
        r: animatedPulse.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [40, 60, 20, 40] }),
        opacity: animatedPulse.interpolate({
          inputRange: [0, 0.5, 0.5, 1],
          outputRange: [startingOpacity / 2, 0, startingOpacity, startingOpacity / 2],
        }),
      },
      {
        r: animatedPulse.interpolate({ inputRange: [0, 0.75, 0.75, 1], outputRange: [30, 60, 20, 30] }),
        opacity: animatedPulse.interpolate({
          inputRange: [0, 0.75, 0.75, 1],
          outputRange: [(startingOpacity * 3) / 4, 0, startingOpacity, (startingOpacity * 3) / 4],
        }),
      },
    ];
  }, [animatedPulse, nextLevelAvailableAt]);

  useEffect(() => {
    return () => {
      animatedPulse.stopAnimation();
    };
  }, []);

  useEffect(() => {
    if (isActive && !DETOX_ENABLED) {
      animatedPulse.stopAnimation();
      animatedPulse.setValue(0);
      Animated.loop(
        Animated.timing(animatedPulse, {
          toValue: 1,
          duration: nextLevelAvailableAt ? 10000 : 5000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start(() => animatedPulse.setValue(0));
    } else {
      animatedPulse.stopAnimation();
      animatedPulse.setValue(0);
    }
  }, [isActive, animatedPulse, nextLevelAvailableAt]);

  const { handlePress: handlePressWithDelay } = usePressedInWithDelay({ onPress, delay: 1000 });

  const handlePress = useCallback(() => {
    if (!DETOX_ENABLED) {
      animatedPressOpacity.setValue(0.8);
      Animated.timing(animatedPressOpacity, {
        toValue: 0,
        duration: 200,
        delay: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }

    handlePressWithDelay();
  }, [animatedPressOpacity, handlePressWithDelay]);

  const showTimer = !!nextLevelAvailableAt;
  const showIcon = !nextLevelAvailableAt && icon;
  const showText = !showTimer && !showIcon && text;
  const textFont = isActive ? FONT_ACTIVE : FONT_COMPLETE;
  const textY = isActive ? 6 : 3;
  const showRating = !showTimer && !showIcon && !isActive;

  return (
    <G x={x} y={y} onPress={handlePress}>
      <Circle y={3} r={25} fill={shadowColour} />
      {!isActive ? null : (
        <>
          {pulse.map((props, index) => (
            <AnimatedCircle stroke="white" key={index} {...props} />
          ))}
        </>
      )}
      <Circle r={25} fill={backgroundColour} />
      {!showTimer ? null : (
        <>
          <Text y={-3} fill={textColour} font={FONT_TIMER} textAnchor="middle">
            in
          </Text>
          <Text y={8} fill={textColour} font={FONT_TIMER} textAnchor="middle">
            {nextAvailableTimer}
          </Text>
        </>
      )}
      {!showText ? null : (
        <Text y={textY} fill={textColour} font={textFont} textAnchor="middle">
          {text}
        </Text>
      )}
      <G x={-25} y={-25}>
        {showIcon ? getLevelIcon(icon) : null}
        {!showRating ? null : (
          <>
            <Path
              opacity={rating > 0 ? 1 : 0.5}
              d="m16.183 32.187.77 2.429 2.512-.006-2.035 1.496.781 2.425-2.028-1.505-2.028 1.505.782-2.425-2.035-1.496 2.511.006.77-2.429Z"
              fill="#fff"
            />
            <Path
              opacity={rating > 1 ? 1 : 0.5}
              d="m24.683 32.187.77 2.429 2.512-.006-2.035 1.496.781 2.425-2.028-1.505-2.028 1.505.782-2.425-2.035-1.496 2.511.006.77-2.429Z"
              fill="#fff"
            />
            <Path
              opacity={rating > 2 ? 1 : 0.5}
              d="m33.283 32.187.77 2.429 2.512-.006-2.035 1.496.782 2.425-2.029-1.505-2.028 1.505.782-2.425-2.035-1.496 2.511.006.77-2.429Z"
              fill="#fff"
            />
          </>
        )}
      </G>
      <G clipPath={`url(#${circleClipId})`} opacity={0.4}>
        <AnimatedCircle r={25} opacity={animatedPressOpacity} fill={pressColour} />
      </G>
      <ClipPath id={circleClipId}>
        <Circle r={25} />
      </ClipPath>
    </G>
  );
};

export const LevelBubble = memo(_LevelBubble);

const FONT_COMPLETE = { fontFamily: "Bariol", fontSize: 19, fontWeight: 400 };
const FONT_ACTIVE = { fontFamily: "Bariol", fontSize: 19, fontWeight: 700 };
const FONT_TIMER = { fontFamily: "Bariol", fontSize: 11, fontWeight: 400 };
