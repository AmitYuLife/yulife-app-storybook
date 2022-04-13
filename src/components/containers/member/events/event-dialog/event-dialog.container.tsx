import React, { FC, useCallback } from "react";
import EventDialogScreen from "@components/screens/member/events/event-dialog/event-dialog.screen";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";
import { Navigation } from "react-native-navigation";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_GOAL_DETAILS } from "@graphql/goals/getGoalDetails.gql";
import { useDispatch } from "react-redux";
import { GetGoalDetails } from "@graphql/_core/schema";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";

interface IProps {
  componentId: string;
  goalId: string;
  stageId: string;
  onLeftIconPress: () => void;
}

const EventDialogContainer: FC<IProps> = ({ componentId, goalId, stageId, onLeftIconPress }) => {
  const dispatch = useDispatch();
  const { loading, data } = useQuery<GetGoalDetails>(GQL_QUERY_GET_GOAL_DETAILS, {
    variables: { id: goalId, stageId },
    fetchPolicy: "network-only",
  });

  const { title, labels, headerBackgroundColor, headerTextColor, headerImage, button } = data?.getGoalDetails || {};

  const onActionButtonPress = useCallback(() => {
    if (button) {
      if (button.onPress.goalType) {
        // TODO: query join even or claim reward here
        showYuModal({
          component: {
            id: MODALS.collectEventReward,
            name: MODALS.collectEventReward,
            passProps: {
              title: "Winter event ended",
              descriptionTitle: "Great job!",
              description: `Congrats on completing the\nWinter Event!`,
              cta: "Claim rewards",
              rewards: data.getGoalDetails.rewards,
            },
          },
        });
      } else {
        dispatch({
          type: button.onPress.sduiType,
          payload: { serverPayload: button.onPress.payload },
        });
      }
    }

    Navigation.popToRoot(componentId);
  }, [componentId, button, dispatch]);

  const headerProps = {
    title,
    labels,
    source: { uri: headerImage?.uri },
    backgroundColor: headerBackgroundColor,
    headerTextColor,
    onLeftIconPress,
  };

  if (loading) {
    return <EventDialogLoadingScreen onLeftIconPress={onLeftIconPress} />;
  }

  return <EventDialogScreen headerProps={headerProps} onButtonPress={onActionButtonPress} {...data?.getGoalDetails} />;
};

export default EventDialogContainer;
