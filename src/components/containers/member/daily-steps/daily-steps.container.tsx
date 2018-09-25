import moment from "moment";
import { PureComponent } from "react";
import React from "react";
import { FitKitAvailable } from "react-native-fitkit";
import { connect } from "react-redux";
import { IMainTabsProps } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { SyncAction } from "../../../../redux/_core/types";
import { getAppState, getOfflineState } from "../../../../redux/app/app.selectors";
import { getDailyEarnedCoins, getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { startDailySteps, stopDailySteps } from "../../../../redux/daily-steps/daily-steps.actions";
import { getDailySteps, getLastUpdated } from "../../../../redux/daily-steps/daily-steps.selectors";
import { dailyStepsCoinClicked } from "../../../../redux/logging/logging.actions";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { DailyStepsScreen } from "../../../screens";

interface IConnectedState {
    appState: string;
    dailyEarnedCoins: number;
    dailySteps: number;
    lastUpdated: string;
    offline: boolean;
    totalCoins: number;
}

interface IConnectedDispatch {
    dailyStepsCoinClicked: () => SyncAction;
    startDailySteps: () => SyncAction;
    stopDailySteps: () => SyncAction;
}

type Props = IMainTabsProps &
    IConnectedState &
    IConnectedDispatch;

interface IState {
    dailyStepsLoading: boolean;
    lastUpdate?: string;
}

class DailyStepsContainer extends PureComponent<Props, IState> {
    public state: IState = {
        dailyStepsLoading: true
    };

    public componentDidMount() {
        this.props.startDailySteps();
    }

    public componentWillUnmount() {
        this.props.stopDailySteps();
    }

    public componentDidUpdate(prevProps: Props) {
        const { lastUpdated } = this.props;

        if (prevProps.lastUpdated !== this.props.lastUpdated) {
            const lastUpdatedMoment = moment(lastUpdated);
            const startOfDay = moment().startOf("day");

            this.setState({
                dailyStepsLoading: lastUpdatedMoment.isBefore(startOfDay),
                lastUpdate: lastUpdatedMoment.format("ddd D MMM, HH:mm")
            });
        } else {
            this.setState({ dailyStepsLoading: false });
        }
    }

    public render() {
        const { dailyEarnedCoins, dailySteps, labels, offline, onLeftMenuPress, totalCoins } = this.props;
        const { dailyStepsLoading, lastUpdate } = this.state;

        return (
            <FitKitAvailable>
                {({ available, authorised, authorise, loading }) => {
                    return (
                        <DailyStepsScreen
                            coinsToday={dailyEarnedCoins}
                            currentStreak={2}
                            fitKitAvailable={available}
                            hasPermission={authorised}
                            isDoneToday={false}
                            isLoading={loading || dailyStepsLoading}
                            isOnline={!offline}
                            labels={labels}
                            lastUpdate={lastUpdate}
                            maxStreak={4}
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
        this.props.dailyStepsCoinClicked();
    }

    private onCta = () => {
        this.props.labels[1].onPress();
    }

    private onStreak = () => {
        // console.log("");
    }
}

const mapStateToProps = (state: IReduxState) => ({
    appState: getAppState(state),
    dailyEarnedCoins: getDailyEarnedCoins(state),
    dailySteps: getDailySteps(state),
    lastUpdated: getLastUpdated(state),
    offline: getOfflineState(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    dailyStepsCoinClicked,
    startDailySteps,
    stopDailySteps
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(DailyStepsContainer);
