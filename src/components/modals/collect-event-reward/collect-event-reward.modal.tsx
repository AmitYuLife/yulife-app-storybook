import React, { useCallback, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import { Navigation } from "react-native-navigation";
import { CollectEventRewardScreen } from "@screens";
import {
  FADE_IN_DURATION,
  FADE_OUT_DURATION,
  FADE_OUT_PAUSE,
  FADE_PAUSE_DURATION,
  IReward,
} from "@organisms/event-reward/event-reward";
import { ClaimGoalRewards, ClaimGoalRewardsVariables } from "@graphql/_core/schema";
import { GQL_MUTATION_CLAIM_GOAL_REWARDS } from "@graphql/goals/claimGoalRewards.gql";
import { getUserStart, refreshUserProfileEvents } from "@redux/user/user.actions";
import { MODALS } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { delay } from "@utils/misc";

interface IProps {
  title: string;
  descriptionTitle: string;
  description: string;
  cta: string;
  rewards: IReward[];
}

const lottie = {
  __typename: "ContentItemLottie",
  id: "event-reward-lottie",
  uri:
    "https://yulife-local.imgix.net/events/lottie/trophy-2022-02-28-T-14-22-00.json?ixlib=js-3.2.1&s=ebcbcc7051307804cabcf5d732c5613f",
  autoPlay: true,
  loop: false,
  aspectRatio: 1,
  styles: null as any,
  onAnimationEnd: null as any,
};

const handleModalClose = () => Navigation.dismissModal(MODALS.collectEventReward);
const TRANSITION_DELAY = FADE_IN_DURATION + FADE_PAUSE_DURATION + FADE_OUT_DURATION + FADE_OUT_PAUSE;
export default function CollectEventRewardModal({ title, descriptionTitle, description, cta, rewards }: IProps) {
  const [localRewards, setLocalRewards] = useState(
    rewards.map((reward, index) => ({ ...reward, animationDelay: index * TRANSITION_DELAY }))
  );
  const dispatch = useDispatch();
  const [claimGoalRewardsMutation] = useMutation<ClaimGoalRewards, ClaimGoalRewardsVariables>(
    GQL_MUTATION_CLAIM_GOAL_REWARDS,
    { refetchQueries: ["GetGoalDetails"] }
  );

  const onClaimRewardPress = useCallback(async () => {
    try {
      const rewardIds = rewards.map((r) => r.id);
      const result = await claimGoalRewardsMutation({ variables: { rewardIds } });

      if (result?.data?.claimGoalRewards?.rewards) {
        setLocalRewards(
          result.data.claimGoalRewards.rewards
            .filter((r) => rewardIds.includes(r.id))
            .map((reward, index) => ({ ...reward, animationDelay: index * TRANSITION_DELAY }))
        );

        await delay(localRewards.length * TRANSITION_DELAY + 200);
        dispatch(refreshUserProfileEvents());
        // update today's yucoin screen
        dispatch(getUserStart());
      }
    } catch (e) {
      Logger.error(e, { event: "claim-goal" });
    } finally {
      handleModalClose();
    }
  }, [claimGoalRewardsMutation, dispatch, rewards?.length]);

  return (
    <CollectEventRewardScreen
      title={title}
      descriptionTitle={descriptionTitle}
      description={description}
      cta={cta}
      onCta={onClaimRewardPress}
      rewards={localRewards}
      lottie={lottie}
    />
  );
}
