import { ILevelsStoreGetCoinLedger } from "@redux/levels/levels.types";
import { ICoinsStore } from "./coins.reducer";
import { Challenge } from "@redux/_core/types";

export type ICoinsTodayEarned = {
  todayActivity: ChallengeCoinsEarned[];
  dailyCyclingEarned?: number;
};
export type ChallengeCoinsEarned = { earned?: number };

export type ICoinsStoreGetCoinLedger = Pick<ICoinsStore, "total">;

export type IGetCoinLedgerSuccessPayload = ICoinsStoreGetCoinLedger & ILevelsStoreGetCoinLedger;

export type IGetTodayActivitiesPayload = ICoinsTodayEarned & { cycling: Challenge };
