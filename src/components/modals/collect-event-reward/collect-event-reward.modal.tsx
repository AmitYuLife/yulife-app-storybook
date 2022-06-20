import { useMutation } from "@apollo/react-hooks";
import { eventState } from "@components/screens/member/events/collect-event-reward/collect-event-reward.screen";
import { GQL_MUTATION_CLAIM_GOAL_REWARDS } from "@graphql/goals/claimGoalRewards.gql";
import { ClaimGoalRewards, ClaimGoalRewardsVariables } from "@graphql/_core/schema";
import { GoalRewardStatus } from "@graphql/_core/schema/globalTypes";
import { t } from "@locale";
import { MODALS } from "@navigation/constants";
import {
  FADE_IN_DURATION,
  FADE_OUT_DURATION,
  FADE_OUT_PAUSE,
  FADE_PAUSE_DURATION,
  IReward,
} from "@organisms/event-reward/event-reward";
import { getUserStart, refreshUserProfileEvents } from "@redux/user/user.actions";
import { CollectEventRewardScreen } from "@screens";
import Logger from "@services/logging/logger";
import { delay } from "@utils/misc";
import React, { useCallback, useMemo, useState } from "react";
import { Navigation } from "react-native-navigation";
import { useDispatch } from "react-redux";

interface IProps {
  event: string;
  rewards: IReward[];
  completed?: boolean;
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
const TRANSITION_DURATION = FADE_IN_DURATION + FADE_PAUSE_DURATION + FADE_OUT_DURATION + FADE_OUT_PAUSE;
const TRANSITION_DELAY = 300;

export default function CollectEventRewardModal({ event, rewards, completed = false }: IProps) {
  const [localRewards, setLocalRewards] = useState(rewards);
  const [eventFinished, setEventFinished] = useState(
    completed && rewards.every(({ status }) => status !== GoalRewardStatus.completed)
  );
  const dispatch = useDispatch();
  const [claimGoalRewardsMutation] = useMutation<ClaimGoalRewards, ClaimGoalRewardsVariables>(
    GQL_MUTATION_CLAIM_GOAL_REWARDS,
    { refetchQueries: ["GetGoalDetails"] }
  );

  const { orderedRewards, unclaimedRewardIds } = useMemo(() => {
    return localRewards
      .sort(({ status: status1 }, { status: status2 }) => {
        if (status1 === status2) {
          return 0;
        }

        if (status1 === GoalRewardStatus.completed) {
          return -1;
        }

        return 1;
      })
      .reduce<{ orderedRewards: IReward[]; unclaimedRewardIds: string[] }>(
        (map, reward, index) => {
          if (reward.status === GoalRewardStatus.completed) {
            map.unclaimedRewardIds.push(reward.id);
          }

          map.orderedRewards.push({ ...reward, animationDelay: index * TRANSITION_DELAY });
          return map;
        },
        { orderedRewards: [], unclaimedRewardIds: [] }
      );
  }, [localRewards]);

  const onCta = useCallback(async () => {
    if (eventFinished) {
      handleModalClose();
      return;
    }

    try {
      const result = await claimGoalRewardsMutation({ variables: { rewardIds: unclaimedRewardIds } });

      const updatedRewards = result?.data?.claimGoalRewards?.rewards;

      if (updatedRewards) {
        setLocalRewards((stateRewards) => {
          const claimedRewardIds = updatedRewards.map(({ id }) => id);
          return stateRewards.map((reward) => {
            if (claimedRewardIds.includes(reward.id)) {
              return { ...reward, status: GoalRewardStatus.claimed };
            }

            return reward;
          });
        });

        await delay(unclaimedRewardIds.length * TRANSITION_DELAY + TRANSITION_DURATION + 200);
        dispatch(refreshUserProfileEvents());

        // update today's yucoin screen
        dispatch(getUserStart());
      }
    } catch (e) {
      Logger.error(e, { event: "claim-goal" });
    } finally {
      if (completed) {
        setEventFinished(true);
      } else {
        handleModalClose();
      }
    }
  }, [eventFinished]);

  const { title, descriptionTitle, description, cta, status } = useMemo(() => {
    if (eventFinished) {
      return {
        title: t("screens.eventCompleted.title", { event }),
        descriptionTitle: t("screens.eventCompleted.descriptionTitle"),
        description: t("screens.eventCompleted.description"),
        cta: t("screens.eventCompleted.cta"),
        status: eventState.COMPLETED,
      };
    }

    return {
      title: t("screens.collectRewardModal.title", { event }),
      descriptionTitle: t("screens.collectRewardModal.descriptionTitle"),
      description: t("screens.collectRewardModal.description"),
      cta: t("screens.collectRewardModal.cta"),
      status: eventState.IN_PROGRESS,
    };
  }, [eventFinished]);
  return (
    <CollectEventRewardScreen
      title={title}
      descriptionTitle={descriptionTitle}
      description={description}
      cta={cta}
      onCta={onCta}
      rewards={orderedRewards}
      lottie={lottie}
      status={status}
    />
  );
}
