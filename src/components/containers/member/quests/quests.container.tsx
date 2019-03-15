import { getCurrentWorld } from "@services/utils";
import moment from "moment";
import { PureComponent } from "react";
import React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { FitKitAvailable } from "react-native-fitkit";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../graphql/_core/schema";
import GetCurrentWorld, {
    getCurrentWorldGql,
    GetCurrentWorldResultType
} from "../../../../graphql/challenges/getCurrentWorld.gql";
import { MODALS, ROUTES } from "../../../../navigation/constants";
import { IMainTabsProps } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import {
    challengeCancelAction,
    challengeEndAction,
    challengeResetAction
} from "../../../../redux/levels/levels.actions";
import { submitUnityAction } from "../../../../redux/levels/levels.actions";
import {
    getActiveLevel,
    getChallengesStatus,
    getCurrentLevel,
    getNextLevelAvailableAt
} from "../../../../redux/levels/levels.selectors";
import { displayStreaksCompletedAction } from "../../../../redux/streaks/streaks.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import { openCalm, openHeadspace } from "../../../../services/app-link";
import BlurProvider from "../../../atoms/blur/blur-provider";
import Loading from "../../../atoms/loading/loading";
import { ChallengeCompleteModal, GenericModal } from "../../../modals";
import {
    ChallengeFailedScreen,
    ChallengeProgressScreen,
    ChallengeSuccessScreen,
    QuestsScreen,
    QuestsScreenOffline,
    QuestsScrollScreen
} from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

function isAvailable(nextAvailableAt: string): boolean {
    const nextAvailable = !!nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

    return nextAvailable >= 0;
}

function getLevelStatus(
    challengesStatus: ConnectedState["challengesStatus"],
    currentLevel: number,
    level: number,
    nextAvailableAt: string
) {
    const { hasDone: hasDoneChallenge, isAvailable: isChallengeAvailable } = challengesStatus;
    const isInSecondWorld = currentLevel > 51;

    if (currentLevel === level) {
        return {
            isActive: isInSecondWorld && hasDoneChallenge ? !isChallengeAvailable : true,
            isDone: false,
            isNext: true,
            isPrevious: false,
            nextAvailableAt
        };
    }

    // previous level = currentLevel - 1
    // previous level for unity = currentLevel - 2
    if (
        (level % 50 !== 0 && currentLevel - 1 === level) ||
        (isInSecondWorld && currentLevel % 50 === 1 && currentLevel - 2 === level)
    ) {
        const previousAvailable = hasDoneChallenge && isChallengeAvailable;
        return {
            isActive: previousAvailable,
            isDone: true,
            isNext: previousAvailable,
            isPrevious: true,
            nextAvailableAt: ""
        };
    }

    return {
        isDone: currentLevel > level,
        isNext: false,
        isPrevious: false,
        nextAvailableAt: ""
    };
}

type Props = IMainTabsProps & ConnectedState & ConnectedDispatch;

interface IState {
    unity: number;
}

