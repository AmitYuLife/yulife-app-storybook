import { useMutation } from "@apollo/client";
import { eventState } from "@components/screens/member/events/collect-event-reward/collect-event-reward.screen";
import { t } from "@locale";
import { MODALS } from "@navigation/constants";
import { IReward } from "@organisms/event-reward/event-reward";
import { getUserDataStart, refreshUserProfileEvents } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { CollectEventRewardScreen } from "@screens";
import Logger from "@services/logger/logger";
import { delay } from "@utils/misc";
import React, { useCallback, useMemo, useState } from "react";
import { Navigation } from "@navigation/main";
import { useDispatch } from "react-redux";

import { GoalRewardStatus, gql } from "@graphql/__generated";

interface IProps {
  goalIds?: string[];
  event: string;
  rewards: IReward[];
  completed?: boolean;
}

const TRANSITION_DELAY = 500;
const AFTER_ALL_REWARDS_REDEEMED_DELAY = 200;

const CollectEventRewardModal = ({ goalIds, event, rewards, completed = false }: IProps) => {
  const [localRewards, setLocalRewards] = useState(rewards || []);
  const [eventFinished, setEventFinished] = useState(
    completed && rewards.every(({ status }) => status !== GoalRewardStatus.Completed)
  );
  const dispatch = useDispatch();

  const handleModalClose = useCallback(() => {
    dispatch(refreshUserProfileEvents());
    dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
    Navigation.dismissModal(MODALS.collectEventReward);
  }, [dispatch]);

  const [claimGoalRewardsMutation] = useMutation(
    gql("ClaimGoalRewardsDocument"),
    goalIds && {
      refetchQueries: goalIds.map((goalId) => ({
        query: gql("GetGoalDetailsDocument"),
        variables: { id: goalId },
      })),
    }
  );

  const { orderedRewards, unclaimedRewardIds } = useMemo(() => {
    return localRewards
      .sort(({ status: status1 }, { status: status2 }) => {
        if (status1 === status2) {
          return 0;
        }

        if (status1 === GoalRewardStatus.Completed) {
          return -1;
        }

        return 1;
      })
      .reduce<{ orderedRewards: IReward[]; unclaimedRewardIds: string[] }>(
        (map, reward, index) => {
          if (reward.status === GoalRewardStatus.Completed) {
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
          return stateRewards.map((reward) => {
            if (unclaimedRewardIds.includes(reward.id)) {
              return { ...reward, status: GoalRewardStatus.Claimed };
            }

            return reward;
          });
        });

        await delay(unclaimedRewardIds.length * TRANSITION_DELAY + AFTER_ALL_REWARDS_REDEEMED_DELAY);
      }
    } catch (e) {
      Logger.notify(e, { event: "claim-goal" });
    } finally {
      if (completed) {
        setEventFinished(true);
      } else {
        handleModalClose();
      }
    }
  }, [eventFinished, unclaimedRewardIds]);

  const { title, descriptionTitle, description, cta, status } = useMemo(() => {
    if (eventFinished) {
      return {
        title:
          goalIds?.length > 1
            ? t("screens.event_completed.multiple_events_title")
            : t("screens.event_completed.title", { event }),
        descriptionTitle: t("screens.event_completed.description_title"),
        description: t("screens.event_completed.description"),
        cta: t("labels.cta.great"),
        status: eventState.COMPLETED,
      };
    }

    return {
      title:
        goalIds?.length > 1
          ? t("screens.collect_reward_modal.multiple_events_title")
          : t("screens.collect_reward_modal.title", { event }),
      descriptionTitle: t("screens.collect_reward_modal.description_title"),
      description: t("screens.collect_reward_modal.description"),
      cta: t("screens.collect_reward_modal.cta"),
      status: eventState.IN_PROGRESS,
    };
  }, [eventFinished, goalIds?.length]);
  return (
    <CollectEventRewardScreen
      title={title}
      descriptionTitle={descriptionTitle}
      description={description}
      cta={cta}
      onCta={onCta}
      rewards={orderedRewards}
      status={status}
    />
  );
};

export default CollectEventRewardModal;
