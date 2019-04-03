import GetDebugCodesQuery from "@graphql/debug/getDebugCodes.gql";
import ResetDataMutation, { ResetDataMutationFunction } from "@graphql/debug/resetData.gql";
import * as React from "react";
import { PureComponent } from "react";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { sendTestPush } from "../../../../redux/notifications/notifications.actions";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import { DebugScreen } from "../../../screens";

interface IProps {
    componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

class ActivityHistoryContainer extends PureComponent<Props> {
    private list: string[] = [
        "reset-today-partial-data",
        "reset-today-full-data",
        "reset-streaks",
        "more-coins",
        "reset-coins"
    ];

    public render() {
        return (
            <ResetDataMutation>
                {(resetData) => (
                    <GetDebugCodesQuery fetchPolicy="cache-and-network">
                        {({ data }) => {
                            const list = [...((data && data.getDebugCodes) || this.list), "send-test-push"];

                            return <DebugScreen onPressClose={this.handleClose} data={this.getData(list, resetData)} />;
                        }}
                    </GetDebugCodesQuery>
                )}
            </ResetDataMutation>
        );
    }

    private getData = (list: string[], resetData: ResetDataMutationFunction) => {
        return list.map((code) => ({
            id: code,
            onPress: async () => {
                try {
                    if (code === "send-test-push") {
                        this.props.sendTestPush();
                    } else {
                        await resetData({ variables: { code } });
                        Alert.alert("Success");
                        this.props.getUserStart();
                    }
                } catch (e) {
                    Alert.alert("Fail");
                }
            }
        }));
    };

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state)
});

const mapDispatchToProps = {
    getUserStart,
    sendTestPush
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ActivityHistoryContainer);
