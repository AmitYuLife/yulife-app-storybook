import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ProductCardCarouselSectionItem } from "@graphql/__generated";
import { WideCard } from "./wide-card";
import { SquareCard } from "./square-card";
import { TallCard } from "./tall-card";
import { CardType, IYuScreenProductCardVariant } from "./types";

const CARD_MAP: Record<CardType, React.FC<IYuScreenProductCardVariant>> = {
  square: SquareCard,
  tall: TallCard,
  wide: WideCard,
};

interface IYuScreenProductCard {
  item: ProductCardCarouselSectionItem;
  type: CardType;
}

export const YuScreenProductCard = ({ item, type }: IYuScreenProductCard) => {
  const dispatch = useDispatch();

  const handlePrimaryPress = useCallback(() => dispatch(item.onPrimaryPress), [item?.onPrimaryPress]);

  const handleSecondaryPress = useCallback(() => dispatch(item.onSecondaryPress), [item?.onSecondaryPress]);

  const Card = CARD_MAP[type] || CARD_MAP.wide;

  return (
    <Card
      item={item}
      onPrimaryPress={item.onPrimaryPress && handlePrimaryPress}
      onSecondaryPress={item.onSecondaryPress && handleSecondaryPress}
    />
  );
};
