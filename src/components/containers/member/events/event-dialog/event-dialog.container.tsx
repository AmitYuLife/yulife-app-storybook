import React, { FC, useCallback, useEffect } from "react";
import EventDialogScreen from "@components/screens/member/events/event-dialog/event-dialog.screen";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";
import { Navigation } from "react-native-navigation";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_GOAL_DETAILS } from "@graphql/goals/getGoalDetails.gql";
import { useDispatch } from "react-redux";
import { GetGoalDetails, JoinGoal, JoinGoalVariables } from "@graphql/_core/schema";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { GQL_MUTATION_JOIN_GOAL } from "@graphql/goals/joinGoal.gql";
import { refreshUserProfileEvents, updateUserGoal } from "@redux/user/user.actions";
import { GoalActionType, GoalRewardStatus } from "@graphql/_core/schema/globalTypes";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

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

  const [joinGoalMutation] = useMutation<JoinGoal, JoinGoalVariables>(GQL_MUTATION_JOIN_GOAL);

  useEffect(() => {
    // rehydrate the daily screen
    dispatch(refreshUserProfileEvents());
  }, []);

  const { title, labels, headerBackgroundColor, headerTextColor, headerImage, button, faq } =
    data?.getGoalDetails || {};
  const onFaqViewed = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("event_faq_viewed", {
        name: title,
        ID: goalId,
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
                title: "Event ended",
                descriptionTitle: "Great job!",
                description: `Congrats on completing the event!`,
                cta: "Claim rewards",
                rewards: data.getGoalDetails.rewards.filter((reward) => reward.status === GoalRewardStatus.completed),
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
