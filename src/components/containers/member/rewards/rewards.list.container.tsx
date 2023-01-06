import { GQL_QUERY_GET_MOBILE_REWARDS_LIST } from "@graphql/rewards";
import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback, useState } from "react";
import { Navigation } from "@navigation/main";
import {
  GetMobileRewardsList as Rewards,
  GetMobileRewardsListVariables as RewardsVariables,
  GetMobileRewardsList_data_list,
} from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import { RewardsListScreen } from "@screens/index";
import { IMainTabsProps, showYuModal } from "@navigation/root";
import { useQueryOnScreenSeenOnce, useTapBackTwiceToExit } from "@hooks";
import { t } from "@locale";

const _RewardsListContainer = (props: IMainTabsProps) => {
  const { componentId, onLeftMenuPress } = props;
  const [tag, setTag] = useState("All");

  useTapBackTwiceToExit(componentId);

  const [getRewards, { loading, data: rewards }] = useQueryOnScreenSeenOnce<Rewards, RewardsVariables>(
    GQL_QUERY_GET_MOBILE_REWARDS_LIST,
    ROUTES.rewards,
    { variables: { tag } }
  );

  const handleStoreLocationPress = useCallback(
    () =>
      Navigation.push(componentId, {
        component: {
          id: ROUTES.rewardStoreLocation,
          name: ROUTES.rewardStoreLocation,
        },
      }),
    [componentId]
  );

  const handlePurchasesPress = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.purchases,
        name: ROUTES.purchases,
      },
    });
  }, [componentId]);

  const handleRewardDetailsItemPress = useCallback(
    (reward: GetMobileRewardsList_data_list) => {
      if (reward.isLocked) {
        Logger.logMixpanelEvent("reward_viewed", {
          locked: true,
          reward_code: reward.id,
          reward_name: reward.name,
        });

        return showYuModal({
          component: {
            id: MODALS.rewards,
            name: MODALS.rewards,
            passProps: {
              ctaLabel: t("screens.rewards.purchases.locked_reward.cta_label"),
              heading: t("screens.rewards.purchases.locked_reward.heading"),
              onPress: () => Navigation.dismissModal(MODALS.rewards),
              subheading: t("screens.rewards.purchases.locked_reward.subheading", { rewardName: reward.name }),
            },
          },
        });
      }

      return Navigation.push(componentId, {
        component: {
          id: ROUTES.rewardDetails,
          name: ROUTES.rewardDetails,
          passProps: { rewardId: reward.id },
          options: { bottomTabs },
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <RewardsListScreen
      data={rewards?.data}
      onItemPress={handleRewardDetailsItemPress}
      onLeftMenuPress={onLeftMenuPress}
      onRefresh={getRewards}
      onTagPress={setTag}
      onPurchasesPress={handlePurchasesPress}
      onChangeStoreLocationPress={handleStoreLocationPress}
      selectedTag={tag}
      loading={!rewards?.data?.list?.length && loading}
    />
  );
};

const RewardsListContainer = memo(_RewardsListContainer);
export default RewardsListContainer;
