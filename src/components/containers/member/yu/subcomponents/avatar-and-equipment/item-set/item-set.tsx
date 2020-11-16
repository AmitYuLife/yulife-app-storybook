import React, { useMemo, Dispatch } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Style } from "@styles";
import { Item } from "./item";
import {
  GetYulifer_getYulifer_products_personal,
  GetYulifer_getYulifer_products_employer,
} from "@graphql/_core/schema";
import { ProductCode, ItemSlot } from "../../../yu-types";

export interface ItemSetProps {
  items: GetYulifer_getYulifer_products_personal[] | GetYulifer_getYulifer_products_employer[];
  setProduct: Dispatch<string>;
  product: string;
}

export const ItemSet = (props: ItemSetProps) => {
  const { items, setProduct, product } = props;

  const mapped = useMemo(() => {
    return Array.from({ length: 4 })
      .map((_, i) => {
        const item = items[i];

        return {
          onPress: !item ? null : handlePressProduct(item, setProduct, product),
          icon: item?.icon as ProductCode,
          isSelected: item?.icon === product,
          itemSlot: item?.itemSlot as ItemSlot,
          earnRate: item?.earnRate || 0,
          status: item?.status,
        };
      })
      .sort((a, b) => b.earnRate - a.earnRate);
  }, [items, setProduct, product]);

  return (
    <View style={styles.wrapper}>
      {mapped.map((_, i) => (
        <Item {...mapped[i]} key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(76),
    marginTop: "auto",
  } as ViewStyle,
});

function handlePressProduct(
  item: GetYulifer_getYulifer_products_personal,
  setProduct: Dispatch<string>,
  product: string
) {
  if (item?.status === "locked") {
    return null;
  }

  return () => setProduct(item?.icon === product ? null : item?.icon);
}
