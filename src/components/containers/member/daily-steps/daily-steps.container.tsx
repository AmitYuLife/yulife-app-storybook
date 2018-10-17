import moment from "moment";
import { PureComponent } from "react";
import React from "react";
import { FitKitAvailable } from "react-native-fitkit";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IMainTabsProps } from "../../../../navigation/root";
import { MODALS } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { SyncAction } from "../../../../redux/_core/types";
import { getAppState, getOfflineState } from "../../../../redux/app/app.selectors";
import { getDailyEarnedCoins, getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { startDailySteps } from "../../../../redux/daily-steps/daily-steps.actions";
import { getDailySteps, getLastUpdated } from "../../../../redux/daily-steps/daily-steps.selectors";
import { hasNotificationSelector } from "../../../../redux/levels/levels.selectors";
import { dailyStepsCoinClicked } from "../../../../redux/logging/logging.actions";
import { IStreaks, streaksSelector } from "../../../../redux/streaks/streaks.selectors";
import { userFeaturesSelector } from "../../../../redux/user/user.selectors";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { DailyStepsScreen } from "../../../screens";

interface IConnectedState {
    appState: string;
    dailyEarnedCoins: number;
    dailySteps: number;
    features: { [x: string]: boolean };
    hasNotification: boolean;
    lastUpdated: string;
    offline: boolean;
    streaks: IStreaks;
    totalCoins: number;
}

interface IConnectedDispatch {
    dailyStepsCoinClicked: () => SyncAction;
    startDailySteps: () => SyncAction;
}

type Props = IMainTabsProps & IConnectedState & IConnectedDispatch;

interface IState {
    dailyStepsLoading: boolean;
    lastUpdate?: string;
}

class DailyStepsContainer extends PureComponent<Props, IState> {

    public state: IState = {
        dailyStepsLoading: true
    };

    constructor(props: Props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.props.startDailySteps();
    }

    public componentDidUpdate(prevProps: Props) {
        const { lastUpdated } = this.props;

        if (prevProps.lastUpdated !== lastUpdated) {
            this.setState({
                dailyStepsLoading: false,
                lastUpdate: moment(lastUpdated).format("ddd D MMM, HH:mm")
            });
        } else {
            this.setState({ dailyStepsLoading: false });
        }
    }

    public render() {
        const {
            dailyEarnedCoins,
            dailySteps,
            features = {},
            hasNotification,
            labels,
            offline,
            onLeftMenuPress,
            streaks,
            totalCoins
        } = this.props;
        const { dailyStepsLoading, lastUpdate } = this.state;

        const displayStreak = features.showStreaks && streaks.displayStreak;

        return (
            <FitKitAvailable>
                {({ available, authorised, authorise, loading }) => {
                    return (
                        <DailyStepsScreen
                            coinsToday={dailyEarnedCoins}
                            currentStreak={streaks.currentStreak}
                            displayStreak={displayStreak}
                            fitKitAvailable={available}
                            hasNotification={hasNotification}
                            hasPermission={authorised}
                            isDoneToday={streaks.isDoneToday}
                            isLoading={loading || dailyStepsLoading}
                            isOnline={!offline}
                            labels={labels}
                            lastUpdate={lastUpdate}
                            maxStreak={streaks.maxStreak}
                            onAuthoriseFitKitPress={() => authorise(FitKitPermissions)}
                            onCoinPress={this.onCoinPress}
                            onCtaPress={this.onCta}
                            onLeftMenuPress={onLeftMenuPress}
                            onStreakPress={this.onStreak}
                            steps={dailySteps}
                            totalCoins={totalCoins}
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
    }

    private onCta = () => {
        this.props.labels[1].onPress();
    }

    private onStreak = () => {
        const {
            streaks: { currentStreak, isDoneToday, maxStreak, reward },
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
                    streakMax: maxStreak
                }
            }
        });
    }
}

const mapStateToProps = (state: IReduxState) => ({
    appState: getAppState(state),
    dailyEarnedCoins: getDailyEarnedCoins(state),
    dailySteps: getDailySteps(state),
    features: userFeaturesSelector(state),
    hasNotification: hasNotificationSelector(state),
    lastUpdated: getLastUpdated(state),
    offline: getOfflineState(state),
    streaks: streaksSelector(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    dailyStepsCoinClicked,
    startDailySteps
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(DailyStepsContainer);
