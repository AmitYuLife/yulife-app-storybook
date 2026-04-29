import { memo } from "react";
import { Box } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { TextTemplate } from "@atoms/text/text-template";
import { Colours } from "@styles";
import GoalsHistoryRow, { IGoalHistoryItem } from "./goals-history-row";

export interface IGoalHistorySection {
  id: string;
  label: string;
  items: IGoalHistoryItem[];
}

interface IGoalsHistorySectionProps extends IBoxProps {
  section: IGoalHistorySection;
}

const GoalsHistorySection = ({ section, ...boxProps }: IGoalsHistorySectionProps) => {
  return (
    <Box ph={16} gap={12} {...boxProps}>
      <TextTemplate type="b1b" color={Colours.inkStrong}>
        {section.label}
      </TextTemplate>
      <Box bg={Colours.neutral.white} br={16} ph={16}>
        {section.items.map((item, idx) => (
          <GoalsHistoryRow key={item.id} item={item} hasTopBorder={idx > 0} />
        ))}
      </Box>
    </Box>
  );
};

export default memo(GoalsHistorySection);
