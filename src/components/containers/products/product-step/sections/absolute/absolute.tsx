import React from "react";
import { GetPersonalProductStep_getPersonalProductStep_absolute as GPPS_Absolute } from "@graphql/_core/schema";
import {
  AbsoluteContentItemImage,
  ProductStepCollapsingHeaderProductInfo,
  ProductStepFullScreenSwiper,
  ProductStepFullScreenLottieSwiper,
} from "../../subcomponents";

interface Props {
  absolute: GPPS_Absolute[];
  headerHeight: number;
}

export const Absolute = (props: Props) => {
  const { headerHeight, absolute = [] } = props;

  if (!absolute?.length) {
    return null;
  }

  return <>{absolute.map((item) => renderAbsoluteItemContent(item, headerHeight))}</>;
};

const renderAbsoluteItemContent = (
  { item, shouldAccountForHeader }: GPPS_Absolute,
  headerHeight: number
): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemImage":
      return (
        <AbsoluteContentItemImage
          key={item.id}
          shouldAccountForHeader={shouldAccountForHeader}
          headerHeight={headerHeight}
          {...item}
        />
      );
    case "ContentItemCollapsingHeaderProductInfo":
      return <ProductStepCollapsingHeaderProductInfo key={item.id} {...item} />;
    case "ContentItemFullScreenSwiper":
      return <ProductStepFullScreenSwiper key={item.id} {...item} />;
    case "ContentItemFullScreenLottieSwiper":
      return <ProductStepFullScreenLottieSwiper key={item.id} {...item} />;
    default:
      return null;
  }
};
