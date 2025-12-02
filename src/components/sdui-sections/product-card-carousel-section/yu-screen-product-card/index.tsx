import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ProductCardCarouselSectionItem } from "@graphql/__generated";
import { WideCard } from "./wide-card";
import { SquareCard } from "./square-card";
import { TallCard } from "./tall-card";
import { CardType, IYuScreenProductCardVariant } from "./types";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD } from "@ids";

const CARD_MAP: Record<CardType, React.FC<IYuScreenProductCardVariant>> = {
  square: SquareCard,
  tall: TallCard,
  wide: WideCard,
};

interface IYuScreenProductCard {
  item: ProductCardCarouselSectionItem;
  type: CardType;
  testID?: string;
}

export const YuScreenProductCard = ({ item, type }: IYuScreenProductCard) => {
  const dispatch = useDispatch();

  const handleCardPress = useCallback(() => dispatch(item.onCardPress), [item?.onCardPress]);
  const handleButtonPress = useCallback(() => dispatch(item.onButtonPress), [item?.onButtonPress]);

  const onCardPress = item.onCardPress && handleCardPress;
  const onButtonPress = item.onButtonPress && handleButtonPress;

  const Card = CARD_MAP[type] || CARD_MAP.wide;

  if (onCardPress || onButtonPress) {
    return (
      <TouchableOpacityWithDelay onPress={onCardPress || onButtonPress}>
        <Card
          item={item}
          onButtonPress={onButtonPress}
          testID={YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD(item.productName)}
        />
      </TouchableOpacityWithDelay>
    );
  }

  return <Card item={item} onButtonPress={onButtonPress} />;
};
