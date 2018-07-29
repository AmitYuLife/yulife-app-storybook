import React, { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { getBackgroundImage, getBackgroundImageHeight } from "./challenge-progress.helpers";
import styles from "./challenge-progress.styles";

export type ChallengeType =
    | "short stroll"
    | "meditation"
    | "long walk"
    | "brisk walk";

interface IProps {
    challengeType: ChallengeType;
}

const ChallengeInProgress: SFC<IProps> = ({ challengeType }) => (
    <View style={styles.wrapper}>
        <Image
            source={getBackgroundImage(challengeType)}
            style={StyleSheet.flatten([styles.backgroundImage, { height: getBackgroundImageHeight(challengeType) }])}
            resizeMethod="resize"
            resizeMode="cover"
        />
    </View>
);

export default ChallengeInProgress;
