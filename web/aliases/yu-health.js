// Full web stub for @yu-life/react-native-yu-health
const noop = () => {};
const noopPromise = () => Promise.resolve();
const noopPromiseNull = () => Promise.resolve(null);
const noopPromiseFalse = () => Promise.resolve(false);
const noopPromiseEmpty = () => Promise.resolve({});
const noopPromiseArr = () => Promise.resolve([]);

export const HealthProvider = {
  GoogleFit: "googleFit",
  HealthConnect: "healthConnect",
  HealthKit: "healthKit",
  SamsungHealth: "samsungHealth",
};

export const HealthProviderAvailability = {
  available: "available",
  unavailable: "unavailable",
};

export const HealthProviderCapability = {
  STEP_COUNT: "stepCount",
  MINDFUL_MINUTES: "mindfulMinutes",
  CYCLING_DISTANCE: "cyclingDistance",
  ACTIVITIES: "activities",
};

export const HealthPermissionStatus = {
  authorized: "authorized",
  denied: "denied",
  notDetermined: "notDetermined",
  restricted: "restricted",
  sharingDenied: "sharingDenied",
};

export const HealthDataType = {
  STEPS: "steps",
  DISTANCE: "distance",
  CYCLING_DISTANCE: "cyclingDistance",
  MINDFUL_MINUTES: "mindfulMinutes",
  ACTIVE_ENERGY_BURNED: "activeEnergyBurned",
  HEART_RATE: "heartRate",
  SLEEP: "sleep",
  WORKOUTS: "workouts",
};

export const BucketSize = {
  HOUR: "hour",
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
};

export const YuHealthEvent = {
  PEDOMETER_UPDATE: "pedometerUpdate",
  FOREGROUND_SERVICE: "foregroundService",
  NATIVE_LOG: "nativeLog",
};

export const aggregateQuery = noopPromiseEmpty;
export const sampleQuery = noopPromiseArr;
export const activityQuery = noopPromiseArr;
export const queryPedometerFromDate = noopPromiseEmpty;
export const hasPermission = noopPromiseFalse;
export const hasPermissions = noopPromiseFalse;
export const requestPermissions = noopPromise;
export const requestSystemPermission = noopPromise;
export const getAvailabilityStatus = () => Promise.resolve(HealthProviderAvailability.unavailable);
export const getCapabilities = noopPromiseArr;
export const getPermissionStatusOfCapabilities = noopPromiseArr;
export const supportsDisconnect = noopPromiseFalse;
export const disconnect = noopPromise;
export const setActiveProvider = noopPromise;
export const getForegroundSteps = () => Promise.resolve(0);
export const startPedometer = noopPromise;
export const stopPedometer = noopPromise;
export const startForegroundService = noopPromise;
export const stopForegroundService = noopPromise;
export const isForegroundServiceRunning = noopPromiseFalse;
export const addListener = (event, callback) => ({ remove: noop });
