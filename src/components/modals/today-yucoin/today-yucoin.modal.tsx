import {
  GetCurrentUser_getCurrentUser_activeChallenge,
  GetCurrentUser_getCurrentUser_todayActivity,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_CURRENT_USER } from "@graphql/user";
import * as React from "react";
import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { useSelector } from "react-redux";
import { getDailyMeditationCoins, getDailyStepsCoins } from "@redux/coins/coins.selectors";
import {
  getDailyMeditation,
  getMeditationAwardedMilestonesLength,
  getMeditationExchangeRate,
} from "@redux/daily-meditation/daily-meditation.selectors";
import {
  getDailySteps,
  getExchangeRate,
  getStepsAwardedMilestonesLength,
} from "@redux/daily-steps/daily-steps.selectors";
import { getChallengesStatus } from "@redux/levels/levels.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { pathOr } from "@services/utils";
import { TodayYucoinScreen } from "@screens";
import { useQuery } from "@apollo/react-hooks";

interface IProps {
  componentId: string;
  onCtaPress: () => void;
}

type ActiveChallenge = GetCurrentUser_getCurrentUser_activeChallenge;
type ChallengeToday = GetCurrentUser_getCurrentUser_todayActivity;

const TodayYucoinModal: React.FC<IProps> = ({ componentId, onCtaPress }) => {
  const challengesStatus = useSelector(getChallengesStatus);
  const dailyStepsEarned = useSelector(getDailyStepsCoins);
  const exchangeRate = useSelector(getExchangeRate);
  const meditationExchangeRate = useSelector(getMeditationExchangeRate);
  const passiveStepsAwardedMilestonesLength = useSelector(getStepsAwardedMilestonesLength);
  const passiveMeditationAwardedMilestonesLength = useSelector(getMeditationAwardedMilestonesLength);
  const steps = useSelector(getDailySteps);
  const dailyMeditation = useSelector(getDailyMeditation);
  const dailyMeditationEarned = useSelector(getDailyMeditationCoins);
  const isShowingPassiveMeditation = useSelector(getUserFeatures).usePassiveMeditation;
  const features = useSelector(getUserFeatures);

  const { loading, data } = useQuery(GQL_QUERY_GET_CURRENT_USER, {
    fetchPolicy: "network-only",
    variables: { intercomHashMethod: Platform.OS },
  });

  const handleClose = () => {
    Navigation.dismissModal(componentId);
  };

  const handleCtaPress = () => {
    onCtaPress();
    Navigation.dismissModal(componentId);
  };

  const todayActivity = pathOr<ChallengeToday[]>(data, "getCurrentUser.todayActivity", []);
  const { challenge, levelSlot } = pathOr<ActiveChallenge>(data, "getCurrentUser.activeChallenge", {
    challenge: null,
    levelSlot: null,
  });

  const surgeMultiplier = (exchangeRate && exchangeRate.surge) || 1;
  const meditationSurgeMultiplier = (meditationExchangeRate && meditationExchangeRate.surge) || 1;

  const activeChallenge: ChallengeToday =
    challenge && challenge.incomingData
      ? {
          earned: challenge.yuCoinAwarded,
          id: challenge.id,
          milestones: challenge.rating,
          name: challenge.subtype || levelSlot.subtype,
          score: challenge.incomingData,
        }
      : null;

  const ctaLabel = activeChallenge
    ? "Back to challenge"
    : challengesStatus.done
    ? "Take another challenge"
    : "Take a challenge";

  return (
    <TodayYucoinScreen
      activeChallenge={activeChallenge}
      challenges={todayActivity}
      dailyStepsEarned={dailyStepsEarned}
      exchangeRate={exchangeRate}
      loading={loading}
      steps={steps}
      onPressCta={handleCtaPress}
      onPressClose={handleClose}
      showCta={challengesStatus.isAvailable}
      ctaLabel={ctaLabel}
      isShowingPassiveMeditation={isShowingPassiveMeditation}
      isStepsSurge={features.showSurge && surgeMultiplier > 1}
      isMeditationSurge={isShowingPassiveMeditation && meditationSurgeMultiplier > 1}
      meditationSeconds={dailyMeditation}
      dailyMeditationEarned={dailyMeditationEarned}
      meditationExchangeRate={meditationExchangeRate}
      passiveStepsAwardedMilestonesLength={passiveStepsAwardedMilestonesLength}
      passiveMeditationAwardedMilestonesLength={passiveMeditationAwardedMilestonesLength}
    />
  );
};

export default TodayYucoinModal;
