import { MODALS } from "@navigation/constants";
import { IMainTabsProps } from "@navigation/root";
import { FitKitAvailable } from "@services/fitkit/fitkit.service";
import { getCurrentWorld } from "@services/utils";
import moment from "moment";
import { PureComponent } from "react";
import React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getAppState, getOfflineState } from "../../../../redux/app/app.selectors";
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
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { DailyStepsScreen } from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IMainTabsProps & ConnectedState & ConnectedDispatch;

interface IState {
    dailyStepsLoading: boolean;
    lastUpdate?: string;
}

class DailyStepsContainer extends PureComponent<Props, IState> {
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

    public render() {
        return (
            <FitKitAvailable>
                {({ available, authorised, authorise, loading }) => {
                    const {
                        currentLevel,
                        challengesStatus,
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
                        copy
                    } = this.props;
                    const { dailyStepsLoading, lastUpdate } = this.state;
                    const displayStreak = features.showStreaks && streaks.displayStreak && streaks.isAvailable;
                    const displayEarnMore = challengesStatus.isAvailable;

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
                            copy={copy}
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
    appState: getAppState(state),
    challengesStatus: getChallengesStatus(state),
    currentLevel: getCurrentLevel(state),
    dailyEarnedCoins: getDailyEarnedCoins(state),
    dailySteps: getDailySteps(state),
    features: getUserFeatures(state),
    hasNotification: getHasNotification(state),
    isFetching: getDailyStepsIsFetching(state),
    lastUpdated: getLastUpdated(state),
    offline: getOfflineState(state),
    streaks: getStreaks(state),
    theme: getDailyStepsTheme(state),
    totalCoins: getTotalCoins(state),
    copy: getCopy(state, "dailyStepsFitKitAuthorise")
});

const mapDispatchToProps = {
    dailyStepsCoinClicked,
    startDailySteps
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(DailyStepsContainer);
