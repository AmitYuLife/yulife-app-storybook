import { getTimeRemaining } from "@services/utils";
import * as React from "react";
import { PureComponent } from "react";
import { connect } from "react-redux";
import CollectAwardMutation, { collectAwardGql } from "../../../graphql/member/collectAward.gql";
import { IReduxState } from "../../../redux/_core/reducers";
import { getCopy } from "../../../redux/copy/copy.selectors";
import { getStreakAwardId } from "../../../redux/streaks/streaks.selectors";
import { getUserStart } from "../../../redux/user/user.actions";
import { StreaksScreen } from "../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
    isDoneToday: boolean;
    onPressCtaPrimary: () => void;
    reward: string;
    onPressCtaSecondary: (() => void) | null;
    streakCompleted: number;
    streakMax: number;
    nextStreakAvailableAt: string;
}

type Props = IProps & ConnectedDispatch & ConnectedState;

interface IState {
    isLoading: boolean;
    timeRemaining: string;
}

class StreaksModal extends PureComponent<Props, IState> {
    public state = {
        isLoading: false,
        timeRemaining: getTimeRemaining(this.props.nextStreakAvailableAt)
    };

    private timer: NodeJS.Timer;

    public componentDidMount() {
        const { streakAwardId, streakCompleted, streakMax } = this.props;

        if (streakMax === streakCompleted && !streakAwardId) {
            this.timer = setTimeout(this.updateTimeRemaining, 1000);
        }
    }

    public componentWillUnmount() {
        clearTimeout(this.timer);
    }

    public render() {
        const { isLoading } = this.state;
        const {
            onPressCtaPrimary,
            onPressCtaSecondary,
            reward,
            streakAwardId,
            streakMax
        } = this.props;

        return (
            <CollectAwardMutation mutation={collectAwardGql}>
                {(collectAward) => {
                    const onSubmit =
                        streakAwardId
                            ? async () => {
                                  try {
                                      this.setState({
                                          isLoading: true
                                      });
                                      const result = await collectAward({
                                          variables: {
                                              awardId: streakAwardId
                                          }
                                      });

                                      if (result && result.data && result.data.collectAward) {
                                          this.props.getUserStart();
                                      }

                                      onPressCtaPrimary();
                                  } catch (e) {
                                      onPressCtaPrimary();
                                  } finally {
                                      this.setState({
                                          isLoading: false
                                      });
                                  }
                              }
                            : onPressCtaPrimary;

                    return (
                        <StreaksScreen
                            heading={this.getHeading()}
                            subHeading={this.getSubHeading()}
                            primaryButtonLabel={this.getLabelCtaPrimary()}
                            streakAwardId={streakAwardId}
                            streakCompleted={this.getStreakCompleted()}
                            streakMax={streakMax}
                            onSubmit={onSubmit}
                            reward={reward}
                            isLoading={isLoading}
                            onPressCtaPrimary={onPressCtaPrimary}
                            onPressCtaSecondary={onPressCtaSecondary}
                            timeRemaining={this.state.timeRemaining}
                        />
                    );
                }}
            </CollectAwardMutation>
        );
    }

    private updateTimeRemaining = () => {
        this.setState({ timeRemaining: getTimeRemaining(this.props.nextStreakAvailableAt) });
        this.timer = setTimeout(this.updateTimeRemaining, 1000);
    };

    private getLabelCtaPrimary = () => {
        const { streakMax, isDoneToday, reward, streakAwardId, copy } = this.props;
        const streakCompleted = this.getStreakCompleted();

        if (streakCompleted === streakMax) {
            if (!streakAwardId) {
                return copy.ctaLabelDone;
            }
            return copy.ctaLabelCollect.replace("${reward}", reward);
        } else if (isDoneToday) {
            return copy.ctaLabelDone;
        } else {
            return copy.ctaLabelTakeChallenge;
        }
    };

    private getSubHeading = () => {
        const { isDoneToday, streakMax, reward, streakAwardId, copy } = this.props;
        const streakCompleted = this.getStreakCompleted();

        if (streakCompleted === streakMax) {
            if (!streakAwardId) {
                return copy.subheadingCollected;
            }
            return copy.subheadingCompleted;
        } else if (isDoneToday) {
            return copy.subheadingTodayStreakDone;
        } else {
            return copy.subheadingInstrucion.replace("${streakMax}", streakMax.toString()).replace("${reward}", reward);
        }
    };

    private getHeading = () => {
        const { isDoneToday, streakMax, copy } = this.props;
        const streakCompleted = this.getStreakCompleted();

        if (streakCompleted === streakMax) {
            return copy.headingCompleted;
        } else if (isDoneToday) {
            return copy.headingCompletedTodayStreak.replace("${streakCompleted}", streakCompleted.toString());
        } else {
            return copy.headingStartStreakDay.replace("${streakCompleted}", (streakCompleted + 1).toString());
        }
    };

    private getStreakCompleted = () => {
        const { streakAwardId, streakCompleted, streakMax } = this.props;
        // If there is an award, it must be for a full streak, so display
        // the full streak even if it is not full right now
        return streakAwardId ? streakMax : streakCompleted;
    }
}

const mapStateToProps = (state: IReduxState) => ({
    streakAwardId: getStreakAwardId(state),
    copy: getCopy(state, "streak")
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(StreaksModal);
