import { CalendarNudgeIcon } from "@atoms/icon/nudge/calendar";
import { ChestNudgeIcon } from "@atoms/icon/nudge/chest";
import { HealthQuestionnareNudgeIcon } from "@atoms/icon/nudge/health-questionnaire";
import { MoodMonitorNudgeIcon } from "@atoms/icon/nudge/mood-monitor";
import { PassiveCyclingNudgeIcon } from "@atoms/icon/nudge/passive-cycling";
import { PassiveMeditationNudgeIcon } from "@atoms/icon/nudge/passive-meditation";
import { PassiveRunningNudgeIcon } from "@atoms/icon/nudge/passive-running";
import { WeeklyGoalNudgeIcon } from "@atoms/icon/nudge/weekly-goal";
import { Style } from "@styles";
import { StyleSheet, View } from "react-native";

const TYPE_IMAGE_MAP = {
  active_streak: CalendarNudgeIcon,
  active_chest: ChestNudgeIcon,
  active_challenge: CalendarNudgeIcon,
  passive_cycling: PassiveCyclingNudgeIcon,
  passive_meditation: PassiveMeditationNudgeIcon,
  passive_steps: PassiveRunningNudgeIcon,
  extras_health: HealthQuestionnareNudgeIcon,
  extras_mood: MoodMonitorNudgeIcon,
  extras_weekly: WeeklyGoalNudgeIcon,
} as Record<string, React.FC>;

export const mapTypeToImage = (type: string) => {
  const Component = TYPE_IMAGE_MAP[type] || View;

  return <Component style={styles.wrapper} />;
};

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(66),
    width: Style.adjust(66),
  },
});
