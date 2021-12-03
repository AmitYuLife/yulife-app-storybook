import React, { useMemo } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { TODAYS_YUCOIN } from "@ids";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { BuffArea } from "@graphql/_core/schema/globalTypes";
import { GetCurrentUser_getCurrentUser_todayActivity } from "@graphql/_core/schema";
import { ExchangeRateMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { ExchangeRate } from "@redux/daily-steps/daily-steps.selectors";
import { Colours } from "@styles";
import { Pad } from "@atoms";
import { ActiveBuffsButton } from "@organisms";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import styles from "./today-yucoin.screen.styles";
import Coin from "./subcomponents/coin";
import CTA from "./subcomponents/cta";
import SectionHeading from "./subcomponents/section-heading";
import Quests from "./subcomponents/quests";
import { ChallengesWrapper } from "./subcomponents/common";
import Challenge from "./subcomponents/challenges";
import { mapProps } from "./today-yucoin.helpers";

type ChallengeToday = GetCurrentUser_getCurrentUser_todayActivity;

export interface IProps {
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
  passiveStepsAwardedMilestonesLength: number;
  passiveMeditationAwardedMilestonesLength: number;
}

export default function TodayYucoinScreen(props: IProps) {
  const { loading, onPressClose } = props;
  const { available, authorised } = useFitKit();
  const enhancers = mapProps(props);

  const isGrayScale = !available || !authorised;
  const buffTypes = useMemo(() => [BuffArea.stepsMilestone], []);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView testID={TODAYS_YUCOIN} style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View>
          <Coin isGrayScale={isGrayScale} />
          {isGrayScale ? null : <ActiveBuffsButton style={styles.activeBuffs} buffTypes={buffTypes} />}
        </View>
        <View style={styles.contentWrapper}>
          <SectionHeading
            hasRoundedTop={true}
            isGrayScale={isGrayScale}
            labelLeft="activity & quests"
            labelRight="yucoin"
          />
          <ChallengesWrapper style={styles.reduceBottomPadding}>
            <Challenge {...enhancers.challengeStepsProps} />
            <Pad height={20} />
            <Challenge {...enhancers.challengeMeditationProps} />
          </ChallengesWrapper>
          {loading ? (
            <ActivityIndicator color={Colours.darkHotPink} />
          ) : (
            <Quests isGrayScale={isGrayScale} {...enhancers.questsProps} />
          )}
        </View>
        <CTA {...enhancers.ctaProps} />
      </ScrollView>
      <GenericHeadingAbsolute heading="today's yucoin" style={styles.heading} onRightIconPress={onPressClose} />
    </View>
  );
}
