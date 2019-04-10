import React from "react";
import { Image, ImageRequireSource, StyleSheet, View } from "react-native";
import { Button, Text } from "../../../atoms";
import assets from "./assets";
import styles from "./streaks.styles";

interface IProps {
    isLoading: boolean;
    heading: string;
    subHeading: string;
    timeRemaining: string;
    streakAwardId: string;
    streakCompleted: number;
    streakMax: number;
    primaryButtonLabel: string;
    reward: string;
    onSubmit: (() => void) | null;
    onPressCtaPrimary: () => void;
    onPressCtaSecondary?: (() => void) | null;
}

const StreaksSceen = ({
    streakMax,
    streakAwardId,
    streakCompleted,
    heading,
    subHeading,
    isLoading,
    primaryButtonLabel,
    onSubmit,
    timeRemaining,
    onPressCtaSecondary,
    reward
}: IProps) => (
    <View style={styles.wrapper}>
        <View>
            <Image source={getImage(streakCompleted, streakMax)} />
        </View>
        <View style={styles.headingWrapper}>
            <Text bold={true} style={styles.heading}>
                {heading}
            </Text>
        </View>
        <View style={styles.subHeadingWrapper}>
            <Text style={styles.subHeading}>{subHeading}</Text>
        </View>
        <View style={styles.streaksWrapper}>
            {streakMax === streakCompleted && !streakAwardId ? (
                <Text style={styles.subHeading}>Next streak available in {timeRemaining}</Text>
            ) : (
                Array.from({ length: streakMax }).map((_, index) => (
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
                        {renderStreakText(index, streakCompleted, streakMax, reward)}
                    </View>
                ))
            )}
        </View>
        <Button
            isLoading={isLoading}
            wrapperStyle={styles.buttonPrimaryWrapper}
            type={Button.Types.PRIMARY}
            onPress={onSubmit}
            label={primaryButtonLabel}
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

function renderStreakText(index: number, streakCompleted: number, streakMax: number, reward: string) {
    if (index < streakCompleted) {
        return null;
    }

    if (index < streakMax - 1) {
        return <Text style={styles.streakLabel}>{`${index + 1}`}</Text>;
    }

    return <Text style={StyleSheet.flatten([styles.streakLabel, styles.streakLabelLast])}>{reward}</Text>;
}

function getImage(streakCompleted: number, streakMax: number): ImageRequireSource {
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

export default StreaksSceen;
