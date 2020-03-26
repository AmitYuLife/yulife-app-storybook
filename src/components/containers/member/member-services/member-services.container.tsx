import Yumatter from "@screens/member/member-services/yumatter.screen";
import { PureComponent } from "react";
import * as React from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserBusiness, getUserFeatures } from "../../../../redux/user/user.selectors";
import SmartHealth from "../../../screens/member/member-services/smart-health.screen";

type Tab = "yumatter" | "smartHealth";

interface IProps {
    componentId: string;
}

interface IState {
    tab: Tab;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

class MemberServices extends PureComponent<Props, IState> {
    public state: IState = {
        tab: "yumatter"
    };

    public render() {
        const { tab } = this.state;
        const { componentId, isGroupUser } = this.props;

        if (tab === "yumatter") {
            return (
                <Yumatter
                    isGroup={isGroupUser}
                    onPressClose={() => this.handleCloseButton(componentId)}
                    onLeftTabPress={this.onEmptyPress}
                    onRightTabPress={this.handleTabChange("smartHealth")}
                />
            );
        }

        return (
            <SmartHealth
                onPressClose={() => this.handleCloseButton(componentId)}
                onLeftTabPress={this.handleTabChange("yumatter")}
                onRightTabPress={this.onEmptyPress}
            />
        );
    }

    private handleTabChange = (tab: Tab) => () => {
        this.setState({ tab });
    };

    private handleCloseButton = async (componentId: string) => {
        await Navigation.popToRoot(componentId);
    };

    private onEmptyPress = (): null => null;
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state),
    isGroupUser: getUserBusiness(state).isGroup
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(MemberServices);
