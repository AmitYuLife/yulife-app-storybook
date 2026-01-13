import { memo, useCallback, useState } from "react";
import { Alert, Keyboard } from "react-native";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { DATE_FORMAT } from "@utils";
import { useMutation } from "@apollo/client";
import { gql, HealthQuestionnaireStateAction, HealthChallengeAction } from "@graphql/__generated";
import moment from "moment";
import PathwaysProgressScreen, {
  PRESET_OPTIONS,
} from "@components/screens/member/debug/pathways-progress/pathways-progress.screen";

const getLastReflectionDate = (option: string): string => {
  switch (option) {
    case "today":
      return moment().format(DATE_FORMAT);
    case "yesterday":
      return moment().subtract(1, "day").format(DATE_FORMAT);
    case "last_week":
      return moment().subtract(1, "week").format(DATE_FORMAT);
    default:
      return moment().format(DATE_FORMAT);
  }
};

const PathwaysProgressContainer = () => {
  const [setUserPathwayProgress, { loading }] = useMutation(gql("SetUserPathwayProgressDocument"));

  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastReflection, setLastReflection] = useState("today");
  const [healthChallenge, setHealthChallenge] = useState<HealthChallengeAction>(HealthChallengeAction.Clear);
  const [healthQuestionnaire, setHealthQuestionnaire] = useState<HealthQuestionnaireStateAction>(
    HealthQuestionnaireStateAction.Reset
  );
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const onLeftIconPress = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.debug);
  }, []);

  const onPresetSelect = useCallback((presetLabel: string) => {
    const preset = PRESET_OPTIONS.find((p) => p.label === presetLabel);
    if (preset) {
      setSelectedPreset(presetLabel);
      setCurrentStreak(preset.streak);
      setLastReflection(preset.lastReflection);
      setHealthQuestionnaire(preset.healthQuestionnaire);
      setHealthChallenge(preset.healthChallenge);
    }
  }, []);

  const handleStreakChange = useCallback((value: number) => {
    setSelectedPreset(null);
    setCurrentStreak(value);
  }, []);

  const handleLastReflectionChange = useCallback((value: string) => {
    setSelectedPreset(null);
    setLastReflection(value);
  }, []);

  const handleHealthQuestionnaireChange = useCallback((value: HealthQuestionnaireStateAction) => {
    setSelectedPreset(null);
    setHealthQuestionnaire(value);
  }, []);

  const handleHealthChallengeChange = useCallback((value: HealthChallengeAction) => {
    setSelectedPreset(null);
    setHealthChallenge(value);
  }, []);

  const onSubmit = useCallback(async () => {
    Keyboard.dismiss();
    try {
      await setUserPathwayProgress({
        variables: {
          currentStreak,
          lastReflectionDate: getLastReflectionDate(lastReflection),
          healthQuestionnaireState: healthQuestionnaire,
          healthChallenge,
        },
        refetchQueries: [{ query: gql("GetUserPathwaysDocument") }],
      });
      Alert.alert("Success", "Pathway progress updated");
    } catch (error) {
      Alert.alert("Error", "Failed to update pathway progress");
    }
  }, [currentStreak, lastReflection, healthQuestionnaire, healthChallenge, setUserPathwayProgress]);

  return (
    <PathwaysProgressScreen
      onSubmit={onSubmit}
      isLoading={loading}
      currentStreak={currentStreak}
      lastReflection={lastReflection}
      selectedPreset={selectedPreset}
      onPresetSelect={onPresetSelect}
      healthChallenge={healthChallenge}
      onStreakChange={handleStreakChange}
      onLeftIconPress={onLeftIconPress}
      healthQuestionnaire={healthQuestionnaire}
      onLastReflectionChange={handleLastReflectionChange}
      onHealthChallengeChange={handleHealthChallengeChange}
      onHealthQuestionnaireChange={handleHealthQuestionnaireChange}
    />
  );
};

export default memo(PathwaysProgressContainer);
