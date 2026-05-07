// Web stub for `customerio-reactnative`. The native package binds to platform
// SDKs that don't exist in the browser; we no-op everything so saga init
// doesn't throw and crash app boot.

const noop = () => {};

const noopPromise = () => Promise.resolve();

export const CustomerIO = {
  initialize: noopPromise,
  identify: noopPromise,
  clearIdentify: noopPromise,
  track: noopPromise,
  screen: noopPromise,
  registerDeviceToken: noopPromise,
  deleteDeviceToken: noopPromise,
  trackMetric: noopPromise,
  setProfileAttributes: noopPromise,
  setDeviceAttributes: noopPromise,
};

export const CioRegion = { US: "us", EU: "eu" };

export class CioConfig {}

export const CioLogLevel = { None: "none", Error: "error", Info: "info", Debug: "debug" };

export const useCustomerIO = () => CustomerIO;

export const CustomerIOEnv = {};
export const CustomerIOInAppMessaging = { initialize: noop, dismissMessage: noop };
export const CustomerIOPushMessaging = { onMessageReceived: noop, getRegisteredDeviceToken: noopPromise };

export default CustomerIO;
