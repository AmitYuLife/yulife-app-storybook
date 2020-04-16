import React, { FC, useCallback } from "react";
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

const ChallengesHistoryContainer: FC<Props> = ({ level, onPressActivityHistory, totalCoins, componentId }) => {
    const handleClose = useCallback(() => Navigation.popToRoot(componentId), []);

    return (
        <ChallengesHistoryScreen
            level={level}
            onPressActivityHistory={onPressActivityHistory}
            onPressCta={handleClose}
            onLeftMenuPress={handleClose}
            totalCoins={totalCoins}
        />
    );
};

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
