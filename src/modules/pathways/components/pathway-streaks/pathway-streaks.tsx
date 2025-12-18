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
  streakAwardId?: string;
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
  streakAwardId,
  textColor,
  completedBorderColor,
  notCompletedBorderColor,
  notCompletedColor,
  notCompletedChestForegroundColor,
  notCompletedChestBackgroundColor,
}: Props) => {
  const days = useMemo(
    () => buildDays({ currentStreak, reflectedToday, maxProgress, streakAwardId }),
    [currentStreak, reflectedToday, maxProgress, streakAwardId]
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
  streakAwardId,
}: {
  currentStreak: number;
  reflectedToday: boolean;
  maxProgress: number;
  streakAwardId: string;
}): IDayItem[] => {
  return Array.from({ length: maxProgress }, (_, index) => ({
    day: index + 1,
    completed: getCompleted({ streakAwardId, reflectedToday, currentStreak, index }),
    isToday: currentStreak === index + (reflectedToday ? 1 : 0),
    isChest: maxProgress === index + 1,
  }));
};

const getCompleted = ({
  streakAwardId,
  currentStreak,
  index,
}: {
  streakAwardId: string;
  reflectedToday: boolean;
  currentStreak: number;
  index: number;
}) => {
  if (streakAwardId) {
    return true;
  }

  return index < currentStreak;
};
