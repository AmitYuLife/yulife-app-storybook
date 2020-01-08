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
import { getDailyMeditationCoins, getDailyStepsCoins } from "../../../redux/coins/coins.selectors";
import {
    getDailyMeditation,
    getMeditationAwardedMilestonesLength,
    getMeditationExchangeRate
} from "../../../redux/daily-meditation/daily-meditation.selectors";
import { getDailySteps, getExchangeRate } from "../../../redux/daily-steps/daily-steps.selectors";
import { getChallengesStatus } from "../../../redux/levels/levels.selectors";
import { getUserFeatures } from "../../../redux/user/user.selectors";
import { pathOr } from "../../../services/utils";
import { TodayYucoinScreen } from "../../screens";

interface IProps {
    componentId: string;
    onCtaPress: () => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type ActiveChallenge = GetCurrentUser_getCurrentUser_activeChallenge;
type ChallengeToday = GetCurrentUser_getCurrentUser_todayActivity;
type Props = IProps & ConnectedState;

class TodayYucoinContainer extends PureComponent<Props> {
    public render() {
        const {
            challengesStatus,
            dailyStepsEarned,
            exchangeRate,
            steps,
            features,
            dailyMeditation,
            dailyMeditationEarned,
            isShowingPassiveMeditation,
            meditationExchangeRate,
            passiveMeditationAwardedMilestonesLength
        } = this.props;

        return (
            <GetCurrentUserQuery
                query={getCurrentUserGql}
                fetchPolicy="network-only"
                variables={{ intercomHashMethod: Platform.OS }}
            >
                {({ loading, data }) => {
                    const todayActivity = pathOr<ChallengeToday[]>(data, "getCurrentUser.todayActivity", []);
                    const { challenge, levelSlot } = pathOr<ActiveChallenge>(data, "getCurrentUser.activeChallenge", {
                        challenge: null,
                        levelSlot: null
                    });

                    const surgeMultiplier = (exchangeRate && exchangeRate.surge) || 1;
                    const meditationSurgeMultiplier = (meditationExchangeRate && meditationExchangeRate.surge) || 1;

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
                            loading={loading}
                            steps={steps}
                            onPressCta={this.handleCtaPress}
                            onPressClose={this.handleClose}
                            showCta={challengesStatus.isAvailable}
                            ctaLabel={this.getCtaLabel(challengesStatus.done, !!activeChallenge)}
                            isShowingPassiveMeditation={isShowingPassiveMeditation}
                            isStepsSurge={features.showSurge && surgeMultiplier > 1}
                            isMeditationSurge={isShowingPassiveMeditation && meditationSurgeMultiplier > 1}
                            meditationSeconds={dailyMeditation}
                            dailyMeditationEarned={dailyMeditationEarned}
                            meditationExchangeRate={meditationExchangeRate}
                            passiveMeditationAwardedMilestonesLength={passiveMeditationAwardedMilestonesLength}
                        />
                    );
                }}
            </GetCurrentUserQuery>
        );
    }

    private getCtaLabel = (challengesDone: number, hasActiveChallenge: boolean) => {
        if (hasActiveChallenge) {
            return "back to challenge";
        }
        return challengesDone > 0 ? "take another challenge" : "take a challenge";
    };

    private handleClose = () => {
        Navigation.dismissModal(this.props.componentId);
    };

    private handleCtaPress = () => {
        Navigation.dismissModal(this.props.componentId);
        this.props.onCtaPress();
    };
}

const mapStateToProps = (state: IReduxState) => ({
    challengesStatus: getChallengesStatus(state),
    dailyStepsEarned: getDailyStepsCoins(state),
    exchangeRate: getExchangeRate(state),
    meditationExchangeRate: getMeditationExchangeRate(state),
    passiveMeditationAwardedMilestonesLength: getMeditationAwardedMilestonesLength(state),
    steps: getDailySteps(state),
    dailyMeditation: getDailyMeditation(state),
    dailyMeditationEarned: getDailyMeditationCoins(state),
    isShowingPassiveMeditation: getUserFeatures(state).usePassiveMeditation,
    features: getUserFeatures(state)
});

export default connect<ConnectedState>(mapStateToProps)(TodayYucoinContainer);
