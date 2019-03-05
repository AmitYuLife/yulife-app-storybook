import * as React from "react";
import { Image, SafeAreaView, View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { GetCurrentUser_getCurrentUser_todayActivity } from "../../../../graphql/_core/schema";
import { ExchangeRate } from "../../../../redux/daily-steps/daily-steps.selectors";
import { Style } from "../../../../styles";
import { Button, ChestCoin, Close, GenericHeading, Pad, StarInline, Text } from "../../../atoms";
import { Glow } from "../daily-steps/assets/yu-coin-subcomponents";
import styles from "./today-yucoin.screen.styles";

type ChallengeToday = GetCurrentUser_getCurrentUser_todayActivity;

interface IProps {
    onPressCta: () => void;
    onPressClose: () => void;
    steps: number;
    activeChallenge: ChallengeToday;
    showCta: boolean;
    ctaLabel: string;
    challenges: ChallengeToday[];
    dailyStepsEarned: number;
    exchangeRate: ExchangeRate;
}

const images = {
    checkEmpty: require("../../../../../assets/today-yucoin/check-empty.png"),
    checkFilled: require("../../../../../assets/today-yucoin/check-filled.png")
};

function getLabel(challenge: ChallengeToday, isActive: boolean = false) {
    let result = `${challenge.name}`;

    if (isActive) {
        result += " / in progress...";
    } else if (!!challenge.score) {
        result += ` / ${challenge.score}`;
    }

    return result;
}

function showRating(challenge: ChallengeToday) {
    return !["streak", "chest", "bonus yucoin"].includes(challenge.name);
}

export default function TodayYucoinScreen({
    activeChallenge,
    challenges,
    ctaLabel,
    dailyStepsEarned,
    exchangeRate = { steps: 2000, yucoin: 1 },
    onPressClose,
    onPressCta,
    showCta,
    steps = 0
}: IProps) {
    const showNoChallengeDone = !challenges.length && !activeChallenge;
    return (
        <SafeAreaView style={styles.wrapper}>
            <GenericHeading hidesBorder={true} heading="today's yucoin" />
            <View style={styles.chestCoinWrapper}>
                <View style={styles.coinOuterWrapper}>
                    <View style={styles.coinInnerWrapper}>
                        <Glow />
                        <View style={styles.absolute}>
                            <ChestCoin />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.headingWrapper}>
                    <Text bold={true} style={styles.heading}>{`activity & quests`}</Text>
                    <Text bold={true} style={styles.headingRight}>
                        yucoin
                    </Text>
                </View>
                <View style={styles.challengesWrapper}>
                    <View style={styles.passiveChallengeWrapper}>
                        <Text style={styles.steps}>{`${steps} steps`}</Text>
                        <Text style={styles.yucoinsEarned}>{dailyStepsEarned}</Text>
                    </View>
                    <View style={styles.passiveChallengeInstructionsWrapper}>
                        <Text style={styles.passiveChallengeInstructions}>
                            {`${exchangeRate.yucoin} yucoin for ${exchangeRate.steps} steps`}
                        </Text>
                    </View>
                    <View style={styles.progressWrapper}>
                        <Svg width={Style.SCALE_UP_AND_DOWN(275)} height="15" style={styles.svg}>
                            <Rect y="4" width={Style.SCALE_UP_AND_DOWN(275)} height="4" fill="rgb(233,233,233)" />
                            <Rect
                                y="4"
                                width={Math.floor(Style.SCALE_UP_AND_DOWN(275) * (steps / (exchangeRate.steps * 6)))}
                                height="4"
                                fill="black"
                            />
                        </Svg>
                        <View style={styles.checksWrapper}>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <View style={styles.checkWrapper} key={index}>
                                    <Image
                                        resizeMode="cover"
                                        source={steps / 2000 >= index + 1 ? images.checkFilled : images.checkEmpty}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                    <Pad height={20} />
                    {!showNoChallengeDone ? null : (
                        <View style={styles.activeChallengeWrapper}>
                            <Text style={styles.steps}>quests / you haven’t done any today</Text>
                            <View style={styles.starsWrapper} />
                            <Text style={styles.yucoinsEarned}>0</Text>
                        </View>
                    )}
                    {!activeChallenge ? null : (
                        <View style={styles.activeChallengeWrapper}>
                            <Text style={styles.steps}>{getLabel(activeChallenge, true)}</Text>
                            <Text style={styles.yucoinsEarned}>{activeChallenge.earned}</Text>
                        </View>
                    )}
                    {challenges.map((challenge, i) => (
                        <View key={i} style={styles.activeChallengeWrapper}>
                            <Text style={styles.steps}>{getLabel(challenge)}</Text>
                            <View style={styles.starsWrapper}>
                                {showRating(challenge) &&
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <View key={index} style={styles.starWrapper}>
                                            <StarInline filled={challenge.milestones > index} />
                                        </View>
                                    ))}
                            </View>
                            <Text style={styles.yucoinsEarned}>{challenge.earned}</Text>
                        </View>
                    ))}
                </View>
            </View>
            {!showCta ? null : (
                <View style={styles.ctaWrapper}>
                    <Button onPress={onPressCta} label={ctaLabel} type={Button.Types.PRIMARY} />
                </View>
            )}
            <Close onPress={onPressClose} />
        </SafeAreaView>
    );
}
