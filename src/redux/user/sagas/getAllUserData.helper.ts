import { GetAllUserDataResponse } from "@graphql/user/getAllUserData.gql";
import { AppDataType, GetUserConnectionsPayload, GetUserFeaturesPayload } from "../user.types";
import { ChallengeSourceType, GetActiveChallengeSuccessDataPayload } from "@redux/levels/levels.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { IGetCoinLedgerSuccessPayload, IGetTodayActivitiesPayload } from "@redux/coins/coins.types";
import { IPassiveChallengesEarnRateSuccessPayload } from "../user.types";
import { DailyPension } from "@redux/daily-pension/daily-pension.types";
import { IGetHintsSuccessPayload } from "@redux/hints/hints.types";
import { toYuHealthReduxType } from "@utils";
import {
  DailyPensionContributionFragment,
  HintFragment,
  SocialGroupFragment,
  UserActiveChallengeFragment,
  UserActiveStreakFragment,
  UserCoinLedgerFragment,
  UserPassiveChallengesEarnRate,
  UserTodayActivitiesFragment,
  ActiveChallengeSourceType as ActiveChallengeSourceTypeNewGql,
  UserFeatureFragment,
  UserConnectionsFragment,
  UserDailyChallengeAmountAvailableFragment,
  MobileInventoryInfoFragment,
} from "@graphql/__generated";
import { IGetSocialGroupsSuccessPayload } from "@redux/leaderboards/leaderboards.types";

export const toUserDataReduxType = (
  type: AppDataType,
  data: GetAllUserDataResponse[AppDataType],
  tempGameGetInAppMeditationFromServer: boolean
) => {
  switch (type) {
    case AppDataType.activeChallenge:
      return toActiveChallenge(data as UserActiveChallengeFragment);
    case AppDataType.activeStreak:
      return toActiveStreak(data as UserActiveStreakFragment);
    case AppDataType.coinLedger:
      return toCoinLedger(data as UserCoinLedgerFragment);
    case AppDataType.todayActivity:
      return toTodayActivity(data as UserTodayActivitiesFragment, tempGameGetInAppMeditationFromServer);
    case AppDataType.passiveChallengesEarnRate:
      return toPassiveChallengesEarnRate(data as UserPassiveChallengesEarnRate);
    case AppDataType.dailyPension:
      return toDailyPension(data as DailyPensionContributionFragment);
    case AppDataType.hints:
      return toHints(data as HintFragment[]);
    case AppDataType.socialGroups:
      return toSocialGroups(data as SocialGroupFragment[]);
    case AppDataType.features:
      return toUserFeatures(data as UserFeatureFragment[]);
    case AppDataType.connections:
      return toUserConnections(data as UserConnectionsFragment[]);
    case AppDataType.dailyChallengeAmountAvailable:
      return toUserDailyChallengeAmountAvailable(data as UserDailyChallengeAmountAvailableFragment);
    case AppDataType.inventoryInfo:
      return toInventoryInfo(data as MobileInventoryInfoFragment);
    default:
      return null;
  }
};

export const toChallengeSourceType = (source?: ActiveChallengeSourceTypeNewGql): ChallengeSourceType => {
  switch (source) {
    case ActiveChallengeSourceTypeNewGql.Phone:
      return ChallengeSourceType.Phone;
    case ActiveChallengeSourceTypeNewGql.Watch:
      return ChallengeSourceType.Watch;
  }
};

const toActiveChallenge = (activeChallenge: UserActiveChallengeFragment): GetActiveChallengeSuccessDataPayload => ({
  shouldEndOnLastGoalAchieved: activeChallenge?.levelSlot?.shouldEndOnLastGoalAchieved,
  fitKitTypes: activeChallenge?.levelSlot?.fitKitTypes || [],
  yuHealth: toYuHealthReduxType(activeChallenge?.levelSlot?.yuHealth),
  endDateTime: activeChallenge?.challenge?.endDateTime || "",
  level: activeChallenge?.challenge?.level || null,
  yuniversalMap: activeChallenge?.challenge?.yuniversalMap || null,
  levelSlotId: activeChallenge?.challenge?.levelSlotId || "",
  levelSlotTemplateId: activeChallenge?.challenge?.levelSlotTemplateId || "",
  createdBySource: toChallengeSourceType(activeChallenge?.challenge?.createdBySource),
  milestones: activeChallenge?.levelSlot?.milestones || [],
  rating: activeChallenge?.challenge?.rating,
  startDateTime: activeChallenge?.challenge?.startDateTime || "",
  subtype: activeChallenge?.levelSlot?.subtype || "",
  unit: activeChallenge?.levelSlot?.unit,
  challengeIsActive: !!activeChallenge?.challenge?.id,
  id: activeChallenge?.challenge?.id,
});

