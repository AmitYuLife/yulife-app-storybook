import { ComponentProps, memo } from "react";
import { ProductGameItem } from "./product-game-item";

type Props = {
  games: Array<ComponentProps<typeof ProductGameItem>>;
};

export const ProductGames = memo(({ games }: Props) =>
  games.map((game) => <ProductGameItem key={game.title} {...game} />)
);
