import React, { useContext } from "react";
import {
  ContentItemCollapsingGenericHeader,
  ContentItemLinearGradient,
  ContentItemPad,
  ContentItemButton,
} from "@components/sdui";
import { IProductDetailsContext, UiContext } from "../product-details.context";
import { GetYuScreenProductDetailsQuery } from "@graphql/__generated";

type IAboluteItems = GetYuScreenProductDetailsQuery["getYuScreenProductDetails"]["absolute"];
interface Props {
  absolute: IAboluteItems;
}

export const Absolute = (props: Props) => {
  const { absolute = [] } = props;

  const uiContext = useContext(UiContext);

  if (!absolute?.length) {
    return null;
  }

  return <>{absolute.map((item) => renderAbsoluteItemContent(item, uiContext))}</>;
};

const renderAbsoluteItemContent = ({ item }: IAboluteItems[0], uiContext: IProductDetailsContext): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    case "ContentItemCollapsingGenericHeader":
      return <ContentItemCollapsingGenericHeader key={item.id} {...item} scrollValue={uiContext.scrollValue} />;
    case "ContentItemLinearGradient":
      return <ContentItemLinearGradient key={item.id} {...item} />;
    case "ContentItemButton":
      return <ContentItemButton key={item.id} {...item} />;
    default:
      return null;
  }
};
