import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Colours, Style } from "@styles";
import { Item } from "./item";
import { YuScreenProductSlotItem } from "@graphql/_core/schema";

export interface ItemBottomProps {
  items: YuScreenProductSlotItem[];
}

export const ItemBottom = (props: ItemBottomProps) => {
  const { items = [] } = props;

  return (
    <View style={[styles.wrapper, { width: Style.adjust(80 * Object.keys(items).length) }]}>
      {items?.map((item, key) => (
        <Item key={key} {...item} style={styles.itemStyle} />
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: "auto",
    alignItems: "center",
    backgroundColor: Colours.metallic.m100,
    borderRadius: 8,
    flexDirection: "row",
    paddingTop: 6,
    paddingBottom: 6,
    justifyContent: "space-around",
  } as ViewStyle,
  itemStyle: {
    marginBottom: 0,
    justifyContent: "space-between",
  },
});
