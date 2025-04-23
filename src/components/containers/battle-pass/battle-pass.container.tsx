import React, { memo, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApolloClient, useLazyQuery, useMutation } from "@apollo/client";
import { useModal, useNavigationComponentDidAppear, useQueryOnScreenSeenOnce, useTrack } from "@hooks";
import {
  GetMobileGameBattlePassFullQuery,
  MobileGameBattlePassProgressInfoFragmentDoc,
  gql,
} from "@graphql/__generated";
import { totalCoinsUpdated } from "@redux/coins/coins.actions";
import { BattlePassScreen } from "@screens";
import { useDebouncedMutation } from "@hooks";
import { getUpdatedBattlePassProgress } from "./battle-pass.container.helpers";
import BattlePassLoading from "./battle-pass.loading";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import BattlePassAnimationManager from "./battle-pass-animation.context";
import { getActiveSocialGroupId } from "@redux/leaderboards/leaderboards.selectors";
import { useNavigation } from "@navigation/navigation.context";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import BattlePassSeasonStaging from "@organisms/battle-pass-season-staging/battle-pass-season-staging";
import { pushToScreen } from "@navigation/root";
import { RewardsManagerContext } from "@components/containers/member/rewards/rewards.manager.context";
import { ROUTES } from "@navigation/constants";
import { RewardsManagerActionTypes } from "@components/containers/member/rewards/rewards.types";
import FirstTimeContentLocationSelection from "@components/screens/member/content-location/first-time-content-location-selection";
import { Navigation } from "@navigation/main";
import { isEmpty } from "lodash";
import { prizesAwarded } from "@redux/prizes/prizes.actions";
import { BattlePassEndOfSeasonModal } from "@components/modals";
import { t } from "@locale";

