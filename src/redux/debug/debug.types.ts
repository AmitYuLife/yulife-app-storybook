export type IDebugStore = {
  debugQueriesToolEnabled: boolean;
  debugToolsEnabled: boolean;
  pedometerHistorySteps: number[];
  historySteps: IPedometerHistoryEntry[];
};

export type IPedometerHistoryEntry = {
  steps: number;
  stepsBeforeSubscribe: number;
};
