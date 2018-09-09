import moment from "moment";
import React from "react";
import { PureComponent } from "react";
import { FitKitAvailable } from "react-native-fitkit";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { SyncAction } from "../../../../redux/_core/types";
import { getAppState, getOfflineState } from "../../../../redux/app/app.selectors";
import { getDailyEarnedCoins } from "../../../../redux/coins/coins.selectors";
import { startDailySteps, stopDailySteps } from "../../../../redux/daily-steps/daily-steps.actions";
import { getDailySteps, getLastUpdated } from "../../../../redux/daily-steps/daily-steps.selectors";
import { dailyStepsCoinClicked } from "../../../../redux/logging/logging.actions";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { DailyStepsScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId?: string;
}

interface IConnectedState {
    appState: string;
    dailyEarnedCoins: number;
    dailySteps: number;
    lastUpdated: string;
    offline: boolean;
}

interface IConnectedDispatch {
    dailyStepsCoinClicked: () => SyncAction;
    startDailySteps: () => SyncAction;
    stopDailySteps: () => SyncAction;
}

type Props = IProps &
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
        const { appState, lastUpdated } = this.props;

        if (prevProps.lastUpdated !== this.props.lastUpdated) {
            const lastUpdatedMoment = moment(lastUpdated);
            const startOfDay = moment().startOf("day");

            this.setState({
                dailyStepsLoading: lastUpdatedMoment.isBefore(startOfDay),
                lastUpdate: lastUpdatedMoment.format("ddd D MMM, HH:mm")
            });
        }

        // bringing app back from background
        if (prevProps.appState.match(/inactive|background/) && appState === "active") {
            this.props.startDailySteps();
        }

        // sending app back to background
        if (prevProps.appState === "active" && appState.match(/inactive|background/)) {
            this.props.stopDailySteps();
        }
    }

    public render() {
        const { dailyEarnedCoins, dailySteps, offline } = this.props;
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
                            lastUpdate={lastUpdate}
                            maxStreak={4}
                            onAuthoriseFitKitPress={() => authorise(FitKitPermissions)}
                            onCoinPress={this.onCoinPress}
                            onCtaPress={this.onCta}
                            onStreakPress={this.onStreak}
                            steps={dailySteps}
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
        // setToken("");
        // Navigation.push(this.props.componentId, {
        //     component: {
        //         name: "yulife.member.ChallengesList",
        //     },
        // });
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
    offline: getOfflineState(state)
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
