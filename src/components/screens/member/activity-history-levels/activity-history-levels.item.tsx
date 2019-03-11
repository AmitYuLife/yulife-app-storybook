import { StarInline, Text } from "@atoms/index";
import * as React from "react";
import { View } from "react-native";
import styles from "./activity-history-levels.styles";

export interface IChallenge {
    earned: number;
    milestones: number;
    name: string;
    score: string;
}

export interface ItemProps {
    id?: string;
    challenges: IChallenge[];
    dayOfMonth: string;
    dayOfWeek: string;
    level?: number;
    steps: number;
    yucoin: number;
}

function getLabel(challenge: IChallenge) {
    let result = `${challenge.name}`;

    if (!!challenge.score) {
        result += ` / ${challenge.score}`;
    }

    return result;
}

function showRating(challenge: IChallenge) {
    return !["streak", "streak completed", "chest", "bonus yucoin"].includes(challenge.name);
}

export default function ActivityHistoryLevelsItem({
    challenges,
    dayOfMonth,
    dayOfWeek,
    level,
    steps,
    yucoin
}: ItemProps) {
    return (
        <View style={styles.listItemWrapper}>
            <View style={styles.levelWrapper}>
                <View style={styles.divider} />
                {!level ? null : (
                    <View style={styles.levelCircle}>
                        <View style={styles.levelTextWrapper}>
                            <Text bold={true} style={styles.levelTextTop}>
                                LEVEL
                            </Text>
                            <Text bold={true} style={styles.levelTextBottom}>
                                {level}
                            </Text>
                        </View>
                    </View>
                )}
            </View>
            <View style={styles.listItemContentWrapper}>
                <View style={styles.listItemRow}>
                    <View style={styles.dayWrapper}>
                        <Text style={styles.dayOfMonth}>{dayOfMonth}</Text>
                        <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
                    </View>
                    <View style={styles.activityLabelsWrapper}>
                        <View style={styles.activityLabelWrapper}>
                            <Text numberOfLines={1} style={styles.activityLabel}>
                                {`${steps} steps`}
                            </Text>
                        </View>
                        {!challenges.length ? (
                            <View style={styles.activityLabelWrapper}>
                                <Text numberOfLines={1} style={styles.activityLabel}>
                                    {`--`}
                                </Text>
                            </View>
                        ) : (
                            challenges.map((challenge, index) => (
                                <View key={index} style={styles.activityLabelWrapper}>
                                    <Text numberOfLines={1} style={styles.activityLabel}>
                                        {getLabel(challenge)}
                                    </Text>
                                </View>
                            ))
                        )}
                    </View>
                    <View style={styles.starsColumn}>
                        <View style={styles.starsWrapper} />
                        {challenges.map((challenge, key) => (
                            <View style={styles.starsWrapper} key={key}>
                                {showRating(challenge) &&
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <View key={index} style={styles.starWrapper}>
                                            <StarInline filled={index < challenge.milestones} />
                                        </View>
                                    ))}
                            </View>
                        ))}
                    </View>
                    <View style={styles.yuCoinEarnedColumn}>
                        <View style={styles.yuCoinEarnedWrapper}>
                            <Text style={styles.yuCoinEarned}>{yucoin}</Text>
                        </View>
                        {challenges.length ? null : (
                            <View style={styles.yuCoinEarnedWrapper}>
                                <Text style={styles.yuCoinEarned}>0</Text>
                            </View>
                        )}
                        {challenges.map(({ earned }, index) => (
                            <View style={styles.yuCoinEarnedWrapper} key={index}>
                                <Text style={styles.yuCoinEarned}>{earned}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.bottomDividerWrapper}>
                    <View style={styles.bottomDivider} />
                </View>
            </View>
        </View>
    );
}
