import { t } from "@locale";
import { Box, TextTemplate, Image } from "@atoms";
import { Colours } from "@styles";
import Icon from "@components/atoms/icon";
import { useMemo } from "react";
import colours from "@styles/colours";

interface IProps {
  day: number;
  completed: boolean;
  isToday: boolean;
  isChest: boolean;
  isActive: boolean;
  textColor?: string;
  showCoin?: boolean;
}

const COIN_SIZE = 26;
const ICON_SIZE = 16;
const LARGE_ICON_SIZE = 28;
const LARGE_CHEST_ICON_SIZE = 32;

const PathwayStreakItem = ({ day, completed, isToday, isChest, isActive, textColor, showCoin = true }: IProps) => {
  const label = isToday ? t("screens.pathways.today") : t("screens.pathways.day", { day });

  const image = isActive ? require("./active-yucoin.png") : require("./inactive-yucoin.png");

  const icon = useMemo(() => {
    if (showCoin && !isChest) {
      return <Image source={image} width={COIN_SIZE} height={COIN_SIZE} />;
    }

    if (showCoin && isChest) {
      return (
        <Box size={COIN_SIZE} alignItems="center" justifyContent="center">
          <Icon.ChestIcon size={COIN_SIZE} active={isActive} />
        </Box>
      );
    }

    if (!showCoin && isChest) {
      return <Icon.ChestIcon size={LARGE_CHEST_ICON_SIZE} active={isActive} />;
    }

    if (!showCoin && !isChest && isActive) {
      return <Icon.SuccessIcon size={LARGE_ICON_SIZE} checked={true} colour={colours.pathways.tick} />;
    }

    return (
      <Box
        size={LARGE_ICON_SIZE}
        alignItems="center"
        justifyContent="center"
        borderWidth={1}
        br={100}
        borderColor={colours.pathways.streak_border}
        bg={colours.pathways.streak_background}
      />
    );
  }, [showCoin, isChest, image, isActive]);

  return (
    <Box alignItems="center" gap={5}>
      <TextTemplate type={isToday ? "b2b" : "b2"} color={textColor ?? Colours.neutral.white} textAlign="center">
        {label}
      </TextTemplate>

      <Box position="relative" alignItems="center" justifyContent="center">
        {icon}

        {completed && showCoin ? (
          <Box
            position="absolute"
            bottom={-8}
            size={ICON_SIZE}
            br={ICON_SIZE / 2}
            alignItems="center"
            justifyContent="center"
          >
            <Icon.SuccessIcon size={ICON_SIZE} checked={true} colour={colours.pathways.tick} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default PathwayStreakItem;
