import { AnimatedPlusPoints, Button, CentredScreen, LevelLine, Stars, Text } from "@atoms/index";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_challenges_success } from "../../../../../graphql/_core/schema";
import Assets from "./assets";
import { getStyle } from "./challenge-success.helpers";
import styles from "./challenge-success.screen.styles";

interface IProps {
    onPressCta: () => void;
    level?: number;
    rating: number;
    reward: number;
    score: number;
    unit: "steps" | "minutes";
    copy: GetMobileCopy_getMobileCopy_screens_challenges_success;
}

export default function ChallengeSuccessScreen({ level, onPressCta, rating, reward, score, unit, copy }: IProps) {
    const { backgroundImage, backgroundStyle } = getStyle(level);
    return (
        <CentredScreen style={StyleSheet.flatten([styles.wrapper, backgroundStyle])} footerImage={backgroundImage}>
            <View style={styles.ratingWrapper}>
                <Stars isLeftHighlighted={rating > 0} isMidHighlighted={rating > 1} isRightHighlighted={rating > 2} />
                <View style={styles.levelWrapper}>
                    <View style={styles.levelLineWrapper}>
                        <LevelLine colour={"rgb(251, 207, 39)"} />
                    </View>
                    <Text style={styles.level}>{`level ${level}`}</Text>
                </View>
            </View>

            <Text bold={true} style={styles.heading}>
                {copy.footer}
            </Text>
            <View>
                <View style={styles.plusPointsWrapper}>
                    <AnimatedPlusPoints type="challenge-success" coins={reward} />
                </View>
                <Image source={Assets.challengeSuccess} />
                <Text bold={true} style={styles.score}>
                    {renderScore(score, unit)}
                </Text>
            </View>

            <Button
                label={copy.ctaLabel}
                onPress={onPressCta}
                type={Button.Types.PRIMARY_SMALL}
                wrapperStyle={styles.cta}
            />
        </CentredScreen>
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
