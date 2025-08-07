import { Challenge, PassiveExchangeRate } from "@redux/_core/types";

export interface IDailyStepsStore {
  /**
   * @description
   * This is the value displayed on the daily yucoin screen
   */
  dailySteps: number;
  /**
   * @description
   * The value of steps from local pedometer
   */
  localSteps: number;
  /**
   * @description
   * We don't wanna make an API request every 1-2 steps,
   * hence we need to store what we last sent to the server
   */
  serverSteps: number;
  /**
   * @description
   * The default exchange rate is 1 yucoin for 2000 steps. But that varies
   */
  exchangeRate: PassiveExchangeRate;
  /**
   * @description
   * Describes if we're fetching the results from the pedometer
   */
  isFetching: boolean;
  /**
   * @description
   * Describes if we've started the sync with the server
   */
  isSyncing: boolean;
  /**
   * @description
   * We wanna make an API request every time the app starts, no matter what. We use this value for that.
   */
  isServerFetchedThisSession: boolean;
  /**
   * @description
   * When was the last sync with the server
   */
  lastUpdated: string;
  /**
   * @description
   * Steps data from these apps  will be filtered/ignored
   */
  blackListApps: string[];
  showPanel: boolean;
}

export type IDailyStepsGetUserSuccessPayload = { passiveSteps: Pick<IDailyStepsStore, "exchangeRate"> };

export type IDailyStepsUpdateUserProfilePayload = {
  stepsGameSettings: Pick<IDailyStepsStore, "blackListApps">;
};

export type IDailyStepsFromRemotePayload = { challenge: Challenge; sentSteps: number; currentBalance: number };
