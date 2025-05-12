import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { useLazyQuery } from "@apollo/client";
import { GetMobileRewardsListQuery, gql } from "@graphql/__generated";
import { useNavigation } from "@navigation/navigation.context";
import { IIcon } from "@organisms/top-bar/subcomponents/left";
import { useImagePreload, useQueryOnScreenSeen } from "@hooks";
import { RewardOnPressArgs } from "../member/rewards/rewards.types";
import { showYuModal } from "@navigation/root";
import { RewardMilestoneDetails } from "@components/screens/member/rewards/list/subcomponents/reward-milestone-details";
import { t } from "@locale";
import Logger from "@services/logging/logger";
import { isEmpty } from "lodash";
import ShopfrontLoading from "./shopfront-loading";
import ShopfrontScreen from "@components/screens/member/shopfront/shopfront.screen";

interface IRewardPassContainerProps {
  leftIcons: IIcon[];
}
type IGetMobileRewardsListData = GetMobileRewardsListQuery["data"];

const RewardPassContainer = ({ leftIcons }: IRewardPassContainerProps) => {
  const { componentId } = useNavigation();
  const [itemOffset, setItemOffset] = useState(0);
  const [allFetched, setAllFetched] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [moreRewards, setMoreItems] = useState<IGetMobileRewardsListData["list"]>([]);
  const [_, { data: shopfront, loading: isShopfrontLoading }] = useQueryOnScreenSeen(
    gql("GetMobileGameShopfrontDocument"),
    ROUTES.rewards,
    {}
  );
  const [getMoreRewards, { loading: isFetchingMore }] = useLazyQuery(gql("GetMobileRewardsListItemsDocument"), {
    fetchPolicy: "network-only",
  });

  const { hasLoaded: hasImagesLoaded } = useImagePreload({
    images: shopfront?.rewardPasses?.activeRewardPasses
      ?.map(({ backgroundImage, foregroundImage, passIcon }) => [
        backgroundImage?.uri,
        foregroundImage?.uri,
        passIcon?.uri,
      ])
      ?.flat(),
  });

  const allRewardItems = useMemo(() => {
    return [...(shopfront?.rewardList?.list || []), ...(moreRewards || [])];
  }, [shopfront?.rewardList?.list, moreRewards]);

  useEffect(() => {
    if (allRewardItems.length > itemOffset) {
      setItemOffset(allRewardItems.length);
    }
  }, [itemOffset, allRewardItems]);

  const handleEndReached = useCallback(async () => {
    if (allFetched || isFetchingMore) {
      return;
    }

    const items = await getMoreRewards({ variables: { offset: itemOffset } });
    if (isEmpty(items.data?.data?.list)) {
      setAllFetched(true);
      return;
    }

    setMoreItems((oldRewards) => [...oldRewards, ...items.data.data.list]);
  }, [allFetched, isFetchingMore, getMoreRewards, itemOffset]);

  const onPressWallet = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.wallet,
        name: ROUTES.wallet,
      },
    });
    return;
  }, [componentId]);

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

  const onItemPress = useCallback(
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
            stepId: reward?.sduiStepId ?? shopfront?.rewardList?.sduiStepId,
            dynamicId: reward.id,
            shouldRefetchOnScreenSeen: true,
          },
        },
      });
    },
    [componentId, shopfront?.rewardList?.sduiStepId]
  );

  const shouldShowFirstTimeModal = shopfront?.rewardList?.hasUserSelectedStoreLocation === false;

  if ((isShopfrontLoading && !shopfront) || !hasImagesLoaded) {
    return <ShopfrontLoading leftIcons={leftIcons} />;
  }

  return (
    <ShopfrontScreen
      leftIcons={leftIcons}
      shopfront={shopfront}
      onItemPress={onItemPress}
      isSearchOpen={isSearchOpen}
      onPressWallet={onPressWallet}
      allRewardItems={allRewardItems}
      setIsSearchOpen={setIsSearchOpen}
      handleEndReached={handleEndReached}
      handleStoreLocationPress={handleStoreLocationPress}
      shouldShowFirstTimeModal={shouldShowFirstTimeModal}
    />
  );
};

export default memo(RewardPassContainer);
