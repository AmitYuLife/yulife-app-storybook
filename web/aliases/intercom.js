const noop = () => {};
const noopPromise = () => Promise.resolve();
const noopPromiseFalse = () => Promise.resolve(false);

export default {
  setUserHash: noop,
  registerIdentifiedUser: noopPromise,
  loginUserWithUserAttributes: noopPromise,
  logEvent: noop,
  isUserLoggedIn: noopPromiseFalse,
  logout: noopPromise,
  setBottomPadding: noop,
  displayMessenger: noop,
  hideMessenger: noop,
  displayMessageComposer: noop,
  updateUser: noopPromise,
  setLauncherVisibility: noop,
  setInAppMessageVisibility: noop,
  handlePush: noop,
};
