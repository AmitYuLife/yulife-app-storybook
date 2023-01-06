import * as React from "react";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsPurchasedList, RewardsPurchasedItemData } from "./rewards-purchased-list";
import { RewardsListLoading } from "../subcomponents/rewards-loading";

interface Props extends IConnectedScreenProps {
  data: RewardsPurchasedItemData[];
  loading: boolean;
  currentWorld?: number;
  onRefresh: () => void;
}

const RewardsPurchasedScreen = React.memo((props: Props) => {
  const { data, loading, onLeftMenuPress, onRefresh } = props;

  return (
    <RewardsListLayout hasBackButton={true} onLeftMenuPress={onLeftMenuPress}>
      {loading && data?.length === 0 ? (
        <RewardsListLoading />
      ) : (
        <RewardsPurchasedList loading={loading} onRefresh={onRefresh} onPressEmptyCta={onLeftMenuPress} data={data} />
      )}
    </RewardsListLayout>
  );
});

export default RewardsPurchasedScreen;
