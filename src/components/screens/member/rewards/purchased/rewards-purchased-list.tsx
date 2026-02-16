import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { NAV_BAR, Style } from "@styles/index";
import * as React from "react";
import { View, ViewStyle } from "react-native";
import RewardsPurchasedItem, { IRewardsPurchasedItemProps } from "./purchased-item/purchased-item";
import PurchasesEmpty from "./purchases-empty/purchases-empty";
import { useSelector } from "react-redux";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";

import { StyleSheet } from "@styles";
interface IProps {
  data: RewardsPurchasedItemData[];
  loading: boolean;
  onPressEmptyCta: () => void;
  onRefresh: () => void;
  onEndReached: () => void;
}

export type RewardsPurchasedItemData = IRewardsPurchasedItemProps & {
  id: string;
};

const _RewardsPurchasedList = (props: IProps) => {
  const isBattlePassActive = useSelector(getRewardsTabSettings)?.hasDonationBattlepass;
  const { data, onRefresh, onEndReached, loading, onPressEmptyCta } = props;

  return (
    <View style={styles.listWrapper}>
      <FlashList
        data={data}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={ITEM_SIZE}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        ListEmptyComponent={<PurchasesEmpty onCtaPress={onPressEmptyCta} isBattlePassActive={isBattlePassActive} />}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
};

const ITEM_SIZE = Style.adjust(74);

const keyExtractor = (item: RewardsPurchasedItemData) => item.id;
const renderItem = ({ item }: ListRenderItemInfo<RewardsPurchasedItemData>) => <RewardsPurchasedItem {...item} />;

export const RewardsPurchasedList = React.memo(_RewardsPurchasedList);

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  footer: {
    height: NAV_BAR.DEFAULT_FULL_HEIGHT,
  } as ViewStyle,
});
