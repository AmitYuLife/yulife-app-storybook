import { t } from "@locale";
import { Box, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import Icon from "@components/atoms/icon";
import { useMemo } from "react";

interface IProps {
  day: number;
  completed: boolean;
  isToday: boolean;
  isChest: boolean;
  textColor: string;
  completedBorderColor: string | null;
  notCompletedBorderColor: string | null;
  notCompletedColor: string;
  notCompletedChestForegroundColor: string;
  notCompletedChestBackgroundColor: string;
}

const CHECK_SIZE = 26;
const CHEST_SIZE = 32;

const PathwayStreakItem = ({
  day,
  completed,
  isToday,
  isChest,
  textColor,
  completedBorderColor,
  notCompletedBorderColor,
  notCompletedColor,
  notCompletedChestForegroundColor,
  notCompletedChestBackgroundColor,
}: IProps) => {
  const label = isToday ? t("screens.pathways.today") : t("screens.pathways.day", { day });

  const icon = useMemo(() => {
    if (isChest) {
      return (
        <Box size={CHEST_SIZE} br={CHEST_SIZE / 2} alignItems="center" justifyContent="center">
          <Icon.HealthChestIcon
            size={CHEST_SIZE}
            active={completed}
            inactiveForegroundColor={notCompletedChestForegroundColor}
            inactiveBackgroundColor={notCompletedChestBackgroundColor}
          />
        </Box>
      );
    }

    const hasBorder = !!(completed ? completedBorderColor : notCompletedBorderColor);

    return (
      <Box
        size={CHECK_SIZE}
        br={CHECK_SIZE / 2}
        alignItems="center"
        justifyContent="center"
        borderColor={completed ? completedBorderColor : notCompletedBorderColor}
        borderWidth={hasBorder ? 1 : 0}
        bg={notCompletedColor}
      >
        {completed ? <Icon.SuccessIcon size={CHECK_SIZE} checked={true} colour="#00D68F" /> : null}
      </Box>
    );
  }, [
    isChest,
    completed,
    completedBorderColor,
    notCompletedBorderColor,
    notCompletedColor,
    notCompletedChestForegroundColor,
    notCompletedChestBackgroundColor,
  ]);

  return (
    <Box alignItems="center" gap={8}>
      <TextTemplate type={isToday ? "b2b" : "b2"} color={textColor ?? Colours.neutral.white} textAlign="center">
        {label}
      </TextTemplate>

      <Box position="relative" size={CHEST_SIZE} alignItems="center" justifyContent="center">
        <Box position="absolute" alignItems="center" justifyContent="center">
          {icon}
        </Box>
      </Box>
    </Box>
  );
};

export default PathwayStreakItem;
