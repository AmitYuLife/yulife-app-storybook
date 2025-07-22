import { Box, TextTemplate } from "@atoms";
import { memo, useCallback, useRef } from "react";
import { Button } from "@molecules";
import { Colours } from "@styles";
import { FlashList } from "@shopify/flash-list";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { t } from "@locale";
import { Alert } from "react-native";
import { IPedometerHistoryEntry } from "@redux/debug/debug.types";

type Props = {
  initialDailySteps: number;
  currentPedometerSteps: number;
  progressCalculation: number;
  healthProvider: string;
  historySteps: IPedometerHistoryEntry[];
};

const keyExtractor = (item: IPedometerHistoryEntry, index: number) => `${index}-${item.steps.toString()}`;

const renderItem = ({ item }: { item: IPedometerHistoryEntry }) => (
  <TextTemplate type="l1b">{t("smart_count.steps", { smart_count: item.steps })}</TextTemplate>
);

const ChallengeProgressDebugInfo = ({
  initialDailySteps,
  currentPedometerSteps,
  progressCalculation,
  healthProvider,
  historySteps,
}: Props) => {
  const flashListRef = useRef<FlashList<IPedometerHistoryEntry>>();
  const dispatch = useDispatch();

  const onExportDataPress = useCallback(() => {
    const reducedHistorySteps = (historySteps || []).reverse().reduce(
      (acc, item) => {
        acc.historySteps.push(item.steps);
        acc.stepsBeforeSubscribe.push(item.stepsBeforeSubscribe);
        return acc;
      },
      { historySteps: [], stepsBeforeSubscribe: [] }
    );

    dispatch(
      logMixpanelEventActionCreator("challenge_progress_debug_tools", {
        initialDailySteps: initialDailySteps || 0,
        currentPedometerSteps: currentPedometerSteps || 0,
        progressCalculation: progressCalculation || 0,
        healthProvider,
        historySteps: reducedHistorySteps.historySteps,
        stepsBeforeSubscribe: reducedHistorySteps.stepsBeforeSubscribe,
      })
    );

    Alert.alert(t("success"));
  }, [dispatch, initialDailySteps, currentPedometerSteps, progressCalculation, healthProvider, historySteps]);

  return (
    <Box width={250} bg={"white"} br={10} p={10} gap={5}>
      <TextTemplate type="l1b">
        {t("screens.challenge_progress.debug_info.initial_steps", { healthProvider, steps: initialDailySteps })}
      </TextTemplate>
      <TextTemplate type="l1b">
        {t("screens.challenge_progress.debug_info.current_pedometer_steps", { steps: currentPedometerSteps || 0 })}
      </TextTemplate>
      <TextTemplate type="l1b" color={progressCalculation < 0 ? "red" : Colours.neutral.n800}>
        {t("screens.challenge_progress.debug_info.progress", { progress: progressCalculation || 0 })}
      </TextTemplate>
      <TextTemplate type="l1b">{t("screens.challenge_progress.debug_info.history_steps")}</TextTemplate>
      <Box width={230} height={94} mb={8} bg="#FAFAFE" px={8} py={2} br={8} borderColor={"#E3E3E1"} borderWidth={1}>
        <FlashList
          ref={flashListRef}
          data={historySteps}
          keyExtractor={keyExtractor}
          estimatedItemSize={18}
          renderItem={renderItem}
        />
      </Box>
      <Button translationKey="screens.challenge_progress.debug_info.cta" size={"Small"} onPress={onExportDataPress} />
    </Box>
  );
};

export default memo(ChallengeProgressDebugInfo);
