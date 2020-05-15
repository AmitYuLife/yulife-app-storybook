import { Button, ChestCoin, Close, GenericHeading, Pad, StarInline, Text } from "@atoms/index";
import * as React from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { GetCurrentUser_getCurrentUser_todayActivity } from "../../../../graphql/_core/schema";
import { ExchangeRateMeditation } from "../../../../redux/daily-meditation/daily-meditation.selectors";
import { ExchangeRate } from "../../../../redux/daily-steps/daily-steps.selectors";
import { displaySecondsAsMinutes, padNum } from "../../../../services/utils";
import { Colours, Style } from "../../../../styles";
import { Glow } from "../daily-steps/assets/yu-coin-subcomponents";
import Check from "./assets/check";
import styles from "./today-yucoin.screen.styles";
import { TODAYS_YUCOIN } from "@ids";

type ChallengeToday = GetCurrentUser_getCurrentUser_todayActivity;

interface IProps {
  loading: boolean;
  onPressCta: () => void;
  onPressClose: () => void;
  steps: number;
  activeChallenge: ChallengeToday;
  showCta: boolean;
  ctaLabel: string;
  challenges: ChallengeToday[];
  dailyStepsEarned: number;
  exchangeRate: ExchangeRate;
  meditationExchangeRate?: ExchangeRateMeditation;
  isStepsSurge?: boolean;
  isMeditationSurge?: boolean;
  dailyMeditationEarned?: number;
  meditationSeconds?: number;
  isShowingPassiveMeditation: boolean;
  passiveMeditationAwardedMilestonesLength: number;
}

function getLabel(challenge: ChallengeToday, isActive = false) {
  let result = `${challenge.name}`;

  if (isActive) {
    result += " / in progress...";
  } else if (challenge.score) {
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
  exchangeRate = { surge: 1, steps: 2000, yucoin: 1, meditation: 0 },
  loading,
  onPressClose,
  onPressCta,
  showCta,
  steps = 0,
  meditationExchangeRate = {
    steps: 0,
    surge: 1,
    meditation: 300,
    yucoin: 1,
  },
  dailyMeditationEarned = 0,
  meditationSeconds = 0,
  isShowingPassiveMeditation,
  isStepsSurge,
  isMeditationSurge,
  passiveMeditationAwardedMilestonesLength,
}: IProps) {
  const showNoChallengeDone = !challenges.length && !activeChallenge;
  const progressBarWidth = Style.SCALE_UP_AND_DOWN(275);
  const typeText = steps === 1 ? "step" : "steps";

  const meditationExchangeRateDisplay = displaySecondsAsMinutes(meditationExchangeRate.meditation);
  const mindfulTotal = displaySecondsAsMinutes(meditationSeconds);
  const mindfulTotalToDisplay =
    mindfulTotal.minutes === 1
      ? `${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful minute`
      : `${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful minutes`;

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading hidesBorder={true} heading="today's yucoin" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
        testID={TODAYS_YUCOIN}
      >
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
            <Text bold={true} style={styles.heading}>
              core activity
            </Text>
            <Text bold={true} style={styles.headingRight}>
              yucoin
            </Text>
          </View>
          <View style={styles.challengesWrapper}>
            <View style={styles.passiveChallengeWrapper}>
              <Text style={styles.steps}>{`${steps} ${typeText}`}</Text>
              {!isStepsSurge ? null : (
                <>
                  <View style={styles.surgeWrapper}>
                    <Text style={styles.surge}>Surge x{exchangeRate.surge}</Text>
                  </View>
                </>
              )}
              <Text style={styles.yucoinsEarned}>{dailyStepsEarned}</Text>
            </View>
            <View style={styles.passiveChallengeInstructionsWrapper}>
              <Text style={styles.passiveChallengeInstructions}>
                {`${exchangeRate.yucoin} yucoin for ${exchangeRate.steps} steps`}
              </Text>
            </View>
            <View style={styles.progressWrapper}>
              <Svg width={progressBarWidth} height="15" style={styles.svg}>
                <Rect y="4" width={progressBarWidth} height="4" fill="rgb(233,233,233)" />
                <Rect
                  y="4"
                  width={Math.floor(progressBarWidth * (steps / (exchangeRate.steps * 6)))}
                  height="4"
                  fill="black"
                />
              </Svg>
              <View style={styles.checksWrapper}>
                {Array.from({ length: 6 }).map((_, index) => (
                  <View style={styles.checkWrapper} key={index}>
                    <Check
                      isFilling={(steps + 500) / 2000 >= index + 1}
                      fillProgress={((steps + 500 - exchangeRate.steps * (index + 1)) / 500) * 100}
                    />
                  </View>
                ))}
              </View>
            </View>
            <Pad height={20} />

            {/* meditation passive activity */}
            {!isShowingPassiveMeditation || meditationSeconds < 1 ? null : (
              <>
                <View style={styles.passiveChallengeWrapper}>
                  <Text style={styles.steps}>{mindfulTotalToDisplay}</Text>
                  {!isMeditationSurge ? null : (
                    <>
                      <View style={styles.surgeWrapper}>
                        <Text style={styles.surge}>Surge x{meditationExchangeRate.surge}</Text>
                      </View>
                    </>
                  )}
                  <Text style={styles.yucoinsEarned}>{dailyMeditationEarned}</Text>
                </View>
                <View style={styles.passiveChallengeInstructionsWrapper}>
                  <Text style={styles.passiveChallengeInstructions}>
                    {`${meditationExchangeRate.yucoin} yucoin for ${meditationExchangeRateDisplay.minutes} min`}
                  </Text>
                </View>
                <View style={styles.progressWrapper}>
                  <Svg width={progressBarWidth} height="15" style={styles.svg}>
                    <Rect y="4" width={progressBarWidth} height="4" fill="rgb(233,233,233)" />
                    <Rect
                      y="4"
                      width={Math.floor(
                        progressBarWidth *
                        (meditationSeconds /
                          (meditationExchangeRate.meditation * passiveMeditationAwardedMilestonesLength))
                      )}
                      height="4"
                      fill="black"
                    />
                  </Svg>
                  <View style={styles.checksWrapper}>
                    {Array.from({ length: passiveMeditationAwardedMilestonesLength }).map((_, index) => (
                      <View style={styles.checkWrapper} key={index}>
                        <Check
                          isFilling={meditationSeconds / meditationExchangeRate.meditation >= index + 1}
                          fillProgress={(meditationSeconds / (meditationExchangeRate.meditation * (index + 1))) * 100}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </>
            )}
          </View>

          {loading ? (
            <ActivityIndicator color={Colours.darkHotPink} />
          ) : (
              <>
                <View style={styles.headingWrapper}>
                  <Text bold={true} style={styles.heading}>
                    quests
                </Text>
                  <Text bold={true} style={styles.headingRight}>
                    yucoin
                </Text>
                </View>

                <View style={styles.challengesWrapper}>
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
              </>
            )}
        </View>
        {!showCta || loading ? null : (
          <View style={styles.ctaWrapper}>
            <Button onPress={onPressCta} label={ctaLabel} type="Primary" />
          </View>
        )}
      </ScrollView>
      <Close onPress={onPressClose} />
    </SafeAreaView>
  );
}
