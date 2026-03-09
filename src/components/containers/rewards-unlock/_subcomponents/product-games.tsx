import { Box, TextTemplate } from "@atoms";
import { HealthAppIcon } from "@atoms/icon/health-app-icon";
import { Colours } from "@styles";
import { ComponentProps, memo } from "react";
import { ProductGameItem } from "./product-game-item";

type Props = {
  title: string;
  description: string;
  games: Array<ComponentProps<typeof ProductGameItem>>;
};

const ProductGames = ({ title, description, games }: Props) => {
  return (
    <>
      <Box pt={24} pl={24} pr={24} mb={12} flexDirection="row" alignItems="center">
        <Box mr={8}>
          <HealthAppIcon />
        </Box>
        <TextTemplate type="b1b" color={Colours.neutral.n900}>
          {title}
        </TextTemplate>
      </Box>
      <Box pl={24} pr={24} mb={24}>
        <TextTemplate type="b2" color={Colours.neutral.n900}>
          {description}
        </TextTemplate>
      </Box>
      {games.map((game, index) => (
        <ProductGameItem key={game.id} {...game} index={index} />
      ))}
    </>
  );
};

export default memo(ProductGames);
