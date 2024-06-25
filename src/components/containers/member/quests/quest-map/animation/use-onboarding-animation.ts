import { useEffect, useMemo, useRef } from "react";
import { Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { QuestsMapLevel } from "@components/screens";
import { setSeenQuestMapNewUserOnboardingAnimation } from "@redux/quest-map/quest-map.actions";
import { getShouldQuestMapAnimateOnboardingStart } from "@redux/quest-map/quest-map.selectors";

type Line = { x1: number; y1: number; x2: number; y2: number };
const ANIMATION_ITEM_DURATION = 220;

export function useOnboardingAnimation(lines: Line[], formattedLevels: QuestsMapLevel[]) {
  const shouldQuestMapAnimateOnboardingStart = useSelector(getShouldQuestMapAnimateOnboardingStart);
  const dispatch = useDispatch();

  const animatedLineOpacities = useRef(lines.map(() => new Animated.Value(0)));
  const animatedBubbleOpacities = useRef(formattedLevels.map(() => new Animated.Value(0)));
  const animatedBubblePosition = useRef(formattedLevels.map(() => new Animated.Value(20)));

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

    const bubbleAnimationItems = animated.formattedLevels.map((level, levelIndex) =>
      Animated.sequence([
        Animated.delay(getDelay(levelIndex)),
        Animated.parallel([
          Animated.timing(level.translateY, {
            useNativeDriver: true,
            toValue: 0,
            duration: getDuration(levelIndex),
          }),
          Animated.sequence([
            Animated.timing(level.opacity, {
              useNativeDriver: true,
              toValue: 1,
              duration: getDuration(levelIndex),
            }),
          ]),
        ]),
      ])
    );

    const lineAnimationItems = animated.lines.map((line, lineIndex) =>
      Animated.sequence([
        Animated.delay(getDelay(lineIndex)),
        Animated.timing(line.opacity, {
          useNativeDriver: true,
          toValue: 1,
          duration: getDuration(lineIndex),
        }),
      ])
    );

    const orchestrator = Animated.parallel([
      Animated.sequence([Animated.delay(600), Animated.parallel(bubbleAnimationItems)]),
      Animated.sequence([Animated.delay(800), Animated.parallel(lineAnimationItems)]),
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

const delayMap = [100, 150, 220, 320, 465, 678, 993];
const getDelay = (index: number): number => delayMap[index] || delayMap[delayMap.length - 1];
const getDuration = (index: number): number => ANIMATION_ITEM_DURATION + index * 32;
