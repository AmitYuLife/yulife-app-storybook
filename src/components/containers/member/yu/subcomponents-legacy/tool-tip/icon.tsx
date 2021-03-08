import React from "react";
import { YuItemSlot } from "../../../../../../graphql/_core/schema/globalTypes";
import { getProductIcon } from "../../assets/getProductIcon";

interface IconProps {
  itemSlot: YuItemSlot;
}

export const Icon = (props: IconProps) => {
  const { itemSlot } = props;
  const Component = getProductIcon(itemSlot);

  return <Component />;
};
