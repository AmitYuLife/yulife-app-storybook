import { Box, TextTemplate } from "@atoms";
import { memo, useCallback, useRef } from "react";
import { Button } from "@molecules";
import { Colours } from "@styles";
import { FlashList } from "@shopify/flash-list";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { t } from "@locale";
import { Alert, Platform } from "react-native";
import { IPedometerHistoryEntry } from "@redux/debug/debug.types";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";

type Props = {
  initialDailySteps: number;
  currentPedometerSteps: number;
  progressCalculation: number;
  healthProvider: string;
  historySteps: IPedometerHistoryEntry[];
  startDateTime: string;
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
  startDateTime,
}: Props) => {
  const flashListRef = useRef<FlashList<IPedometerHistoryEntry>>(null);
  const dispatch = useDispatch();

  const [submitChallengeDebugData, { loading }] = useMutation(gql("SubmitChallengeDebugDataDocument"));

  const onExportDataPress = useCallback(async () => {
    const reducedHistorySteps = (historySteps || []).reverse().reduce(
      (acc, item) => {
        acc.historySteps.push(item.steps);
        acc.stepsBeforeSubscribe.push(item.stepsBeforeSubscribe);
        return acc;
      },
      { historySteps: [], stepsBeforeSubscribe: [] }
    );

    await submitChallengeDebugData({
      variables: {
        debugData: {
          startDateTime,
          healthProviderEntries: Platform.select({ ios: [], android: reducedHistorySteps.stepsBeforeSubscribe }),
          pedometerEntries: reducedHistorySteps.historySteps,
        },
      },
    });

    dispatch(
      logMixpanelEventActionCreator("challenge_progress_debug_tools", {
        initialDailySteps: initialDailySteps || 0,
        currentPedometerSteps: currentPedometerSteps || 0,
        progressCalculation: progressCalculation || 0,
        healthProvider,
        historySteps: reducedHistorySteps.historySteps,
        stepsBeforeSubscribe: Platform.select({ ios: [], android: reducedHistorySteps.stepsBeforeSubscribe }),
      })
    );

    Alert.alert(t("success"));
  }, [
    dispatch,
    initialDailySteps,
    currentPedometerSteps,
    progressCalculation,
    healthProvider,
    historySteps,
    startDateTime,
    submitChallengeDebugData,
  ]);

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
      <Button
        translationKey="screens.challenge_progress.debug_info.cta"
        size={"Small"}
        onPress={onExportDataPress}
        disabled={loading}
        isLoading={loading}
      />
    </Box>
  );
};

export default memo(ChallengeProgressDebugInfo);
