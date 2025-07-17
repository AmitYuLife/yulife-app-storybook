import { TextTemplate } from "@atoms";
import Box from "@atoms/box/box";
import { useTranslation } from "@hooks";
import { DETOX_ENABLED } from "@services/socket";
import { Colours, Style } from "@styles";
import { clamp } from "lodash";
import React, { useEffect, useState } from "react";
import { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from "react-native-reanimated";

interface Props {
  badgeCount: number;
}

const widthOptions = { shrinkMultiplier: 1 };
const INITIAL_WIDTH = [Style.adjust(24, widthOptions), Style.adjust(26, widthOptions), Style.adjust(34, widthOptions)];
const INITIAL_HEIGHT = Style.adjust(24);
const INITIAL_OPACITY = 1;
const INITIAL_SCALE = 1;
const INITIAL_TRANSLATE_Y = Style.adjust(-4);
const COLLAPSED_SIZE = Style.adjust(12);
const ANIMATION_DURATION = 300;
const DELAY_DURATION = 4000;

export const NotificationIconBadge = ({ badgeCount }: Props) => {
  const t = useTranslation(["labels.max_notification"]);
  const label = badgeCount > 99 ? t["labels.max_notification"] : badgeCount.toString();
  const [showNumber, setShowNumber] = useState(true);
  const width = useSharedValue(INITIAL_WIDTH[clamp(label.length - 1, 0, INITIAL_WIDTH.length - 1)]);
  const height = useSharedValue(INITIAL_HEIGHT);
  const opacity = useSharedValue(INITIAL_OPACITY);
  const scale = useSharedValue(INITIAL_SCALE);
  const translateY = useSharedValue(INITIAL_TRANSLATE_Y);

  useEffect(() => {
    if (DETOX_ENABLED || badgeCount < 1) {
      return;
    }

    // reset on badgeCount update
    width.value = INITIAL_WIDTH[Math.max(label.length - 1, 0)];
    height.value = INITIAL_HEIGHT;
    opacity.value = INITIAL_OPACITY;
    scale.value = INITIAL_SCALE;
    translateY.value = INITIAL_TRANSLATE_Y;
    setShowNumber(true);

    // animate
    const timer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: ANIMATION_DURATION });
      scale.value = withTiming(0, { duration: ANIMATION_DURATION });
      height.value = withTiming(COLLAPSED_SIZE, { duration: ANIMATION_DURATION });
      translateY.value = withTiming(0, { duration: ANIMATION_DURATION });
      width.value = withTiming(COLLAPSED_SIZE, { duration: ANIMATION_DURATION }, () => {
        runOnJS(setShowNumber)(false);
      });
    }, DELAY_DURATION);

    return () => clearTimeout(timer);
  }, [badgeCount]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  if (badgeCount < 1) {
    return null;
  }

  return (
    <Box position="absolute" top={-4} left={12}>
      <Box
        style={animatedStyle}
        forceAnimated={true}
        bg={Colours.notification.badge.background}
        br={40}
        justifyContent="center"
        alignItems="center"
      >
        <Box style={animatedTextStyle} forceAnimated={true}>
          {showNumber ? (
            <TextTemplate type="l1b" color={Colours.neutral.white}>
              {label}
            </TextTemplate>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
