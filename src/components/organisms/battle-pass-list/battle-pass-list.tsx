import React, { forwardRef, memo, useCallback } from "react";
import { View } from "react-native";
import BattlePassListItem, {
  ENTERPRISE_REWARD_ITEM_WIDTH,
  IBattlePassListItem,
} from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { ContentStyle, FlashList } from "@shopify/flash-list";
import { Style, StyleSheet } from "@styles";
import { BATTLE_PASS_LIST } from "@ids";
import { VoidFunction } from "@utils";

export interface IBattlePassList {
  items: IBattlePassListItem[];
  contentContainerStyle?: ContentStyle;
  battlePassType?: string;
  onBlankArea?: VoidFunction;
  onTouchStart?: VoidFunction;
  onScrollStart?: VoidFunction;
  onLoad?: () => void;
  initialScrollIndex?: number;
}

const BattlePassList = forwardRef(
  (
    {
      items,
      contentContainerStyle,
      onScrollStart,
      onBlankArea,
      onTouchStart,
      onLoad,
      battlePassType,
      initialScrollIndex,
    }: IBattlePassList,
    forwardRefProp: React.MutableRefObject<FlashList<IBattlePassListItem>>
  ) => {
    const renderItem = useCallback(
      ({ item }: { item: IBattlePassListItem }) => {
        return (
          <View style={styles.itemWrapper}>
            <BattlePassListItem {...item} battlePassType={battlePassType} />
          </View>
        );
      },
      [battlePassType]
    );

    return (
      <FlashList
        testID={BATTLE_PASS_LIST}
        ref={forwardRefProp}
        horizontal={true}
        estimatedItemSize={ENTERPRISE_REWARD_ITEM_WIDTH}
        data={items}
        onScrollBeginDrag={onScrollStart}
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

const styles = StyleSheet.create({
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default memo(BattlePassList);
