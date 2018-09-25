import moment from "moment";
import React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../graphql/_core/schema";
import GetCurrentWorld, { getCurrentWorldGql } from "../../../../graphql/challenges/getCurrentWorld.gql";
import { IMainTabsProps } from "../../../../navigation/root";
import { ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { ChallengeResetAction, challengeResetAction } from "../../../../redux/levels/levels.actions";
import {
    activeLevelSelector,
    currentLevelSelector,
    IActiveLevel,
    nextLevelAvailableAtSelector
} from "../../../../redux/levels/levels.selectors";
import Loading from "../../../atoms/loading/loading";
import { ChallengeProgressScreen, ChallengeSuccessScreen, QuestsScreen, QuestsScreenOffline } from "../../../screens";
import ChallengeFailedScreen from "../../../screens/member/challenges/challenge-failed/challenge-failed.screen";

interface IConnectedState {
    activeLevel: IActiveLevel;
    currentLevel: number;
    nextLevelAvailableAt: string;
    offline: boolean;
    totalCoins: number;
}

interface IConnectedDispatch {
    challengeResetAction: ChallengeResetAction;
}

type Props = IMainTabsProps & IConnectedState & IConnectedDispatch;

class QuestsContainer extends PureComponent<Props> {
    public render() {
        const {
            activeLevel: { coins, endDateTime, milestones, rating, score, status, subtype, unit },
            labels,
            offline,
            onLeftMenuPress,
            totalCoins
        } = this.props;

        const props = {
            labels,
            onLeftMenuPress,
            totalCoins
        };

        return (
            <GetCurrentWorld query={getCurrentWorldGql} fetchPolicy="network-only">
                {({ loading, data, refetch }) => {
                    if (offline) {
                        return <QuestsScreenOffline {...props} />;
                    }

                    if (status) {
                        return status === "success" ? (
                            <ChallengeSuccessScreen
                                onPressCta={this.handleResetChallenge(refetch)}
                                rating={rating}
                                reward={coins}
                                score={score}
                                unit={unit as any}
                            />
                        ) : (
                            <ChallengeFailedScreen onPress={this.handleResetChallenge(refetch)} />
                        );
                    }

                    if (subtype) {
                        const progressTargets = milestones.map((item) => item.target.steps);

                        return (
                            <ChallengeProgressScreen
                                {...props}
                                challengeType={subtype as any}
                                endDateTime={endDateTime}
                                userProgress={score}
                                progressTargets={progressTargets}
                                unit={unit as any}
                            />
                        );
                    }

                    if (loading) {
                        return <Loading />;
                    }

                    return (
                        <QuestsScreen
                            {...props}
                            data={this.formatData(data.getCurrentWorld)}
                        />
                    );
                }}
            </GetCurrentWorld>
        );
    }

    private handleResetChallenge = (refetch: () => void) => () => {
        refetch();
        this.props.challengeResetAction();
    }

    private formatData = (data: GetCurrentWorld_getCurrentWorld[] = []) => {
        const { componentId, labels, currentLevel, nextLevelAvailableAt } = this.props;

        const nextAvailable = !!nextLevelAvailableAt ? moment().diff(moment(nextLevelAvailableAt), "seconds") : null;

        return data.map((level) => ({
            ...level,
            isDone: currentLevel > level.level,
            isNext: currentLevel === level.level,
            nextAvailable,
            onPress: async () => {
                if (!nextAvailable || nextAvailable > 0) {
                    await Navigation.push(componentId, {
                        component: {
                            id: ROUTES.questsChallengesList,
                            name: ROUTES.questsChallengesList,
                            passProps: {
                                labels,
                                level
                            }
                        }
                    });
                }
            }
        }));
    }
}

const mapStateToProps = (state: IReduxState) => ({
    activeLevel: activeLevelSelector(state),
    currentLevel: currentLevelSelector(state),
    nextLevelAvailableAt: nextLevelAvailableAtSelector(state),
    offline: getOfflineState(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    challengeResetAction
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(QuestsContainer);
