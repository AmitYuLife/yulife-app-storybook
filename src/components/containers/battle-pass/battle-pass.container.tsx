import React, { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApolloClient, useLazyQuery, useMutation } from "@apollo/client";
import { GetMobileGameBattlePassQuery, MobileGameBattlePassProgressInfoFragmentDoc, gql } from "@graphql/__generated";
import { totalCoinsUpdated } from "@redux/coins/coins.actions";
import { BattlePassScreen } from "@screens";
import { debounce, random } from "lodash";
import { getUpdatedProgress } from "./battle-pass.container.helpers";
import BattlePassLoading from "./battle-pass.loading";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import BattlePassAnimationManager from "./battle-pass-animation.context";
import { useNavigationComponentDidAppear } from "@hooks";
import { TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

interface IProps {
  componentId: string;
  onLeftMenuPress: () => void;
}

const BattlePassContainer = ({ onLeftMenuPress }: IProps) => {
  const state = useRef<{
    donationUpdates: { [key: string]: number };
    goalId: string;
    progressInfoId: string;
    battlePass: GetMobileGameBattlePassQuery["getMobileGameBattlePass"] | undefined;
  }>({
    donationUpdates: {},
    goalId: "",
    progressInfoId: "",
    battlePass: undefined,
  });
  const client = useApolloClient();
  const dispatch = useDispatch();
  const userCoins = useSelector(getTotalCoins);

  const [getBattlePass, { data: { getMobileGameBattlePass: battlePass } = { getMobileGameBattlePass: undefined } }] =
    useLazyQuery(gql("GetMobileGameBattlePassDocument"), {
      fetchPolicy: "cache-and-network",
    });

  useEffect(() => {
    if (battlePass?.progressStatus?.id) {
      state.current.goalId = battlePass.id;
      state.current.progressInfoId = battlePass.progressStatus.id;
      state.current.battlePass = battlePass;
    }
  }, [battlePass]);

  useNavigationComponentDidAppear(() => {
    getBattlePass();
  });

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
          state?.current?.battlePass?.rewards.find((reward) => reward.position === progress.level)
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

  const donationItems = useMemo(
    () =>
      battlePass?.donation?.items?.map((item) => ({
        ...item,
        onSubmit: onDonationSubmit.current,
        description: getDonationList(item.title),
      })) || [],

    [battlePass?.donation?.items]
  );

  const claimReward = useCallback((rewardId: string, onPress: any) => {
    if (onPress) {
      return onPress;
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

  const donations = useMemo(
    () => ({
      title: battlePass?.donation?.title,
      description: battlePass?.donation?.description,
      items: donationItems,
    }),
    [battlePass?.donation?.title, battlePass?.donation?.description, donationItems]
  );

  if (!battlePass) {
    return <BattlePassLoading onLeftMenuPress={onLeftMenuPress} />;
  }

  return (
    <BattlePassAnimationManager
      step={battlePass?.progressStatus?.step}
      TopBar={<TopBarAbsolute type="white" leftIcon={LeftIcon.MENU} onPressLeftIcon={onLeftMenuPress} />}
    >
      <BattlePassScreen
        title={battlePass?.title || ""}
        description={battlePass?.description || ""}
        donation={donations}
        backgroundImage={{
          uri: battlePass?.backgroundImage.uri,
        }}
        progressStatus={battlePass?.progressStatus}
        rewards={rewards || []}
        onComplete={onComplete}
        showCoinAnimation={userCoins > 0 && battlePass?.progressStatus.status === "active"}
      />
    </BattlePassAnimationManager>
  );
};

const getDonationList = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("water")) {
    return `${random(1, 10)}L water donated`;
  }

  if (lowerTitle.includes("plant")) {
    return `${random(1, 10)} tress planted`;
  }

  if (lowerTitle.includes("meal") || lowerTitle.includes("feed")) {
    return `${random(1, 10)} meals donated`;
  }

  if (lowerTitle.includes("ocean")) {
    return `${random(1, 10)}kg of plastic removed`;
  }
};

export default memo(BattlePassContainer);
