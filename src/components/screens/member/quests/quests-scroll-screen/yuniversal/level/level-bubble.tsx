import React, { FC, memo, useCallback, useRef, useState } from "react";
import { Animated, Easing, ViewStyle } from "react-native";
import { G, Path, Circle, Text, ClipPath, Defs, Mask, Rect } from "react-native-svg";
import moment from "moment";
import { DETOX_ENABLED } from "@services/socket";
import { usePressedInWithDelay } from "@hooks";
import useInterval from "@use-it/interval";
import { getTimeUntil } from "@utils";
import { getLevelIcon } from "./level-slot-helpers";
import { LevelBubbleBackground } from "./level-bubble-background";
import { LevelOverlay } from "./level-overlay";
import { Image, Pulse } from "@atoms";
import { Style } from "@styles";
import { GHI_REWARD_ICON } from "@ids";

const HEIGHT_WIDTH_MULTIPLIER = Style.DEVICE_WIDTH / 375;

export interface ILevelBubbleProps {
  x: number;
  y: number;
  radius: number;
  isActive?: boolean;
  text?: string | number;
  rating: number;
  icon?: "lock" | "chest";
  backgroundColour: string;
  backgroundColour2?: string;
  shadowColour: string;
  textColour: string;
  withOverlay?: boolean;
  pressColour: string;
  nextLevelAvailableAt?: string;
  notificationIcon?: {
    uri?: string;
  };
  notificationBorderWidth?: number;
  onPress: () => void;
}

const _LevelBubble: FC<ILevelBubbleProps> = ({
  x,
  y,
  radius,
  isActive,
  text,
  rating,
  icon,
  backgroundColour,
  backgroundColour2,
  shadowColour,
  textColour,
  withOverlay,
  pressColour,
  nextLevelAvailableAt,
  notificationIcon,
  notificationBorderWidth,
  onPress,
}) => {
  const [nextAvailableTimer, setNextAvailableTimer] = useState(null);
  const circleClipId = `circleClip_${x}_${y}`;
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const animatedPressOpacity = useRef(new Animated.Value(0)).current;

  useInterval(
    () => {
      const diff = moment(nextLevelAvailableAt).diff(moment(), "seconds");
      const timer = getTimeUntil(diff);
      setNextAvailableTimer(timer);
    },
    nextLevelAvailableAt ? 1000 : null
  );

  const maskId = `notification-mask_${x}_${y}`;
  const mask = notificationIcon ? `url(#${maskId})` : null;
  const notificationImageStyle = {
    position: "absolute",
    top: (y - radius - 2) * HEIGHT_WIDTH_MULTIPLIER,
    start: (x + radius - 14) * HEIGHT_WIDTH_MULTIPLIER,
  } as ViewStyle;

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
  const pulseDuration = nextLevelAvailableAt ? 10000 : 5000;
  const pulseOpacity = nextLevelAvailableAt ? 0.4 : 0.8;

  return (
    <G x={x} y={y} onPressIn={handlePress}>
      <Defs>
        <Mask id={maskId} x={0} y={0} width={radius * 2} height={radius * 2 + 3}>
          <Rect x={0} y={0} width={radius * 2} height={radius * 2 + 3} fill="white" />
          {!notificationBorderWidth ? null : (
            <Circle x={radius * 2 - 6} y={6} r={12 + notificationBorderWidth} fill="black" />
          )}
        </Mask>
      </Defs>
      {/* Shifting position back and forth so that the mask encompasses the whole bubble */}
      <G x={-radius} y={-radius} mask={mask}>
        <G x={radius} y={radius}>
          <Circle y={3} r={radius} fill={shadowColour} />
          <LevelBubbleBackground radius={radius} colour={backgroundColour} colour2={backgroundColour2} />
        </G>
      </G>
      {!isActive ? null : <Pulse radius={60} innerRadius={radius} duration={pulseDuration} opacity={pulseOpacity} />}
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
        {!notificationIcon?.uri ? null : (
          <>
            <Circle x={radius * 2 - 6} y={6} r={12} fill={backgroundColour} />
            {/* not using react-native-svg image as it doesn't support tintColor */}
            <Image
              style={notificationImageStyle}
              width={16}
              height={16}
              source={notificationIcon}
              tintColor={textColour}
              testID={GHI_REWARD_ICON(text.toString())}
            />
          </>
        )}
      </G>
      {!withOverlay ? null : (
        <G x={-radius} y={-radius}>
          <LevelOverlay radius={radius} />
        </G>
      )}
      <G clipPath={`url(#${circleClipId})`} opacity={0.4}>
        <AnimatedCircle r={radius} opacity={animatedPressOpacity} fill={pressColour} />
      </G>
      <ClipPath id={circleClipId}>
        <Circle r={radius} />
      </ClipPath>
    </G>
  );
};

export const LevelBubble = memo(_LevelBubble);

const FONT_COMPLETE = { fontFamily: "Bariol", fontSize: 19, fontWeight: 400 };
const FONT_ACTIVE = { fontFamily: "Bariol", fontSize: 19, fontWeight: 700 };
const FONT_TIMER = { fontFamily: "Bariol", fontSize: 11, fontWeight: 400 };
