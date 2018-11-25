import * as React from "react";
import { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { challengeStartAction, ChallengeStartAction } from "../../../../../redux/levels/levels.actions";
import { currentLevelSelector } from "../../../../../redux/levels/levels.selectors";
import { IConnectedScreenProps } from "../../../../../typings";
import { ChallengesHistoryScreen } from "../../../../screens";

interface IConnectedState {
    currentLevel: number;
    totalCoins: number;
}

interface IConnectedDispatch {
    challengeStartAction: ChallengeStartAction;
}

interface IProps extends IConnectedScreenProps {
    componentId?: string;
    level: GetCurrentWorld_getCurrentWorld;
    onPressActivityHistory: () => void;
    onPressCta?: () => void;
}

type Props = IProps & IConnectedState & IConnectedDispatch;

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
    }
}

const mapStateToProps = (state: IReduxState) => ({
    currentLevel: currentLevelSelector(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    challengeStartAction
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ChallengesHistoryContainer);
