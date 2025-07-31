export type IDebugStore = {
  debugQueriesToolEnabled: boolean;
  debugToolsEnabled: boolean;
  pedometerHistorySteps: number[];
  historySteps: IPedometerHistoryEntry[];
};

export type IPedometerHistoryEntry = {
  steps: number;
  /**
   * iOS does not relly on health provider to provide steps before subscribe
   *  */
  stepsBeforeSubscribe?: number;
};
