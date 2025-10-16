import { Box } from "@atoms";
import { useMemo } from "react";
import ProgressReflectItem from "./subcomponents/progress-reflect-item";
import { t } from "@locale";

interface Props {
  progress: number;
  completedToday: boolean;
}

const MAX_PROGRESS = 5;

const PathwaysReflectProgress = ({ progress, completedToday }: Props) => {
  const currentDayIndex = useMemo(() => (completedToday ? progress : progress + 1), [progress, completedToday]);

  const values = useMemo(
    () =>
      Array.from({ length: MAX_PROGRESS }).map((_, index) => ({
        label:
          index + 1 === currentDayIndex ? t("screens.pathways.today") : t("screens.pathways.day", { day: index + 1 }),
        icon: getIcon(index + 1, progress, currentDayIndex),
        isToday: isToday(index + 1, progress, completedToday),
        isDone: getDoneStatus(index + 1, progress),
      })),
    [progress, completedToday, currentDayIndex]
  );

  return (
    <Box flexDirection="row" justifyContent="space-between">
      {values.map(({ label, icon, isToday, isDone }) => (
        <ProgressReflectItem key={label} label={label} icon={icon} isToday={isToday} isDone={isDone} />
      ))}
    </Box>
  );
};

const isToday = (dayNumber: number, progress: number, completedToday: boolean) => {
  if (completedToday) {
    return dayNumber === progress;
  }

  return dayNumber === progress + 1;
};

const getDoneStatus = (dayNumber: number, progress: number) => dayNumber <= progress;

const getIcon = (dayNumber: number, progress: number, currentDayIndex: number) => {
  if (dayNumber === MAX_PROGRESS) {
    if (currentDayIndex == MAX_PROGRESS) {
      return require("@assets/icons/chest.webp");
    }

    return require("@assets/icons/chest-gray.webp");
  }

  if (dayNumber <= progress || dayNumber === currentDayIndex) {
    return require("@assets/icons/coin.webp");
  }

  return require("@assets/icons/coin-gray.webp");
};

export default PathwaysReflectProgress;
