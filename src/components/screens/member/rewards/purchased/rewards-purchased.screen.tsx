import * as React from "react";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsListLayout } from "../subcomponents/rewards-layout";
import { RewardsPurchasedList, RewardsPurchasedItemData } from "./rewards-purchased-list";
import { RewardsListLoading } from "../subcomponents/rewards-loading";

interface Props extends IConnectedScreenProps {
  data: RewardsPurchasedItemData[];
  loading: boolean;
  copy: GetMobileCopy_getMobileCopy_screens_purchases;
  currentWorld?: number;
  onRefresh: () => void;
}

const RewardsPurchasedScreen = React.memo((props: Props) => {
  const { data, loading, onLeftMenuPress, copy, onRefresh } = props;

  return (
    <RewardsListLayout hasBackButton={true} onLeftMenuPress={onLeftMenuPress}>
      {loading && data?.length === 0 ? (
        <RewardsListLoading />
      ) : (
        <RewardsPurchasedList onRefresh={onRefresh} onPressEmptyCta={onLeftMenuPress} data={data} copy={copy} />
      )}
    </RewardsListLayout>
  );
});

export default RewardsPurchasedScreen;
