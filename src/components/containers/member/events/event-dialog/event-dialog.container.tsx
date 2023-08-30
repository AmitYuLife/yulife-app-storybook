import { useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import React, { useCallback, useEffect } from "react";

import { t } from "@locale";
import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { IReward } from "@organisms/event-reward/event-reward";
import { GQL_MUTATION_JOIN_GOAL } from "@graphql/goals/joinGoal.gql";
import { GetGoalDetails } from "@graphql/_core/schema/GetGoalDetails";
import { GQL_QUERY_GET_GOAL_DETAILS } from "@graphql/goals/getGoalDetails.gql";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { refreshUserProfileEvents, removeUserProfileEvent, updateUserGoal } from "@redux/user/user.actions";
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
  CompleteGoal,
  CompleteGoalVariables,
} from "@graphql/_core/schema";
import { GQL_MUTATION_COMPLETE_GOAL } from "@graphql/goals/completeGoal.gql";

interface IEventDialogContainerProps {
  event: IEvent;
  componentId: string;
  onLeftIconPress: () => void;
}

const EventDialogContainer = ({ componentId, event, onLeftIconPress }: IEventDialogContainerProps) => {
  const {
    loading,
    refetch,
    data: { getGoalDetails: goalDetails } = {},
  } = useQuery<GetGoalDetails>(GQL_QUERY_GET_GOAL_DETAILS, {
    variables: { id: event.id, stageId: event.stageId },
    fetchPolicy: "network-only",
  });

  const dispatch = useDispatch();
  const [joinGoalMutation] = useMutation<JoinGoal, JoinGoalVariables>(GQL_MUTATION_JOIN_GOAL);
  const [completeGoalMutation] = useMutation<CompleteGoal, CompleteGoalVariables>(GQL_MUTATION_COMPLETE_GOAL);
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

  useEffect(() => {
    // rehydrate the daily screen
    dispatch(refreshUserProfileEvents());
  }, [dispatch]);

  /**
   * Claims the specified reward
   *
   * @param reward The reward to claim
   */
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

  /**
   * Marks the specified goal as complete
   *
   * @param participationId The participationId of the goal to mark as completed
   */
  const onCompleteEvent = useCallback(
    async (participationId: string): Promise<void> => {
      await completeGoalMutation({
        variables: {
          participationId,
        },
      });
    },
    [completeGoalMutation]
  );

  /**
   * Navigates to the specified component id
   */
  const navigateToComponentId = useCallback(async (): Promise<void> => {
    if (goalDetails.button?.onPress?.sduiType !== SduiActionType.SDUI_ACTION_SET_BOTTOM_TAB) {
      return;
    }

    await Navigation.popToRoot(componentId);
  }, [componentId, goalDetails]);

  /**
   * Marks the specified goal as complete
   */
  const onCloseEvent = useCallback(async (): Promise<void> => {
    await onCompleteEvent(event.participationId);
    dispatch(removeUserProfileEvent(event.id));
    Navigation.dismissAllModals();
    await navigateToComponentId();
  }, [onCompleteEvent, event, dispatch, navigateToComponentId]);

  /**
   * Send a event to mixpanel when the faq is viewed
   */
  const onFaqViewed = useCallback((): void => {
    dispatch(
      logMixpanelEventActionCreator("event_faq_viewed", {
        name: goalDetails.title,
        event_id: event.id,
        faq_name: goalDetails.faq?.text,
      })
    );
  }, [goalDetails, event, dispatch]);

  /**
   * Triggers a dynamic button action sent via the server
   */
  const onButtonPress = useCallback(async (): Promise<void> => {
    if (!goalDetails.button?.onPress) {
      return navigateToComponentId();
    }

    if (!goalDetails.button?.onPress?.goalType) {
      dispatch({
        type: goalDetails.button.onPress.sduiType,
        payload: { serverPayload: goalDetails.button.onPress.payload },
      });

      return navigateToComponentId();
    }

    switch (goalDetails.button?.onPress?.goalType) {
      case GoalActionType.CLAIM_REWARD:
        return await showYuModal({
          component: {
            id: MODALS.collectEventReward,
            name: MODALS.collectEventReward,
            passProps: {
              goalIds: [event.id],
              event: goalDetails.title,
              rewards: goalDetails.rewards.filter((reward) => reward.status === GoalRewardStatus.completed),
              completed:
                goalDetails.rewards.filter(({ status }) => status !== GoalRewardStatus.completed).length ===
                goalDetails.milestones.length,
            },
          },
        });
      case GoalActionType.CLOSE_EVENT:
        return await showYuModal({
          component: {
            id: MODALS.generic,
            name: MODALS.generic,
            passProps: {
              onPress: onCloseEvent,
              isPrimaryOnePressOnly: true,
              heading: t("screens.event_close_modal.title"),
              onPressSecondary: () => Navigation.dismissAllModals(),
              subheading: t("screens.event_close_modal.description"),
              ctaLabel: t("screens.event_close_modal.confirm_button"),
              ctaLabelSecondary: t("screens.event_close_modal.cancel_button"),
            },
          },
        });
      case GoalActionType.JOIN_GOAL:
        try {
          const response = await joinGoalMutation({ variables: { goalId: event.id } });

          if (!response.data?.joinGoal) {
            return;
          }

          // updates event panels
          dispatch(updateUserGoal(response.data.joinGoal));
          // updates event dialog
          refetch();
        } catch (error) {
          Logger.error(error, { file: "event-dialog.container" });
        }

        break;
      default:
        Logger.error(new Error("Goal type not supported"), { file: "event-dialog.container" });
        break;
    }
  }, [event, goalDetails, dispatch, joinGoalMutation, refetch, navigateToComponentId, onCloseEvent]);

  if (loading || !goalDetails) {
    return <EventDialogLoadingScreen onLeftIconPress={onLeftIconPress} />;
  }

  const headerProps = {
    title: goalDetails?.title,
    labels: goalDetails?.labels,
    source: { uri: goalDetails?.headerImage?.uri },
    backgroundColor: goalDetails?.headerBackgroundColor,
    headerTextColor: goalDetails?.headerTextColor,
    onLeftIconPress,
  };

  return (
    <EventDialogScreen
      event={event}
      headerProps={headerProps}
      onFaqViewed={onFaqViewed}
      onClaimReward={onClaimReward}
      onButtonPress={onButtonPress}
      onCompleteEvent={onCompleteEvent}
      hideHint={goalDetails?.hideHint}
      {...goalDetails}
    />
  );
};

export default EventDialogContainer;
