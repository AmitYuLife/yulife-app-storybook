import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback, useMemo, useState } from "react";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import { RewardsListScreen } from "@screens/index";
import { IMainTabsProps, showYuModal } from "@navigation/root";
import { useQueryOnScreenSeen, useTapBackTwiceToExit } from "@hooks";
import { t } from "@locale";
import { useQuery } from "@apollo/client";
import { getUserFeatures } from "@redux/user/user.selectors";
import { useSelector } from "react-redux";
import { RewardMilestoneDetails } from "../../../screens/member/rewards/list/subcomponents/reward-milestone-details";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { GetMobileRewardsListQuery, gql } from "@graphql/__generated";

const MAX_PERSONAL_PRODUCTS_TO_SHOW = 2;

const _RewardsListContainer = (props: IMainTabsProps) => {
  const { componentId, onLeftMenuPress } = props;
  const [tag, setTag] = useState("All");
  const features = useSelector(getUserFeatures);
  const useHalfModalsForRewardDetails = features.useHalfModalsForRewardDetails;

  useTapBackTwiceToExit(componentId);

  const [getRewards, { loading, data: rewards }] = useQueryOnScreenSeen(
    gql("GetMobileRewardsListDocument"),
    ROUTES.rewards,
    { variables: { tag } }
  );

  const [getGoalProductMilestones, { data: goalProductMilestones }] = useQueryOnScreenSeen(
    gql("GetMobileRewardsGoalProductMilestonesDocument"),
    ROUTES.rewards
  );

  const { data: products } = useQuery(gql("GetRewardsProductsListDocument"), {
    fetchPolicy: "network-only",
  });

  const goalProductAction =
    goalProductMilestones?.getMobileRewardsGoalProductMilestones?.goalProductMilestones?.sduiAction;
  const { handleSduiAction: onGoalProductMilestonesPress } = useSduiCallbackFunctionOrReduxAction(goalProductAction);

  const onRefresh = useCallback(() => {
    getRewards();
    getGoalProductMilestones();
  }, [getRewards, getGoalProductMilestones]);

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
    (reward: GetMobileRewardsListQuery["data"]["list"][0]) => {
      /**
       * locked means that the reward does not have
       * available denominations
       * this is to clarify that a reward in tease
       * state may look and behave
       * as locked but its isLocked value is false
       */
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
        const { target, progress, rewardQuantity, theme, image, hint, modalTitle } = reward.teaseDetails || {};
        const { primaryColor, secondaryColor } = theme || {};

        return Navigation.showOverlayWithChild(
          <RewardMilestoneDetails
            modalTitle={modalTitle}
            target={target}
            progress={progress}
            rewardQuantity={rewardQuantity}
            rewardTitle={reward.name}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            rewardImage={image}
            hint={hint}
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
      onRefresh={onRefresh}
      rewardsData={rewards?.data}
      productsList={productsList}
      goalProductMilestones={goalProductMilestones?.getMobileRewardsGoalProductMilestones}
      onGoalProductMilestonesPress={!goalProductAction ? null : onGoalProductMilestonesPress}
      onLeftMenuPress={onLeftMenuPress}
      onPurchasesPress={handlePurchasesPress}
      onItemPress={handleRewardDetailsItemPress}
      onChangeStoreLocationPress={handleStoreLocationPress}
    />
  );
};

const RewardsListContainer = memo(_RewardsListContainer);
export default RewardsListContainer;
