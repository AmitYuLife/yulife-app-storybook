import { Button, PlusPoints, Stars, Text } from "@atoms/index";
import * as React from "react";
import { Image, View } from "react-native";
import Assets from "./assets";
import data from "./challenge-success.screen.data";
import styles from "./challenge-success.screen.styles";

interface IProps {
    onPressCta: () => void;
    level?: number;
    rating: number;
    reward: number;
    score: number;
    unit: "steps" | "minutes";
}

export default function ChallengeSuccessScreen({ level, onPressCta, rating, reward, score, unit }: IProps) {
    return (
        <View style={styles.wrapper}>
            <Stars isLeftHighlighted={rating > 0} isMidHighlighted={rating > 1} isRightHighlighted={rating > 2} />
            <View style={styles.levelWrapper}>
                <Image source={Assets.levelLine} />
                <Text style={styles.level}>{`level ${level}`}</Text>
            </View>
            <View>
                <View style={styles.plusPointsWrapper}>
                    <PlusPoints coins={reward} />
                </View>
                <Image source={Assets.challengeSuccess} />
                <Text bold={true} style={styles.score}>
                    {renderScore(score, unit)}
                </Text>
            </View>
            <View style={styles.footerWrapper}>
                <Text style={styles.footer}>{data.footer}</Text>
            </View>
            <Button
                label={data.ctaLabel}
                onPress={onPressCta}
                type={Button.Types.PRIMARY_SMALL}
                wrapperStyle={styles.ctaWrapper}
            />
        </View>
    );
}

function renderScore(score: number, unit: string) {
    switch (unit) {
        case "minutes":
            const mins = Math.floor(score / 60);
            return `${mins} ${mins === 1 ? "minute" : unit}`;

        default:
            return `${score} ${unit}`;
    }
}