const toActiveStreak = (activeStreak: UserActiveStreakFragment): IStreaksGetUserSuccessPayload => ({
  activeStreak: {
    id: activeStreak?.id,
    maxStreak: activeStreak?.maxStreak,
    nextStreakAvailableAt: activeStreak?.nextStreakAvailableAt,
    streak: activeStreak?.streak,
    streakAwardId: activeStreak?.streakAwardId,
    type: activeStreak?.type,
    value: activeStreak?.value,
    canUseStreakSaver: activeStreak?.canUseStreakSaver,
    availableStreakSavers: activeStreak?.availableStreakSavers,
  },
});

const toCoinLedger = (coinLedger: UserCoinLedgerFragment): IGetCoinLedgerSuccessPayload => ({
  total: coinLedger?.currentBalance,
  level: coinLedger?.currentLevel,
  yuniversalMap: coinLedger?.yuniversalMap,
  yuniversalLevel: coinLedger?.yuniversalLevel,
  nextLevelAvailableAt: coinLedger?.nextLevelAvailableAt,
});

const toTodayActivity = (
  todayActivities: UserTodayActivitiesFragment,
  tempGameGetInAppMeditationFromServer: boolean
): IGetTodayActivitiesPayload => ({
  todayActivity: todayActivities.activities,
  dailyCyclingEarned: todayActivities.passiveChallenges?.cycling?.yuCoinAwarded,
  cycling: {
    updatedAt: todayActivities.passiveChallenges?.cycling?.updatedAt,
    incomingData: todayActivities.passiveChallenges?.cycling?.incomingData,
    yuCoinAwarded: todayActivities.passiveChallenges?.cycling?.yuCoinAwarded,
  },
  inAppMeditation: {
    duration: todayActivities.inAppMeditation?.duration,
    date: todayActivities.inAppMeditation?.date,
  },
  tempGameGetInAppMeditationFromServer,
});

const toPassiveChallengesEarnRate = (
  passiveChallengesEarnRate: UserPassiveChallengesEarnRate
): IPassiveChallengesEarnRateSuccessPayload => ({
  passiveSteps: {
    exchangeRate: {
      yucoin: passiveChallengesEarnRate?.STEPS?.exchange?.yucoin,
      steps: passiveChallengesEarnRate?.STEPS?.exchange?.steps,
      meditation: passiveChallengesEarnRate?.STEPS?.exchange?.meditation,
      surge: passiveChallengesEarnRate?.STEPS?.exchange?.surge,
    },
  },
  passiveMeditation: {
    exchangeRate: {
      yucoin: passiveChallengesEarnRate?.MEDITATION?.exchange?.yucoin,
      steps: passiveChallengesEarnRate?.MEDITATION?.exchange?.steps,
      meditation: passiveChallengesEarnRate?.MEDITATION?.exchange?.meditation,
      surge: passiveChallengesEarnRate?.MEDITATION?.exchange?.surge,
    },
  },
});

const toDailyPension = (dailyPension: DailyPensionContributionFragment): DailyPension => ({
  active: dailyPension?.active,
  yuCoinAwarded: dailyPension?.yuCoinAwarded,
  contribution: dailyPension?.contribution,
});

const toHints = (hints: HintFragment[]): IGetHintsSuccessPayload => ({
  hints: hints.map((hint) => ({
    ...hint,
    image: { uri: hint.image.uri, id: hint.image.id },
    screenBlacklist: hint.screenBlacklist,
    screenWhitelist: hint.screenWhitelist,
  })),
});

const toSocialGroups = (socialGroups: SocialGroupFragment[]): IGetSocialGroupsSuccessPayload => ({
  socialGroups: socialGroups.map((socialGroup) => ({
    ...socialGroup,
    leaderboards: socialGroup.leaderboards.map((leaderboard) => ({
      ...leaderboard,
      icon: { uri: leaderboard.icon.uri, id: leaderboard.icon.id },
      selectedIcon: { uri: leaderboard.selectedIcon.uri, id: leaderboard.selectedIcon.id },
    })),
  })),
});

const toUserFeatures = (features: UserFeatureFragment[]): GetUserFeaturesPayload => ({
  features: features.map((feature) => ({ name: feature.name, value: feature.value })),
});

const toUserConnections = (connections: UserConnectionsFragment[]): GetUserConnectionsPayload => ({
  connections: connections?.map((connection) => ({
    name: connection.name,
    isConnected: connection.isConnected,
    lastUpdated: connection.lastUpdated,
  })),
});

const toUserDailyChallengeAmountAvailable = (dailyChallengeAmount: UserDailyChallengeAmountAvailableFragment) => ({
  dailyChallengeAmountAvailable: dailyChallengeAmount?.dailyChallengeAmountAvailable,
  dailyChallengeAmountAvailableWithUnactivatedPowerUps:
    dailyChallengeAmount?.dailyChallengeAmountAvailableWithUnactivatedPowerUps,
});

const toInventoryInfo = (inventoryInfo: MobileInventoryInfoFragment) => ({
  count: inventoryInfo?.count || 0,
});
