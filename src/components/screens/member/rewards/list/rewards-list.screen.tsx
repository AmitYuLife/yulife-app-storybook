import * as React from "react";
import { GetMobileRewardsList_data, GetMobileRewardsList_data_list } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Style, NAV_BAR } from "@styles";
import { ChipList } from "@molecules";
import { RewardsList } from "./rewards-list";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsListLoading } from "../subcomponents/rewards-loading";
import FirstTimeStoreSelection from "./subcomponents/first-time-store-selection";
import { REWARDS_LIST_SCREEN } from "@ids";

export interface IRewardsListScreenProps extends IConnectedScreenProps {
  data: GetMobileRewardsList_data;
  onItemPress: (item: GetMobileRewardsList_data_list) => void;
  onRefresh: () => void;
  selectedTag: string;
  onTagPress: React.Dispatch<React.SetStateAction<string>>;
  onChangeStoreLocationPress: () => void;
  onPurchasesPress: () => void;
  loading: boolean;
}

const RewardsListScreen = React.memo((props: IRewardsListScreenProps) => {
  const {
    data,
    selectedTag,
    onLeftMenuPress,
    onTagPress,
    onRefresh,
    onItemPress,
    onPurchasesPress,
    onChangeStoreLocationPress,
    loading,
  } = props;

  const chips = (data?.tags || []).map((tag) => ({
    value: tag,
    isSelected: selectedTag === tag,
    onPress: onTagPress,
  }));

  // can't use negation as we need to ignore null and undefined
  const shouldShowFirstTimeModal = data?.hasUserSelectedStoreLocation === false;

  return (
    <RewardsListLayout
      onLeftMenuPress={onLeftMenuPress}
      Overlay={
        <FirstTimeStoreSelection
          isActive={shouldShowFirstTimeModal}
          currentStore={data?.rewardStoreLocation}
          currentStoreLabel={data?.rewardStoreLocationLabel}
          onChangeStoreLocationPress={onChangeStoreLocationPress}
        />
      }
    >
      {!chips.length ? null : <ChipList chips={chips} />}
      <View style={styles.listWrapper} testID={REWARDS_LIST_SCREEN}>
        {loading ? (
          <RewardsListLoading />
        ) : (
          <RewardsList
            onPurchasesPress={onPurchasesPress}
            onChangeStoreLocationPress={onChangeStoreLocationPress}
            onRefresh={onRefresh}
            data={data}
            onItemPress={onItemPress}
            loading={loading}
          />
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
    marginBottom: Style.adjust(12),
  } as ViewStyle,
  navBarFiller: {
    height: NAV_BAR.DEFAULT_FULL_HEIGHT,
  } as ViewStyle,
});
