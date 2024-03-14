import { GetAllUserDataResponse } from "@graphql/user/getAllUserData.gql";
import { AppDataType } from "../user.types";
import {
  GetDailyPensionContribution_getDailyPensionContribution,
  GetMobileHints_getMobileHints,
  GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards,
  GetUserActiveChallenge_getUserActiveChallenge,
  GetUserActiveStreak_getUserActiveStreak,
  GetUserCoinLedger_coinLedger,
  GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate,
  GetUserTodayActivity_todayActivity,
} from "@graphql/_core/schema";
import { ChallengeSourceType, GetActiveChallengeSuccessDataPayload } from "@redux/levels/levels.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { ICoinsTodayEarned, IGetCoinLedgerSuccessPayload } from "@redux/coins/coins.types";
import { IPassiveChallengesEarnRateSuccessPayload } from "../user.types";
import { DailyPension } from "@redux/daily-pension/daily-pension.types";
import { IGetHintsSuccessPayload } from "@redux/hints/hints.types";
import { ActiveChallengeSourceType } from "@graphql/_core/schema/globalTypes";
import { toYuHealthReduxType } from "@utils";

export const toUserDataReduxType = (type: AppDataType, data: GetAllUserDataResponse[AppDataType]) => {
  switch (type) {
    case AppDataType.activeChallenge:
      return toActiveChallenge(data as GetUserActiveChallenge_getUserActiveChallenge);
    case AppDataType.activeStreak:
      return toActiveStreak(data as GetUserActiveStreak_getUserActiveStreak);
    case AppDataType.coinLedger:
      return toCoinLedger(data as GetUserCoinLedger_coinLedger);
    case AppDataType.todayActivity:
      return toTodayActivity(data as GetUserTodayActivity_todayActivity[]);
    case AppDataType.passiveChallengesEarnRate:
      return toPassiveChallengesEarnRate(data as GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate);
    case AppDataType.dailyPension:
      return toDailyPension(data as GetDailyPensionContribution_getDailyPensionContribution);
    case AppDataType.hints:
      return toHints(data as GetMobileHints_getMobileHints[]);
    case AppDataType.socialGroups:
      return toSocialGroups(data as GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards[]);
    default:
      return null;
  }
};

export const toChallengeSourceType = (source?: ActiveChallengeSourceType): ChallengeSourceType => {
  switch (source) {
    case ActiveChallengeSourceType.phone:
      return ChallengeSourceType.phone;
    case ActiveChallengeSourceType.watch:
      return ChallengeSourceType.watch;
  }
};

const toActiveChallenge = (
  activeChallenge: GetUserActiveChallenge_getUserActiveChallenge
): GetActiveChallengeSuccessDataPayload => ({
  shouldEndOnLastGoalAchieved: activeChallenge?.levelSlot?.shouldEndOnLastGoalAchieved,
  fitKitTypes: activeChallenge?.levelSlot?.fitKitTypes || [],
  yuHealth: toYuHealthReduxType(activeChallenge?.levelSlot?.yuHealth),
  endDateTime: activeChallenge?.challenge?.endDateTime || "",
  levelSlotId: activeChallenge?.challenge?.levelSlotId || "",
  createdBySource: toChallengeSourceType(activeChallenge?.challenge?.createdBySource),
  milestones: activeChallenge?.levelSlot?.milestones || [],
  rating: activeChallenge?.challenge?.rating,
  startDateTime: activeChallenge?.challenge?.startDateTime || "",
  subtype: activeChallenge?.levelSlot?.subtype || "",
  unit: activeChallenge?.levelSlot?.unit,
  challengeIsActive: !!activeChallenge?.challenge?.id,
});

const toActiveStreak = (activeStreak: GetUserActiveStreak_getUserActiveStreak): IStreaksGetUserSuccessPayload => ({
  activeStreak,
});

const toCoinLedger = (coinLedger: GetUserCoinLedger_coinLedger): IGetCoinLedgerSuccessPayload => ({
  total: coinLedger?.currentBalance,
  level: coinLedger?.currentLevel,
  yuniversalMap: coinLedger?.yuniversalMap,
  yuniversalLevel: coinLedger?.yuniversalLevel,
  nextLevelAvailableAt: coinLedger?.nextLevelAvailableAt,
});

const toTodayActivity = (todayActivity: GetUserTodayActivity_todayActivity[]): ICoinsTodayEarned => ({
  todayActivity,
});

const toPassiveChallengesEarnRate = (
  passiveChallengesEarnRate: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate
): IPassiveChallengesEarnRateSuccessPayload => ({
  passiveSteps: { exchangeRate: passiveChallengesEarnRate?.STEPS?.exchange },
  passiveMeditation: { exchangeRate: passiveChallengesEarnRate?.MEDITATION?.exchange },
});

const toDailyPension = (dailyPension: GetDailyPensionContribution_getDailyPensionContribution): DailyPension =>
  dailyPension;

const toHints = (hints: GetMobileHints_getMobileHints[]): IGetHintsSuccessPayload => ({
  hints,
});

const toSocialGroups = (socialGroups: GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards[]) => ({
  socialGroups,
});
