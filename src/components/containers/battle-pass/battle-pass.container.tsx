import React, { memo, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApolloClient, useLazyQuery, useMutation } from "@apollo/client";
import { useNavigationComponentDidAppear, useQueryOnScreenSeenOnce } from "@hooks";
import {
  GetMobileGameBattlePassFullQuery,
  MobileGameBattlePassProgressInfoFragmentDoc,
  gql,
} from "@graphql/__generated";
import { totalCoinsUpdated } from "@redux/coins/coins.actions";
import { BattlePassScreen } from "@screens";
import { debounce } from "lodash";
import { getUpdatedProgress } from "./battle-pass.container.helpers";
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

const BattlePassContainer = () => {
  const { componentId } = useNavigation();
  const { onScroll, dispatch: rewardsManagerDispatch } = useContext(RewardsManagerContext);

  const state = useRef<{
    donationUpdates: { [key: string]: number };
    goalId: string;
    progressInfoId: string;
    battlePass: GetMobileGameBattlePassFullQuery["battlePass"] | undefined;
    templates: GetMobileGameBattlePassFullQuery["templates"] | undefined;
  }>({
    donationUpdates: {},
    goalId: "",
    progressInfoId: "",
    battlePass: undefined,
    templates: [],
  });
  const client = useApolloClient();
  const allTemplateIds = useRef<string[]>([]);
  const dispatch = useDispatch();
  const userCoins = useSelector(getTotalCoins);
  const socialGroupId = useSelector(getActiveSocialGroupId);

  const [__, { data: { battlePass = undefined, templates = [] } = {}, loading, refetch }] = useQueryOnScreenSeenOnce(
    gql("GetMobileGameBattlePassFullDocument"),
    componentId,
    {
      variables: { socialGroupId },
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-only",
    }
  );

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
    }

    if (templates?.length) {
      allTemplateIds.current = templates.map((t) => t.id);
    }

    if (battlePass?.title || battlePass?.description) {
      rewardsManagerDispatch({
        type: RewardsManagerActionTypes.SET_DONATION_INITIAL_STATE,
        payload: { title: battlePass.title, description: battlePass.description },
      });
    }
  }, [battlePass, templates]);

  const [claimMobileGameBattlePassRewards] = useMutation(gql("ClaimMobileGameBattlePassRewardsDocument"), {
    refetchQueries: [{ query: gql("GetMobileGameBattlePassFullDocument"), variables: { socialGroupId } }],
    onCompleted: () => {
      dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
    },
  });

  const [submitMobileGameBattlePassDonations] = useMutation(gql("SubmitMobileGameBattlePassDonationsDocument"), {
    update(
      cache,
      {
        data: {
          submitMobileGameBattlePassDonations: { progressStatus },
        },
      }
    ) {
      const amount = Object.values(state.current.donationUpdates).reduce((acc, curr) => acc + curr, 0);
      const updates = getUpdatedProgress(progressStatus, amount, true);

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
  });

  const [completeMobileGameBattlePassSeason, { loading: isCompleteLoading }] = useMutation(
    gql("CompleteMobileGameBattlePassSeasonDocument")
  );

  const debouncedDonationSubmit = useRef(
    debounce(
      async () => {
        try {
          if (userCoins === 0) {
            return;
          }

          const { goalId } = state.current || {};

          if (!goalId) {
            return;
          }

          const updates = Object.entries(state.current.donationUpdates)?.filter(([_, amount]) => amount > 0);
          state.current.donationUpdates = {};

          const donations = updates.map(([donationId, amount]) => ({ donationId, amount }));

          await submitMobileGameBattlePassDonations({ variables: { goalId, donations } });

          // the following updates the cache
          await getBattlePassTemplates({
            variables: { socialGroupId, templateIds: donations.map((d) => d.donationId) },
          });
        } catch (e) {
          // log
        }
      },
      800,
      { leading: false }
    )
  );

  const onDonationSubmit = useRef((donationId: string, amount: number) => {
    const { goalId } = state.current || {};
    if (!goalId) {
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

        const updates = getUpdatedProgress(
          progress,
          amount,
          true,
          state?.current?.battlePass?.rewards.find((reward) => reward.position === progress.level + 1)
        );

        if (updates) {
          debouncedDonationSubmit.current?.();
        }

        if (updates?.level && updates.level !== progress.level) {
          debouncedDonationSubmit.current?.flush();
        }

        return {
          ...progress,
          ...updates,
        };
      }
    );
  });

  const onComplete = useCallback(async () => {
    await completeMobileGameBattlePassSeason({
      variables: { goalId: state.current.goalId, startNew: true },
    });

    refetch();
  }, [completeMobileGameBattlePassSeason, refetch]);

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
              id: ROUTES.learnAboutDonations,
              name: ROUTES.learnAboutDonations,
              passProps: {
                leaderboardId: item.leaderboard.id,
                templateId: item.id,
                updating: Boolean(state.current.donationUpdates?.[item.id]),
              },
            },
          });
        },
      }))
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [templates]);

  const getClaimRewardCallback = useCallback(
    (reward: typeof battlePass.rewards[0]) => {
      if (reward.onPress) {
        return reward.onPress;
      }

      return () => claimMobileGameBattlePassRewards({ variables: { rewardIds: [reward.id] } });
    },
    [battlePass, claimMobileGameBattlePassRewards]
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
    return <BattlePassSeasonStaging componentId={componentId} />;
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
      </BattlePassAnimationManager>
    </>
  );
};

export default memo(BattlePassContainer);
