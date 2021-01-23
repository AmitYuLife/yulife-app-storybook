import React, { useMemo } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Style } from "@styles";
import { Item } from "./item";
import { IProduct } from "../../../../../products/fib/fib.types";

export interface ItemSetProps {
  items: IProduct[];
}

export const ItemSet = (props: ItemSetProps) => {
  const { items } = props;

  const mapped = useMemo(() => Array.from({ length: 4 }).map((_, i) => items[i]), [items]);

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
