import * as React from "react";
import { PureComponent } from "react";
import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import ResetDataMutation, { ResetDataMutationFunction } from "../../../../graphql/user/resetData.gql";
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
    private list: Array<{ id: string; text: string }> = [
        { id: "reset-today-partial-data", text: "Reset today partial data" },
        { id: "reset-today-full-data", text: "Reset today full data" },
        { id: "reset-streaks", text: "Reset streaks" },
        { id: "more-coins", text: "More coins!" },
        { id: "reset-coins", text: "Reset coins" },
        { id: "send-test-push", text: "Send test local push in 5 sec" }
    ];

    public render() {
        return <ResetDataMutation>{this.renderMutation}</ResetDataMutation>;
    }

    private renderMutation = (resetData: ResetDataMutationFunction) => (
        <DebugScreen onPressClose={this.handleClose} data={this.getData(resetData)} />
    );

    private getData = (resetData: ResetDataMutationFunction) => {
        return this.list.map((item) => ({
            ...item,
            onPress: async () => {
                try {
                    if (item.id === "send-test-push") {
                        this.props.sendTestPush();
                    } else {
                        await resetData({ variables: { code: item.id } });
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
