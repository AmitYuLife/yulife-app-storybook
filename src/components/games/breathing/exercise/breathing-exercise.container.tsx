import { Box, TextTemplate } from "@atoms";
import { BoxOption, Button, LottieView } from "@components/molecules";
import { Navigation } from "@navigation/main";
import { useNavigation } from "@navigation/navigation.context";
import { GenericHeadingAbsolute } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import useInterval from "@use-it/interval";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useDispatch } from "react-redux";
import { displaySecondsAsMinutes } from "@utils";
import { t } from "@locale";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { useKeepAwake } from "expo-keep-awake";

const OUTER_CIRCLE_SIZE = Style.adjust(280);
const INNER_CIRCLE_SIZE = Style.adjust(120);

const FOREST_COLOUR = "#018547";
const PROGRESS_WIDTH = Style.DEVICE_WIDTH - Style.adjust(72);

const END_STAGE = {
  type: "End" as unknown as BreathingExerciseOptionPartType,
  duration: null as number,
};

enum BreathingExerciseOptionPartType {
  Exhale = "Exhale",
  Hold = "Hold",
  Inhale = "Inhale",
}

const TRANSLATION_MAPPING: Record<BreathingExerciseOptionPartType | "End", string> = {
  End: "screens.breathing_exercise.end",
  [BreathingExerciseOptionPartType.Exhale]: "screens.breathing_exercise.exhale",
  [BreathingExerciseOptionPartType.Hold]: "screens.breathing_exercise.hold",
  [BreathingExerciseOptionPartType.Inhale]: "screens.breathing_exercise.inhale",
};

type Props = {
  lottieUri: string;
  data: {
    id: string;
    availableDurations: number[];
    parts: {
      id: string;
      duration: number;
      type: BreathingExerciseOptionPartType;
    }[];
  };
};

