import React from "react";
import { GetPersonalProductStepQuery } from "@graphql/__generated";
import {
  AbsoluteContentItemImage,
  ProductStepCollapsingHeaderProductInfo,
  ProductStepFullScreenSwiper,
  ProductStepFullScreenLottieSwiper,
  ProductStepCollapsingHeaderAgePercentProductInfo,
} from "../../subcomponents";

type GPPS_Absolute = GetPersonalProductStepQuery["getPersonalProductStep"]["absolute"];
interface Props {
  absolute: GPPS_Absolute;
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
  { item, shouldAccountForHeader }: GPPS_Absolute[0],
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
    case "ContentItemCollapsingHeaderAgePercentProductInfo":
      return <ProductStepCollapsingHeaderAgePercentProductInfo key={item.id} {...item} />;
    case "ContentItemFullScreenSwiper":
      return <ProductStepFullScreenSwiper key={item.id} {...item} />;
    case "ContentItemFullScreenLottieSwiper":
      return <ProductStepFullScreenLottieSwiper key={item.id} {...item} />;
    default:
      return null;
  }
};
