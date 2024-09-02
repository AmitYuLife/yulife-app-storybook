import React, { forwardRef, memo } from "react";
import { StyleSheet, View } from "react-native";
import { BattlePassListItem } from "@organisms";
import {
  ENTERPRISE_REWARD_ITEM_WIDTH,
  IBattlePassListItem,
} from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { ContentStyle, FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { BATTLE_PASS_LIST } from "@ids";
import { VoidFunction } from "@utils";

export interface IBattlePassList {
  items: IBattlePassListItem[];
  contentContainerStyle?: ContentStyle;
  onBlankArea?: VoidFunction;
  onTouchStart?: VoidFunction;
  onLoad?: () => void;
  initialScrollIndex?: number;
}

const BattlePassList = forwardRef(
  (
    { items, contentContainerStyle, onBlankArea, onTouchStart, onLoad, initialScrollIndex }: IBattlePassList,
    forwardRefProp: React.MutableRefObject<FlashList<IBattlePassListItem>>
  ) => {
    return (
      <FlashList
        testID={BATTLE_PASS_LIST}
        ref={forwardRefProp}
        horizontal={true}
        estimatedItemSize={ENTERPRISE_REWARD_ITEM_WIDTH}
        data={items}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onBlankArea={onBlankArea}
        onTouchStart={onTouchStart}
        contentContainerStyle={contentContainerStyle}
        onLoad={onLoad}
        initialScrollIndex={initialScrollIndex}
      />
    );
  }
);

const renderItem = ({ item }: { item: IBattlePassListItem }) => {
  return (
    <View style={styles.itemWrapper}>
      <BattlePassListItem {...item} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default memo(BattlePassList);
