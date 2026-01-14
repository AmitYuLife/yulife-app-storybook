import { ILevelsStoreGetCoinLedger } from "@redux/levels/levels.types";
import { Challenge } from "@redux/_core/types";
import { IAppMeditationPayload } from "@redux/daily-meditation/daily-meditation.types";

export interface ICoinsStore {
  dailyChallengeEarned: number; // number of coins earned in the current day through challenges
  dailyStepsEarned: number; // number of coins earned in the current day through daily steps
  dailyMeditationEarned: number; // number of coins earned in the current day through daily meditation
  dailyCyclingEarned: number; // number of coins earned in the current day through daily cycling
  dailyPensionEarned: number; // number of coins earned in the current day through daily pension contribution
  total: number;
  lastUpdated: string; // total coins the user has earned
}

export type ICoinsTodayEarned = {
  todayActivity: ChallengeCoinsEarned[];
  dailyCyclingEarned?: number;
};
export type ChallengeCoinsEarned = { earned?: number };

export type ICoinsStoreGetCoinLedger = Pick<ICoinsStore, "total">;

export type IGetCoinLedgerSuccessPayload = ICoinsStoreGetCoinLedger & ILevelsStoreGetCoinLedger;

export type IGetTodayActivitiesPayload = ICoinsTodayEarned & ICyclingChallenge & ITodayActivitiesInAppMeditation;

type ITodayActivitiesInAppMeditation = {
  inAppMeditation: IAppMeditationPayload;
};

type ICyclingChallenge = {
  cycling: Challenge;
};
