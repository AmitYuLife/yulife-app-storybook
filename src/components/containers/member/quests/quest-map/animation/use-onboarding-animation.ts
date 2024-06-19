import { useEffect, useMemo, useRef } from "react";
import { Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { QuestsMapLevel } from "@components/screens";
import { setSeenQuestMapNewUserOnboardingAnimation } from "@redux/quest-map/quest-map.actions";
import { getShouldQuestMapAnimateOnboardingStart } from "@redux/quest-map/quest-map.selectors";

type Line = { x1: number; y1: number; x2: number; y2: number };

export function useOnboardingAnimation(lines: Line[], formattedLevels: QuestsMapLevel[]) {
  const shouldQuestMapAnimateOnboardingStart = useSelector(getShouldQuestMapAnimateOnboardingStart);
  const dispatch = useDispatch();

  const animatedLineOpacities = useRef(lines.map(() => new Animated.Value(0)));
  const animatedBubbleOpacities = useRef(formattedLevels.map(() => new Animated.Value(0)));
  const animatedBubblePosition = useRef(formattedLevels.map(() => new Animated.Value(100)));

  const animated = useMemo(
    () => ({
      lines: lines.map((line, lineIndex) => ({ ...line, opacity: animatedLineOpacities.current[lineIndex] })),
      formattedLevels: formattedLevels.map((level, levelIndex) => ({
        ...level,
        translateY: animatedBubblePosition.current[levelIndex],
        opacity: animatedBubbleOpacities.current[levelIndex],
      })),
    }),
    [lines, formattedLevels]
  );

  useEffect(() => {
    if (!shouldQuestMapAnimateOnboardingStart) {
      return;
    }

    const bubbleAnimationItems = animated.formattedLevels.map((level) =>
      Animated.parallel([
        Animated.timing(level.translateY, {
          useNativeDriver: true,
          toValue: 0,
          duration: 300,
        }),
        Animated.timing(level.opacity, {
          useNativeDriver: true,
          toValue: 1,
          duration: 300,
        }),
      ])
    );

    const lineAnimationItems = animated.lines.map((line) =>
      Animated.timing(line.opacity, {
        useNativeDriver: true,
        toValue: 1,
        duration: 300,
      })
    );

    const orchestrator = Animated.parallel([
      Animated.sequence([Animated.delay(600), ...bubbleAnimationItems]),
      Animated.sequence([Animated.delay(500), ...lineAnimationItems]),
    ]);

    orchestrator.start((endResult) => {
      if (endResult.finished) {
        dispatch(setSeenQuestMapNewUserOnboardingAnimation());
      }
    });

    return orchestrator.stop;
  }, [shouldQuestMapAnimateOnboardingStart]);

  return animated;
}
