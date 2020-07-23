import * as React from "react";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsPurchasedList, RewardsPurchasedItemData } from "./rewards-purchased-list";
import { RewardsListLoading } from "../subcomponents/rewards-loading";

interface Props extends IConnectedScreenProps {
  data: RewardsPurchasedItemData[];
  hasNotification?: boolean;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  loading: boolean;
  copy: GetMobileCopy_getMobileCopy_screens_purchases;
  currentWorld?: number;
}

const RewardsPurchasedScreen = React.memo((props: Props) => {
  const {
    data,
    hasNotification = false,
    onLeftTabPress,
    loading,
    onRightTabPress,
    onLeftMenuPress,
    totalCoins,
    copy,
  } = props;

  if (loading) {
    return (
      <RewardsListLayout
        activeScreen="purchased"
        hasNotification={hasNotification}
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
    <RewardsListLayout
      activeScreen="purchased"
      hasNotification={hasNotification}
      onLeftTabPress={onLeftTabPress}
      onLeftMenuPress={onLeftMenuPress}
      onRightTabPress={onRightTabPress}
      totalCoins={totalCoins}
    >
      <RewardsPurchasedList onLeftTabPress={onLeftTabPress} data={data} copy={copy} onRightTabPress={onRightTabPress} />
    </RewardsListLayout>
  );
});

export default RewardsPurchasedScreen;