class QuestsContainer extends PureComponent<Props, IState> {
    public state: IState = {
        unity: null
    };
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
        if (this.backHandler) {
            this.backHandler.remove();
        }
    }

    public render() {
        const { currentLevel, labels, offline, onLeftMenuPress, totalCoins } = this.props;

        return (
            <FitKitAvailable>
                {({ available }) => {
                    if (!available || offline) {
                        return (
                            <QuestsScreenOffline
                                currentLevel={currentLevel}
                                fitkitAvailable={available}
                                totalCoins={totalCoins}
                                labels={labels}
                                onLeftMenuPress={onLeftMenuPress}
                            />
                        );
                    }

                    return (
                        <GetCurrentWorld query={getCurrentWorldGql} fetchPolicy="network-only">
                            {this.renderCurrentWorld}
                        </GetCurrentWorld>
                    );
                }}
            </FitKitAvailable>
        );
    }

    private renderCurrentWorld = ({ loading, data, refetch }: GetCurrentWorldResultType) => {
        const { unity } = this.state;
        const {
            activeLevel: {
                coins,
                endDateTime,
                level,
                milestones,
                rating,
                score,
                status,
                subtype,
                timeUp,
                unit,
                isLoading
            },
            componentId,
            currentLevel,
            features,
            labels,
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

        if (status) {
            return status === "success" ? (
                <ChallengeSuccessScreen
                    level={level}
                    onPressCta={this.handleResetChallenge(refetch, true)}
                    rating={rating}
                    reward={coins}
                    score={score}
                    unit={unit as any}
                />
            ) : (
                <ChallengeFailedScreen level={level} onPress={this.handleResetChallenge(refetch)} />
            );
        }

        if (timeUp) {
            return <ChallengeCompleteModal isLoading={isLoading} onCtaPress={this.props.challengeEndAction} />;
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
                            currentWorld={getCurrentWorld(level)}
                            showCounter={features.showCounter}
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
                            isSecondaryLoading={isLoading}
                            ctaLabelSecondary="exit"
                        />
                    )}
                />
            );
        }

        if (loading) {
            return <Loading />;
        }

        return true ? (
            <QuestsScrollScreen
                {...props}
                data={this.formatData(data.getCurrentWorld)}
                hideUnity={this.hideUnity}
                unity={unity}
            />
        ) : (
            <QuestsScreen {...props} data={this.formatData(data.getCurrentWorld)} />
        );
    };

    private hideUnity = () => {
        this.setState({ unity: null });
    };

    private handleResetChallenge = (refetch: () => void, showStreakComplete?: boolean) => () => {
        if (showStreakComplete) {
            this.props.displayStreaksCompletedAction();
        }
        refetch();
        this.props.challengeResetAction();
    };

    private dismissChestModal = () => {
        Navigation.dismissModal(MODALS.chest);
    };

    private dismissChallengeUnavailableModal = () => {
        Navigation.dismissModal(MODALS.challengeUnavailable);
    };

    private dismissLevelUnavailableModal = () => {
        Navigation.dismissModal(MODALS.levelUnavailable);
    };

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
    };

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
    };

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
    };

    private showLevelCompleteModal = (level: GetCurrentWorld_getCurrentWorld) => {
        const { componentId, labels } = this.props;

        const passProps = {
            labels,
            level,
            onPressActivityHistory: () => {
                Navigation.push(componentId, {
                    component: {
                        id: ROUTES.activityHistory,
                        name: ROUTES.activityHistory
                    }
                });
            }
        };

        Navigation.push(componentId, {
            component: {
                id: ROUTES.questsChallengesHistory,
                name: ROUTES.questsChallengesHistory,
                passProps
            }
        });
    };

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
    };

    private formatData = (data: GetCurrentWorld_getCurrentWorld[] = []) => {
        const { challengesStatus, currentLevel, features, nextLevelAvailableAt: nextAvailableAt } = this.props;

        return data.map((level) => {
            const status = getLevelStatus(challengesStatus, currentLevel, level.level, nextAvailableAt);
            const isChestLevel = !!level.levelChestId;

            return {
                ...level,
                ...status,
                isChestLevel,
                onPress: () => {
                    const levelAvailable = isAvailable(nextAvailableAt);

                    // This logic makes me want to kill myself
                    // Please increment the next number if you agree
                    // +3

                    if (status.isDone) {
                        if (level.level % 50 === 0) {
                            // is unity level
                            this.setState({ unity: level.level });
                        } else if (status.isPrevious && challengesStatus.hasDone && challengesStatus.isAvailable) {
                            this.goToChallengesList(level);
                        } else if (features.showCompletedLevel) {
                            this.showLevelCompleteModal(level);
                        }
                    } else if (status.isNext) {
                        if (level.level % 50 === 0) {
                            // is unity level
                            this.setState({ unity: level.level }, () => {
                                this.props.submitUnityAction({ levelId: level.id });
                            });
                        } else if (levelAvailable) {
                            if (isChestLevel) {
                                this.showChestModal(level, true);
                            } else {
                                this.goToChallengesList(level);
                            }
                        } else {
                            this.showChallengeUnavailableModal(nextAvailableAt);
                        }
                    } else {
                        // selected isn't the next available
                        if (isChestLevel) {
                            this.showChestModal(level, false);
                        } else {
                            this.showLevelUnavailableModal(level.level);
                        }
                    }
                }
            };
        });
    };
}

const mapStateToProps = (state: IReduxState) => ({
    activeLevel: getActiveLevel(state),
    challengesStatus: getChallengesStatus(state),
    currentLevel: getCurrentLevel(state),
    features: getUserFeatures(state),
    nextLevelAvailableAt: getNextLevelAvailableAt(state),
    offline: getOfflineState(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    challengeCancelAction,
    challengeEndAction,
    challengeResetAction,
    displayStreaksCompletedAction,
    submitUnityAction
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(QuestsContainer);
