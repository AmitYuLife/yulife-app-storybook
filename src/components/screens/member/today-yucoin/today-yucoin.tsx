import React, { PureComponent } from "react";
import {
    Image,
    SafeAreaView,
    View
} from "react-native";
import Svg, { Rect } from "react-native-svg";
import {
    Button,
    ChestCoin,
    Close,
    GenericHeading,
    StarInline,
    Text
} from "../../../atoms";
import { Glow } from "../daily-steps/assets/yu-coin-subcomponents";
import styles from "./today-yucoin.styles";

interface IProps {
    onPressCta: () => void;
    onPressClose: () => void;
    steps: number;
    activeChallengeEarnings: number;
    activeChallengeRating: number;
    activeChallengeLabel: string;
    showStars: boolean;
    showCta: boolean;
}

class TodayYucoinScreen extends PureComponent<IProps> {
    public render() {
        const {
            steps = 0,
            activeChallengeEarnings = 0,
            activeChallengeRating = 0,
            activeChallengeLabel = "",
            showStars,
            onPressCta,
            onPressClose,
            showCta
        } = this.props;
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
                        <Text bold={true} style={styles.headingRight}>yucoin</Text>
                    </View>
                    <View style={styles.challengesWrapper}>
                        <View style={styles.passiveChallengeWrapper}>
                            <Text style={styles.steps}>{`${steps} steps`}</Text>
                            <Text style={styles.yucoinsEarned}>{`${Math.floor(steps / 2000)}`}</Text>
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
                                {
                                    Array.from({ length: 6 }).map((_, index) => (
                                        <Image
                                            key={index}
                                            resizeMode="cover"
                                            style={styles.star}
                                            source={
                                                (steps / 2000) >= index + 1
                                                    ? require("./assets/check-filled.png")
                                                    : require("./assets/check-empty.png")
                                            }
                                        />
                                    ))}
                            </View>
                        </View>
                        <View style={styles.activeChallengeWrapper}>
                            <Text style={styles.steps}>{activeChallengeLabel}</Text>
                            <View style={styles.starsWrapper}>
                                {
                                    showStars ? Array.from({ length: 3 }).map((_, index) => (
                                        <View key={index} style={styles.starWrapper}>
                                            <StarInline filled={activeChallengeRating > index} />
                                        </View>
                                    )) : null}
                            </View>
                            <Text style={styles.yucoinsEarned}>{activeChallengeEarnings}</Text>
                        </View>
                    </View>
                </View>
                {
                    !showCta ? null : (
                        <View style={styles.ctaWrapper}>
                            <Button
                                onPress={onPressCta}
                                label="take a challenge"
                                type={Button.Types.PRIMARY}
                            />
                        </View>
                    )
                }
                <Close onPress={onPressClose} />
            </SafeAreaView>
        );
    }
}

export default TodayYucoinScreen;
