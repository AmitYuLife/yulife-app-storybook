import React from "react";
import { PureComponent } from "react";
import { setToken } from "../../../../services/storage";
import { connect } from "react-redux";
import { DailyStepsScreen } from "../../../screens";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getDailyEarnedCoins } from "../../../../redux/coins/coins.selectors";
import { getDailySteps } from "../../../../redux/daily-steps/daily-steps.selectors";
import { startDailySteps, stopDailySteps } from "../../../../redux/daily-steps/daily-steps.actions";
import { getAppState } from "../../../../redux/app/app.selectors";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId?: string;
}

interface IConnectedState {
    appState: string;
    dailyEarnedCoins: number;
    dailySteps: number;
}

// TODO tyyyyyyypes!
interface IConnectedDispatch {
    startDailySteps: () => any;
    stopDailySteps: () => any;
}

type Props = IProps &
    IConnectedState &
    IConnectedDispatch;

class DailyStepsContainer extends PureComponent<Props> {

    public componentDidMount() {
        this.props.startDailySteps();
    }

    public componentWillUnmount() {
        this.props.stopDailySteps();
    }

    public componentDidUpdate(prevProps: Props) {
        const { appState } = this.props;

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
        const { dailyEarnedCoins, dailySteps } = this.props;

        return (
            <DailyStepsScreen
                coinsToday={dailyEarnedCoins}
                currentStreak={2}
                isDoneToday={false}
                maxStreak={4}
                onCtaPress={this.onCta}
                onStreakPress={this.onStreak}
                steps={dailySteps}
            />
        );
    }

    private onCta = () => {
        setToken("");
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
});

const mapDispatchToProps = {
    startDailySteps,
    stopDailySteps
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(DailyStepsContainer);
