import { memo, useCallback, useEffect } from "react";
import { LayoutChangeEvent } from "react-native";
import {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Box } from "@atoms";
import { InfoPanel } from "@components/molecules";
import { t } from "@locale";
import { PATHWAYS_GOAL_COMPLETION_BANNER } from "@ids";
import { IGoalCompletionBannerEvent } from "../../../types/pathway-goal.types";
import GoalCompletionConfetti from "./goal-completion-confetti";

interface IGoalCompletionBannerProps {
  event: IGoalCompletionBannerEvent;
  onDismissed: (eventId: string) => void;
}

const VISIBLE_DURATION_MS = 1400;
const FADE_OUT_DURATION_MS = 220;
const COLLAPSE_DURATION_MS = 280;
const CONFETTI_DISMISS_DELAY_MS = 500;
const ENTRANCE_OFFSET = 20;
const CONFETTI_ASPECT_RATIO = 281 / 60;

const GoalCompletionBanner = ({ event, onDismissed }: IGoalCompletionBannerProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(ENTRANCE_OFFSET);
  const scaleY = useSharedValue(1);

  const confettiOpacity = useSharedValue(0);
  const confettiTranslateY = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 240, easing: Easing.out(Easing.quad) });
    translateY.value = withSpring(0, { damping: 11, stiffness: 160, mass: 0.9 });

    confettiOpacity.value = withTiming(1, { duration: 200 });

    const exitTimer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: FADE_OUT_DURATION_MS, easing: Easing.in(Easing.quad) }, (finished) => {
        if (finished) {
          runOnJS(onDismissed)(event.id);
        }
      });

      scaleY.value = withTiming(0, {
        duration: COLLAPSE_DURATION_MS,
        easing: Easing.inOut(Easing.quad),
      });

      confettiOpacity.value = withDelay(CONFETTI_DISMISS_DELAY_MS, withTiming(0, { duration: 200 }));
    }, VISIBLE_DURATION_MS);

    return () => clearTimeout(exitTimer);
  }, [event.id, onDismissed, opacity, translateY, scaleY, confettiOpacity]);

  const wrapperStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }, { scaleY: scaleY.value }] as const,
  }));

  const confettiStyle = useAnimatedStyle(() => ({
    opacity: confettiOpacity.value,
    transform: [{ translateY: confettiTranslateY.value }],
  }));

  const onConfettiLayout = useCallback(
    (layoutEvent: LayoutChangeEvent) => {
      const height = layoutEvent.nativeEvent.layout.height;

      confettiTranslateY.value = -height;
      confettiTranslateY.value = withTiming(0, {
        duration: 700,
        easing: Easing.out(Easing.cubic),
      });
    },
    [confettiTranslateY]
  );

  return (
    <Box
      forceAnimated={true}
      pointerEvents="box-none"
      position="absolute"
      top="100%"
      left={0}
      right={0}
      mt={8}
      zIndex={10}
      style={wrapperStyle}
      testID={PATHWAYS_GOAL_COMPLETION_BANNER}
    >
      <Box
        forceAnimated={true}
        pointerEvents="none"
        onLayout={onConfettiLayout}
        position="absolute"
        top={0}
        left={0}
        right={0}
        width="100%"
        aspectRatio={CONFETTI_ASPECT_RATIO}
        zIndex={1}
        style={confettiStyle}
      >
        <GoalCompletionConfetti />
      </Box>

      <InfoPanel
        type="success"
        showIcon={true}
        titleMarkdown={t(`screens.pathways.goals.banner.title`)}
        markdown={t(event.messageKey)}
      />
    </Box>
  );
};

export default memo(GoalCompletionBanner);
