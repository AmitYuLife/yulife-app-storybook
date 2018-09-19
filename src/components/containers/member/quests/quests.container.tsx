import moment from "moment";
import { PureComponent } from "react";
import React from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../graphql/_core/schema";
import GetCurrentWorld, { getCurrentWorldGql } from "../../../../graphql/challenges/getCurrentWorld.gql";
import { ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import { ChallengeResetAction, challengeResetAction } from "../../../../redux/levels/levels.actions";
import {
    activeLevelSelector,
    currentLevelSelector,
    IActiveLevel,
    nextLevelAvailableAtSelector
} from "../../../../redux/levels/levels.selectors";
import { SideEffect } from "../../../../typings";
import Loading from "../../../atoms/loading/loading";
import { ChallengeProgressScreen, ChallengeSuccessScreen, QuestsScreen, QuestsScreenOffline } from "../../../screens";
import ChallengeFailedScreen from "../../../screens/member/challenges/challenge-failed/challenge-failed.screen";

interface IProps {
    challengeType: string;
    onNavBarIndexChange: SideEffect<number>;
}

interface IConnectedState {
    activeLevel: IActiveLevel;
    currentLevel: number;
    nextLevelAvailableAt: string;
    offline: boolean;
}

interface IConnectedDispatch {
    challengeResetAction: ChallengeResetAction;
}

type Props = IProps & IConnectedState & IConnectedDispatch;

class QuestsContainer extends PureComponent<Props> {
    public render() {
        const {
            activeLevel: { coins, milestones, rating, score, status, unit },
            challengeType,
            offline
        } = this.props;

        return (
            <GetCurrentWorld query={getCurrentWorldGql} fetchPolicy="network-only">
                {({ loading, data, refetch }) => {
                    if (offline) {
                        return <QuestsScreenOffline />;
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

                    if (challengeType) {
                        const progressTargets = milestones.map((item) => item.target.steps);

                        return (
                            <ChallengeProgressScreen
                                challengeType={challengeType as any}
                                userProgress={score}
                                progressTargets={progressTargets}
                                unit={unit as any}
                            />
                        );
                    }

                    if (loading) {
                        return <Loading />;
                    }

                    return <QuestsScreen data={this.formatData(data.getCurrentWorld)} />;
                }}
            </GetCurrentWorld>
        );
    }

    private handleResetChallenge = (refetch: () => void) => () => {
        refetch();
        this.props.challengeResetAction();
    }

    private formatData = (data: GetCurrentWorld_getCurrentWorld[] = []) => {
        const { currentLevel, nextLevelAvailableAt, onNavBarIndexChange } = this.props;

        const nextAvailable = !!nextLevelAvailableAt ? moment().diff(moment(nextLevelAvailableAt), "seconds") : null;

        return data.map((level) => ({
            ...level,
            isDone: currentLevel > level.level,
            isNext: currentLevel === level.level,
            nextAvailable,
            onPress: async () => {
                if (!nextAvailable || nextAvailable > 0) {
                    await Navigation.push(ROUTES.member, {
                        component: {
                            id: ROUTES.questsChallengesList,
                            name: ROUTES.questsChallengesList,
                            passProps: {
                                level,
                                onNavBarIndexChange
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
    offline: getOfflineState(state)
});

const mapDispatchToProps = {
    challengeResetAction
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(QuestsContainer);
