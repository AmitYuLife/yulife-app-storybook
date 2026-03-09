import { ComponentProps, memo } from "react";
import { ProductGameItem } from "./product-game-item-old";

type Props = {
  games: Array<ComponentProps<typeof ProductGameItem>>;
};

export const ProductGames = memo(({ games }: Props) =>
  games.map((game) => <ProductGameItem key={game.id || game.title} {...game} />)
);
