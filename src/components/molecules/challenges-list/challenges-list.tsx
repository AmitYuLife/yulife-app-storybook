import * as React from "react";
import { ScrollView, View } from "react-native";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile/challenge-tile";
import styles from "./challenges-list.styles";
import { CHALLENGE_SET } from "@ids";

export interface IChallengesListProps {
    challenges: IChallengeTileProps[];
}

const list = ["short stroll", "meditation"];

export default function ChallengeSet({ challenges }: IChallengesListProps) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
            <View testID={CHALLENGE_SET} style={styles.wrapper}>
                <View style={styles.leftColumnWrapper}>
                    {challenges
                        .filter(({ challengeType }) => !list.includes(challengeType))
                        .map((challenge, index) => (
                            <ChallengeTile {...challenge} key={index} />
                        ))}
                </View>
                <View style={styles.rightColumnWrapper}>
                    {challenges
                        .filter(({ challengeType }) => list.includes(challengeType))
                        .map((challenge, index) => (
                            <ChallengeTile {...challenge} key={index} />
                        ))}
                </View>
            </View>
        </ScrollView>
    );
}
