import React, { useCallback, useMemo } from "react";
import { IConnectedScreenProps } from "../../../../../typings";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Style, NAV_BAR, Colours } from "@styles";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsListLoading } from "../subcomponents/rewards-loading";
import FirstTimeStoreSelection from "./subcomponents/first-time-store-selection";
import { REWARDS_LIST_SCREEN, REWARDS_LIST_SCREEN_SCROLL, REWARDS_STORE_GAME_PROGRESS } from "@ids";
import { ChipList, ProductCard } from "@components/molecules";
import { Stack } from "@atoms";
import { StackDirection } from "@atoms/stack/stack";
import HistoryAndStoreLocation from "./subcomponents/history-and-store-location";
import { RewardsListItem } from "./rewards-list.item";
import { EventPanel } from "@molecules";
import { ContentItemHint } from "@components/sdui";
import {
  GetMobileRewardsGoalProductMilestonesQuery,
  GetMobileRewardsListQuery,
  GetRewardsProductsListQuery,
} from "@graphql/__generated";

type IRewardsGoalProductMilestones =
  GetMobileRewardsGoalProductMilestonesQuery["getMobileRewardsGoalProductMilestones"];

type IGetMobileRewardsListData = GetMobileRewardsListQuery["data"];

export interface IRewardsListScreenProps extends IConnectedScreenProps {
  rewardsData: IGetMobileRewardsListData;
  productsList?: GetRewardsProductsListQuery["getRewardsProductsList"];
  goalProductMilestones?: IRewardsGoalProductMilestones;
  onGoalProductMilestonesPress?: () => void;
  onItemPress: (item: IGetMobileRewardsListData["list"][0]) => void;
  onRefresh: () => void;
  selectedTag: string;
  onTagPress: React.Dispatch<React.SetStateAction<string>>;
  onChangeStoreLocationPress: () => void;
  onPurchasesPress: () => void;
  loading: boolean;
}

const EXTRA_DATA = {
  ChipList: "ChipList",
  GoalProductMilestones: "GoalProductMilestones",
} as const;
type IData = IGetMobileRewardsListData["list"][number] | typeof EXTRA_DATA[keyof typeof EXTRA_DATA];

const keyExtractor = (item: IGetMobileRewardsListData["list"][0]) => {
  if (typeof item === "string") {
    return `rewards-list_${item}`;
  }

  return item.id;
};

const RewardsListScreen = React.memo((props: IRewardsListScreenProps) => {
  const {
    rewardsData,
    productsList,
    goalProductMilestones,
    selectedTag,
    onLeftMenuPress,
    onTagPress,
    onGoalProductMilestonesPress,
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
    ({ item }: ListRenderItemInfo<IData>) => {
      if (item === EXTRA_DATA.ChipList) {
        if (!chips.length) {
          return null;
        }

        return (
          <View style={styles.chipListWrapper}>
            <ChipList chips={chips} />
          </View>
        );
      }

      if (item === EXTRA_DATA.GoalProductMilestones) {
        if (selectedTag !== "All") {
          return null;
        }

        if (goalProductMilestones?.goalProductMilestones) {
          return (
            <View style={styles.rewardsEventPanel} testID={REWARDS_STORE_GAME_PROGRESS}>
              <EventPanel
                {...goalProductMilestones.goalProductMilestones}
                type={"rewards"}
                width={EVENT_PANEL_WIDTH}
                onPanelPress={onGoalProductMilestonesPress}
                showPulse={true}
              />
            </View>
          );
        }

        if (goalProductMilestones?.hint) {
          return (
            <View style={styles.rewardsEventPanel}>
              <ContentItemHint {...goalProductMilestones.hint} />
            </View>
          );
        }

        return null;
      }

      if (item.__typename === "MobileRewardsListItem") {
        return <RewardsListItem {...item} onPress={() => onItemPress(item)} />;
      }

      return null;
    },
    [chips, goalProductMilestones, onItemPress, onGoalProductMilestonesPress]
  );

  const dataWithChiplist = useMemo(
    () => [EXTRA_DATA.ChipList, EXTRA_DATA.GoalProductMilestones, ...(rewardsData?.list || [])],
    [rewardsData]
  );

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

const MARGIN = Style.adjust(16);
const EVENT_PANEL_WIDTH = Style.DEVICE_WIDTH - MARGIN * 2;

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
    marginHorizontal: MARGIN,
    marginBottom: MARGIN,
  },
  rewardsEventPanel: {
    marginHorizontal: MARGIN,
    marginBottom: MARGIN,
  },
});
