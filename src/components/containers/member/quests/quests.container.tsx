import moment from "moment";
import { PureComponent } from "react";
import React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../graphql/_core/schema";
import GetCurrentWorld, { getCurrentWorldGql } from "../../../../graphql/challenges/getCurrentWorld.gql";
import { IMainTabsProps } from "../../../../navigation/root";
import { MODALS, ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import {
    ChallengeCancelAction,
    challengeCancelAction,
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
import { displayStreaksCompletedAction } from "../../../../redux/streaks/streaks.actions";
import { openCalm, openHeadspace } from "../../../../services/app-link";
import BlurProvider from "../../../atoms/blur/blur-provider";
import Loading from "../../../atoms/loading/loading";
import { ChallengeCompleteModal, GenericModal } from "../../../modals";
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
    challengeCancelAction: ChallengeCancelAction;
    challengeEndAction: ChallengeEndAction;
    challengeResetAction: ChallengeResetAction;
    displayStreaksCompletedAction: () => void;
}

function isChestLevel(level: number): boolean {
    return level % 7 === 0;
}

function isAvailable(nextAvailableAt: string): boolean {
    const nextAvailable = !!nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

    return nextAvailable >= 0;
}

type Props = IMainTabsProps & IConnectedState & IConnectedDispatch;

class QuestsContainer extends PureComponent<Props> {
    private backHandler: NativeEventSubscription;
    private backPressed: number = 0;

    constructor(props: Props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.backPressed = 0;
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            if (this.backPressed > 0) {
                return false;
            }

            this.backPressed += 1;
            return true;
        });
    }

    public componentDidDisappear() {
        this.backHandler.remove();
    }

    public render() {
        const {
            activeLevel: { coins, endDateTime, milestones, rating, score, status, subtype, timeUp, unit },
            componentId,
            currentLevel,
            labels,
            offline,
            onLeftMenuPress,
            totalCoins
        } = this.props;

        const props = {
            componentId,
            currentLevel,
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
                                level={currentLevel}
                                onPressCta={this.handleResetChallenge(refetch, true)}
                                rating={rating}
                                reward={coins}
                                score={score}
                                unit={unit as any}
                            />
                        ) : (
                            <ChallengeFailedScreen level={currentLevel} onPress={this.handleResetChallenge(refetch)} />
                        );
                    }

                    if (timeUp) {
                        return <ChallengeCompleteModal onCtaPress={this.props.challengeEndAction} />;
                    }

                    if (subtype) {
                        const progressTargets = milestones.map(
                            (item) => item.target[subtype === "meditation" ? "meditation" : "steps"]
                        );

                        return (
                            <BlurProvider
                                render={({ showOverlay }) => (
                                    <ChallengeProgressScreen
                                        {...props}
                                        challengeType={subtype as any}
                                        onCalmPress={openCalm}
                                        onDismissPress={showOverlay}
                                        onHeadspacePress={openHeadspace}
                                        endDateTime={endDateTime}
                                        userProgress={score}
                                        progressTargets={progressTargets}
                                        unit={unit as any}
                                    />
                                )}
                                renderOverlay={({ hideOverlay }) => (
                                    <GenericModal
                                        onPress={hideOverlay}
                                        heading="exit challenge?"
                                        subheading="You won’t be able to come back to it."
                                        ctaLabel="no way!"
                                        onPressSecondary={this.props.challengeCancelAction}
                                        ctaLabelSecondary="exit"
                                    />
                                )}
                                type="dark"
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

    private handleResetChallenge = (refetch: () => void, showStreakComplete?: boolean) => () => {
        if (showStreakComplete) {
            this.props.displayStreaksCompletedAction();
        }
        refetch();
        this.props.challengeResetAction();
    }

    private dismissChestModal = () => {
        Navigation.dismissModal(MODALS.chest);
    }

    private dismissChallengeUnavailableModal = () => {
        Navigation.dismissModal(MODALS.challengeUnavailable);
    }

    private dismissLevelUnavailableModal = () => {
        Navigation.dismissModal(MODALS.levelUnavailable);
    }

    private showChestModal = (level: GetCurrentWorld_getCurrentWorld, isNext: boolean) => {
        const passProps = {
            ctaLabel: isNext ? "let's do it" : "got it",
            heading: isNext ? "take a challenge to unlock the chest" : `unlock at level ${level.level}`,
            isLocked: true,
            onPressCta: () => {
                if (isNext) {
                    this.goToChallengesList(level);
                }
                this.dismissChestModal();
            },
            onPressCtaSecondary: isNext ? this.dismissChestModal : null
        };

        Navigation.showModal({
            component: {
                id: MODALS.chest,
                name: MODALS.chest,
                passProps
            }
        });
    }

    private showChallengeUnavailableModal = (nextAvailableAt: string) => {
        const passProps = {
            nextAvailableAt,
            onPressCta: () => {
                this.dismissChallengeUnavailableModal();
            }
        };

        Navigation.showModal({
            component: {
                id: MODALS.challengeUnavailable,
                name: MODALS.challengeUnavailable,
                passProps
            }
        });
    }

    private showLevelUnavailableModal = (level: number) => {
        const passProps = {
            level,
            onPressCta: () => {
                this.dismissLevelUnavailableModal();
            }
        };

        Navigation.showModal({
            component: {
                id: MODALS.levelUnavailable,
                name: MODALS.levelUnavailable,
                passProps
            }
        });
    }

    private goToChallengesList = (level: GetCurrentWorld_getCurrentWorld) => {
        const { componentId, labels } = this.props;
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
    }

    private formatData = (data: GetCurrentWorld_getCurrentWorld[] = []) => {
        const { currentLevel, nextLevelAvailableAt: nextAvailableAt } = this.props;

        return data.map((level) => {
            const isNext = currentLevel === level.level;
            const isDone = currentLevel > level.level;

            return {
                ...level,
                isDone,
                isNext,
                nextAvailableAt,
                onPress: () => {
                    const levelAvailable = isAvailable(nextAvailableAt);
                    const chestLevel = isChestLevel(level.level);

                    // This logic makes me want to kill myself
                    if (isDone) {
                        // goToChallengesList(); TODO: go to challengesDoneList
                        // console.log("SHOW LEVEL COMPLETE SCREEN");
                    } else if (isNext) {
                        if (levelAvailable) {
                            if (chestLevel) {
                                this.showChestModal(level, true);
                            } else {
                                this.goToChallengesList(level);
                            }
                        } else {
                            this.showChallengeUnavailableModal(nextAvailableAt);
                        }
                    } else {
                        // selected isn't the next available
                        if (chestLevel) {
                            this.showChestModal(level, false);
                        } else {
                            this.showLevelUnavailableModal(level.level);
                        }
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
    challengeCancelAction,
    challengeEndAction,
    challengeResetAction,
    displayStreaksCompletedAction
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(QuestsContainer);
