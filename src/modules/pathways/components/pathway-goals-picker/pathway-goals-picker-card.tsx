import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { SecondaryButton } from "@molecules";
import { Colours } from "@styles";
import { PATHWAY_GOALS_PICKER_ACCEPT, PATHWAY_GOALS_PICKER_CARD, PATHWAY_GOALS_PICKER_SKIP } from "@ids";
import {
  getPathwayGoalCardColors,
  IPathwayGoalsPickerOption,
  PathwayGoalsPickerChoice,
} from "../../types/pathway-goals-picker.types";

interface IPathwayGoalsPickerCardProps {
  goal: IPathwayGoalsPickerOption;
  index: number;
  upcomingCount: number;
  choice: PathwayGoalsPickerChoice | undefined;
  canAccept: boolean;
  onAccept: () => void;
  onSkip: () => void;
}

const STACK_PEEK_STEP = 10;

const PathwayGoalsPickerCard = ({
  goal,
  index,
  upcomingCount,
  choice,
  canAccept,
  onAccept,
  onSkip,
}: IPathwayGoalsPickerCardProps) => {
  const { background } = getPathwayGoalCardColors(index);

  const isAccepted = choice === PathwayGoalsPickerChoice.Accept;
  const isSkipped = choice === PathwayGoalsPickerChoice.Skip;
  const mutedWhite = "rgba(255, 255, 255, 0.4)";

  return (
    <Box px={24} pt={8} pb={24} testID={PATHWAY_GOALS_PICKER_CARD(goal.id)}>
      <Box position="relative">
        {Array.from({ length: upcomingCount })
          .map((_, i) => upcomingCount - 1 - i)
          .map((i) => {
            const colors = getPathwayGoalCardColors(index + i + 1);
            const peek = STACK_PEEK_STEP * (i + 1);
            return (
              <Box
                key={`ghost-${i}`}
                position="absolute"
                top={peek}
                left={0}
                right={0}
                bottom={-peek}
                br={16}
                bg={colors.background}
              />
            );
          })}
        <Box br={16} bg={background} p={16} gap={16}>
          <Box pt={8} minHeight={140}>
            <TextTemplate type="b1b" color={Colours.neutral.white}>
              {goal.title}
            </TextTemplate>
          </Box>
          <Box flexDirection="row" gap={16}>
            <Box flex={1}>
              <SecondaryButton
                testID={PATHWAY_GOALS_PICKER_SKIP}
                translationKey="screens.pathways.goals_picker.cta.skip"
                onPress={onSkip}
                delay={0}
                size="Fill"
                borderColor={isSkipped ? mutedWhite : Colours.neutral.white}
                textColor={isSkipped ? mutedWhite : Colours.neutral.white}
                backgroundColor={background}
              />
            </Box>
            <Box flex={1}>
              <SecondaryButton
                testID={PATHWAY_GOALS_PICKER_ACCEPT}
                translationKey="screens.pathways.goals_picker.cta.accept"
                onPress={onAccept}
                disabled={!canAccept}
                delay={0}
                size="Fill"
                borderColor={isAccepted ? mutedWhite : Colours.neutral.white}
                textColor={isAccepted ? mutedWhite : Colours.neutral.white}
                backgroundColor={background}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(PathwayGoalsPickerCard);
