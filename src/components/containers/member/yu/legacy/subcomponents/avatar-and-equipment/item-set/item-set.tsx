import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Colours, Style } from "@styles";
import { Item } from "./item";
import { YuScreenProductSlot } from "@graphql/_core/schema";

export interface ItemSetProps {
  items: YuScreenProductSlot;
}

export const ItemSet = (props: ItemSetProps) => {
  const { items } = props;

  return (
    <View style={styleItemSet.wrapper}>
      <Item {...items?.slot1} />
      <Item {...items?.slot2} />
      <Item {...items?.slot3} />
      <Item {...items?.slot4} />
    </View>
  );
};

export const styleItemSet = StyleSheet.create({
  wrapper: {
    marginTop: "auto",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 2,
    paddingHorizontal: Style.adjust(5),
    backgroundColor: Colours.metallic.m100,
    borderRadius: 8,
  } as ViewStyle,
});
