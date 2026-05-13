import { memo } from "react";
import { Box, Image, TextTemplate } from "@atoms";
import { SecondaryButton } from "@molecules";
import { Colours } from "@styles";
import { PATHWAY_GOALS_PICKER_ACCEPT, PATHWAY_GOALS_PICKER_CARD, PATHWAY_GOALS_PICKER_SKIP } from "@ids";
import { IPathwayGoalsPickerOption, PathwayGoalsPickerChoice } from "../../types/pathway-goals-picker.types";

interface IPathwayGoalsPickerCardProps {
  goal: IPathwayGoalsPickerOption;
  upcomingGoals: IPathwayGoalsPickerOption[];
  choice: PathwayGoalsPickerChoice | undefined;
  canAccept: boolean;
  onAccept: () => void;
  onSkip: () => void;
}

const STACK_PEEK_STEP = 10;
const ICON_SIZE = 120;

const PathwayGoalsPickerCard = ({
  goal,
  upcomingGoals,
  choice,
  canAccept,
  onAccept,
  onSkip,
}: IPathwayGoalsPickerCardProps) => {
  const background = goal.color;

  const isAccepted = choice === PathwayGoalsPickerChoice.Accept;
  const isSkipped = choice === PathwayGoalsPickerChoice.Skip;
  const mutedWhite = "rgba(255, 255, 255, 0.4)";

  return (
    <Box px={24} pt={8} pb={24} testID={PATHWAY_GOALS_PICKER_CARD(goal.id)}>
      <Box position="relative">
        {upcomingGoals
          .map((upcoming, i) => ({ upcoming, i }))
          .reverse()
          .map(({ upcoming, i }) => {
            const peek = STACK_PEEK_STEP * (i + 1);
            return (
              <Box
                key={`ghost-${upcoming.id}`}
                position="absolute"
                top={peek}
                left={0}
                right={0}
                bottom={-peek}
                br={16}
                bg={upcoming.color}
              />
            );
          })}
        <Box br={16} bg={background} p={16} gap={16} minHeight={320}>
          <Box gap={4}>
            <TextTemplate type="l2b" color={Colours.neutral.white}>
              {goal.category.toUpperCase()}
            </TextTemplate>
            <TextTemplate type="b1b" color={Colours.neutral.white}>
              {goal.title}
            </TextTemplate>
          </Box>
          <Box flex={1} alignItems="center" justifyContent="center">
            {goal.largeIcon.uri ? (
              <Image source={{ uri: goal.largeIcon.uri }} width={ICON_SIZE} height={ICON_SIZE} contentFit="contain" />
            ) : null}
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
