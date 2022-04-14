import * as React from "react";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsPurchasedList, RewardsPurchasedItemData } from "./rewards-purchased-list";
import { RewardsListLoading } from "../subcomponents/rewards-loading";

interface Props extends IConnectedScreenProps {
  data: RewardsPurchasedItemData[];
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  loading: boolean;
  copy: GetMobileCopy_getMobileCopy_screens_purchases;
  currentWorld?: number;
  hasNewRewards: boolean;
}

const RewardsPurchasedScreen = React.memo((props: Props) => {
  const { data, onLeftTabPress, loading, onRightTabPress, onLeftMenuPress, copy, hasNewRewards } = props;

  if (loading && data.length === 0) {
    return (
      <RewardsListLayout
        hasNewRewards={hasNewRewards}
        activeScreen="purchased"
        onLeftTabPress={onLeftTabPress}
        onRightTabPress={onRightTabPress}
        onLeftMenuPress={onLeftMenuPress}
      >
        <RewardsListLoading />
      </RewardsListLayout>
    );
  }

  return (
    <RewardsListLayout
      hasNewRewards={hasNewRewards}
      activeScreen="purchased"
      onLeftTabPress={onLeftTabPress}
      onRightTabPress={onRightTabPress}
      onLeftMenuPress={onLeftMenuPress}
    >
      <RewardsPurchasedList onPressEmptyCta={onLeftTabPress} onRefresh={onRightTabPress} data={data} copy={copy} />
    </RewardsListLayout>
  );
});

export default RewardsPurchasedScreen;
