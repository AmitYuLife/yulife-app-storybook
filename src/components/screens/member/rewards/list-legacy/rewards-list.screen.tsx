import * as React from "react";
import { GetRewards_getRewards } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsList } from "./rewards-list";
import { RewardsListLoading } from "../subcomponents/rewards-loading";

export interface IRewardsListScreenProps extends IConnectedScreenProps {
  data: GetRewards_getRewards[];
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  onItemPress: (item: GetRewards_getRewards) => void;
  loading: boolean;
}

const RewardsListScreen = React.memo((props: IRewardsListScreenProps) => {
  const { data, onLeftTabPress, onRightTabPress, onLeftMenuPress, onItemPress, loading } = props;

  return (
    <RewardsListLayout
      onLeftTabPress={onLeftTabPress}
      onRightTabPress={onRightTabPress}
      onLeftMenuPress={onLeftMenuPress}
      activeScreen="rewards"
    >
      {loading ? (
        <RewardsListLoading />
      ) : (
        <RewardsList onRefresh={onLeftTabPress} data={data} onItemPress={onItemPress} />
      )}
    </RewardsListLayout>
  );
});

export default RewardsListScreen;
