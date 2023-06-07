import { useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import React, { useCallback, useEffect } from "react";

import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { IReward } from "@organisms/event-reward/event-reward";
import { GQL_MUTATION_JOIN_GOAL } from "@graphql/goals/joinGoal.gql";
import { GetGoalDetails } from "@graphql/_core/schema/GetGoalDetails";
import { GQL_QUERY_GET_GOAL_DETAILS } from "@graphql/goals/getGoalDetails.gql";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { refreshUserProfileEvents, updateUserGoal } from "@redux/user/user.actions";
import { GQL_MUTATION_CLAIM_GOAL_REWARDS } from "@graphql/goals/claimGoalRewards.gql";
import EventDialogScreen from "@components/screens/member/events/event-dialog/event-dialog.screen";
import { GoalActionType, GoalRewardStatus, SduiActionType } from "@graphql/_core/schema/globalTypes";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";
import {
  JoinGoal,
  ClaimGoalRewards,
  JoinGoalVariables,
  ClaimGoalRewardsVariables,
  GetUserProfile_getUserProfile_events as IEvent,
} from "@graphql/_core/schema";

interface IEventDialogContainerProps {
  event: IEvent;
  componentId: string;
  onLeftIconPress: () => void;
}

const EventDialogContainer = ({ componentId, event, onLeftIconPress }: IEventDialogContainerProps) => {
  const dispatch = useDispatch();
  const { data, loading, refetch } = useQuery<GetGoalDetails>(GQL_QUERY_GET_GOAL_DETAILS, {
    variables: { id: event.id, stageId: event.stageId },
    fetchPolicy: "network-only",
  });

  const [claimGoalRewardsMutation] = useMutation<ClaimGoalRewards, ClaimGoalRewardsVariables>(
    GQL_MUTATION_CLAIM_GOAL_REWARDS,
    {
      refetchQueries: [{ query: GQL_QUERY_GET_GOAL_DETAILS, variables: { id: event.id } }],
    }
  );

  useBackHandler(() => {
    Navigation.popToRoot(componentId);
    return true;
  });

  const [joinGoalMutation] = useMutation<JoinGoal, JoinGoalVariables>(GQL_MUTATION_JOIN_GOAL);

  useEffect(() => {
    // rehydrate the daily screen
    dispatch(refreshUserProfileEvents());
  }, []);

  const onClaimReward = useCallback(
    async (reward: IReward): Promise<void> => {
      await claimGoalRewardsMutation({
        variables: {
          rewardIds: [reward.id],
        },
      });
    },
    [claimGoalRewardsMutation]
  );

  const { title, labels, headerBackgroundColor, headerTextColor, headerImage, button, faq, rewards, milestones } =
    data?.getGoalDetails || {};
  const onFaqViewed = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("event_faq_viewed", {
        name: title,
        event_id: event.id,
        faq_name: faq?.text,
      })
    );
  }, [faq?.text, event, title, dispatch]);

  const onActionButtonPress = useCallback(async () => {
    if (button?.onPress) {
      if (button.onPress.goalType) {
        const { goalType } = button.onPress;

        if (goalType === GoalActionType.CLAIM_REWARD) {
          await showYuModal({
            component: {
              id: MODALS.collectEventReward,
              name: MODALS.collectEventReward,
              passProps: {
                goalIds: [event.id],
                event: title,
                rewards: rewards.filter((reward) => reward.status === GoalRewardStatus.completed),
                completed:
                  rewards.filter(({ status }) => status !== GoalRewardStatus.completed).length === milestones.length,
              },
            },
          });
        }

        if (goalType === GoalActionType.JOIN_GOAL) {
          try {
            const response = await joinGoalMutation({ variables: { goalId: event.id } });

            if (response.data?.joinGoal) {
              // updates event panels
              dispatch(updateUserGoal(response.data.joinGoal));
              // updates event dialog
              refetch();
            }
          } catch (e) {
            // do something at some point
          }
        }

        return;
      }

      dispatch({
        type: button.onPress.sduiType,
        payload: { serverPayload: button.onPress.payload },
      });
    }

    if (button.onPress.sduiType === SduiActionType.SDUI_ACTION_SET_BOTTOM_TAB) {
      await Navigation.popToRoot(componentId);
    }
  }, [componentId, button, dispatch]);

  const headerProps = {
    title,
    labels,
    source: { uri: headerImage?.uri },
    backgroundColor: headerBackgroundColor,
    headerTextColor,
    onLeftIconPress,
  };

  if (loading || !data?.getGoalDetails) {
    return <EventDialogLoadingScreen onLeftIconPress={onLeftIconPress} />;
  }

  return (
    <EventDialogScreen
      event={event}
      headerProps={headerProps}
      onFaqViewed={onFaqViewed}
      onClaimReward={onClaimReward}
      onButtonPress={onActionButtonPress}
      {...data.getGoalDetails}
    />
  );
};

export default EventDialogContainer;
