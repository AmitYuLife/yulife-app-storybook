import * as React from "react";
import { PureComponent } from "react";
import { Image, ImageRequireSource, StyleSheet, View } from "react-native";
import { Button, Text } from "../../atoms";
import assets from "./assets";
import styles from "./streaks.modal.styles";

interface IProps {
    isDoneToday: boolean;
    onPressCtaPrimary: () => void;
    reward: string;
    onPressCtaSecondary: (() => void) | null;
    streakCompleted: number;
    streakMax: number;
}

class StreaksModal extends PureComponent<IProps> {
    public render() {
        const { onPressCtaPrimary, onPressCtaSecondary, reward, streakCompleted, streakMax } = this.props;

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
                            {index < streakCompleted ? null : (
                                <Text
                                    style={StyleSheet.flatten([
                                        styles.streakLabel,
                                        index < streakMax - 1 ? styles.null : styles.streakLabelLast
                                    ])}
                                >
                                    {index < streakMax - 1 ? `${index + 1}` : reward}
                                </Text>
                            )}
                        </View>
                    ))}
                </View>
                <Button
                    wrapperStyle={styles.buttonPrimaryWrapper}
                    type={Button.Types.PRIMARY}
                    onPress={onPressCtaPrimary}
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

export default StreaksModal;
