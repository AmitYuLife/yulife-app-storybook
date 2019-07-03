import { MODALS } from "@navigation/constants";
import { IMainTabsProps } from "@navigation/root";
import { FitKitAvailable } from "@services/fitkit/fitkit.service";
import { getCurrentWorld } from "@services/utils";
import moment from "moment";
import React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import { getDailyEarnedCoins, getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { startDailySteps } from "../../../../redux/daily-steps/daily-steps.actions";
import {
    getDailySteps,
    getDailyStepsIsFetching,
    getLastUpdated
} from "../../../../redux/daily-steps/daily-steps.selectors";
import { getChallengesStatus, getCurrentLevel, getHasNotification } from "../../../../redux/levels/levels.selectors";
import { dailyStepsCoinClicked } from "../../../../redux/logging/logging.actions";
import { getStreaks } from "../../../../redux/streaks/streaks.selectors";
import { getDailyStepsTheme } from "../../../../redux/theme/theme.selectors";
import { updateLeaderboardPopupVisibility, updateSurgePopupVisibility } from "../../../../redux/user/user.actions";
import { getUserFeatures, getVisiblePopups } from "../../../../redux/user/user.selectors";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { DailyStepsScreen } from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IMainTabsProps & ConnectedState & ConnectedDispatch;

interface IState {
    dailyStepsLoading: boolean;
    lastUpdate?: string;
}

class DailyStepsContainer extends React.Component<Props, IState> {
    public state: IState = {
        dailyStepsLoading: true
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
        this.props.startDailySteps();
    }

    public componentDidDisappear() {
        if (this.backHandler) {
            this.backHandler.remove();
        }
    }

    public componentDidUpdate(prevProps: Props) {
        const { lastUpdated } = this.props;

        this.setState((state) => ({
            dailyStepsLoading: false,
            lastUpdate:
                prevProps.lastUpdated !== lastUpdated
                    ? moment(lastUpdated).format("ddd D MMM, HH:mm")
                    : state.lastUpdate
        }));
    }

    public shouldComponentUpdate(nextProps: Props, nextState: IState) {
        return (
            nextState.dailyStepsLoading !== this.state.dailyStepsLoading ||
            nextProps.currentLevel !== this.props.currentLevel ||
            nextProps.dailyEarnedCoins !== this.props.dailyEarnedCoins ||
            nextProps.dailySteps !== this.props.dailySteps ||
            nextProps.displayEarnMore !== this.props.displayEarnMore ||
            nextProps.hasNotification !== this.props.hasNotification ||
            nextProps.isFetching !== this.props.isFetching ||
            nextProps.lastUpdated !== this.props.lastUpdated ||
            nextProps.offline !== this.props.offline
        );
    }

    public render() {
        return (
            <FitKitAvailable>
                {({ available, authorised, authorise, loading }) => {
                    const {
                        currentLevel,
                        displayEarnMore,
                        dailyEarnedCoins,
                        dailySteps,
                        features = {},
                        hasNotification,
                        isFetching,
                        labels,
                        offline,
                        onLeftMenuPress,
                        streaks,
                        theme,
                        totalCoins,
                        copy,
                        popUpCopy,
                        popupVisibility
                    } = this.props;
                    const { dailyStepsLoading, lastUpdate } = this.state;
                    const displayStreak = features.showStreaks && streaks.displayStreak && streaks.isAvailable;

                    return (
                        <DailyStepsScreen
                            coinsToday={dailyEarnedCoins}
                            showCounter={features.showCounter}
                            currentStreak={streaks.currentStreak}
                            currentWorld={getCurrentWorld(currentLevel)}
                            displayStreak={displayStreak}
                            fitKitAvailable={available}
                            hasNotification={hasNotification}
                            hasPermission={authorised}
                            isDoneToday={streaks.isDoneToday}
                            isLoading={isFetching || loading || dailyStepsLoading}
                            isOnline={!offline}
                            labels={labels}
                            lastUpdate={lastUpdate}
                            maxStreak={streaks.maxStreak}
                            onAuthoriseFitKitPress={() => authorise(FitKitPermissions)}
                            onCoinPress={this.onCoinPress}
                            onCtaPress={displayEarnMore ? this.onCta : null}
                            onLeftMenuPress={onLeftMenuPress}
                            onStreakPress={this.onStreak}
                            steps={dailySteps}
                            theme={theme}
                            totalCoins={totalCoins}
                            copy={{ copy, popUpCopy }}
                            onUpdateLeaderboardPopupVisibility={this.props.updateLeaderboardPopupVisibility}
                            onUpdateSurgePopupVisibility={this.props.updateSurgePopupVisibility}
                            popupVisibility={popupVisibility}
                        />
                    );
                }}
            </FitKitAvailable>
        );
    }

    private onCoinPress = () => {
        const { features = {}, dailyStepsCoinClicked: clickDailySteps } = this.props;
        clickDailySteps();

        if (features.showTodayYucoin) {
            Navigation.showModal({
                component: {
                    id: MODALS.todayYucoin,
                    name: MODALS.todayYucoin,
                    passProps: {
                        onCtaPress: this.onCta
                    }
                }
            });
        }
    };

    private onCta = () => {
        this.props.labels[1].onPress();
    };

    private onStreak = () => {
        const {
            streaks: { currentStreak, isDoneToday, maxStreak, reward, nextStreakAvailableAt },
            labels
        } = this.props;
        const modalName = MODALS.streaks;

        Navigation.showModal({
            component: {
                id: modalName,
                name: modalName,
                passProps: {
                    isDoneToday,
                    onPressCtaPrimary: () => {
                        if (!isDoneToday) {
                            labels[1].onPress();
                        }
                        Navigation.dismissModal(modalName);
                    },
                    onPressCtaSecondary: isDoneToday
                        ? null
                        : () => {
                              Navigation.dismissModal(modalName);
                          },
                    reward,
                    streakCompleted: currentStreak,
                    streakMax: maxStreak,
                    nextStreakAvailableAt
                }
            }
        });
    };
}

const mapStateToProps = (state: IReduxState) => ({
    currentLevel: getCurrentLevel(state),
    dailyEarnedCoins: getDailyEarnedCoins(state),
    dailySteps: getDailySteps(state),
    displayEarnMore: getChallengesStatus(state).isAvailable,
    features: getUserFeatures(state),
    hasNotification: getHasNotification(state),
    isFetching: getDailyStepsIsFetching(state),
    lastUpdated: getLastUpdated(state),
    offline: getOfflineState(state),
    streaks: getStreaks(state),
    theme: getDailyStepsTheme(state),
    totalCoins: getTotalCoins(state),
    copy: getCopy(state, "dailyStepsFitKitAuthorise"),
    popUpCopy: getCopy(state, "popUp"),
    popupVisibility: getVisiblePopups(state)
});

const mapDispatchToProps = {
    dailyStepsCoinClicked,
    startDailySteps,
    updateLeaderboardPopupVisibility,
    updateSurgePopupVisibility
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(DailyStepsContainer);
