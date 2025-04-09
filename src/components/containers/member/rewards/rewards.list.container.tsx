import { bottomTabs, MODALS, ROUTES } from "@navigation/constants";
import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import RewardsListScreen, { DEFAULT_TAG } from "@screens/member/rewards/list/rewards-list.screen";
import { showYuModal } from "@navigation/root";
import { useQueryOnScreenSeen, useTapBackTwiceToExit, useUserFeatures } from "@hooks";
import { t } from "@locale";
import { RewardMilestoneDetails } from "../../../screens/member/rewards/list/subcomponents/reward-milestone-details";
import { gql } from "@graphql/__generated";
import { useNavigation } from "@navigation/navigation.context";
import { RewardsManagerContext } from "./rewards.manager.context";
import { IRewardContainerProps, RewardOnPressArgs, RewardsManagerActionTypes } from "./rewards.types";

const REWARDS_ON_LIST = 5;

const _RewardsListContainer = ({ hasOtherContainers }: IRewardContainerProps) => {
  const [tag, setTag] = useState(DEFAULT_TAG);
  const [chipList, setChipList] = useState([]);
  const { componentId, onLeftMenuPress } = useNavigation();
  const { onScroll, state, dispatch } = useContext(RewardsManagerContext);
  const { tempGameNewRewardsScreen } = useUserFeatures();

  useTapBackTwiceToExit(componentId);

  const [getRewards, { loading, data: rewards }] = useQueryOnScreenSeen(
    gql("GetMobileRewardsListDocument"),
    ROUTES.rewards,
    { variables: { tag } }
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

  useEffect(() => {
    if (chipList.length === 0 && rewards?.data?.tags.length > 0) {
      setChipList(rewards?.data?.tags);
    }

    if (rewards?.data?.tags.length === 0) {
      dispatch({ type: RewardsManagerActionTypes.DISABLE_CHIP_LIST });
    }
  }, [rewards, chipList.length]);

  useEffect(() => {
    if (rewards?.data?.list.length < REWARDS_ON_LIST) {
      return dispatch({ type: RewardsManagerActionTypes.DISABLE_ON_SCROLL_ACTION });
    }

    if (!state.isOnScrollActionEnabled && rewards?.data?.list.length > REWARDS_ON_LIST) {
      return dispatch({ type: RewardsManagerActionTypes.ENABLE_ON_SCROLL_ACTION });
    }
  }, [rewards?.data?.list?.length, state.isOnScrollActionEnabled]);

  const isRecentLoading = (recentLoading || !recentRewards?.data?.recentlyUsedRewards) && tempGameNewRewardsScreen;

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

        return Navigation.showOverlayWithChild(
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
        );
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
      selectedTag={tag}
      onTagPress={setTag}
      loading={isLoading}
      onRefresh={onRefresh}
      rewardsData={rewards?.data}
      recentRewards={recentRewards?.data}
      chipList={chipList}
      onLeftMenuPress={onLeftMenuPress}
      onItemPress={handleRewardDetailsItemPress}
      onChangeStoreLocationPress={handleStoreLocationPress}
      onScroll={onScroll}
      showChipList={state.showChipList}
      isOnScrollActionEnabled={state.isOnScrollActionEnabled && hasOtherContainers}
      shouldAnimate={state.shouldAnimate}
    />
  );
};

const RewardsListContainer = memo(_RewardsListContainer);
export default RewardsListContainer;
