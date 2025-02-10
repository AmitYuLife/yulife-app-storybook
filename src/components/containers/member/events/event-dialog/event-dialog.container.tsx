import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import { t } from "@locale";
import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { IReward } from "@organisms/event-reward/event-reward";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { refreshUserProfileEvents, removeUserProfileEvent } from "@redux/user/user.actions";
import EventDialogScreen from "@components/screens/member/events/event-dialog/event-dialog.screen";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";
import { GoalActionType, GoalRewardStatus, SduiActionType, gql } from "@graphql/__generated";

interface IEventDialogContainerProps {
  eventId: string;
  componentId: string;
  onLeftIconPress: () => void;
}

const EventDialogContainer = ({ componentId, eventId, onLeftIconPress }: IEventDialogContainerProps) => {
  const {
    loading,
    refetch,
    data: { getGoalDetails: goalDetails } = {},
  } = useQuery(gql("GetGoalDetailsDocument"), {
    variables: { id: eventId },
    fetchPolicy: "network-only",
  });

  const event = goalDetails?.dialogInfo;

  const dispatch = useDispatch();
  const [joinGoalMutation] = useMutation(gql("JoinGoalDocument"));
  const [completeGoalMutation] = useMutation(gql("CompleteGoalDocument"));
  const [claimGoalRewardsMutation] = useMutation(gql("ClaimGoalRewardsDocument"), {
    refetchQueries: [{ query: gql("GetGoalDetailsDocument"), variables: { id: eventId } }],
  });

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
    if (goalDetails.button?.onPress?.sduiType !== SduiActionType.SduiActionSetBottomTab) {
      return;
    }

    await Navigation.popToRoot(componentId);
  }, [componentId, goalDetails]);

  /**
   * Marks the specified goal as complete
   */
  const onCloseEvent = useCallback(async (): Promise<void> => {
    await onCompleteEvent(event.participationId);
    dispatch(removeUserProfileEvent(eventId));
    Navigation.dismissAllModals();
    await navigateToComponentId();
  }, [onCompleteEvent, eventId, event, dispatch, navigateToComponentId]);

  /**
   * Send a event to mixpanel when the faq is viewed
   */
  const onFaqViewed = useCallback((): void => {
    dispatch(
      logMixpanelEventActionCreator("event_faq_viewed", {
        name: goalDetails.title,
        event_id: eventId,
        faq_name: goalDetails.faq?.text,
      })
    );
  }, [goalDetails, eventId, dispatch]);

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
      case GoalActionType.ClaimReward:
        return await showYuModal({
          component: {
            id: MODALS.collectEventReward,
            name: MODALS.collectEventReward,
            passProps: {
              goalIds: [eventId],
              event: goalDetails.title,
              rewards: goalDetails.rewards.filter((reward) => reward.status === GoalRewardStatus.Completed),
              completed:
                goalDetails.rewards.filter(({ status }) => status !== GoalRewardStatus.Completed).length ===
                goalDetails.milestones.length,
            },
          },
        });
      case GoalActionType.CloseEvent:
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
      case GoalActionType.JoinGoal:
        try {
          const response = await joinGoalMutation({ variables: { goalId: eventId } });

          if (!response.data?.joinGoal) {
            return;
          }

          // updates event panels
          dispatch(refreshUserProfileEvents());
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
  }, [eventId, goalDetails, dispatch, joinGoalMutation, refetch, navigateToComponentId, onCloseEvent]);

  const handleLeftIconPress = useCallback(() => {
    if (onLeftIconPress) {
      return onLeftIconPress();
    }

    return Navigation.pop(componentId);
  }, [onLeftIconPress, componentId]);

  if (loading || !goalDetails) {
    return <EventDialogLoadingScreen onLeftIconPress={handleLeftIconPress} />;
  }

  const headerProps = {
    title: goalDetails?.title,
    labels: goalDetails?.labels,
    source: { uri: goalDetails?.headerImage?.uri },
    backgroundColor: goalDetails?.headerBackgroundColor,
    headerTextColor: goalDetails?.headerTextColor,
    onLeftIconPress: handleLeftIconPress,
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
