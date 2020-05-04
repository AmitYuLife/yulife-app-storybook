import * as React from "react";
import { ScrollView, View } from "react-native";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile/challenge-tile";
import styles from "./challenges-list.styles";

export interface IChallengesListProps {
    challenges: IChallengeTileProps[];
}

const list = ["short stroll", "meditation"];

export default function ChallengeSet({ challenges }: IChallengesListProps) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            <View style={styles.wrapper}>
                <View>
                    {challenges
                        .filter(({ challengeType }) => !list.includes(challengeType))
                        .map((challenge, index) => (
                            <ChallengeTile {...challenge} isImageBackgroundFlipped={index % 2 !== 0} key={index} />
                        ))}
                </View>
                <View style={styles.rightColumnWrapper}>
                    {challenges
                        .filter(({ challengeType }) => list.includes(challengeType))
                        .map((challenge, index) => (
                            <ChallengeTile {...challenge} isImageBackgroundFlipped={index % 2 === 0} key={index} />
                        ))}
                </View>
            </View>
        </ScrollView>
    );
}
