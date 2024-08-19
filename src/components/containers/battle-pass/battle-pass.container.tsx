import React, { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
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
import { TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { getActiveSocialGroupId } from "@redux/leaderboards/leaderboards.selectors";
import { useNavigation } from "@navigation/navigation.context";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

const BattlePassContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();

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
  const dispatch = useDispatch();
  const userCoins = useSelector(getTotalCoins);
  const socialGroupId = useSelector(getActiveSocialGroupId);

  const { data: { battlePass = undefined, templates = [] } = {} } = useQuery(
    gql("GetMobileGameBattlePassFullDocument"),
    {
      variables: { socialGroupId },
      fetchPolicy: "cache-and-network",
      // nextFetchPolicy: "cache-only",
    }
  );

  useEffect(() => {
    if (battlePass?.progressStatus?.id) {
      state.current.goalId = battlePass.id;
      state.current.progressInfoId = battlePass.progressStatus.id;
      state.current.battlePass = battlePass;
    }
  }, [battlePass]);

  const [claimMobileGameBattlePassRewards] = useMutation(gql("ClaimMobileGameBattlePassRewardsDocument"));

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

  const [completeMobileGameBattlePassSeason] = useMutation(gql("CompleteMobileGameBattlePassSeasonDocument"));

  const debouncedDonationSubmit = useRef(
    debounce(
      () => {
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
        submitMobileGameBattlePassDonations({
          variables: { goalId, donations },
        });
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

  const onComplete = useCallback(() => {
    completeMobileGameBattlePassSeason({
      variables: { goalId: state.current.goalId, startNew: true },
      updateQueries: {
        getMobileGameBattlePass: (_, { mutationResult }) => {
          return mutationResult;
        },
      },
    });
  }, [completeMobileGameBattlePassSeason]);

  const donationTemplates = useMemo(
    () =>
      (templates || []).map((item) => ({
        ...item,
        onSubmit: onDonationSubmit.current,
      })),
    [templates]
  );

  const claimReward = useCallback((rewardId: string, onPress: any) => {
    if (onPress) {
      //   return onPress; /// disabling this until claiming modals are ready
    }

    return claimMobileGameBattlePassRewards({ variables: { rewardIds: [rewardId] } });
  }, []);

  const rewards = useMemo(
    () =>
      battlePass?.rewards?.map((reward) => ({
        ...reward,
        onPress: () => claimReward(reward.id, reward.onPress),
      })),
    [battlePass?.rewards, claimReward]
  );

  const handlePurchasesPress = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.purchases,
        name: ROUTES.purchases,
      },
    });
  }, [componentId]);

  if (!battlePass) {
    return <BattlePassLoading />;
  }

  return (
    <BattlePassAnimationManager
      step={battlePass?.progressStatus?.step}
      TopBar={<TopBarAbsolute type="white" leftIcon={LeftIcon.MENU} onPressLeftIcon={onLeftMenuPress} />}
    >
      <BattlePassScreen
        title={battlePass?.title || ""}
        description={battlePass?.description || ""}
        donationTemplates={donationTemplates}
        backgroundImage={{ uri: battlePass?.backgroundImage?.uri }}
        progressStatus={battlePass?.progressStatus}
        rewards={rewards || []}
        onComplete={onComplete}
        showCoinAnimation={userCoins > 0 && battlePass?.progressStatus.status === "active"}
        handlePurchasesPress={handlePurchasesPress}
      />
    </BattlePassAnimationManager>
  );
};

export default memo(BattlePassContainer);
