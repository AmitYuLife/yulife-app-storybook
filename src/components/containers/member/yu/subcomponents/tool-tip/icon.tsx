import React from "react";
import { getProductIcon } from "../../assets/getProductIcon";
import { ItemSlot } from "../../yu-types";

interface IconProps {
  itemSlot: ItemSlot;
}

export const Icon = (props: IconProps) => {
  const { itemSlot } = props;
  const Component = getProductIcon(itemSlot);

  return <Component />;
};
