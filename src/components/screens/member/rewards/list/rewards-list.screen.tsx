import * as React from "react";
import {
  GetMobileRewardsList_data,
  GetMobileRewardsList_data_list,
  GetRewardsProductsList,
} from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Style, NAV_BAR } from "@styles";
import RewardsList from "./rewards-list";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsListLoading } from "../subcomponents/rewards-loading";
import FirstTimeStoreSelection from "./subcomponents/first-time-store-selection";
import { REWARDS_LIST_SCREEN } from "@ids";

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
          <RewardsList
            loading={loading}
            data={rewardsData}
            onRefresh={onRefresh}
            onTagPress={onTagPress}
            onItemPress={onItemPress}
            selectedTag={selectedTag}
            productsList={productsList}
            onPurchasesPress={onPurchasesPress}
            onChangeStoreLocationPress={onChangeStoreLocationPress}
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
