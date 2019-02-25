import * as React from "react";
import { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { challengeStartAction } from "../../../../../redux/levels/levels.actions";
import { getCurrentLevel } from "../../../../../redux/levels/levels.selectors";
import { IConnectedScreenProps } from "../../../../../typings";
import { ChallengesHistoryScreen } from "../../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps extends IConnectedScreenProps {
    componentId?: string;
    level: GetCurrentWorld_getCurrentWorld;
    onPressActivityHistory: () => void;
    onPressCta?: () => void;
}

type Props = IProps & ConnectedState & ConnectedDispatch;

class ChallengesHistoryContainer extends Component<Props> {
    public render() {
        const { level, labels, onPressActivityHistory, totalCoins } = this.props;

        return (
            <ChallengesHistoryScreen
                labels={labels}
                level={level}
                onPressActivityHistory={onPressActivityHistory}
                onPressCta={this.handleLeftMenuPress}
                onLeftMenuPress={this.handleLeftMenuPress}
                totalCoins={totalCoins}
            />
        );
    }

    private handleLeftMenuPress = async () => {
        await Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    currentLevel: getCurrentLevel(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    challengeStartAction
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ChallengesHistoryContainer);
