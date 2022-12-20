import React, { useCallback, memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Style } from "@styles";
import { GetMobileRewardsList_data_list } from "@graphql/_core/schema";
import { RewardsListItem } from "./rewards-list.item";

export interface IRewardsListProps {
  data: GetMobileRewardsList_data_list[];
  loading: boolean;
  onRefresh: () => void;
  onPurchasesPress: () => void;
  onItemPress: (item: GetMobileRewardsList_data_list) => void;
}

const _RewardsList = ({ onItemPress, data, onRefresh, loading }: IRewardsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GetMobileRewardsList_data_list>) => (
      <RewardsListItem {...item} onPress={() => onItemPress(item)} />
    ),
    [onItemPress]
  );

  return (
    <View style={styles.listWrapper}>
      <FlashList
        data={data}
        keyExtractor={keyExtractor}
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
