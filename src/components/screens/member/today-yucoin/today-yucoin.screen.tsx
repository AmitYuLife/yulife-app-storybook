import React, { PureComponent } from "react";
import { Image, SafeAreaView, View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { GetCurrentUser_getCurrentUser_challengesToday } from "../../../../graphql/_core/schema";
import { Button, ChestCoin, Close, GenericHeading, Pad, StarInline, Text } from "../../../atoms";
import { Glow } from "../daily-steps/assets/yu-coin-subcomponents";
import styles from "./today-yucoin.screen.styles";

interface IProps {
    onPressCta: () => void;
    onPressClose: () => void;
    steps: number;
    activeChallenge: GetCurrentUser_getCurrentUser_challengesToday;
    challenges: GetCurrentUser_getCurrentUser_challengesToday[];
    dailyStepsEarned: number;
}

const images = {
    checkEmpty: require("../../../../../assets/today-yucoin/check-empty.png"),
    checkFilled: require("../../../../../assets/today-yucoin/check-filled.png")
};

const getLabel = (challenge: GetCurrentUser_getCurrentUser_challengesToday) => {
    const isMeditation = challenge.subtype === "meditation";
    const dataType = isMeditation ? "meditation" : "steps";
    const unitType = isMeditation ? "seconds" : "steps";

    return `${challenge.subtype} / ${challenge.incomingData[dataType]} ${unitType}`;
};

class TodayYucoinScreen extends PureComponent<IProps> {
    public render() {
        const { activeChallenge, challenges, steps = 0, onPressCta, onPressClose, dailyStepsEarned } = this.props;
        const showCta = !challenges.length && !activeChallenge;

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
                            <Text style={styles.passiveChallengeInstructions}>1 yucoin for 2000 steps</Text>
                        </View>
                        <View style={styles.progressWrapper}>
                            <Svg width="305" height="15" style={styles.svg}>
                                <Rect y="4" width="305" height="4" fill="rgb(233,233,233)" />
                                <Rect y="4" width={steps / 44.5} height="4" fill="black" />
                            </Svg>
                            <View style={styles.checksWrapper}>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <Image
                                        key={index}
                                        resizeMode="cover"
                                        style={styles.star}
                                        source={steps / 2000 >= index + 1 ? images.checkFilled : images.checkEmpty}
                                    />
                                ))}
                            </View>
                        </View>
                        <Pad height={20} />
                        {showCta && (
                            <View style={styles.activeChallengeWrapper}>
                                <Text style={styles.steps}>quests / you haven’t done any today</Text>
                                <View style={styles.starsWrapper} />
                                <Text style={styles.yucoinsEarned}>0</Text>
                            </View>
                        )}
                        {activeChallenge && (
                            <View style={styles.activeChallengeWrapper}>
                                <Text style={styles.steps}>{getLabel(activeChallenge)}</Text>
                                <View style={styles.starsWrapper}>
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <View key={index} style={styles.starWrapper}>
                                            <StarInline filled={activeChallenge.rating > index} />
                                        </View>
                                    ))}
                                </View>
                                <Text style={styles.yucoinsEarned}>{activeChallenge.yuCoinAwarded}</Text>
                            </View>
                        )}
                        {challenges.map((challenge, i) => (
                            <View key={i} style={styles.activeChallengeWrapper}>
                                <Text style={styles.steps}>{getLabel(challenge)}</Text>
                                <View style={styles.starsWrapper}>
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <View key={index} style={styles.starWrapper}>
                                            <StarInline filled={challenge.rating > index} />
                                        </View>
                                    ))}
                                </View>
                                <Text style={styles.yucoinsEarned}>{challenge.yuCoinAwarded}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                {showCta && (
                    <View style={styles.ctaWrapper}>
                        <Button onPress={onPressCta} label="take a challenge" type={Button.Types.PRIMARY} />
                    </View>
                )}
                <Close onPress={onPressClose} />
            </SafeAreaView>
        );
    }
}

export default TodayYucoinScreen;
