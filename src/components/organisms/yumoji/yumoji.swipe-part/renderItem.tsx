import React, { memo } from "react";
import { ListRenderItemInfo, View } from "react-native";
import { Image } from "@atoms";
import { styles, ITEM_WIDTH } from "./yumoji-swipe-part.styles";
import { IYumojiSwipePartItem, FLAT_LIST_ITEM } from "./yumoji-swipe-part.types";

const Pad = memo(() => <View style={styles.pad} />);

export const renderItem = ({ item }: ListRenderItemInfo<IYumojiSwipePartItem>) => {
  switch (item.type) {
    case FLAT_LIST_ITEM.PAD:
      return <Pad />;
    case FLAT_LIST_ITEM.YU_WORLD_OPTION:
      return (
        <View style={styles.flatListItem}>
          <Image width={ITEM_WIDTH} source={{ uri: item.data.remoteUrl.uri }} />
        </View>
      );
  }
};
