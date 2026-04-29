import { memo, useMemo } from "react";
import { Box, TextTemplate } from "@atoms";
import { CalendarBicolorIcon } from "@atoms/icon/calendar-bicolor";
import { ArrowButton, TouchableOpacityWithDelay } from "@molecules";
import { Colours } from "@styles";
import { t } from "@locale";
import { PATHWAYS_GOALS_SECTION, PATHWAYS_GOALS_OPEN_HISTORY } from "@ids";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { IPathwayGoalView } from "@app/modules/pathways/types/pathway-goal.types";
import PathwayGoalRow from "./subcomponents/pathway-goal-row";

interface IPathwaysGoalsSectionProps {
  goals: IPathwayGoalView[];
  daysLeft: number;
  onToggle: (id: string) => void;
  onOpenHistory: () => void;
}

const PROGRESS_BAR_HEIGHT = 6;
const COMPLETED_COLOUR = Colours.pathways.tick;
const TRACK_COLOUR = Colours.neutral.n100;

const PathwaysGoalsSection = ({ goals, daysLeft, onToggle, onOpenHistory }: IPathwaysGoalsSectionProps) => {
  const { theme } = useTheme();
  const inProgressColour = theme.colors.primary.p600;
  const { totalCount, remainingCount, allCompleted, progressRatio } = useMemo(() => {
    const total = goals.length;
    const completed = goals.filter((g) => g.isCompleted).length;

    return {
      totalCount: total,
      remainingCount: Math.max(total - completed, 0),
      allCompleted: total > 0 && completed === total,
      progressRatio: total > 0 ? completed / total : 0,
    };
  }, [goals]);

  const progressFillColour = allCompleted ? COMPLETED_COLOUR : inProgressColour;

  return (
    <Box pv={16} ph={16} br={16} bg={Colours.neutral.white} testID={PATHWAYS_GOALS_SECTION} gap={16}>
      <TouchableOpacityWithDelay onPress={onOpenHistory} testID={PATHWAYS_GOALS_OPEN_HISTORY}>
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box flexDirection="row" alignItems="center" gap={8}>
            <CalendarBicolorIcon />
            <TextTemplate type="b2b" color={Colours.inkStrong}>
              {t("screens.pathways.goals.goals_left", { smart_count: remainingCount })}
            </TextTemplate>
          </Box>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <TextTemplate type="b2" color={Colours.inkBase}>
              {t("screens.pathways.goals.days_left", { smart_count: daysLeft })}
            </TextTemplate>
            <ArrowButton color={theme.colors.primary.p600} size={16} />
          </Box>
        </Box>
      </TouchableOpacityWithDelay>

      {totalCount > 0 ? (
        <Box h={PROGRESS_BAR_HEIGHT} br={PROGRESS_BAR_HEIGHT / 2} bg={TRACK_COLOUR} overflow="hidden">
          <Box
            h={PROGRESS_BAR_HEIGHT}
            br={PROGRESS_BAR_HEIGHT / 2}
            bg={progressFillColour}
            width={`${progressRatio * 100}%`}
          />
        </Box>
      ) : null}

      <Box gap={8}>
        {goals.map((goal) => (
          <PathwayGoalRow key={goal.id} goal={goal} onToggle={onToggle} />
        ))}
      </Box>
    </Box>
  );
};

export default memo(PathwaysGoalsSection);
