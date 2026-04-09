import React, { memo, useCallback } from "react";
import { View, ViewStyle } from "react-native";
import BattlePassListItem, {
  IBattlePassListItem,
  ENTERPRISE_REWARD_ITEM_WIDTH,
} from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { Style, StyleSheet } from "@styles";
import { FlatList } from "@atoms";
import { FlatList as RNFlatList } from "react-native";
import { BATTLE_PASS_LIST } from "@ids";
import { VoidFunction } from "@utils";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

export interface IBattlePassList {
  items: IBattlePassListItem[];
  battlePassType?: string;
  onTouchStart?: VoidFunction;
  onScrollStart?: VoidFunction;
  onLoad?: () => void;
  initialScrollIndex?: number;
  contentContainerStyle?: ViewStyle;
  ref?: React.MutableRefObject<RNFlatList<IBattlePassListItem>>;
}

const BattlePassList = ({
  items,
  onScrollStart,
  onLoad,
  battlePassType,
  initialScrollIndex,
  contentContainerStyle,
  ref: forwardRefProp,
}: IBattlePassList) => {
  const { theme } = useTheme();
  const renderItem = useCallback(
    ({ item }: { item: IBattlePassListItem }) => {
      return (
        <View style={styles.itemWrapper}>
          <BattlePassListItem {...item} battlePassType={battlePassType} ctaTextColour={theme.colors.primary.p600} />
        </View>
      );
    },
    [battlePassType]
  );

  return (
    <FlatList
      style={styles.wrapper}
      testID={BATTLE_PASS_LIST}
      forwardRef={forwardRefProp}
      onLayout={onLoad}
      horizontal={true}
      data={items}
      onScrollBeginDrag={onScrollStart}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={initialScrollIndex}
      getItemLayout={getItemLayout}
      disableThrottle={true}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

const getItemLayout = (_: unknown, index: number) => ({
  length: ENTERPRISE_REWARD_ITEM_WIDTH + Style.adjust(8),
  offset: (ENTERPRISE_REWARD_ITEM_WIDTH + Style.adjust(8)) * index,
  index,
});

const styles = StyleSheet.create({
  wrapper: {
    height: ENTERPRISE_REWARD_ITEM_WIDTH,
  },
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default memo(BattlePassList);
