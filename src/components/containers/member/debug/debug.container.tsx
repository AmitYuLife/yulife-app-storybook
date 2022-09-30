import { useMutation, useQuery } from "@apollo/client";
import { GQL_QUERY_DEBUG_CODES, GQL_MUTATION_RESET_DATA, ResetDataMutationTuple } from "@graphql/debug";
import React from "react";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { sendTestPush } from "@redux/notifications/notifications.actions";
import { getUserStart } from "@redux/user/user.actions";
import { DebugScreen } from "@screens";
import Logger from "@services/logging/logger";
import { ROUTES } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";
import { getYuScreenProductSlots } from "@graphql/yuscreen";

interface Props {
  componentId: string;
}

const personalProducts = ["personal-products-reset-fib", "personal-products-reset-dental"];

const DebugContainer: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const { yuScreenV4 } = useSelector(getUserFeatures);

  const [resetData]: ResetDataMutationTuple = useMutation(GQL_MUTATION_RESET_DATA);
  const { data } = useQuery(GQL_QUERY_DEBUG_CODES);

  const list = [
    "level-selector",
    "video-player",
    "inspect",
    "features",
    "inspect-opponent",
    ...(data?.getDebugCodes || []),
    "send-test-push",
    `toggle-leanplum(${Logger.leanplum.isDevMode ? "dev" : "prod"})`,
  ];

  const handleClose = () => {
    Navigation.popToRoot(props.componentId);
  };

  const refreshPersonalProducts = yuScreenV4 ? getYuScreen : getYuScreenProductSlots;

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

        if (personalProducts.includes(code)) {
          await refreshPersonalProducts();
        }
      } catch (e) {
        Alert.alert("Fail");
      }
    },
  }));

  return <DebugScreen onPressClose={handleClose} data={listData} />;
};

export default DebugContainer;
