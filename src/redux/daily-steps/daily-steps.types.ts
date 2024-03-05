import { IDailyStepsStore } from "./daily-steps.reducer";

export type IDailyStepsGetUserSuccessPayload = { passiveSteps: Pick<IDailyStepsStore, "exchangeRate"> };
