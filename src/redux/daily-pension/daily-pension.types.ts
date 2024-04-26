export interface IDailyPensionStore {
  active: boolean;
  yuCoinAwarded: number;
  contribution: string;
  lastUpdated: string;
}

export interface DailyPension {
  active: boolean;
  yuCoinAwarded: number | null;
  contribution: string | null;
}
