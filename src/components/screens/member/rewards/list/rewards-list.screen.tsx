import React, { useCallback, useMemo } from "react";
import {
  GetMobileRewardsList_data,
  GetMobileRewardsList_data_list,
  GetRewardsProductsList,
} from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Style, NAV_BAR, Colours } from "@styles";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsListLoading } from "../subcomponents/rewards-loading";
import FirstTimeStoreSelection from "./subcomponents/first-time-store-selection";
import { REWARDS_LIST_SCREEN, REWARDS_LIST_SCREEN_SCROLL } from "@ids";
import { ChipList, ProductCard } from "@components/molecules";
import { Stack } from "@atoms";
import { StackDirection } from "@atoms/stack/stack";
import HistoryAndStoreLocation from "./subcomponents/history-and-store-location";
import { RewardsListItem } from "./rewards-list.item";

export interface IRewardsListScreenProps extends IConnectedScreenProps {
  rewardsData: GetMobileRewardsList_data;
  productsList?: GetRewardsProductsList["getRewardsProductsList"];
  onItemPress: (item: GetMobileRewardsList_data_list) => void;
  onRefresh: () => void;
  selectedTag: string;
  onTagPress: React.Dispatch<React.SetStateAction<string>>;
  onChangeStoreLocationPress: () => void;
  onPurchasesPress: () => void;
  loading: boolean;
}

const CHIP_LIST_ID = "chip-list";

const keyExtractor = (item: GetMobileRewardsList_data_list) => {
  if (typeof item === "string") {
    return `rewards-list_${item}`;
  }

  return item.id;
};

const RewardsListScreen = React.memo((props: IRewardsListScreenProps) => {
  const {
    rewardsData,
    productsList,
    selectedTag,
    onLeftMenuPress,
    onTagPress,
    onRefresh,
    onItemPress,
    onPurchasesPress,
    onChangeStoreLocationPress,
    loading,
  } = props;

  // can't use negation as we need to ignore null and undefined
  const shouldShowFirstTimeModal = rewardsData?.hasUserSelectedStoreLocation === false;

  const chips = useMemo(() => {
    return (rewardsData?.tags || []).map((tag) => ({
      value: tag,
      isSelected: selectedTag === tag,
      onPress: onTagPress,
    }));
  }, [onTagPress, selectedTag, rewardsData]);

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

  const dataWithChiplist = useMemo(() => [CHIP_LIST_ID, ...(rewardsData?.list || [])], [rewardsData]);

  return (
    <RewardsListLayout
      onLeftMenuPress={onLeftMenuPress}
      Overlay={
        <FirstTimeStoreSelection
          isActive={shouldShowFirstTimeModal}
          currentStore={rewardsData?.rewardStoreLocation}
          currentStoreLabel={rewardsData?.rewardStoreLocationLabel}
          onChangeStoreLocationPress={onChangeStoreLocationPress}
        />
      }
    >
      <View style={styles.listWrapper} testID={REWARDS_LIST_SCREEN}>
        {loading ? (
          <RewardsListLoading />
        ) : (
          <View style={styles.listWrapper}>
            <FlatList
              refreshing={loading}
              onRefresh={onRefresh}
              data={dataWithChiplist}
              renderItem={renderItem}
              stickyHeaderIndices={[1]}
              keyExtractor={keyExtractor}
              testID={REWARDS_LIST_SCREEN_SCROLL}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <>
                  <HistoryAndStoreLocation
                    onHistoryPress={onPurchasesPress}
                    selectedStore={rewardsData?.rewardStoreLocation}
                    onChangeStorePress={onChangeStoreLocationPress}
                  />
                  {productsList.length === 0 ? null : (
                    <Stack direction={StackDirection.horizontal} gap={Style.adjust(15)} style={styles.productWrapper}>
                      {productsList.map((product) => (
                        <ProductCard key={product.id} {...product} />
                      ))}
                    </Stack>
                  )}
                </>
              }
            />
          </View>
        )}
      </View>
      <View style={styles.navBarFiller} />
    </RewardsListLayout>
  );
});

export default RewardsListScreen;

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  },
  chipListWrapper: {
    backgroundColor: Colours.neutral.white,
    marginBottom: Style.adjust(8),
  },
  navBarFiller: {
    height: NAV_BAR.DEFAULT_FULL_HEIGHT,
  },
  productWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Style.adjust(16),
    marginBottom: Style.adjust(16),
  },
});
