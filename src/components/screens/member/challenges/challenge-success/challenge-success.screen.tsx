import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Button, PlusPoints, Stars, Text } from "../../../../atoms";
import Assets from "./assets";
import data from "./challenge-success.screen.data";
import styles from "./challenge-success.screen.styles";

interface IProps {
    onPressCta: () => void;
    rating: number;
    reward: number;
    score: number;
    unit: "steps" | "minutes";
}

const getScoreByUnit = (score: number, unit: string) => {
    switch (unit) {
        case "minutes":
            return Math.floor(score / 60);

        default:
            return score;
    }
};

const ChallengeSuccessScreen: SFC<IProps> = ({ onPressCta, rating, reward, score, unit }) => (
    <View style={styles.wrapper}>
        <Stars
            isLeftHighlighted={rating > 0}
            isMidHighlighted={rating > 1}
            isRightHighlighted={rating > 2}
        />
        <View>
            <View style={styles.plusPointsWrapper}>
                <PlusPoints coins={reward} />
            </View>
            <Image source={Assets.challengeSuccess} />
            <Text bold={true} style={styles.score}>{`${getScoreByUnit(score, unit)} ${unit}`}</Text>
        </View>
        <View style={styles.footerWrapper}>
            <Text style={styles.footer}>
                {data.footer}
            </Text>
        </View>
        <Button
            label={data.ctaLabel}
            onPress={onPressCta}
            type={Button.Types.PRIMARY_SMALL}
            wrapperStyle={styles.ctaWrapper}
        />
    </View>
);

export default ChallengeSuccessScreen;
