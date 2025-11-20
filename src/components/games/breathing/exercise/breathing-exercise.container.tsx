import { Box, TextTemplate } from "@atoms";
import { BoxOption, Button } from "@components/molecules";
import { Navigation } from "@navigation/main";
import { useNavigation } from "@navigation/navigation.context";
import { GenericHeadingAbsolute } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import useInterval from "@use-it/interval";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useAnimatedStyle } from "react-native-reanimated";
import { displaySecondsAsMinutes } from "@utils";
import { t } from "@locale";
import { useKeepAwake } from "expo-keep-awake";
import { BreathingExerciseOptionPartType, useBreathingExercise } from "./hooks/use-breathing-exercise";
import { BreathingAnimation } from "@components/molecules/breathing-animation/breathing-animation";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useDispatch } from "react-redux";
import { ArrowIcon } from "@atoms/icon/arrow";
import GenericSelectorModal from "@components/modals/generic-selector-modal/generic-selector-modal";
import { showFloatingModal } from "@components/modals";
import { MODALS } from "@navigation/constants";

const FOREST_COLOUR = "#018547";
const PROGRESS_WIDTH = Style.DEVICE_WIDTH - Style.adjust(48);

const DEFAULT_DURATION_MS = 180 * 1000; // 3 minutes

const TRANSLATION_MAPPING: Partial<Record<BreathingExerciseOptionPartType, string>> = {
  [BreathingExerciseOptionPartType.End]: "screens.breathing_exercise.end",
  [BreathingExerciseOptionPartType.Exhale]: "screens.breathing_exercise.exhale",
  [BreathingExerciseOptionPartType.Hold]: "screens.breathing_exercise.hold",
  [BreathingExerciseOptionPartType.Inhale]: "screens.breathing_exercise.inhale",
};

const PART_ANIMATION_PHASE_MAPPING: Record<
  BreathingExerciseOptionPartType,
  "intro" | "exhale" | "hold" | "inhale" | "end"
> = {
  [BreathingExerciseOptionPartType.Intro]: "intro",
  [BreathingExerciseOptionPartType.Exhale]: "exhale",
  [BreathingExerciseOptionPartType.Hold]: "hold",
  [BreathingExerciseOptionPartType.Inhale]: "inhale",
  [BreathingExerciseOptionPartType.End]: "end",
};

type Props = {
  data: {
    id: string;
    availableDurations: number[];
    defaultDuration: number;
    parts: {
      id: string;
      duration: number;
      type: BreathingExerciseOptionPartType;
    }[];
  };
};

