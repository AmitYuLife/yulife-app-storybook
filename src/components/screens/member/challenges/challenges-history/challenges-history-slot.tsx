import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "../../../../atoms";
import styles from "./challenges-history-slot.styles";

interface IProps {
    availableAtLevel: number;
    duration: string;
    locked: boolean;
    rating: number;
    reward: number;
    type: string;
}

const ChallengesHistorySlot: SFC<IProps> = ({ availableAtLevel, duration, locked, rating, reward, type }) => {
    const hasRating = typeof rating === "number";
    const hasReward = typeof reward === "number";
    return (
        <View style={styles.wrapper}>
            {locked ? (
                <View style={styles.lockedWrapper}>
                    <Text bold={true}>?</Text>
                    <Text bold={true}>unlock at level {availableAtLevel}</Text>
                </View>
            ) : (
                <View style={styles.slotWrapper}>
                    <View style={styles.challengeWrapper}>
                        <Text bold={true}>{type}</Text>
                        <Text bold={true}>{duration}</Text>
                    </View>
                    <View style={styles.resultsWrapper}>
                        <View style={StyleSheet.flatten([styles.starsWrapper, hasRating && styles.hasRating])}>
                            {hasRating ? (
                                Array.from(Array(3)).map((_, i) => (
                                    <View key={i}>
                                        {rating > i ? (
                                            <Image
                                                style={styles.star}
                                                source={require("../../../../../../assets/level-complete/star.png")}
                                            />
                                        ) : (
                                            <Image
                                                style={styles.star}
                                                source={require("../../../../../../assets/level-complete/no-star.png")}
                                            />
                                        )}
                                    </View>
                                ))
                            ) : (
                                <Text>--</Text>
                            )}
                        </View>
                        {hasReward && <Text style={styles.rewardText}>{`${reward} yucoin`}</Text>}
                    </View>
                </View>
            )}
        </View>
    );
};

export default ChallengesHistorySlot;
