import { IDailyStepsStore } from "./daily-steps.reducer";
import { Challenge } from "@redux/_core/types";

export type IDailyStepsGetUserSuccessPayload = { passiveSteps: Pick<IDailyStepsStore, "exchangeRate"> };

export type IDailyStepsUpdateUserProfilePayload = {
  stepsGameSettings: Pick<IDailyStepsStore, "maxStepsAnomalyWindowMs" | "blackListApps">;
};

export type IDailyStepsFromRemotePayload = { challenge: Challenge; currentBalance: number };
