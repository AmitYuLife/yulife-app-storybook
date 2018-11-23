import * as React from "react";
import { PureComponent } from "react";
import { Image, ImageRequireSource, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import CollectAwardMutation, { collectAwardGql } from "../../../graphql/member/collectAward.gql";
import { IReduxState } from "../../../redux/_core/reducers";
import { redeemStreakAction } from "../../../redux/streaks/streaks.actions";
import { streakAwardIdSelector } from "../../../redux/streaks/streaks.selectors";
import { Button, Text } from "../../atoms";
import assets from "./assets";
import styles from "./streaks.modal.styles";

interface IConnectedState {
    streakAwardId: string;
}
interface IConnectedDispatch {
    redeemStreakAction: () => void;
}

interface IProps {
    isDoneToday: boolean;
    onPressCtaPrimary: () => void;
    reward: string;
    onPressCtaSecondary: (() => void) | null;
    streakCompleted: number;
    streakMax: number;
}

type Props = IProps & IConnectedDispatch & IConnectedState;

class StreaksModal extends PureComponent<Props> {
    public render() {
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
                                      const result = await collectAward({
                                          variables: {
                                              awardId: streakAwardId
                                          }
                                      });

                                      if (result && result.data && result.data.collectAward) {
                                          this.props.redeemStreakAction();
                                      }

                                      onPressCtaPrimary();
                                  } catch (e) {
                                      onPressCtaPrimary();
                                  }
                              }
                            : onPressCtaPrimary;

                    return (
                        <View style={styles.wrapper}>
                            <View>
                                <Image source={this.getImage()} />
                            </View>
                            <View style={styles.headingWrapper}>
                                <Text bold={true} style={styles.heading}>
                                    {this.getHeading()}
                                </Text>
                            </View>
                            <View style={styles.subHeadingWrapper}>
                                <Text style={styles.subHeading}>{this.getSubHeading()}</Text>
                            </View>
                            <View style={styles.streaksWrapper}>
                                {Array.from({ length: streakMax }).map((_, index) => (
                                    <View
                                        key={index}
                                        style={StyleSheet.flatten([
                                            styles.streakWrapper,
                                            index === streakMax ? styles.streakWrapperLast : null
                                        ])}
                                    >
                                        <Image
                                            style={styles.streak}
                                            source={index < streakCompleted ? assets.streakFilled : assets.streakEmpty}
                                        />
                                        {this.renderStreakText(index, streakCompleted, streakMax, reward)}
                                    </View>
                                ))}
                            </View>
                            <Button
                                wrapperStyle={styles.buttonPrimaryWrapper}
                                type={Button.Types.PRIMARY}
                                onPress={onSubmit}
                                label={this.getLabelCtaPrimary()}
                            />
                            {!onPressCtaSecondary ? null : (
                                <Button
                                    wrapperStyle={styles.buttonSecondaryWrapper}
                                    type={Button.Types.LINK}
                                    onPress={onPressCtaSecondary}
                                    label={"later"}
                                />
                            )}
                        </View>
                    );
                }}
            </CollectAwardMutation>
        );
    }

    private renderStreakText = (index: number, streakCompleted: number, streakMax: number, reward: string) => {
        if (index < streakCompleted) {
            return null;
        }

        if (index < streakMax - 1) {
            return <Text style={styles.streakLabel}>{`${index + 1}`}</Text>;
        }

        return <Text style={StyleSheet.flatten([styles.streakLabel, styles.streakLabelLast])}>{reward}</Text>;
    }

    private getImage(): ImageRequireSource {
        const { streakCompleted, streakMax } = this.props;
        const ratio = streakCompleted / streakMax;

        if (ratio < 0.2) {
            return assets.from0;
        } else if (ratio < 0.4) {
            return assets.from20;
        } else if (ratio < 0.6) {
            return assets.from40;
        } else if (ratio < 0.8) {
            return assets.from60;
        } else if (ratio < 1) {
            return assets.from80;
        } else {
            return assets.from100;
        }
    }

    private getLabelCtaPrimary = () => {
        const { streakCompleted, streakMax, isDoneToday, reward } = this.props;

        if (streakCompleted === streakMax) {
            return `collect ${reward}`;
        } else if (isDoneToday) {
            return "done";
        } else {
            return "take a challenge";
        }
    }

    private getSubHeading = () => {
        const { isDoneToday, streakCompleted, streakMax, reward } = this.props;

        if (streakCompleted === streakMax) {
            return "You did it!";
        } else if (isDoneToday) {
            return "Come back tomorrow to carry on.";
        } else {
            return `Do ${streakMax} challenges in a row to earn ${reward}.`;
        }
    }

    private getHeading = () => {
        const { isDoneToday, streakCompleted, streakMax } = this.props;

        if (streakCompleted === streakMax) {
            return "Streak completed";
        } else if (isDoneToday) {
            return `Completed streak day ${streakCompleted}`;
        } else {
            return `Start your day ${streakCompleted + 1} of streak`;
        }
    }
}

const mapStateToProps = (state: IReduxState) => ({
    streakAwardId: streakAwardIdSelector(state)
});

const mapDispatchToProps = {
    redeemStreakAction
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(StreaksModal);
