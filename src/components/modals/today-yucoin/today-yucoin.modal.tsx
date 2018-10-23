import * as React from "react";
import { PureComponent } from "react";
import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
    GetCurrentUser_getCurrentUser_activeChallenge,
    GetCurrentUser_getCurrentUser_activityToday_challenges,
    GetCurrentUser_getCurrentUser_activityToday_chest
} from "../../../graphql/_core/schema";
import { getCurrentUserGql, GetCurrentUserQuery } from "../../../graphql/user/getCurrentUser.gql";
import { IReduxState } from "../../../redux/_core/reducers";
import { getDailyStepsCoins } from "../../../redux/coins/coins.selectors";
import { ExchangeRate, exchangeRateSelector, getDailySteps } from "../../../redux/daily-steps/daily-steps.selectors";
import { pathOr } from "../../../services/utils";
import Loading from "../../atoms/loading/loading";
import { TodayYucoinScreen } from "../../screens";

interface IProps {
    componentId: string;
    onCtaPress: () => void;
}

interface IConnectedState {
    dailyStepsEarned: number;
    exchangeRate: ExchangeRate;
    steps: number;
}

type ActiveChallenge = GetCurrentUser_getCurrentUser_activeChallenge;
type ChallengesToday = GetCurrentUser_getCurrentUser_activityToday_challenges;
type ChestToday = GetCurrentUser_getCurrentUser_activityToday_chest;
type Props = IProps & IConnectedState;

class TodayYucoinContainer extends PureComponent<Props> {
    public render() {
        const { dailyStepsEarned, exchangeRate, steps } = this.props;

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

                    const chest = pathOr<ChestToday>(data, "getCurrentUser.activityToday.chest", null);
                    const challengesToday = pathOr<ChallengesToday[]>(
                        data,
                        "getCurrentUser.activityToday.challenges",
                        []
                    );
                    const { challenge, levelSlot } = pathOr<ActiveChallenge>(data, "getCurrentUser.activeChallenge", {
                        challenge: null,
                        levelSlot: null
                    });
                    const activeChallenge: ChallengesToday =
                        challenge && challenge.incomingData
                            ? {
                                  incomingData: challenge.incomingData,
                                  rating: challenge.rating,
                                  subtype: challenge.subtype || levelSlot.subtype,
                                  yuCoinAwarded: challenge.yuCoinAwarded
                              }
                            : null;

                    return (
                        <TodayYucoinScreen
                            activeChallenge={activeChallenge}
                            challenges={challengesToday}
                            chest={chest}
                            dailyStepsEarned={dailyStepsEarned}
                            exchangeRate={exchangeRate}
                            steps={steps}
                            onPressCta={this.handleCtaPress}
                            onPressClose={this.handleClose}
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
    dailyStepsEarned: getDailyStepsCoins(state),
    exchangeRate: exchangeRateSelector(state),
    steps: getDailySteps(state)
});

export default connect<IConnectedState>(mapStateToProps)(TodayYucoinContainer);
