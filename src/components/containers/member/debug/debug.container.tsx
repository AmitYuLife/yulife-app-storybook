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
import { ROUTES } from "@navigation/constants";

interface IProps {
  componentId: string;
}

type Props = IProps;

const DebugContainer: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const [resetData]: ResetDataMutationTuple = useMutation(GQL_MUTATION_RESET_DATA);
  const { data } = useQuery(GQL_QUERY_DEBUG_CODES);

  const list = [
    "level-selector",
    "video-player",
    ...(data?.getDebugCodes || []),
    "send-test-push",
    `toggle-leanplum(${Logger.leanplum.isDevMode ? "dev" : "prod"})`,
  ];

  const handleClose = () => {
    Navigation.popToRoot(props.componentId);
  };

  const listData = list.map((code) => ({
    id: code,
    onPress: async () => {
      try {
        if (code === "level-selector") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.levelSelector,
              name: ROUTES.levelSelector,
            },
          });
        }

        if (code === "video-player") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.videoPlayer,
              name: ROUTES.videoPlayer,
            },
          });
        }

        if (code === "send-test-push") {
          return dispatch(sendTestPush());
        }

        if (code.startsWith("toggle-leanplum")) {
          return Logger.leanplum.toggleDevelopmentMode();
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
