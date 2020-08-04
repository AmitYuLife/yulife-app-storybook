import * as React from "react";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "../../../../../graphql/_core/schema";
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
}

const RewardsPurchasedScreen = React.memo((props: Props) => {
  const { data, onLeftTabPress, loading, onRightTabPress, onLeftMenuPress, totalCoins, copy } = props;

  if (loading && data.length === 0) {
    return (
      <RewardsListLayout
        activeScreen="purchased"
        onLeftTabPress={onLeftTabPress}
        onRightTabPress={onRightTabPress}
        onLeftMenuPress={onLeftMenuPress}
        totalCoins={totalCoins}
      >
        <RewardsListLoading />
      </RewardsListLayout>
    );
  }

  return (
    <RewardsPurchasedList
      onLeftTabPress={onLeftTabPress}
      onRightTabPress={onRightTabPress}
      onLeftMenuPress={onLeftMenuPress}
      totalCoins={totalCoins}
      data={data}
      copy={copy}
    />
  );
});

export default RewardsPurchasedScreen;