const BreathingExerciseContainer = ({ data, lottieUri }: Props) => {
  const { componentId } = useNavigation();
  const dispatch = useDispatch();
  const [breathingStageIndex, setBreathingStageIndex] = useState(0);
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const progressChangedAt = useRef<number>(null);
  const breathingExpansionChangedAt = useRef<number>(null);
  const isAutoPlayingBreathingExpansion = useRef(false);
  const breathingExpansionRemaining = useRef<number>(null);
  const breathingExpansionSize = useRef<number>(null);
  const progressDuration = useRef<number>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const breathingExpansion = useSharedValue(INNER_CIRCLE_SIZE);
  const progress = useSharedValue(0);

  const stage = data.parts[breathingStageIndex] || END_STAGE;

  // Keep screen awake
  useKeepAwake(componentId);

  const handleBack = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const handleClose = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const handleNextStage = useCallback(
    (finished: boolean) => {
      if (!finished) {
        return;
      }

      setBreathingStageIndex((prev) => {
        isAutoPlayingBreathingExpansion.current = true;

        if (hasEnded) {
          return -1;
        }

        const nextIndex = prev === data.parts.length - 1 ? 0 : prev + 1;

        breathingExpansionRemaining.current = data.parts[nextIndex].duration;
        breathingExpansionChangedAt.current = Date.now();

        return nextIndex;
      });
    },
    [data, hasEnded]
  );

  const handleEnd = useCallback(
    (finished: boolean) => {
      if (finished) {
        setHasEnded(true);
        dispatch(
          logMixpanelEventActionCreator("breathing_exercise_completed", {
            id: data.id,
            duration: data.availableDurations[selectedDurationIndex],
          })
        );
      }
    },
    [dispatch, selectedDurationIndex, data]
  );

  const handleStartPause = useCallback(() => {
    isAutoPlayingBreathingExpansion.current = false;

    progressDuration.current = !progressChangedAt.current
      ? data.availableDurations[selectedDurationIndex]
      : isPlaying
      ? data.availableDurations[selectedDurationIndex] - getMillisecondsSince(progressChangedAt.current)
      : progressDuration.current;

    breathingExpansionRemaining.current = !progressChangedAt.current
      ? stage.duration
      : isPlaying
      ? breathingExpansionRemaining.current - getMillisecondsSince(breathingExpansionChangedAt.current)
      : breathingExpansionRemaining.current;

    progressChangedAt.current = Date.now();
    breathingExpansionChangedAt.current = Date.now();

    if (!hasStarted) {
      // set the initial size of the breathing expansion
      breathingExpansionSize.current =
        stage.type === BreathingExerciseOptionPartType.Inhale ? OUTER_CIRCLE_SIZE : INNER_CIRCLE_SIZE;
      setHasStarted(true);
      dispatch(
        logMixpanelEventActionCreator("breathing_exercise_started", {
          duration: data.availableDurations[selectedDurationIndex],
          id: data.id,
        })
      );
    }

    if (isPlaying) {
      cancelAnimation(progress);
      cancelAnimation(breathingExpansion);
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    progress.value = withTiming(
      PROGRESS_WIDTH,
      {
        duration: progressDuration.current,
        easing: Easing.linear,
      },
      (finished) => {
        runOnJS(handleEnd)(finished);
      }
    );

    breathingExpansionSize.current = getNextBreathingExpansionSize(stage.type, breathingExpansionSize.current);

    breathingExpansion.value = withTiming(
      breathingExpansionSize.current,
      {
        duration: breathingExpansionRemaining.current,
        easing: Easing.linear,
      },
      (finished) => {
        runOnJS(handleNextStage)(finished);
      }
    );
  }, [hasStarted, isPlaying, stage, data]);

  useEffect(() => {
    if (!isPlaying || !isAutoPlayingBreathingExpansion.current) {
      return;
    }

    const nextBreathingExpansionSize = getNextBreathingExpansionSize(stage.type, breathingExpansionSize.current);

    breathingExpansion.value = withTiming(
      nextBreathingExpansionSize,
      {
        duration: stage.duration,
        easing: Easing.linear,
      },
      (finished) => {
        runOnJS(handleNextStage)(finished);
      }
    );

    breathingExpansionSize.current = nextBreathingExpansionSize;
  }, [stage, isPlaying]);

  const breathingExpansionStyle = useAnimatedStyle(() => ({
    width: breathingExpansion.value,
    height: breathingExpansion.value,
  }));

  const progressStyle = useAnimatedStyle(() => ({
    width: progress.value,
  }));

  return (
    <>
      <LottieView
        resizeMode="cover"
        style={styles.background}
        source={{ uri: lottieUri }}
        autoPlay={true}
        loop={true}
      />
      <Box flex={1}>
        <Box pt={120} justifyContent="center" alignItems="center">
          <Box position="relative" size={OUTER_CIRCLE_SIZE} justifyContent="center" alignItems="center">
            {/* OUTER_CIRCLE as background */}
            <Box position="absolute" opacity={0.5} bg={Colours.forest.fp306} size={OUTER_CIRCLE_SIZE} br={999} />
            {/* Animated breathing circle */}
            <Box
              style={breathingExpansionStyle}
              forceAnimated={true}
              bg={Colours.forest.fp309}
              size={INNER_CIRCLE_SIZE}
              br={999}
              justifyContent="center"
              alignItems="center"
              position="absolute"
              opacity={0.8}
            />
            {/* INNER_CIRCLE with content */}
            <Box
              bg={FOREST_COLOUR}
              size={INNER_CIRCLE_SIZE}
              br={99}
              justifyContent="center"
              alignItems="center"
              opacity={1}
              position="absolute"
            >
              <Box justifyContent="center" alignItems="center">
                <TextTemplate type="h3" color={Colours.neutral.white}>
                  {t(TRANSLATION_MAPPING[stage.type])}
                </TextTemplate>
                <Content {...stage} isPlaying={isPlaying} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box position="absolute" bottom={24} left={0} right={0}>
        {!hasStarted && data.availableDurations.length > 1 ? (
          <Box justifyContent="center" alignItems="center" px={24} pb={48}>
            <Box mb={12}>
              <TextTemplate type="b2b" color={Colours.neutral.white}>
                {t("screens.breathing_exercise.length")}
              </TextTemplate>
            </Box>
            <Box flexDirection="row" justifyContent="center" alignItems="center">
              {data.availableDurations.map((duration, index) => {
                const { minutes } = displaySecondsAsMinutes(duration / 1000);

                return (
                  <Box key={duration} mh={12}>
                    <BoxOption
                      disabled={hasStarted}
                      onPress={() => setSelectedDurationIndex(index)}
                      isSelected={selectedDurationIndex === index}
                      innerHeight={Style.adjust(48)}
                    >
                      <Box justifyContent="center" alignItems="center" p={12}>
                        <TextTemplate type="b2b">{t("activity_types.meditation.short", { min: minutes })}</TextTemplate>
                      </Box>
                    </BoxOption>
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : null}

        <Box justifyContent="center" alignItems="center" flex={1} mb={32}>
          <Box
            br={9}
            height={Style.adjust(12)}
            width={PROGRESS_WIDTH}
            mh={Style.adjust(24)}
            disableAutoAdjust={true}
            bg={Colours.neutral.white}
          >
            <Box
              opacity={0.8}
              br={9}
              height={Style.adjust(12)}
              disableAutoAdjust={true}
              bg={Colours.primary.p600}
              style={progressStyle}
              forceAnimated={true}
            />
          </Box>
        </Box>
        <Box justifyContent="center" alignItems="center" flex={1} mb={16}>
          {stage.type === END_STAGE.type ? (
            <Button translationKey="labels.cta.go_back" onPress={handleBack} delay={300} />
          ) : (
            <Button
              translationKey={isPlaying ? "labels.cta.pause" : "labels.cta.start"}
              delay={300}
              onPress={handleStartPause}
            />
          )}
        </Box>
      </Box>
      <GenericHeadingAbsolute
        logo="yulife"
        rightIcon="CLOSE"
        leftIcon={LeftIcon.BACK}
        onLeftIconPress={handleBack}
        onRightIconPress={handleClose}
        color={Colours.neutral.white}
        backgroundColor="transparent"
      />
    </>
  );
};

export default BreathingExerciseContainer;

const Content = ({ type, duration, isPlaying }: { type: string; duration?: number; isPlaying: boolean }) => {
  if (type === "End") {
    return null;
  }

  if (type === BreathingExerciseOptionPartType.Inhale) {
    return (
      <TextTemplate type="b2" color={Colours.neutral.white}>
        {t("screens.breathing_exercise.nose")}
      </TextTemplate>
    );
  }

  if (type === BreathingExerciseOptionPartType.Exhale) {
    return (
      <TextTemplate type="b2" color={Colours.neutral.white}>
        {t("screens.breathing_exercise.mouth")}
      </TextTemplate>
    );
  }

  return <CountDown isPlaying={isPlaying} duration={duration} textType="b2" />;
};

const CountDown = ({
  isPlaying,
  duration,
  textType = "b2",
}: {
  isPlaying: boolean;
  duration: number;
  textType?: "h3" | "b2";
}) => {
  const [count, setCount] = useState(duration);

  useInterval(
    () => {
      setCount((prev) => prev - 1000);
    },
    isPlaying ? 1000 : null
  );

  return (
    <TextTemplate type={textType} color={Colours.neutral.white}>
      {Math.floor(count / 1000)}
    </TextTemplate>
  );
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
});

const getMillisecondsSince = (start: number | null) => {
  if (!start) {
    return 0;
  }

  return Date.now() - start;
};

const getNextBreathingExpansionSize = (type: BreathingExerciseOptionPartType, previousSize?: number) => {
  if (type === BreathingExerciseOptionPartType.Hold) {
    return previousSize - 1;
  }

  if (type === BreathingExerciseOptionPartType.Inhale) {
    return OUTER_CIRCLE_SIZE;
  }

  return INNER_CIRCLE_SIZE;
};
