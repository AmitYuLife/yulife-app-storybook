import { getTimeRemaining } from "@services/utils";
import * as React from "react";
import { PureComponent } from "react";
import { connect } from "react-redux";
import CollectAwardMutation, { collectAwardGql } from "../../../graphql/member/collectAward.gql";
import { IReduxState } from "../../../redux/_core/reducers";
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
            streakCompleted,
            streakMax
        } = this.props;

        return (
            <CollectAwardMutation mutation={collectAwardGql}>
                {(collectAward) => {
                    const onSubmit =
                        streakCompleted === streakMax && streakAwardId
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
                            streakCompleted={streakCompleted}
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
        const { streakCompleted, streakMax, isDoneToday, reward, streakAwardId } = this.props;

        if (streakCompleted === streakMax) {
            if (!streakAwardId) {
                return "done";
            }
            return `collect ${reward}`;
        } else if (isDoneToday) {
            return "done";
        } else {
            return "take a challenge";
        }
    };

    private getSubHeading = () => {
        const { isDoneToday, streakCompleted, streakMax, reward, streakAwardId } = this.props;

        if (streakCompleted === streakMax) {
            if (!streakAwardId) {
                return "Well done! The reward has been collected.";
            }
            return "You did it!";
        } else if (isDoneToday) {
            return "Come back tomorrow to carry on.";
        } else {
            return `Do ${streakMax} challenges in a row to earn ${reward}.`;
        }
    };

    private getHeading = () => {
        const { isDoneToday, streakCompleted, streakMax } = this.props;

        if (streakCompleted === streakMax) {
            return "Streak completed";
        } else if (isDoneToday) {
            return `Completed streak day ${streakCompleted}`;
        } else {
            return `Start streak day ${streakCompleted + 1}`;
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    streakAwardId: getStreakAwardId(state)
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(StreaksModal);