const BattlePassContainer = () => {
  const { componentId } = useNavigation();
  const { onScroll, dispatch: rewardsManagerDispatch } = useContext(RewardsManagerContext);

  const state = useRef<{
    donationUpdates: Record<string, number>;
    goalId: string;
    progressInfoId: string;
    battlePass: GetMobileGameBattlePassFullQuery["battlePass"] | undefined;
    templates: GetMobileGameBattlePassFullQuery["templates"] | undefined;
    isSeasonComplete: boolean;
    isEndOfSeasonModalEnabled: boolean;
  }>({
    donationUpdates: {},
    goalId: "",
    progressInfoId: "",
    battlePass: undefined,
    templates: [],
    isSeasonComplete: false,
    isEndOfSeasonModalEnabled: true,
  });

  const track = useTrack();
  const client = useApolloClient();
  const allTemplateIds = useRef<string[]>([]);
  const dispatch = useDispatch();
  const { modal: levelUpModal, showModal } = useModal();
  const userCoins = useSelector(getTotalCoins);
  const socialGroupId = useSelector(getActiveSocialGroupId);

  const [__, { data: { battlePass = undefined, templates = [], contentLocation = undefined } = {}, loading, refetch }] =
    useQueryOnScreenSeenOnce(gql("GetMobileGameBattlePassFullDocument"), componentId, {
      variables: { socialGroupId },
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-only",
    });

  const [getBattlePassTemplates] = useLazyQuery(gql("GetMobileBattlePassDonationTemplatesDocument"), {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
  });

  useNavigationComponentDidAppear(() => {
    if (allTemplateIds.current.length) {
      getBattlePassTemplates({ variables: { socialGroupId, templateIds: allTemplateIds.current } });
    }
  }, componentId);

  useEffect(() => {
    if (battlePass?.progressStatus?.id) {
      state.current.goalId = battlePass.id;
      state.current.progressInfoId = battlePass.progressStatus.id;
      state.current.battlePass = battlePass;
      state.current.templates = templates;
    }

    if (templates?.length) {
      allTemplateIds.current = templates.map((template) => template.id);
    }

    if (battlePass?.title || battlePass?.description) {
      rewardsManagerDispatch({
        type: RewardsManagerActionTypes.SET_DONATION_INITIAL_STATE,
        payload: { title: battlePass.title, description: battlePass.description },
      });
    }
  }, [battlePass, templates]);

  const [completeMobileGameBattlePassSeason, { loading: isCompleteLoading }] = useMutation(
    gql("CompleteMobileGameBattlePassSeasonDocument")
  );

  const onComplete = useCallback(async () => {
    await completeMobileGameBattlePassSeason({
      variables: { goalId: state.current.goalId, startNew: true },
      onCompleted: () => {
        state.current.isSeasonComplete = true;
      },
    });

    refetch();
  }, [completeMobileGameBattlePassSeason, refetch]);

  const showEndOfSeasonModal = useCallback(() => {
    const isAllRewardsClaimed = state.current.battlePass?.rewards.every((r) => r.status === "claimed");
    const endOfSeasonInfo = (state.current.templates || []).map((item) => ({
      ...item.endOfSeasonInfo,
    }));

    if (isAllRewardsClaimed && !state.current.isSeasonComplete && state.current.isEndOfSeasonModalEnabled) {
      state.current.isEndOfSeasonModalEnabled = false;
      Navigation.showOverlayWithChild(
        <BattlePassEndOfSeasonModal
          title={t("screens.battle_pass.season_complete.modal.title", { name: battlePass?.title })}
          onComplete={onComplete}
          items={endOfSeasonInfo}
          isLoading={isCompleteLoading || loading}
        />,
        false
      );
    }
  }, [onComplete, battlePass?.title, isCompleteLoading, loading]);

  useEffect(() => {
    showEndOfSeasonModal();
  }, [battlePass?.rewards]);

  const [claimMobileGameBattlePassRewards] = useMutation(gql("ClaimMobileGameBattlePassRewardsDocument"), {
    refetchQueries: [{ query: gql("GetMobileGameBattlePassFullDocument"), variables: { socialGroupId } }],
    onCompleted: () => {
      dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
    },
  });

  const [submitMobileGameBattlePassDonations] = useDebouncedMutation(
    gql("SubmitMobileGameBattlePassDonationsDocument"),
    {
      update(cache, response, { variables }) {
        const progressStatus = response?.data?.submitMobileGameBattlePassDonations?.progressStatus;

        if (!progressStatus) {
          // request failed
          return;
        }

        const donations = Array.isArray(variables.donations) ? variables.donations : [variables.donations];

        // todo: move to the backend
        track("battlepass_donation_pressed", {
          donations: donations,
          button_press_count: donations.length,
          total_coin_donations: donations.reduce((acc, curr) => acc + curr.amount, 0),
        });

        // the following updates the cache
        getBattlePassTemplates({ variables: { socialGroupId, templateIds: donations.map((a) => a.donationId) } });

        const amount = Object.values(state.current.donationUpdates).reduce((acc, curr) => acc + curr, 0);
        const updates = getUpdatedBattlePassProgress({
          progress: progressStatus,
          amount,
          showModal,
          openModals: true,
          logMixpanelEvent: track,
        });

        if (!updates) {
          return;
        }

        cache.updateFragment(
          {
            id: `MobileGameBattlePassProgressInfo:${state.current?.progressInfoId}`,
            fragment: MobileGameBattlePassProgressInfoFragmentDoc,
          },
          (progress) => {
            return {
              ...progress,
              ...updates,
            };
          }
        );
      },
      onCompleted(data) {
        dispatch(totalCoinsUpdated(data.submitMobileGameBattlePassDonations.progressStatus.currentBalance));
      },
    },
    {
      timeout: 950,
      beforeMutateHook: () => {
        state.current.donationUpdates = {};
      },
    }
  );

  const onDonationSubmit = useRef((donationId: string, amount: number) => {
    const { goalId } = state.current || {};
    if (!goalId || userCoins === 0) {
      return;
    }

    // Optimistic update
    client.cache.updateFragment(
      {
        id: `MobileGameBattlePassProgressInfo:${state.current?.progressInfoId}`,
        fragment: MobileGameBattlePassProgressInfoFragmentDoc,
      },
      (progress) => {
        if (progress.currentBalance >= amount) {
          state.current.donationUpdates[donationId] = (state.current.donationUpdates[donationId] ?? 0) + amount;
        }

        const nextReward = state?.current?.battlePass?.rewards.find((reward) => reward.position === progress.level + 1);
        const updatedProgress = getUpdatedBattlePassProgress({
          progress,
          amount,
          openModals: true,
          nextReward,
          showModal,
          logMixpanelEvent: track,
          onRewardClaim: getClaimRewardCallback,
        });

        const donations = Object.entries(state.current.donationUpdates)
          ?.filter(([_, a]) => a > 0)
          .map((r) => ({ donationId: r[0], amount: r[1] }));

        submitMobileGameBattlePassDonations({ goalId, donations });

        return {
          ...progress,
          ...updatedProgress,
        };
      }
    );
  });

  const donationTemplates = useMemo(() => {
    return (templates || [])
      .map((item) => ({
        ...item,
        onSubmit: onDonationSubmit.current,
        onLeaderboardPress: () => {
          if (!item.leaderboard?.items?.length) {
            return;
          }

          pushToScreen(ROUTES.rewards, {
            component: {
              id: ROUTES.battlePassLeaderboard,
              name: ROUTES.battlePassLeaderboard,
              passProps: {
                leaderboardId: item.leaderboard.id,
                availableDates: item.availableDates,
                leaderboards: item.leaderboards,
                templateId: item.id,
                updating: Boolean(state.current.donationUpdates?.[item.id]),
              },
            },
          });
        },
      }))
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [templates]);

  const handleStoreLocationPress = useCallback(() => {
    Navigation.dismissAllModals({ animations: { dismissModal: { enabled: false } } });
    Navigation.push(componentId, {
      component: {
        id: ROUTES.selectContentLocation,
        name: ROUTES.selectContentLocation,
        passProps: {
          placement: "donate",
        },
      },
    });
  }, [componentId]);

  const getClaimRewardCallback = useCallback(
    (reward: typeof battlePass.rewards[0]) => {
      if (state.current.isSeasonComplete) {
        state.current.isSeasonComplete = false;
        state.current.isEndOfSeasonModalEnabled = true;
      }

      if (reward.onPress) {
        return reward.onPress;
      }

      return async () => {
        const result = await claimMobileGameBattlePassRewards({ variables: { rewardIds: [reward.id] } });
        dispatch(getUserDataStart({ types: [AppDataType.inventoryInfo] }));

        const awardedPrizeTypes = new Set(
          result.data.claimMobileGameBattlePassRewards.flatMap((prize) => prize.awardedPrizeTypes)
        );

        if (!isEmpty(awardedPrizeTypes)) {
          dispatch(prizesAwarded({ prizeTypes: Array.from(awardedPrizeTypes) }));
        }

        return result;
      };
    },
    [battlePass, claimMobileGameBattlePassRewards, dispatch]
  );

  const rewards = useMemo(
    () =>
      battlePass?.rewards?.map((reward) => ({
        ...reward,
        onPress: getClaimRewardCallback(reward),
      })),
    [battlePass?.rewards, getClaimRewardCallback]
  );

  const showCoinAnimation = useMemo(
    () => userCoins > 0 && battlePass?.progressStatus.status === "active",
    [battlePass, userCoins]
  );

  if (battlePass === null) {
    return <BattlePassSeasonStaging />;
  }

  if (loading || !battlePass) {
    return <BattlePassLoading />;
  }

  return (
    <>
      <BattlePassAnimationManager step={battlePass?.progressStatus?.step} showCoinAnimation={showCoinAnimation}>
        <BattlePassScreen
          title={battlePass?.title || ""}
          description={battlePass?.description || ""}
          disclaimer={battlePass?.disclaimer}
          donationTemplates={donationTemplates}
          backgroundImage={{ uri: battlePass?.backgroundImage?.uri }}
          progressStatus={battlePass?.progressStatus}
          isCompleteLoading={isCompleteLoading}
          rewards={rewards || []}
          onComplete={onComplete}
          showCoinAnimation={showCoinAnimation}
          onScroll={onScroll}
        />
        <FirstTimeContentLocationSelection
          isActive={contentLocation?.hasUserSelectedContentLocation === false}
          contentLocation={contentLocation?.location}
          contentLocationLabel={contentLocation?.locationLabel}
          onChangeContentLocationPress={handleStoreLocationPress}
          placement="donate"
        />
      </BattlePassAnimationManager>
      {levelUpModal}
    </>
  );
};

export default memo(BattlePassContainer);
