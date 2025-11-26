import React, { memo, useMemo } from "react";
import { Box, SkeletonLoading } from "@atoms";
import PathwayStreakItem from "./pathway-streak-item";

interface IDayItem {
  day: number;
  completed: boolean;
  isToday: boolean;
  isChest: boolean;
  isActive: boolean;
}

interface Props {
  reflectedToday: boolean;
  currentStreak: number;
  maxProgress: number;
  streakAwardId?: string;
  isLoading: boolean;
}

const PathwayStreaks = ({ currentStreak, reflectedToday, maxProgress, streakAwardId, isLoading }: Props) => {
  const days = useMemo(
    () => buildDays({ currentStreak, reflectedToday, maxProgress, streakAwardId }),
    [currentStreak, reflectedToday, maxProgress]
  );

  if (isLoading) {
    return (
      <Box w="100%" gap={24} br={12} flexDirection="row" justifyContent="center" alignItems="center">
        {days.map((val) => (
          <SkeletonLoading key={`day-${val.day || "today"}`} height={64} width={44} />
        ))}
      </Box>
    );
  }

  return (
    <Box w="100%" gap={24} br={12} flexDirection="row" justifyContent="center" alignItems="center">
      {days.map((item, index) => (
        <PathwayStreakItem key={`day-${item.day || "today"}-${index}`} {...item} />
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
    isActive: getIsActive({ streakAwardId, currentStreak, reflectedToday, index }),
  }));
};

const getIsActive = ({
  streakAwardId,
  currentStreak,
  reflectedToday,
  index,
}: {
  streakAwardId: string;
  currentStreak: number;
  reflectedToday: boolean;
  index: number;
}) => {
  if (streakAwardId) {
    return true;
  }

  if (reflectedToday) {
    return index < currentStreak;
  }

  return index <= currentStreak;
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
