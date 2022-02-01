import React, { useContext } from "react";
import { GetYuScreenProductDetails_getYuScreenProductDetails_absolute as AbsoluteItems } from "@graphql/_core/schema";
import { ContentItemCollapsingGenericHeader, ContentItemPad } from "@components/sdui";
import { IProductDetailsContext, UiContext } from "../product-details.context";

interface Props {
  absolute: AbsoluteItems[];
}

export const Absolute = (props: Props) => {
  const { absolute = [] } = props;

  const uiContext = useContext(UiContext);

  if (!absolute?.length) {
    return null;
  }

  return <>{absolute.map((item) => renderAbsoluteItemContent(item, uiContext))}</>;
};

const renderAbsoluteItemContent = ({ item }: AbsoluteItems, uiContext: IProductDetailsContext): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    case "ContentItemCollapsingGenericHeader":
      return <ContentItemCollapsingGenericHeader key={item.id} {...item} scrollValue={uiContext.scrollValue} />;
    default:
      return null;
  }
};
