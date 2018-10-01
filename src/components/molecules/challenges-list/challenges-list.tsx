import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { ChallengeTile, IChallengeTileProps } from "..";
import styles from "./challenges-list.styles";

export interface IChallengesListTileProps {
    challengeType: string;
    duration: string;
    isLocked?: boolean;
    minimumLevel?: number;
    reward: string;
}

export interface IChallengesListProps {
    challenges: IChallengeTileProps[];
}

const ChallengeSet: SFC<IChallengesListProps> = ({ challenges }) => (
    <View style={styles.wrapper}>
        <View>
            {challenges
                .filter(({ challengeType }) => !["short stroll", "meditation"].includes(challengeType))
                .map((challenge, index) => (
                    <ChallengeTile
                        {...challenge}
                        isImageBackgroundFlipped={index % 2 !== 0}
                        key={index}
                    />
                ))}
        </View>
        <View style={styles.rightColumnWrapper}>
            {challenges
                .filter(({ challengeType }) => ["short stroll", "meditation"].includes(challengeType))
                .map((challenge, index) => (
                    <ChallengeTile
                        {...challenge}
                        isImageBackgroundFlipped={index % 2 === 0}
                        key={index}
                    />
                ))}
        </View>
    </View>
);

export default ChallengeSet;
