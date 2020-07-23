import * as React from "react";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsList } from "./rewards-list";
import { RewardsListLoading } from "../subcomponents/rewards-loading";

export interface IRewardsListScreenProps extends IConnectedScreenProps {
  data: GetRewards_getRewards[];
  hasNotification?: boolean;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  onItemPress: (item: GetRewards_getRewards) => void;
  loading: boolean;
}

const RewardsListScreen = React.memo((props: IRewardsListScreenProps) => {
  const {
    data,
    hasNotification = false,
    onLeftTabPress,
    onRightTabPress,
    onLeftMenuPress,
    totalCoins,
    onItemPress,
    loading,
  } = props;

  if (loading) {
    return (
      <RewardsListLayout
        hasNotification={hasNotification}
        onLeftTabPress={onLeftTabPress}
        onRightTabPress={onRightTabPress}
        onLeftMenuPress={onLeftMenuPress}
        totalCoins={totalCoins}
        activeScreen="rewards"
      >
        <RewardsListLoading />
      </RewardsListLayout>
    );
  }

  return (
    <RewardsListLayout
      activeScreen="rewards"
      hasNotification={hasNotification}
      onLeftTabPress={onLeftTabPress}
      onRightTabPress={onRightTabPress}
      onLeftMenuPress={onLeftMenuPress}
      totalCoins={totalCoins}
    >
      <RewardsList data={data} onItemPress={onItemPress} onLeftTabPress={onLeftTabPress} />
    </RewardsListLayout>
  );
});

export default RewardsListScreen;
