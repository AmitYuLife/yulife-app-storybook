import React from "react";
import { GetPersonalProductStep_getPersonalProductStep_absolute as GPPS_Absolute } from "@graphql/_core/schema";
import { AbsoluteContentItemImage } from "../../subcomponents/product-step.absoluteImage";

interface Props {
  absolute: GPPS_Absolute[];
  headerHeight: number;
}

export const Absolute = (props: Props) => {
  const { headerHeight } = props;

  return <>{props.absolute.map((item) => renderAbsoluteItemContent(item, headerHeight))}</>;
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
    default:
      return null;
  }
};
