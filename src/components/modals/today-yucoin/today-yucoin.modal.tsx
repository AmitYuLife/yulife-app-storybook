import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
    GetCurrentUser_getCurrentUser_activeChallenge,
    GetCurrentUser_getCurrentUser_challengesToday
} from "../../../graphql/_core/schema";
import { getCurrentUserGql, GetCurrentUserQuery } from "../../../graphql/user/getCurrentUser.gql";
import { IReduxState } from "../../../redux/_core/reducers";
import { getDailyStepsCoins } from "../../../redux/coins/coins.selectors";
import { getDailySteps } from "../../../redux/daily-steps/daily-steps.selectors";
import { pathOr } from "../../../services/utils";
import Loading from "../../atoms/loading/loading";
import { TodayYucoinScreen } from "../../screens";

interface IProps {
    componentId: string;
    onCtaPress: () => void;
}

interface IConnectedState {
    dailyStepsEarned: number;
    steps: number;
}

type ActiveChallenge = GetCurrentUser_getCurrentUser_activeChallenge;
type ChallengesToday = GetCurrentUser_getCurrentUser_challengesToday;
type Props = IProps & IConnectedState;

class TodayYucoinContainer extends PureComponent<Props> {
    public render() {
        const { dailyStepsEarned, steps } = this.props;

        return (
            <GetCurrentUserQuery query={getCurrentUserGql} fetchPolicy="network-only">
                {({ loading, data }) => {
                    if (loading) {
                        return <Loading />;
                    }

                    const challengesToday = pathOr<ChallengesToday[]>(data, "getCurrentUser.challengesToday", []);
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
                            dailyStepsEarned={dailyStepsEarned}
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
    steps: getDailySteps(state)
});

export default connect<IConnectedState>(mapStateToProps)(TodayYucoinContainer);
