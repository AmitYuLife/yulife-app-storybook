import { useMutation, useQuery } from "@apollo/client";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";
import EventDialogScreen from "@components/screens/member/events/event-dialog/event-dialog.screen";
import { GQL_QUERY_GET_GOAL_DETAILS } from "@graphql/goals/getGoalDetails.gql";
import { GQL_MUTATION_JOIN_GOAL } from "@graphql/goals/joinGoal.gql";
import { JoinGoal, JoinGoalVariables } from "@graphql/_core/schema";
import { GetGoalDetails } from "@graphql/_core/schema/GetGoalDetails";
import { GoalActionType, GoalRewardStatus } from "@graphql/_core/schema/globalTypes";
import { useBackHandler } from "@hooks";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { refreshUserProfileEvents, updateUserGoal } from "@redux/user/user.actions";
import React, { FC, useCallback, useEffect } from "react";
import { Navigation } from "react-native-navigation";
import { useDispatch } from "react-redux";

interface IProps {
  componentId: string;
  goalId: string;
  stageId: string;
  onLeftIconPress: () => void;
}

const EventDialogContainer: FC<IProps> = ({ componentId, goalId, stageId, onLeftIconPress }) => {
  const dispatch = useDispatch();
  const { data, loading, refetch } = useQuery<GetGoalDetails>(GQL_QUERY_GET_GOAL_DETAILS, {
    variables: { id: goalId, stageId },
    fetchPolicy: "network-only",
  });

  useBackHandler(() => {
    Navigation.popToRoot(componentId);
    return true;
  });

  const [joinGoalMutation] = useMutation<JoinGoal, JoinGoalVariables>(GQL_MUTATION_JOIN_GOAL);

  useEffect(() => {
    // rehydrate the daily screen
    dispatch(refreshUserProfileEvents());
  }, []);

  const { title, labels, headerBackgroundColor, headerTextColor, headerImage, button, faq, rewards, milestones } =
    data?.getGoalDetails || {};
  const onFaqViewed = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("event_faq_viewed", {
        name: title,
        event_id: goalId,
        stageId,
        faq_name: faq?.text,
      })
    );
  }, [faq?.text, goalId, stageId, title]);

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
            const response = await joinGoalMutation({ variables: { goalId } });

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

    await Navigation.popToRoot(componentId);
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
      headerProps={headerProps}
      onButtonPress={onActionButtonPress}
      onFaqViewed={onFaqViewed}
      {...data.getGoalDetails}
    />
  );
};

export default EventDialogContainer;
