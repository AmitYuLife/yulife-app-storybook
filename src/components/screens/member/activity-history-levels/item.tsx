import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { padNum } from "../../../../services/utils";
import { StarInline, Text } from "../../../atoms";
import styles from "./activity-history-levels.styles";

export interface IChallenge {
    earned: number;
    milestones: number;
    name: string;
    score: string;
}

export interface ItemProps {
    challenges: IChallenge[];
    dayOfMonth: string;
    dayOfWeek: string;
    level?: number;
    steps: number;
    yucoin: number;
}

const Items: SFC<ItemProps> = ({ challenges, dayOfMonth, dayOfWeek, level, steps, yucoin }) => (
    <View style={styles.listItemWrapper}>
        <View style={styles.levelWrapper}>
            <View style={styles.divider} />
            {!level ? null : (
                <View style={styles.levelCircle}>
                    <View style={styles.levelTextWrapper}>
                        <Text bold={true} style={styles.levelTextTop}>LEVEL</Text>
                        <Text bold={true} style={styles.levelTextBottom}>{padNum(level)}</Text>
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
                        <Text
                            numberOfLines={1}
                            style={styles.activityLabel}
                        >
                            {`${steps} steps`}
                        </Text>
                    </View>
                    {!challenges.length ? (
                        <View style={styles.activityLabelWrapper}>
                            <Text
                                numberOfLines={1}
                                style={styles.activityLabel}
                            >
                                {`--`}
                            </Text>
                        </View>
                    ) : challenges.map(({ name, score }, index) => (
                        <View key={index} style={styles.activityLabelWrapper}>
                            <Text
                                numberOfLines={1}
                                style={styles.activityLabel}
                            >
                                {`${name} / ${score}`}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.starsColumn}>
                    <View style={styles.starsWrapper} />
                    {challenges.map(({ milestones }, key) => (
                        <View style={styles.starsWrapper} key={key}>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <View key={index} style={styles.starWrapper}>
                                    <StarInline filled={index < milestones} />
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
                    )
                    }
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

export default Items;
