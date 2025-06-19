import React from "react";
import { Animated } from "react-native";
import { Placeholder } from "../subcomponents/placeholder";
import { ListItem } from "../subcomponents/item-text";
import { IListItem, LIST_ITEM } from "../flatlist-utils/types";

export const renderItem =
  ({ scrollY }: { scrollY: Animated.Value }) =>
  ({ item, index }: { item: IListItem; index: number }) => {
    if (item.type === LIST_ITEM.PLACEHOLDER) {
      return <Placeholder />;
    }

    if (item.type === LIST_ITEM.ITEM) {
      return <ListItem index={index} label={item.data.label} scrollY={scrollY} />;
    }

    return null;
  };
