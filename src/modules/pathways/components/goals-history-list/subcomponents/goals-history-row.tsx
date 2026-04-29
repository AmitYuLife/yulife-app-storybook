import { memo } from "react";
import { Box, Image, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { PATHWAYS_GOAL_HISTORY_ROW } from "@ids";

export interface IGoalHistoryItem {
  id: string;
  title: string;
  iconUrl: string;
  completedCount: number;
}

interface IGoalsHistoryRowProps {
  item: IGoalHistoryItem;
  hasTopBorder: boolean;
}

const GoalsHistoryRow = ({ item, hasTopBorder }: IGoalsHistoryRowProps) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap={12}
      pv={12}
      borderTopWidth={hasTopBorder ? 1 : 0}
      borderColor={Colours.neutral.n200}
      testID={PATHWAYS_GOAL_HISTORY_ROW(item.id)}
    >
      <Image source={{ uri: item.iconUrl }} width={24} height={24} contentFit="contain" />
      <Box flex={1}>
        <TextTemplate type="b2" color={Colours.inkStrong}>
          {item.title}
        </TextTemplate>
      </Box>
      <TextTemplate type="b2b" color={Colours.inkBase}>
        {item.completedCount}
      </TextTemplate>
    </Box>
  );
};

export default memo(GoalsHistoryRow);
