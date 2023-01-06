import React, { useCallback, memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Style } from "@styles";
import { GetMobileRewardsList_data, GetMobileRewardsList_data_list } from "@graphql/_core/schema";
import { RewardsListItem } from "./rewards-list.item";
import HistoryAndStoreLocation from "./subcomponents/history-and-store-location";

export interface IRewardsListProps {
  data: GetMobileRewardsList_data;
  loading: boolean;
  onRefresh: () => void;
  onPurchasesPress: () => void;
  onChangeStoreLocationPress: () => void;
  onItemPress: (item: GetMobileRewardsList_data_list) => void;
}

const _RewardsList = (props: IRewardsListProps) => {
  const { onItemPress, data, onRefresh, loading, onPurchasesPress, onChangeStoreLocationPress } = props;

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GetMobileRewardsList_data_list>) => (
      <RewardsListItem {...item} onPress={() => onItemPress(item)} />
    ),
    [onItemPress]
  );

  return (
    <View style={styles.listWrapper}>
      <FlashList
        data={data?.list || []}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <HistoryAndStoreLocation
            selectedStore={data?.rewardStoreLocation}
            onChangeStorePress={onChangeStoreLocationPress}
            onHistoryPress={onPurchasesPress}
          />
        }
        showsVerticalScrollIndicator={false}
        estimatedItemSize={itemSize}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={onRefresh}
      />
    </View>
  );
};

const keyExtractor = (item: GetMobileRewardsList_data_list) => item.id;
const itemSize = Style.adjust(136);

export const RewardsList = memo(_RewardsList);

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
});
