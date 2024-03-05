import { IDailyMeditationStore } from "./daily-meditation.reducer";

export interface IAppMeditationPayload {
  duration: number;
  createdAt: number;
}

export type IDailyMeditationGetCurrentUserPayload = { passiveMeditation: Pick<IDailyMeditationStore, "exchangeRate"> };
