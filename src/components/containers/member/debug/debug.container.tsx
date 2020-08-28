import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_DEBUG_CODES, GQL_MUTATION_RESET_DATA, ResetDataMutationTuple } from "@graphql/debug";
import * as React from "react";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { sendTestPush } from "../../../../redux/notifications/notifications.actions";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import { DebugScreen } from "../../../screens";
import { ROUTES, MODALS } from "@navigation/constants";
import { FIB_UNDERWRITING_JOURNEY_INTRODUCTION } from "@components/containers/products/fib/fib.types";
import { FeedbackModalProps, npsModalProps } from "@components/modals/feedback/feedback.modal";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

enum CODES {
  ROUTE_TO_FIB_BROWSE_PACKAGES = "ROUTE_TO_FIB_BROWSE_PACKAGES",
  ROUTE_TO_FIB_UNDERWRITING = "ROUTE_TO_FIB_UNDERWRITING",
  DISPLAY_FEEDBACK_MODAL = "DISPLAY_FEEDBACK_MODAL",
}

const DEFAULT_LIST = [
  "reset-today-partial-data",
  "reset-today-full-data",
  "reset-streaks",
  "more-coins",
  "reset-coins",
];

const ActivityHistoryContainer: React.FC<Props> = (props) => {
  const [resetData]: ResetDataMutationTuple = useMutation(GQL_MUTATION_RESET_DATA);
  const { data } = useQuery(GQL_QUERY_DEBUG_CODES, {
    fetchPolicy: "cache-and-network",
  });

  const list = [
    ...((data && data.getDebugCodes) || DEFAULT_LIST),
    "send-test-push",
    CODES.ROUTE_TO_FIB_BROWSE_PACKAGES,
    CODES.ROUTE_TO_FIB_UNDERWRITING,
    CODES.DISPLAY_FEEDBACK_MODAL,
  ];

  const handleClose = () => {
    Navigation.popToRoot(props.componentId);
  };

  const listData = list.map((code) => ({
    id: code,
    onPress: async () => {
      try {
        if (code === "send-test-push") {
          return props.sendTestPush();
        }

        if (code === CODES.DISPLAY_FEEDBACK_MODAL) {
          Navigation.showModal<FeedbackModalProps>({
            component: {
              id: MODALS.feedback,
              name: MODALS.feedback,
              passProps: npsModalProps,
            },
          });
        }

        if (code === CODES.ROUTE_TO_FIB_BROWSE_PACKAGES) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
            },
          });
        }

        if (code === CODES.ROUTE_TO_FIB_UNDERWRITING) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
              passProps: {
                initialRoute: FIB_UNDERWRITING_JOURNEY_INTRODUCTION,
              },
            },
          });
        }

        await resetData({ variables: { code } });
        Alert.alert("Success");
        props.getUserStart();
      } catch (e) {
        Alert.alert("Fail");
      }
    },
  }));

  return <DebugScreen onPressClose={handleClose} data={listData} />;
};

const mapStateToProps = (state: IReduxState) => ({
  features: getUserFeatures(state),
});

const mapDispatchToProps = {
  getUserStart,
  sendTestPush,
};

export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(ActivityHistoryContainer);
