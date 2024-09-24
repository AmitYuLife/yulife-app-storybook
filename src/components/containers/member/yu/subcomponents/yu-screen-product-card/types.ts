import { ProductCardCarouselSectionItem } from "@graphql/__generated";
import { VoidFunction } from "@utils";

export type CardType = "square" | "tall" | "wide";

export interface IYuScreenProductCardVariant {
  item: ProductCardCarouselSectionItem;
  onButtonPress?: VoidFunction;
  testID?: string;
}
