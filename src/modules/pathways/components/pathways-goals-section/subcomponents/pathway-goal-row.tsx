import { memo, useCallback } from "react";
import { Box, Image, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { Pressable } from "@molecules";
import { CheckBoxType } from "@components/molecules/check-box/check-box-type";
import { PATHWAYS_GOAL_ROW, PATHWAYS_GOAL_ROW_CHECKBOX } from "@ids";
import { PathwayGoal } from "@graphql/__generated/graphql";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface IPathwayGoalRowProps {
  goal: PathwayGoal;
  onComplete: (id: string) => void;
  isCompletingGoal: boolean;
}

const PathwayGoalRow = ({ goal, onComplete, isCompletingGoal }: IPathwayGoalRowProps) => {
  const { id, title, icon, isCompleted } = goal;
  const { theme } = useTheme();

  const handlePress = useCallback(() => {
    if (isCompleted) {
      return;
    }

    onComplete(id);
  }, [id, isCompleted, onComplete]);

  return (
    <Pressable
      onPress={handlePress}
      disabled={isCompletingGoal}
      enableAnimation={!isCompleted}
      pressedTranslation={1}
      flexDirection="row"
      alignItems="center"
      pv={12}
      ph={12}
      br={12}
      withBorder={Colours.neutral.n200}
      gap={12}
      testID={PATHWAYS_GOAL_ROW(id)}
    >
      {icon?.uri ? <Image source={{ uri: icon.uri }} width={24} height={24} contentFit="contain" /> : null}
      <Box flex={1}>
        <TextTemplate type="b2" color={Colours.inkStrong}>
          {title}
        </TextTemplate>
      </Box>
      <CheckBoxType
        type="cubic"
        checked={isCompleted}
        strokeColor={Colours.neutral.n250}
        activeCheckboxFillColor={theme.colors.primary.p600}
        testID={PATHWAYS_GOAL_ROW_CHECKBOX(id, isCompleted)}
      />
    </Pressable>
  );
};

export default memo(PathwayGoalRow);
