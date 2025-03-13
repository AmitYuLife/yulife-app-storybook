export interface IDailyMeditationStore {
  dailyMeditation: number;
  inAppMeditation: IAppDailyMeditationProps;
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
