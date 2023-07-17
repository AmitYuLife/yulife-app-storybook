/* eslint-disable @typescript-eslint/no-empty-function */
export class Client {
  notify(error, onError, postReportCallback) {}

  _notify(event, onError, postReportCallback) {}

  start(jsOpts) {}
  isStarted() {}

  // breadcrumbs
  leaveBreadcrumb(message, metadata, type) {}

  // metadata
  addMetadata(section, values) {}
  addMetadata(section, key, value) {}
  getMetadata(section, key) {}
  clearMetadata(section, key) {}

  // feature flags
  addFeatureFlag(name, variant) {}
  addFeatureFlags(featureFlags) {}
  clearFeatureFlag(name) {}
  clearFeatureFlags() {}

  // context
  getContext() {}
  setContext(c) {}

  // user
  getUser() {}
  setUser(id, email, name) {}

  // sessions
  startSession() {}
  pauseSession() {}
  resumeSession() {}

  // callbacks
  addOnError(fn) {}
  removeOnError(fn) {}

  addOnSession(fn) {}
  removeOnSession(fn) {}

  addOnBreadcrumb(fn) {}
  removeOnBreadcrumb(fn) {}

  // plugins
  getPlugin(name) {}

  // implemented on the browser notifier only
  resetEventCount() {}
}
export const Configuration = () => {};
