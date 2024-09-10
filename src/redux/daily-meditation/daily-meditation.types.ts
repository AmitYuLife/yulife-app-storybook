import { PassiveExchangeRate } from "@redux/_core/types";

export interface IDailyMeditationStore {
  dailyMeditation: number;
  inAppMeditation: IAppDailyMeditationProps;
  exchangeRate: PassiveExchangeRate;
  lastUpdated: string;
}

export interface IAppDailyMeditationProps {
  duration: number;
  lastUpdated: string;
  createdAt?: number;
  date: string;
}

export interface IAppMeditationPayload {
  duration: number;
  date: string;
}

export interface IAppMeditationPayloadLocal {
  duration: number;
  createdAt: number;
}

export type IDailyMeditationGetCurrentUserPayload = { passiveMeditation: Pick<IDailyMeditationStore, "exchangeRate"> };