const BreathingExerciseContainer = ({ data }: Props) => {
  const { componentId } = useNavigation();
  const dispatch = useDispatch();

  const {
    startPlaying,
    togglePlaying,
    updateSelectedDurationMs,
    selectedDurationMs,
    isPlaying,
    currentPart,
    progress,
  } = useBreathingExercise({
    parts: data.parts.map((part) => ({ ...part })),
    defaultDuration: data.defaultDuration || DEFAULT_DURATION_MS,
    onCompleted: () => {
      dispatch(
        logMixpanelEventActionCreator("breathing_exercise_completed", {
          duration: selectedDurationMs,
          id: data.id,
        })
      );
    },
    onStarted: () => {
      dispatch(
        logMixpanelEventActionCreator("breathing_exercise_started", {
          duration: selectedDurationMs,
          id: data.id,
        })
      );
    },
    onPaused: () => {
      dispatch(
        logMixpanelEventActionCreator("breathing_exercise_paused", {
          duration: selectedDurationMs,
          id: data.id,
        })
      );
    },
    onResumed: () => {
      dispatch(
        logMixpanelEventActionCreator("breathing_exercise_resumed", {
          duration: selectedDurationMs,
          id: data.id,
        })
      );
    },
  });

  const handleClose = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("breathing_exercise_closed", {
        duration: selectedDurationMs,
        id: data.id,
      })
    );

    Navigation.pop(componentId);
  }, [componentId, selectedDurationMs, data.id, dispatch]);

  const progressStyle = useAnimatedStyle(() => ({
    width: progress.value * PROGRESS_WIDTH,
  }));

  const showDurationPicker = useCallback(async () => {
    const wasPlaying = isPlaying;
    if (wasPlaying) {
      togglePlaying();
    }

    const items = data.availableDurations.map((duration) => {
      const minutes = displaySecondsAsMinutes(duration / 1000).minutes;
      return {
        label: t("activity_types.meditation.short", { min: minutes }),
        value: duration,
      };
    });

    const children = ({ onClose }: { onClose: () => void }) => (
      <GenericSelectorModal
        items={items}
        onClose={onClose}
        defaultValue={selectedDurationMs}
        buttonLabel={t("overlays.breathing_exercise_duration_picker.button_label")}
        onConfirm={(duration) => {
          updateSelectedDurationMs(duration);
          startPlaying();
        }}
      />
    );

    await showFloatingModal({
      children,
      modalId: MODALS.breathingExerciseDurationPicker,
      title: t("overlays.breathing_exercise_duration_picker.title"),
      showButton: false,
    });

    dispatch(
      logMixpanelEventActionCreator("modal_viewed", {
        name: "breathing_exercise_duration_picker",
      })
    );
  }, [
    updateSelectedDurationMs,
    data.availableDurations,
    selectedDurationMs,
    dispatch,
    togglePlaying,
    startPlaying,
    isPlaying,
  ]);

  const selectedDurationMinutes = useMemo(() => {
    return displaySecondsAsMinutes(selectedDurationMs / 1000).minutes;
  }, [selectedDurationMs]);

  useEffect(() => {
    // auto play after a tiny delay (only on mount)
    const timeout = setTimeout(() => {
      startPlaying();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep screen awake
  useKeepAwake(componentId);

  return (
    <Box style={styles.background}>
      <BreathingAnimation
        phase={PART_ANIMATION_PHASE_MAPPING[currentPart.type]}
        phaseDurationMs={currentPart.duration}
        isPlaying={isPlaying}
        style={styles.breathingAnimation}
      />

      <Box flex={1}>
        <Box pt={120} justifyContent="center" alignItems="center">
          <Box justifyContent="center" alignItems="center">
            <TextTemplate type="h2" color={Colours.neutral.white}>
              {TRANSLATION_MAPPING[currentPart.type] ? t(TRANSLATION_MAPPING[currentPart.type]) : " "}
            </TextTemplate>
          </Box>
          <Box justifyContent="center" alignItems="center" mt={8}>
            <Content {...currentPart} isPlaying={isPlaying} />
          </Box>

          {currentPart.type !== BreathingExerciseOptionPartType.End ? (
            <Box justifyContent="center" alignItems="center" px={24} pb={48} mt={16} pt={12}>
              <Box flexDirection="row" justifyContent="center" alignItems="center">
                <BoxOption onPress={showDurationPicker} innerHeight={Style.adjust(48)}>
                  <Box justifyContent="center" flexDirection="row" alignItems="center" p={12} pl={18}>
                    <TextTemplate type="b2b">
                      {t("activity_types.meditation.short", { min: selectedDurationMinutes })}
                    </TextTemplate>
                    <ArrowIcon color={Colours.neutral.black} intent="primary" direction="down" />
                  </Box>
                </BoxOption>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>

      <Box position="absolute" bottom={24} left={0} right={0}>
        <Box justifyContent="center" alignItems="center" flex={1} mb={40}>
          <Box
            br={3}
            height={Style.adjust(6)}
            width={PROGRESS_WIDTH}
            mh={Style.adjust(24)}
            disableAutoAdjust={true}
            bg={Colours.neutral.white}
          >
            <Box
              opacity={0.8}
              br={3}
              height={Style.adjust(6)}
              disableAutoAdjust={true}
              bg={Colours.primary.p600}
              style={progressStyle}
              forceAnimated={true}
            />
          </Box>
        </Box>
        <Box justifyContent="center" alignItems="center" flex={1} mb={16}>
          {currentPart.type === BreathingExerciseOptionPartType.End ? (
            <Button translationKey="labels.cta.ok" onPress={handleClose} delay={300} />
          ) : (
            <Button
              translationKey={isPlaying ? "labels.cta.pause" : "labels.cta.resume"}
              delay={300}
              onPress={togglePlaying}
            />
          )}
        </Box>
      </Box>
      <GenericHeadingAbsolute
        logo="yulife"
        logoType="inverted"
        rightIcon="CLOSE"
        onRightIconPress={handleClose}
        color={Colours.neutral.white}
        backgroundColor="transparent"
      />
    </Box>
  );
};

export default memo(BreathingExerciseContainer);

const Content = ({ type, duration, isPlaying }: { type: string; duration?: number; isPlaying: boolean }) => {
  if (type === BreathingExerciseOptionPartType.Hold) {
    return <CountDown isPlaying={isPlaying} duration={duration} textType="b2" />;
  }

  let content = " ";

  if (type === BreathingExerciseOptionPartType.Inhale) {
    content = t("screens.breathing_exercise.nose");
  }

  if (type === BreathingExerciseOptionPartType.Exhale) {
    content = t("screens.breathing_exercise.mouth");
  }

  if (type === BreathingExerciseOptionPartType.End) {
    content = t("screens.breathing_exercise.completed_exercise");
  }

  return (
    <TextTemplate type="b2" color={Colours.neutral.white}>
      {content}
    </TextTemplate>
  );
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
    backgroundColor: FOREST_COLOUR,
  },
  breathingAnimation: {
    ...StyleSheet.absoluteFillObject,
  },
});
