import { Close, GenericHeading, Pad } from "@atoms/index";
import * as React from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { GetCurrentUser_getCurrentUser_todayActivity } from "../../../../graphql/_core/schema";
import { ExchangeRateMeditation } from "../../../../redux/daily-meditation/daily-meditation.selectors";
import { ExchangeRate } from "../../../../redux/daily-steps/daily-steps.selectors";
import { Colours } from "../../../../styles";
import styles from "./today-yucoin.screen.styles";
import Coin from "./subcomponents/coin";
import CTA from "./subcomponents/cta";
import SectionHeading from "./subcomponents/section-heading";
import Quests from "./subcomponents/quests";
import { ChallengesWrapper } from "./subcomponents/common";
import Challenge from "./subcomponents/challenges";
import { mapProps } from "./today-yucoin.helpers";
import { TODAYS_YUCOIN } from "@ids";

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
  passiveMeditationAwardedMilestonesLength: number;
}

export default function TodayYucoinScreen(props: IProps) {
  const { loading, onPressClose } = props;
  const enhancers = mapProps(props);
  return (
    <View style={styles.wrapper}>
      <GenericHeading hidesBorder={true} heading="today's yucoin" style={styles.heading} />
      <ScrollView testID={TODAYS_YUCOIN} style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Coin />
        <View style={styles.contentWrapper}>
          <SectionHeading labelLeft="core activity" labelRight="yucoin" />
          <ChallengesWrapper style={styles.reduceBottomPadding}>
            <Challenge {...enhancers.challengeStepsProps} />
            <Pad height={20} />
            <Challenge {...enhancers.challengeMeditationProps} />
          </ChallengesWrapper>
          {loading ? <ActivityIndicator color={Colours.darkHotPink} /> : <Quests {...enhancers.questsProps} />}
        </View>
        <CTA {...enhancers.ctaProps} />
      </ScrollView>
      <Close style={styles.close} onPress={onPressClose} />
    </View>
  );
}
