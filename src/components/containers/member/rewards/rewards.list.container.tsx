import { GQL_QUERY_GET_MOBILE_REWARDS_LIST } from "@graphql/rewards";
import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback, useMemo, useState } from "react";
import { Navigation } from "@navigation/main";
import {
  GetMobileRewardsList as Rewards,
  GetMobileRewardsListVariables as RewardsVariables,
  GetMobileRewardsList_data_list,
  GetRewardsProductsList,
} from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import { RewardsListScreen } from "@screens/index";
import { IMainTabsProps, showYuModal } from "@navigation/root";
import { useQueryOnScreenSeen, useTapBackTwiceToExit } from "@hooks";
import { t } from "@locale";
import { GQL_QUERY_GET_REWARDS_PRODUCT_LIST } from "@graphql/rewards/getRewardProductsList.gql";
import { useQuery } from "@apollo/client";
import { getUserFeatures } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import { RewardMilestoneDetails } from "../../../screens/member/rewards/list/subcomponents/reward-milestone-details";

const MAX_PERSONAL_PRODUCTS_TO_SHOW = 2;

const _RewardsListContainer = (props: IMainTabsProps) => {
  const { componentId, onLeftMenuPress } = props;
  const [tag, setTag] = useState("All");
  const features = useSelector(getUserFeatures);
  const useHalfModalsForRewardDetails = features.useHalfModalsForRewardDetails;

  useTapBackTwiceToExit(componentId);

  const [getRewards, { loading, data: rewards }] = useQueryOnScreenSeen<Rewards, RewardsVariables>(
    GQL_QUERY_GET_MOBILE_REWARDS_LIST,
    ROUTES.rewards,
    { variables: { tag } }
  );

  const { data: products } = useQuery<GetRewardsProductsList>(GQL_QUERY_GET_REWARDS_PRODUCT_LIST, {
    fetchPolicy: "network-only",
  });

  const isLoading = !rewards?.data?.list?.length && loading;

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

      if (useHalfModalsForRewardDetails && reward.teaseDetails) {
        return Navigation.showOverlayWithChild(
          <RewardMilestoneDetails
            target={reward.teaseDetails.target}
            progress={reward.teaseDetails.progress}
            rewardQuantity={reward.teaseDetails.rewardQuantity}
            rewardTitle={reward.name}
            primaryColor={reward.teaseDetails.theme.primaryColor}
            secondaryColor={reward.teaseDetails.theme.secondaryColor}
            rewardImage={reward.teaseDetails.image}
            hint={reward.teaseDetails.hint}
          />
        );
      }

      return Navigation.push(componentId, {
        component: {
          id: ROUTES.rewardDetailsSdui,
          name: ROUTES.rewardDetailsSdui,
          passProps: {
            stepId: rewards?.data?.sduiStepId,
            dynamicId: reward.id,
            shouldRefetchOnScreenSeen: true,
          },
          options: { bottomTabs },
        },
      });
    },
    [rewards?.data?.sduiStepId]
  );

  const productsList = useMemo(() => {
    return products?.getRewardsProductsList?.slice(0, MAX_PERSONAL_PRODUCTS_TO_SHOW) || [];
  }, [products]);

  return (
    <RewardsListScreen
      selectedTag={tag}
      onTagPress={setTag}
      loading={isLoading}
      onRefresh={getRewards}
      rewardsData={rewards?.data}
      productsList={productsList}
      onLeftMenuPress={onLeftMenuPress}
      onPurchasesPress={handlePurchasesPress}
      onItemPress={handleRewardDetailsItemPress}
      onChangeStoreLocationPress={handleStoreLocationPress}
    />
  );
};

const RewardsListContainer = memo(_RewardsListContainer);
export default RewardsListContainer;
