import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { ChallengeTile, IChallengeTileProps, Images as ChallengeTileImages } from "..";
import styles from "./challenges-list.styles";

export interface IChallengesListTileProps {
    challengeType: string;
    duration: string;
    image: ChallengeTileImages;
    isLocked?: boolean;
    minimumLevel?: number;
    reward: string;
}

export interface IChallengesListProps {
    challenges: IChallengeTileProps[];
}

const ChallengeSet: SFC<IChallengesListProps> = ({ challenges }) => (
    <View style={styles.wrapper}>
        <View style={styles.column}>
            {challenges
                .slice(0, 2)
                .map((challenge, index) => (
                    <ChallengeTile
                        {...challenge}
                        isImageBackgroundFlipped={index % 2 !== 0}
                        key={index}
                    />
                ))}
        </View>
        <View
            style={StyleSheet.flatten([
                styles.column,
                styles.rightColumnWrapper,
            ])}
        >
            {challenges
                .slice(2, 4)
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
