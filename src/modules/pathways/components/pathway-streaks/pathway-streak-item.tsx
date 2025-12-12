import { t } from "@locale";
import { Box, TextTemplate, Image } from "@atoms";
import { Colours } from "@styles";
import Icon from "@components/atoms/icon";

interface IProps {
  day: number;
  completed: boolean;
  isToday: boolean;
  isChest: boolean;
  isActive: boolean;
}

const COIN_SIZE = 26;
const ICON_SIZE = 16;

const PathwayStreakItem = ({ day, completed, isToday, isChest, isActive }: IProps) => {
  const label = isToday ? t("screens.pathways.today") : t("screens.pathways.day", { day });

  const image = isActive ? require("./active-yucoin.png") : require("./inactive-yucoin.png");

  return (
    <Box alignItems="center" gap={4}>
      <TextTemplate type={isToday ? "b2b" : "b2"} color={Colours.neutral.white} textAlign="center">
        {label}
      </TextTemplate>

      <Box position="relative" alignItems="center" justifyContent="center">
        {isChest ? (
          <Box size={COIN_SIZE} alignItems="center" justifyContent="center">
            <Icon.ChestIcon size={COIN_SIZE} active={isActive} />
          </Box>
        ) : (
          <Image source={image} width={COIN_SIZE} height={COIN_SIZE} />
        )}

        {completed ? (
          <Box
            position="absolute"
            bottom={-8}
            size={ICON_SIZE}
            bg={"#258DFF"}
            br={ICON_SIZE / 2}
            alignItems="center"
            justifyContent="center"
          >
            <Icon.SuccessIcon size={ICON_SIZE} checked={true} colour="#00D68F" />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default PathwayStreakItem;
