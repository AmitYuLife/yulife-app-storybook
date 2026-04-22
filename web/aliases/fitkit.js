/* eslint-disable @typescript-eslint/no-empty-function */
const noop = () => {};
const noopReturn = () => ({ remove: noop });

export default {
  constants: {},
  addListener: noopReturn,
  addOnDateChangeListener: noopReturn,
  authorise: {},
  isAuthorised: noop,
  isAvailable: noop,
  aggregateQuery: noop,
  sampleQuery: noop,
  liveQuery: noop,
  queryPedometerFromDate: noop,
  startPedometerUpdatesFromDate: () => null,
  stopPedometerUpdates: () => null,
};

export const FitKitTypes = {
  AggregateType: {},
  Types: {},
  TimeRange: {},
};
