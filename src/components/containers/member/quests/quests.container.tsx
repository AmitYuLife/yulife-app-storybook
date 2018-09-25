import moment from "moment";
import { PureComponent } from "react";
import React from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../graphql/_core/schema";
import GetCurrentWorld, { getCurrentWorldGql } from "../../../../graphql/challenges/getCurrentWorld.gql";
import { IMainTabsProps } from "../../../../navigation/root";
import { ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import {
    ChallengeEndAction,
    challengeEndAction,
    ChallengeResetAction,
    challengeResetAction
} from "../../../../redux/levels/levels.actions";
import {
    activeLevelSelector,
    currentLevelSelector,
    IActiveLevel,
    nextLevelAvailableAtSelector
} from "../../../../redux/levels/levels.selectors";
import Loading from "../../../atoms/loading/loading";
import { ChallengeCompleteModal } from "../../../modals";
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
    challengeEndAction: ChallengeEndAction;
    challengeResetAction: ChallengeResetAction;
}

type Props = IMainTabsProps & IConnectedState & IConnectedDispatch;

class QuestsContainer extends PureComponent<Props> {
    public render() {
        const {
            activeLevel: { coins, endDateTime, milestones, rating, score, status, subtype, timeUp, unit },
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

                    if (timeUp) {
                        return <ChallengeCompleteModal onCtaPress={this.props.challengeEndAction} />;
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

                    return <QuestsScreen {...props} data={this.formatData(data.getCurrentWorld)} />;
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

        return data.map((level) => {
            const isNext = currentLevel === level.level;
            const isDone = currentLevel > level.level;
            const goToChallengesList = () => {
                Navigation.push(componentId, {
                    component: {
                        id: ROUTES.questsChallengesList,
                        name: ROUTES.questsChallengesList,
                        passProps: {
                            labels,
                            level
                        }
                    }
                });
            };

            return {
                ...level,
                isDone,
                isNext,
                nextAvailable,
                onPress: () => {
                    if (isDone) {
                        // goToChallengesList(); TODO: go to challengesDoneList
                    } else if (level.level % 7 === 0) {
                        const passProps = {
                            ctaLabel: isNext ? "let's do it" : "got it",
                            heading: isNext ? "take a challenge to unlock the chest" : `unlock at level ${level.level}`,
                            isLocked: true,
                            onPressCta: () => {
                                if (isNext) {
                                    goToChallengesList();
                                }
                                Navigation.dismissModal(ROUTES.modalChest);
                            }
                        };

                        Navigation.showModal({
                            component: {
                                id: ROUTES.modalChest,
                                name: ROUTES.modalChest,
                                passProps
                            }
                        });
                    } else if (isNext) {
                        goToChallengesList();
                    }
                }
            };
        });
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
    challengeEndAction,
    challengeResetAction
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(QuestsContainer);
