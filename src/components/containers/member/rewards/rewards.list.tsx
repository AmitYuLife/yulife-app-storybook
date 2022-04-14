import { GQL_QUERY_GET_MOBILE_REWARDS_LIST } from "@graphql/rewards";
import { bottomTabs } from "@navigation/constants";
import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "react-native-navigation";
import {
  GetMobileRewardsList as Rewards,
  GetMobileRewardsListVariables as RewardsVariables,
  GetMobileRewardsList_data_list,
} from "@graphql/_core/schema";
import { MODALS, ROUTES } from "@navigation/constants";
import { getPurchasesCopy } from "@redux/copy/copy.selectors";
import Logger from "@services/logging/logger";
import { RewardsListScreen } from "@screens/index";
import { IMainTabsProps, showYuModal } from "@navigation/root";
import { useQueryOnScreenSeenOnce } from "@services/hooks/useQueryOnScreenSeenOnce";

interface IProps {
  onLeftMenuPress: IMainTabsProps["onLeftMenuPress"];
  componentId?: IMainTabsProps["componentId"];
  onTabChange: (newTab: "rewards" | "purchases", componentId?: string) => void;
}

const _RewardsListContainer = (props: IProps) => {
  const { componentId, onLeftMenuPress, onTabChange } = props;
  const [tag, setTag] = useState("All");
  const copy = useSelector(getPurchasesCopy);
  const [getRewards, { loading, data: rewards }] = useQueryOnScreenSeenOnce<Rewards, RewardsVariables>(
    GQL_QUERY_GET_MOBILE_REWARDS_LIST,
    ROUTES.rewards,
    { variables: { tag } }
  );

  const handlePurchasesPress = useCallback(async () => {
    onTabChange("purchases");
  }, [onTabChange]);

  const handleRewardDetailsItemPress = useCallback(
    async (reward: GetMobileRewardsList_data_list) => {
      if (reward.isLocked) {
        Logger.logMixpanelEvent("reward_viewed", {
          locked: true,
          reward_code: reward.id,
          reward_name: reward.name,
        });

        await showYuModal({
          component: {
            id: MODALS.rewards,
            name: MODALS.rewards,
            passProps: {
              ctaLabel: copy.newLockedReward.ctaLabel,
              heading: copy.newLockedReward.heading,
              onPress: () => Navigation.dismissModal(MODALS.rewards),
              subheading: copy.newLockedReward.subheading.replace("${rewardName}", reward.name),
            },
          },
        });
      } else {
        const route = ROUTES.rewardDetails;

        await Navigation.push(componentId, {
          component: {
            id: route,
            name: route,
            passProps: {
              rewardId: reward.id,
              onTabChange: onTabChange,
            },
            options: { bottomTabs },
          },
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [copy?.newLockedReward?.ctaLabel]
  );

  return (
    <RewardsListScreen
      data={rewards?.data}
      onItemPress={handleRewardDetailsItemPress}
      onLeftMenuPress={onLeftMenuPress}
      onRefresh={getRewards}
      onTagPress={setTag}
      onPurchasesPress={handlePurchasesPress}
      selectedTag={tag}
      loading={loading}
    />
  );
};

const RewardsListContainer = memo(_RewardsListContainer);
export default RewardsListContainer;
