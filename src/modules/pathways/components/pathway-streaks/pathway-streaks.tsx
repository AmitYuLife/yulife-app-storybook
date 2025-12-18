import React, { memo, useMemo } from "react";
import { Box } from "@atoms";
import PathwayStreakItem from "./pathway-streak-item";
import { PATHWAYS_STREAKS } from "@ids";

interface IDayItem {
  day: number;
  completed: boolean;
  isToday: boolean;
  isChest: boolean;
}

interface Props {
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
}: Props) => {
  const days = useMemo(
    () => buildDays({ currentStreak, reflectedToday, maxProgress }),
    [currentStreak, reflectedToday, maxProgress]
  );

  return (
    <Box w="100%" gap={24} flexDirection="row" justifyContent="center" alignItems="center" testID={PATHWAYS_STREAKS}>
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
    completed: getCompleted({ reflectedToday, currentStreak, index }),
    isToday: currentStreak === index + (reflectedToday ? 1 : 0),
    isChest: maxProgress === index + 1,
  }));
};

const getCompleted = ({
  reflectedToday,
  currentStreak,
  index,
}: {
  reflectedToday: boolean;
  currentStreak: number;
  index: number;
}) => {
  if (reflectedToday && currentStreak === 0) {
    return true;
  }

  return index < currentStreak;
};
