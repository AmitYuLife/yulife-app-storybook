import * as React from "react";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsPurchasedList, RewardsPurchasedItemData } from "./rewards-purchased-list";

import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsListLoading } from "../subcomponents/rewards-loading";

interface Props extends IConnectedScreenProps {
  data: RewardsPurchasedItemData[];
  loading: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
}

const RewardsPurchasedScreen = React.memo((props: Props) => {
  const { data, loading, onLeftMenuPress, onEndReached, onRefresh } = props;

  return (
    <RewardsListLayout hasBackButton={true} onLeftMenuPress={onLeftMenuPress} showNavbar={false}>
      {loading && data?.length === 0 ? (
        <RewardsListLoading />
      ) : (
        <RewardsPurchasedList
          onEndReached={onEndReached}
          loading={loading}
          onRefresh={onRefresh}
          onPressEmptyCta={onLeftMenuPress}
          data={data}
        />
      )}
    </RewardsListLayout>
  );
});

export default RewardsPurchasedScreen;
