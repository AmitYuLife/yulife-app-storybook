import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { getBackgroundImage, getBackgroundImageHeight } from "./challenge-progress.helpers";
import styles from "./challenge-progress.styles";

export type ChallengeType =
    | "short stroll"
    | "meditation"
    | "day walk"
    | "long walk"
    | "brisk walk";

interface IProps {
    challengeType: ChallengeType;
}

const ChallengeProgressScreen: SFC<IProps> = ({ challengeType }) => (
    <View style={styles.wrapper}>
        <Image
            resizeMethod="resize"
            resizeMode="cover"
            source={getBackgroundImage(challengeType)}
            style={StyleSheet.flatten([styles.backgroundImage, { height: getBackgroundImageHeight(challengeType) }])}
        />
    </View>
);

export default ChallengeProgressScreen;
