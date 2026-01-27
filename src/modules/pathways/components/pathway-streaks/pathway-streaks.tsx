import React, { memo, useMemo } from "react";
import { Box } from "@atoms";
import PathwayStreakItem from "./pathway-streak-item";
import { PATHWAYS_STREAKS } from "@ids";
import { isPathwaysDayCompleted } from "../../utils/pathways.util";
import { LayoutChangeEvent } from "react-native";
import { IBoxProps } from "@atoms/box/box.types";

interface IDayItem {
  day: number;
  completed: boolean;
  isToday: boolean;
  isChest: boolean;
}

interface Props extends IBoxProps {
  onLayout?: (event: LayoutChangeEvent) => void;
  reflectedToday: boolean;
  currentStreak: number;
  maxProgress: number;
  textColor: string;
  completedBorderColor: string | null;
  notCompletedBorderColor: string | null;
  notCompletedColor: string;
  notCompletedChestForegroundColor: string;
  notCompletedChestBackgroundColor: string;
}

const PathwayStreaks = ({
  currentStreak,
  reflectedToday,
  maxProgress,
  textColor,
  completedBorderColor,
  notCompletedBorderColor,
  notCompletedColor,
  notCompletedChestForegroundColor,
  notCompletedChestBackgroundColor,
  ...boxProps
}: Props) => {
  const days = useMemo(
    () => buildDays({ currentStreak, reflectedToday, maxProgress }),
    [currentStreak, reflectedToday, maxProgress]
  );

  return (
    <Box
      w="100%"
      gap={24}
      pb={12}
      mt={-8}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      testID={PATHWAYS_STREAKS}
      {...boxProps}
    >
      {days.map((item, index) => (
        <PathwayStreakItem
          key={`day-${item.day || "today"}-${index}`}
          {...item}
          textColor={textColor}
          completedBorderColor={completedBorderColor}
          notCompletedBorderColor={notCompletedBorderColor}
          notCompletedColor={notCompletedColor}
          notCompletedChestForegroundColor={notCompletedChestForegroundColor}
          notCompletedChestBackgroundColor={notCompletedChestBackgroundColor}
        />
      ))}
    </Box>
  );
};

export default memo(PathwayStreaks);

const buildDays = ({
  currentStreak,
  reflectedToday,
  maxProgress,
}: {
  currentStreak: number;
  reflectedToday: boolean;
  maxProgress: number;
}): IDayItem[] => {
  return Array.from({ length: maxProgress }, (_, index) => ({
    day: index + 1,
    completed: isPathwaysDayCompleted({ reflectedToday, currentStreak, index }),
    isToday: currentStreak === index + (reflectedToday ? 1 : 0),
    isChest: maxProgress === index + 1,
  }));
};
