import { memo } from "react";
import { ScrollView } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad, DebugSelector, DebugSelectorOption } from "@organisms";
import { Button } from "@molecules";
import { Box, TextTemplate } from "@atoms";
import { HealthQuestionnaireStateAction, HealthChallengeAction } from "@graphql/__generated";

const STREAK_OPTIONS: DebugSelectorOption<number>[] = [
  { label: "0", value: 0 },
  { label: "1st", value: 1 },
  { label: "2nd", value: 2 },
  { label: "3rd", value: 3 },
  { label: "4th", value: 4 },
];

const LAST_REFLECTION_OPTIONS: DebugSelectorOption<string>[] = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last week", value: "last_week" },
];

const HEALTH_QUESTIONNAIRE_OPTIONS: DebugSelectorOption<HealthQuestionnaireStateAction>[] = [
  { label: "Reset", value: HealthQuestionnaireStateAction.Reset },
  { label: "Complete", value: HealthQuestionnaireStateAction.Complete },
];

const HEALTH_CHALLENGE_OPTIONS: DebugSelectorOption<HealthChallengeAction>[] = [
  { label: "None", value: HealthChallengeAction.None },
  { label: "Award", value: HealthChallengeAction.Award },
  { label: "Clear", value: HealthChallengeAction.Clear },
];

export interface PresetOption {
  label: string;
  streak: number;
  lastReflection: string;
  healthQuestionnaire: HealthQuestionnaireStateAction;
  healthChallenge: HealthChallengeAction;
}

export const PRESET_OPTIONS: PresetOption[] = [
  {
    label: "First day",
    streak: 0,
    lastReflection: "last_week",
    healthQuestionnaire: HealthQuestionnaireStateAction.Reset,
    healthChallenge: HealthChallengeAction.Clear,
  },
  {
    label: "Last day",
    streak: 4,
    lastReflection: "yesterday",
    healthQuestionnaire: HealthQuestionnaireStateAction.Reset,
    healthChallenge: HealthChallengeAction.Clear,
  },
  {
    label: "Last day complete",
    streak: 0,
    lastReflection: "today",
    healthQuestionnaire: HealthQuestionnaireStateAction.Complete,
    healthChallenge: HealthChallengeAction.Award,
  },
];

const PRESET_SELECTABLE_OPTIONS: DebugSelectorOption<string>[] = PRESET_OPTIONS.map((preset) => ({
  label: preset.label,
  value: preset.label,
}));

export interface IPathwaysProgressScreenProps {
  currentStreak: number;
  lastReflection: string;
  healthQuestionnaire: HealthQuestionnaireStateAction;
  healthChallenge: HealthChallengeAction;
  selectedPreset: string | null;
  onStreakChange: (value: number) => void;
  onLastReflectionChange: (value: string) => void;
  onHealthQuestionnaireChange: (value: HealthQuestionnaireStateAction) => void;
  onHealthChallengeChange: (value: HealthChallengeAction) => void;
  onPresetSelect: (presetLabel: string) => void;
  onSubmit: () => void;
  onLeftIconPress: () => void;
  isLoading: boolean;
  onCompletePathwayChallenge: () => void;
  isCompleteLoading: boolean;
  isChallengeStarted: boolean;
}

const PathwaysProgressScreen = ({
  currentStreak,
  lastReflection,
  healthQuestionnaire,
  healthChallenge,
  selectedPreset,
  onStreakChange,
  onLastReflectionChange,
  onHealthQuestionnaireChange,
  onHealthChallengeChange,
  onPresetSelect,
  onSubmit,
  onLeftIconPress,
  isLoading,
  onCompletePathwayChallenge,
  isCompleteLoading,
  isChallengeStarted,
}: IPathwaysProgressScreenProps) => {
  return (
    <Box flex={1} bg={Colours.neutral.n50}>
      <GenericHeadingPad />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Box p={20}>
          <Box gap={10}>
            <TextTemplate type="h3">Pathways</TextTemplate>
            <DebugSelector
              options={PRESET_SELECTABLE_OPTIONS}
              selectedValue={selectedPreset}
              onSelect={onPresetSelect}
            />
          </Box>

          <Box bg="rgba(0,0,0,.04)" p={16} br={8} gap={30} mt={30}>
            <DebugSelector
              label="Current Streak Day"
              options={STREAK_OPTIONS}
              selectedValue={currentStreak}
              onSelect={onStreakChange}
            />

            <DebugSelector
              label="Last Reflection Date"
              options={LAST_REFLECTION_OPTIONS}
              selectedValue={lastReflection}
              onSelect={onLastReflectionChange}
            />

            <DebugSelector
              label="Health Questionnaire State"
              options={HEALTH_QUESTIONNAIRE_OPTIONS}
              selectedValue={healthQuestionnaire}
              onSelect={onHealthQuestionnaireChange}
            />

            <DebugSelector
              label="Health Quest"
              options={HEALTH_CHALLENGE_OPTIONS}
              selectedValue={healthChallenge}
              onSelect={onHealthChallengeChange}
            />
          </Box>

          <Box mt={20} w="100%" gap={10}>
            <Button testID="save" size="Large" onPress={onSubmit} translatedLabel="Save" disabled={isLoading} />
            <Button
              testID="complete-pathway-challenge"
              size="Large"
              onPress={onCompletePathwayChallenge}
              translatedLabel="Complete Pathway Challenge"
              disabled={isCompleteLoading || !isChallengeStarted}
            />
          </Box>
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onLeftIconPress} />
    </Box>
  );
};

export default memo(PathwaysProgressScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Style.adjust(40),
  },
});
