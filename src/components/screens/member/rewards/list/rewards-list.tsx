import React, { useCallback, memo, useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Colours, Style } from "@styles";
import {
  GetMobileRewardsList_data,
  GetMobileRewardsList_data_list,
  GetRewardsProductsList,
} from "@graphql/_core/schema";
import { RewardsListItem } from "./rewards-list.item";
import HistoryAndStoreLocation from "./subcomponents/history-and-store-location";
import { REWARDS_LIST_SCREEN_SCROLL } from "@ids";
import { ChipList, ProductCard } from "@components/molecules";
import Stack, { StackDirection } from "@atoms/stack/stack";

export interface IRewardsListProps {
  data: GetMobileRewardsList_data;
  loading: boolean;
  selectedTag: string;
  productsList?: GetRewardsProductsList["getRewardsProductsList"];
  onRefresh: () => void;
  onPurchasesPress: () => void;
  onChangeStoreLocationPress: () => void;
  onItemPress: (item: GetMobileRewardsList_data_list) => void;
  onTagPress: React.Dispatch<React.SetStateAction<string>>;
}

const CHIP_LIST_ID = "ChipList";
const ITEM_SIZE = Style.adjust(136);

const keyExtractor = (item: GetMobileRewardsList_data_list) => {
  if (typeof item === "string") {
    return `rewards-list_${item}`;
  }

  return item.id;
};

const RewardsList = (props: IRewardsListProps) => {
  const {
    data,
    loading,
    selectedTag,
    productsList = [],
    onRefresh,
    onPurchasesPress,
    onChangeStoreLocationPress,
    onItemPress,
    onTagPress,
  } = props;

  const chips = useMemo(
    () =>
      (data?.tags || []).map((tag) => ({
        value: tag,
        isSelected: selectedTag === tag,
        onPress: onTagPress,
      })),
    [data, selectedTag, onTagPress]
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GetMobileRewardsList_data_list | typeof CHIP_LIST_ID>) => {
      if (item === CHIP_LIST_ID) {
        if (!chips.length) {
          return null;
        }

        return (
          <View style={styles.chipListWrapper}>
            <ChipList chips={chips} />
          </View>
        );
      }

      if (item.__typename === "MobileRewardsListItem") {
        return <RewardsListItem {...item} onPress={() => onItemPress(item)} />;
      }

      return null;
    },
    [chips, onItemPress]
  );

  const flashListData = useMemo(() => [CHIP_LIST_ID, ...(data?.list || [])], [data]);

  const listHeaderComponent = useMemo(
    () => (
      <>
        <HistoryAndStoreLocation
          selectedStore={data?.rewardStoreLocation}
          onChangeStorePress={onChangeStoreLocationPress}
          onHistoryPress={onPurchasesPress}
        />
        {productsList.length === 0 ? null : (
          <Stack direction={StackDirection.horizontal} gap={Style.adjust(15)} style={styles.productWrapper}>
            {productsList.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Stack>
        )}
      </>
    ),
    [data, productsList, onChangeStoreLocationPress, onPurchasesPress]
  );

  const stickyHeaderIndices = useMemo(() => [0], []);

  return (
    <View style={styles.listWrapper}>
      <FlashList
        data={flashListData}
        keyExtractor={keyExtractor}
        ListHeaderComponent={listHeaderComponent}
        stickyHeaderIndices={stickyHeaderIndices}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={ITEM_SIZE}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={onRefresh}
        testID={REWARDS_LIST_SCREEN_SCROLL}
      />
    </View>
  );
};

export default memo(RewardsList);

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  } as ViewStyle,
  productWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Style.adjust(16),
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  chipListWrapper: {
    backgroundColor: Colours.neutral.white,
    marginBottom: Style.adjust(8),
  } as ViewStyle,
});
