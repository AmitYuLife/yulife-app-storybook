import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_DEBUG_CODES, GQL_MUTATION_RESET_DATA, ResetDataMutationTuple } from "@graphql/debug";
import * as React from "react";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { sendTestPush } from "@redux/notifications/notifications.actions";
import { getUserStart } from "@redux/user/user.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { DebugScreen } from "@screens";
import { ROUTES } from "@navigation/constants";
import { FIB_GP_DETAILS, FIB_CONFIRM_PACKAGES, FIB_CHOOSE_STYLE } from "@containers/products/fib/fib.types";
import { FIB_CONTACT_DETAILS, FIB_DECLARATION_CONFIRMATION } from "../../products/fib/fib.types";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

enum CODES {
  ROUTE_TO_FIB_BROWSE_PACKAGES = "ROUTE_TO_FIB_BROWSE_PACKAGES",
  ROUTE_TO_FIB_CONTACT_DETAILS_SCREEN = "ROUTE_TO_FIB_CONTACT_DETAILS_SCREEN",
  ROUTE_TO_FIB_CONFIRMATION_DECLARATION = "ROUTE_TO_FIB_CONFIRMATION_DECLARATION",
  ROUTE_TO_FIB_GP_DETAILS = "ROUTE_TO_FIB_GP_DETAILS",
  ROUTE_TO_FIB_CONFIRM_PACKAGES = "ROUTE_TO_FIB_CONFIRM_PACKAGES",
  ROUTE_TO_CHOOSE_STYLE = "ROUTE_TO_CHOOSE_STYLE",
  ROUTE_TO_PRODUCT_DETAILS = "ROUTE_TO_PRODUCT_DETAILS",
  ROUTE_TO_PACKAGE_CARD = "ROUTE_TO_PACKAGE_CARD",
  ROUTE_TO_PACKAGE_INTRO = "ROUTE_TO_PACKAGE_INTRO",
  ROUTE_TO_PACKAGE_FINALISE = "ROUTE_TO_PACKAGE_FINALISE",
  ROUTE_TO_REFERRALS = "ROUTE_TO_REFERRALS",
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
    CODES.ROUTE_TO_FIB_CONTACT_DETAILS_SCREEN,
    CODES.ROUTE_TO_FIB_CONFIRMATION_DECLARATION,
    CODES.ROUTE_TO_FIB_GP_DETAILS,
    CODES.ROUTE_TO_FIB_CONFIRM_PACKAGES,
    CODES.ROUTE_TO_CHOOSE_STYLE,
    CODES.ROUTE_TO_PRODUCT_DETAILS,
    CODES.ROUTE_TO_PACKAGE_CARD,
    CODES.ROUTE_TO_PACKAGE_INTRO,
    CODES.ROUTE_TO_PACKAGE_FINALISE,
    CODES.ROUTE_TO_REFERRALS,
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

        if (code === CODES.ROUTE_TO_FIB_BROWSE_PACKAGES) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
            },
          });
        }

        if (code === CODES.ROUTE_TO_FIB_CONTACT_DETAILS_SCREEN) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
              passProps: {
                initialRoute: FIB_CONTACT_DETAILS,
              },
            },
          });
        }

        if (code === CODES.ROUTE_TO_FIB_CONFIRMATION_DECLARATION) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
              passProps: {
                initialRoute: FIB_DECLARATION_CONFIRMATION,
              },
            },
          });
        }

        if (code === CODES.ROUTE_TO_FIB_GP_DETAILS) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
              passProps: {
                initialRoute: FIB_GP_DETAILS,
              },
            },
          });
        }

        if (code === CODES.ROUTE_TO_FIB_CONFIRM_PACKAGES) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
              passProps: {
                initialRoute: FIB_CONFIRM_PACKAGES,
              },
            },
          });
        }

        if (code === CODES.ROUTE_TO_CHOOSE_STYLE) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.fib,
              name: ROUTES.fib,
              passProps: {
                initialRoute: FIB_CHOOSE_STYLE,
              },
            },
          });
        }

        if (code === CODES.ROUTE_TO_PRODUCT_DETAILS) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.productDetails,
              name: ROUTES.productDetails,
            },
          });
        }

        if (code === CODES.ROUTE_TO_PACKAGE_CARD) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.packageCard,
              name: ROUTES.packageCard,
            },
          });
        }

        if (code === CODES.ROUTE_TO_PACKAGE_INTRO) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.packageIntro,
              name: ROUTES.packageIntro,
            },
          });
        }

        if (code === CODES.ROUTE_TO_PACKAGE_FINALISE) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.packageFinalise,
              name: ROUTES.packageFinalise,
            },
          });
        }

        if (code === CODES.ROUTE_TO_REFERRALS) {
          return Navigation.push(props.componentId, {
            component: {
              id: ROUTES.referralInformation,
              name: ROUTES.referralInformation,
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
