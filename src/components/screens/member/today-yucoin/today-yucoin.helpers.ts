import { displaySecondsAsMinutes, padNum } from "@services/utils";
import { IProps } from "./today-yucoin.screen";

export const mapProps = (props: IProps) => {
  const {
    activeChallenge,
    challenges,
    ctaLabel,
    dailyStepsEarned,
    exchangeRate = { surge: 1, steps: 2000, yucoin: 1, meditation: 0 },
    loading,
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
    passiveStepsAwardedMilestonesLength,
    passiveMeditationAwardedMilestonesLength,
  } = props;
  const showNoChallengeDone = !challenges.length && !activeChallenge;
  const typeText = steps === 1 ? "step" : "steps";
  const meditationExchangeRateDisplay = displaySecondsAsMinutes(meditationExchangeRate.meditation);
  const mindfulTotal = displaySecondsAsMinutes(meditationSeconds);
  const mindfulTotalToDisplay =
    mindfulTotal.minutes === 1
      ? `${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful minute`
      : `${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful minutes`;
  const hideCTA = !showCta || loading;
  const ctaProps = {
    hide: hideCTA,
    onPress: onPressCta,
    title: ctaLabel,
  };
  const stepsProgressBarProps = {
    progressBarMultiplier: steps / (exchangeRate.steps * passiveStepsAwardedMilestonesLength),
    milestoneLength: passiveStepsAwardedMilestonesLength,
    isFilling: (index: number) => (steps + 500) / 2000 >= index + 1,
    fillProgress: (index: number) => ((steps + 500 - exchangeRate.steps * (index + 1)) / 500) * 100,
  };
  const meditationProgressBarProps = {
    progressBarMultiplier:
      meditationSeconds / (meditationExchangeRate.meditation * passiveMeditationAwardedMilestonesLength),
    milestoneLength: passiveMeditationAwardedMilestonesLength,
    isFilling: (index: number) => meditationSeconds / meditationExchangeRate.meditation >= index + 1,
    fillProgress: (index: number) => (meditationSeconds / (meditationExchangeRate.meditation * (index + 1))) * 100,
  };
  const questsProps = { challenges, showNoChallengeDone, activeChallenge };
  const passiveChallengeInstructions = `${meditationExchangeRate.yucoin} yucoin for ${meditationExchangeRateDisplay.minutes} min`;
  const challengeStepsProps = {
    hide: false,
    steps: `${steps} ${typeText}`,
    surge: {
      surge: exchangeRate.surge,
      hide: !isStepsSurge,
    },
    yucoinsEarned: dailyStepsEarned,
    instructions: `${exchangeRate.yucoin} yucoin for ${exchangeRate.steps} steps`,
    progressBar: stepsProgressBarProps,
  };
  const challengeMeditationProps = {
    hide: !isShowingPassiveMeditation || meditationSeconds < 1,
    steps: mindfulTotalToDisplay,
    surge: {
      surge: meditationExchangeRate.surge,
      hide: !isMeditationSurge,
    },
    yucoinsEarned: dailyMeditationEarned,
    instructions: passiveChallengeInstructions,
    progressBar: meditationProgressBarProps,
    pad: 15,
  };

  return {
    challengeMeditationProps,
    challengeStepsProps,
    ctaProps,
    questsProps,
  };
};
