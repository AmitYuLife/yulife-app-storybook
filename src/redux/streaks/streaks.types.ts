import { IStreaksStore } from "./streaks.reducer";

export type IStreaksGetUserSuccessPayload = { activeStreak: Omit<IStreaksStore, "isAvailable" | "isRedeemed"> };
