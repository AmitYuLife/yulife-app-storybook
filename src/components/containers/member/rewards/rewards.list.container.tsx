import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import RewardsListScreen from "@screens/member/rewards/list/rewards-list.screen";
import { showYuModal } from "@navigation/root";
import { useQueryOnScreenSeen, useTapBackTwiceToExit, useUserFeatures } from "@hooks";
import { t } from "@locale";
import { RewardMilestoneDetails } from "../../../screens/member/rewards/list/subcomponents/reward-milestone-details";
import { gql } from "@graphql/__generated";
import { useNavigation } from "@navigation/navigation.context";
import { RewardOnPressArgs } from "./rewards.types";

const _RewardsListContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();
  const { tempGameNewRewardsScreen } = useUserFeatures();

  useTapBackTwiceToExit(componentId);

  const [getRewards, { loading, data: rewards }] = useQueryOnScreenSeen(
    gql("GetMobileRewardsListDocument"),
    ROUTES.rewards
  );

  const [getRecentlyUsedRewards, { loading: recentLoading, data: recentRewards }] = useQueryOnScreenSeen(
    gql("GetMobileRecentlyUsedRewardsListDocument"),
    ROUTES.rewards,
    {},
    { disabled: !tempGameNewRewardsScreen }
  );

  const onRefresh = useCallback(() => {
    getRewards();
    getRecentlyUsedRewards();
  }, [getRecentlyUsedRewards, getRewards]);

  const isRecentLoading = (recentLoading || !recentRewards?.data?.recentlyUsedRewards) && !!tempGameNewRewardsScreen;

  const isLoading = (loading || isRecentLoading) && !rewards?.data?.list?.length && !recentRewards?.data;

  const handleStoreLocationPress = useCallback(() => {
    Navigation.dismissAllModals({ animations: { dismissModal: { enabled: false } } });
    Navigation.push(componentId, {
      component: {
        id: ROUTES.selectContentLocation,
        name: ROUTES.selectContentLocation,
        passProps: {
          placement: "rewards",
        },
      },
    });
  }, [componentId]);

  const handleRewardDetailsItemPress = useCallback(
    (reward: RewardOnPressArgs) => {
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
          reward_id: reward.id,
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

      if (reward.teaseDetails) {
        const { target, progress, rewardQuantity, theme, image, overlayImage, modalTitle } = reward.teaseDetails || {};
        const { primaryColor, secondaryColor, overlayColor } = theme || {};

        return Navigation.showOverlayWithChild({
          children: (
            <RewardMilestoneDetails
              modalTitle={modalTitle}
              target={target}
              progress={progress}
              rewardQuantity={rewardQuantity}
              rewardTitle={reward.name}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              overlayColor={overlayColor}
              overlayImage={overlayImage}
              rewardImage={image}
            />
          ),
        });
      }

      return Navigation.push(componentId, {
        component: {
          id: ROUTES.rewardDetailsSdui,
          name: ROUTES.rewardDetailsSdui,
          passProps: {
            stepId: reward?.sduiStepId ?? rewards?.data?.sduiStepId,
            dynamicId: reward.id,
            shouldRefetchOnScreenSeen: true,
          },
          options: { bottomTabs },
        },
      });
    },
    [componentId, rewards?.data?.sduiStepId]
  );

  return (
    <RewardsListScreen
      loading={isLoading}
      onRefresh={onRefresh}
      rewardsData={rewards?.data}
      recentRewards={recentRewards?.data}
      onLeftMenuPress={onLeftMenuPress}
      onItemPress={handleRewardDetailsItemPress}
      onChangeStoreLocationPress={handleStoreLocationPress}
    />
  );
};

const RewardsListContainer = memo(_RewardsListContainer);
export default RewardsListContainer;
