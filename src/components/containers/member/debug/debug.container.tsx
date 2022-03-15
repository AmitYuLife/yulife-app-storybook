import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_DEBUG_CODES, GQL_MUTATION_RESET_DATA, ResetDataMutationTuple } from "@graphql/debug";
import * as React from "react";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { useDispatch } from "react-redux";
import { sendTestPush } from "@redux/notifications/notifications.actions";
import { getUserStart } from "@redux/user/user.actions";
import { DebugScreen } from "@screens";
import Logger from "@services/logging/logger";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { collectEventRewards } from "./events-debug/event-rewards-wrapper.debug";

interface IProps {
  componentId: string;
}

type Props = IProps;

const DebugContainer: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const [resetData]: ResetDataMutationTuple = useMutation(GQL_MUTATION_RESET_DATA);
  const { data } = useQuery(GQL_QUERY_DEBUG_CODES);

  enum CODES {
    ROUTE_TO_EVENT_PANEL = "ROUTE_TO_EVENT_PANEL",
    ROUTE_TO_EVENT_REWARDS = "ROUTE_TO_EVENT_REWARDS",
    ROUTE_TO_PROGRESS_BAR = "ROUTE_TO_PROGRESS_BAR",
    ROUTE_TO_EVENT_DIALOG = "ROUTE_TO_EVENT_DIALOG",
    ROUTE_TO_COLLECT_EVENT_REWARD_MODAL = "ROUTE_TO_COLLECT_EVENT_REWARD_MODAL",
  }

  const list = [
    ...(data?.getDebugCodes || []),
    "send-test-push",
    `toggle-leanplum(${Logger.leanplum.isDevMode ? "dev" : "prod"})`,
    CODES.ROUTE_TO_EVENT_PANEL,
    CODES.ROUTE_TO_EVENT_REWARDS,
    CODES.ROUTE_TO_PROGRESS_BAR,
    CODES.ROUTE_TO_EVENT_DIALOG,
    CODES.ROUTE_TO_COLLECT_EVENT_REWARD_MODAL,
  ];

  const handleClose = () => {
    Navigation.popToRoot(props.componentId);
  };

  const listData = list.map((code) => ({
    id: code,
    onPress: async () => {
      try {
        if (code === "send-test-push") {
          return dispatch(sendTestPush());
        }

        if (code.startsWith("toggle-leanplum")) {
          return Logger.leanplum.toggleDevelopmentMode();
        }

        if (code === CODES.ROUTE_TO_EVENT_PANEL) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.eventPanel,
              name: ROUTES.eventPanel,
            },
          });
        }

        if (code === CODES.ROUTE_TO_COLLECT_EVENT_REWARD_MODAL) {
          return showYuModal({
            component: {
              id: MODALS.collectEventReward,
              name: MODALS.collectEventReward,
              passProps: {
                title: "Winter event ended",
                descriptionTitle: "Great job!",
                description: `Congrats on completing the\nWinter Event!`,
                cta: "Claim rewards",
                rewards: collectEventRewards,
              },
            },
          });
        }

        if (code === CODES.ROUTE_TO_EVENT_REWARDS) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.eventRewards,
              name: ROUTES.eventRewards,
            },
          });
        }

        if (code === CODES.ROUTE_TO_PROGRESS_BAR) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.progressBar,
              name: ROUTES.progressBar,
            },
          });
        }

        if (code === CODES.ROUTE_TO_EVENT_DIALOG) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.eventDialog,
              name: ROUTES.eventDialog,
              passProps: {
                componentId: props.componentId,
                onLeftIconPress: () => Navigation.pop(ROUTES.debug),
                eventId: "testID",
              },
            },
          });
        }

        await resetData({ variables: { code } });
        Alert.alert("Success");
        dispatch(getUserStart());
      } catch (e) {
        Alert.alert("Fail");
      }
    },
  }));

  return <DebugScreen onPressClose={handleClose} data={listData} />;
};

export default DebugContainer;
