import { useMutation, useQuery } from "@apollo/client";
import { GQL_QUERY_DEBUG_CODES, GQL_MUTATION_RESET_DATA, ResetDataMutationTuple } from "@graphql/debug";
import React from "react";
import { Alert } from "react-native";
import { Navigation } from "@navigation/main";
import { useDispatch } from "react-redux";
import { sendTestPush } from "@redux/notifications/notifications.actions";
import { getAllUserDataStart, getUserStart } from "@redux/user/user.actions";
import { DebugScreen } from "@screens";
import Logger from "@services/logging/logger";
import { ROUTES } from "@navigation/constants";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";

interface Props {
  componentId: string;
}

const personalProducts = ["personal-products-reset-fib", "personal-products-reset-dental"];

const DebugContainer: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const [resetData]: ResetDataMutationTuple = useMutation(GQL_MUTATION_RESET_DATA);
  const { data } = useQuery(GQL_QUERY_DEBUG_CODES, { fetchPolicy: "no-cache" });

  const list = [
    "level-selector",
    "video-player",
    "inspect",
    "daily-survey",
    "sleep-meditation",
    "features",
    "inspect-opponent",
    ...(data?.getDebugCodes || []),
    "send-test-push",
    `toggle-leanplum(${Logger.leanplum?.isDevMode ? "dev" : "prod"})`,
  ];

  const handleClose = () => {
    Navigation.popToRoot(props.componentId);
  };

  const listData = list.map((code) => ({
    id: code,
    onPress: async () => {
      try {
        if (code === "features") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.userFeatures,
              name: ROUTES.userFeatures,
            },
          });
        }

        if (code === "level-selector") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.levelSelector,
              name: ROUTES.levelSelector,
            },
          });
        }

        if (code === "inspect") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.inspect,
              name: ROUTES.inspect,
            },
          });
        }

        if (code === "daily-survey") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.journey,
              name: ROUTES.journey,
              passProps: {
                journeyId: "daily_survey",
              },
            },
          });
        }

        if (code === "sleep-meditation") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.journey,
              name: ROUTES.journey,
              passProps: {
                journeyId: "media",
                dynamicId: "fiit_cardio",
              },
            },
          });
        }

        if (code === "inspect-opponent") {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.inspect,
              name: ROUTES.inspect,
              passProps: {
                showOpponent: true,
              },
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
        dispatch(getAllUserDataStart());
        dispatch(sudokuReset());

        if (personalProducts.includes(code)) {
          await getYuScreen();
        }
      } catch (e) {
        Alert.alert("Fail");
      }
    },
  }));

  return <DebugScreen onPressClose={handleClose} data={listData} />;
};

export default DebugContainer;
