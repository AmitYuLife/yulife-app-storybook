import * as React from "react";
import { PureComponent } from "react";
import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
    GetCurrentUser_getCurrentUser_activeChallenge,
    GetCurrentUser_getCurrentUser_todayActivity
} from "../../../graphql/_core/schema";
import { getCurrentUserGql, GetCurrentUserQuery } from "../../../graphql/user/getCurrentUser.gql";
import { IReduxState } from "../../../redux/_core/reducers";
import { getDailyStepsCoins } from "../../../redux/coins/coins.selectors";
import { ExchangeRate, exchangeRateSelector, getDailySteps } from "../../../redux/daily-steps/daily-steps.selectors";
import { challengesStatusSelector, ITodayChallengesStatus } from "../../../redux/levels/levels.selectors";
import { pathOr } from "../../../services/utils";
import Loading from "../../atoms/loading/loading";
import { TodayYucoinScreen } from "../../screens";

interface IProps {
    componentId: string;
    onCtaPress: () => void;
}

interface IConnectedState {
    challengesStatus: ITodayChallengesStatus;
    dailyStepsEarned: number;
    exchangeRate: ExchangeRate;
    steps: number;
}

type ActiveChallenge = GetCurrentUser_getCurrentUser_activeChallenge;
type ChallengeToday = GetCurrentUser_getCurrentUser_todayActivity;
type Props = IProps & IConnectedState;

class TodayYucoinContainer extends PureComponent<Props> {
    public render() {
        const { challengesStatus, dailyStepsEarned, exchangeRate, steps } = this.props;

        return (
            <GetCurrentUserQuery
                query={getCurrentUserGql}
                fetchPolicy="network-only"
                variables={{ intercomHashMethod: Platform.OS }}
            >
                {({ loading, data }) => {
                    if (loading) {
                        return <Loading />;
                    }

                    const todayActivity = pathOr<ChallengeToday[]>(data, "getCurrentUser.todayActivity", []);
                    const { challenge, levelSlot } = pathOr<ActiveChallenge>(data, "getCurrentUser.activeChallenge", {
                        challenge: null,
                        levelSlot: null
                    });
                    const activeChallenge: ChallengeToday =
                        challenge && challenge.incomingData
                            ? {
                                  earned: challenge.yuCoinAwarded,
                                  id: challenge.id,
                                  milestones: challenge.rating,
                                  name: challenge.subtype || levelSlot.subtype,
                                  score: challenge.incomingData
                              }
                            : null;

                    return (
                        <TodayYucoinScreen
                            activeChallenge={activeChallenge}
                            challenges={todayActivity}
                            dailyStepsEarned={dailyStepsEarned}
                            exchangeRate={exchangeRate}
                            steps={steps}
                            onPressCta={this.handleCtaPress}
                            onPressClose={this.handleClose}
                            showCta={challengesStatus.isAvailable}
                            ctaLabel={challengesStatus.done > 0 ? "take another challenge" : "take a challenge"}
                        />
                    );
                }}
            </GetCurrentUserQuery>
        );
    }

    private handleClose = () => {
        Navigation.dismissModal(this.props.componentId);
    }

    private handleCtaPress = () => {
        Navigation.dismissModal(this.props.componentId);
        this.props.onCtaPress();
    }
}

const mapStateToProps = (state: IReduxState) => ({
    challengesStatus: challengesStatusSelector(state),
    dailyStepsEarned: getDailyStepsCoins(state),
    exchangeRate: exchangeRateSelector(state),
    steps: getDailySteps(state)
});

export default connect<IConnectedState>(mapStateToProps)(TodayYucoinContainer);
