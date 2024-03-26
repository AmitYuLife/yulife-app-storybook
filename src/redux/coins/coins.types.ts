import { ILevelsStoreGetCoinLedger } from "@redux/levels/levels.types";
import { ICoinsStore } from "./coins.reducer";

export type ICoinsTodayEarned = { todayActivity: ChallengeCoinsEarned[] };
export type ChallengeCoinsEarned = { earned?: number };

export type ICoinsStoreGetCoinLedger = Pick<ICoinsStore, "total">;

export type IGetCoinLedgerSuccessPayload = ICoinsStoreGetCoinLedger & ILevelsStoreGetCoinLedger;
