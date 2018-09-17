import * as React from "react";
import { SFC } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { getBackgroundImage, getBackgroundImageHeight } from "./challenge-progress.screen.helpers";
import styles from "./challenge-progress.screen.styles";
import ProgressBar from "./subcomponents/progress-bar";

export type ChallengeType =
    | "short stroll"
    | "meditation"
    | "day walk"
    | "long walk"
    | "brisk walk";

interface IProps {
    challengeType: ChallengeType;
    userProgress: number;
    progressTargets: number[];
    unit: "steps" | "minutes";
}

const ChallengeProgressScreen: SFC<IProps> = ({
    challengeType,
    userProgress,
    progressTargets,
    unit
}) => (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.progressBarWrapper}>
            <ProgressBar
                amount={userProgress}
                goals={progressTargets}
                type={unit}
            />
        </View>

        <Image
            resizeMethod="resize"
            resizeMode="cover"
            source={getBackgroundImage(challengeType)}
            style={StyleSheet.flatten([styles.backgroundImage, { height: getBackgroundImageHeight(challengeType) }])}
        />
    </SafeAreaView>
);

export default ChallengeProgressScreen;
