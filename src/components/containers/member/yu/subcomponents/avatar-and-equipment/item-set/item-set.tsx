import React, { useMemo, Dispatch } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Style } from "@styles";
import { Item } from "./item";
import { IProduct } from "../../../../../products/fib/fib.types";

export interface ItemSetProps {
  items: IProduct[];
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
          isSelected: item?.productId === product,
          itemSlot: item?.itemSlot,
          earnRate: item?.earnRate || 0,
          status: item?.status,
          coverType: item?.coverType,
        };
      })
      .sort((a, b) => b.earnRate - a.earnRate);
  }, [items, setProduct, product]);

  return (
    <View style={styles.wrapper}>
      {mapped.map((item, i) => (
        <Item {...item} key={i} />
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

function handlePressProduct(item: IProduct, setProduct: Dispatch<string>, product: string) {
  return () => setProduct(item?.productId === product ? null : item?.productId);
}
