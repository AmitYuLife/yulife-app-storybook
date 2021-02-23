import React, { useMemo } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Colours } from "@styles";
import { Item } from "./item";
import { IProduct } from "../../../../../products/fib/fib.types";

export interface ItemSetProps {
  items: IProduct[];
  style: ViewStyle;
  itemStyle: ViewStyle;
}

export const ItemSet = (props: any) => {
  // This is set to "any" for now, because were using mock data
  const { items, style, itemStyle } = props;
  const mapped = useMemo(() => Object.keys(items).filter((i) => items[i]?.code), [items]);
  return (
    <View style={[styles.wrapper, style]}>
      {mapped.map((item, i) => (
        <Item {...items[item]} key={i} style={itemStyle} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: "auto",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 2,
    backgroundColor: Colours.metallic.m100,
    borderRadius: 8,
  } as ViewStyle,
});
