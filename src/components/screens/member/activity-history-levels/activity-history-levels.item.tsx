import { StarInline, Text } from "@atoms/index";
import { GetActivityHistory_getActivityHistoryWithLevels_sources as Sources } from "@graphql/_core/schema";
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
    sources?: Partial<Sources>;
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
    sources,
    yucoin
}: ItemProps) {
    const typeText = steps === 1 ? "step" : "steps";
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
                                {`${steps} ${typeText}`}
                            </Text>
                        </View>
                        {renderSourcesText(sources)}
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
                        {renderSourcesValue(sources)}
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

function renderSourcesText(sources: Partial<Sources>) {
    if (!sources) {
        return null;
    }

    if (!sources.garmin && !sources.fitbit) {
        return null;
    }

    return (
        <>
            {!sources.device ? null : (
                <View style={styles.activityLabelWrapper}>
                    <Text numberOfLines={1} style={styles.activityLabel}>
                        {`phone / ${sources.device} steps`}
                    </Text>
                </View>
            )}
            {!sources.fitbit ? null : (
                <View style={styles.activityLabelWrapper}>
                    <Text numberOfLines={1} style={styles.activityLabel}>
                        {`fitbit / ${sources.fitbit} steps`}
                    </Text>
                </View>
            )}
            {!sources.garmin ? null : (
                <View style={styles.activityLabelWrapper}>
                    <Text numberOfLines={1} style={styles.activityLabel}>
                        {`garmin / ${sources.garmin} steps`}
                    </Text>
                </View>
            )}
        </>
    );
}

function renderSourcesValue(sources: Partial<Sources>) {
    if (!sources) {
        return null;
    }

    if (!sources.garmin && !sources.fitbit) {
        return null;
    }

    return (
        <>
            {!sources.device ? null : <View style={styles.yuCoinEarnedWrapper} />}
            {!sources.fitbit ? null : <View style={styles.yuCoinEarnedWrapper} />}
            {!sources.garmin ? null : <View style={styles.yuCoinEarnedWrapper} />}
        </>
    );
}
