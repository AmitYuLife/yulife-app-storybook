/* eslint-disable @typescript-eslint/no-empty-function */
export class Client {
  notify() {}
  _notify() {}
  start() {}
  isStarted() { return false; }
  leaveBreadcrumb() {}
  addMetadata() {}
  getMetadata() {}
  clearMetadata() {}
  addFeatureFlag() {}
  addFeatureFlags() {}
  clearFeatureFlag() {}
  clearFeatureFlags() {}
  getContext() {}
  setContext() {}
  getUser() { return {}; }
  setUser() {}
  startSession() {}
  pauseSession() {}
  resumeSession() {}
  addOnError() {}
  removeOnError() {}
  addOnSession() {}
  removeOnSession() {}
  addOnBreadcrumb() {}
  removeOnBreadcrumb() {}
  getPlugin() {}
  resetEventCount() {}
}

export const Configuration = () => {};

// Default export that Bugsnag.start() / Bugsnag.notify() etc. expect
const instance = new Client();
const Bugsnag = {
  ...instance,
  start: () => instance,
  createClient: () => instance,
  isStarted: () => false,
  notify: () => {},
  leaveBreadcrumb: () => {},
  setUser: () => {},
  setContext: () => {},
  addMetadata: () => {},
  getMetadata: () => {},
  clearMetadata: () => {},
  addFeatureFlag: () => {},
  addFeatureFlags: () => {},
  clearFeatureFlag: () => {},
  clearFeatureFlags: () => {},
  startSession: () => {},
  pauseSession: () => {},
  resumeSession: () => {},
  getUser: () => ({}),
  getContext: () => "",
  addOnError: () => {},
  removeOnError: () => {},
  getPlugin: (name) => {
    if (name === "react") {
      return {
        createErrorBoundary: (React) => {
          // Simple passthrough error boundary for web
          return ({ children }) => React.createElement(React.Fragment, null, children);
        },
      };
    }
    return null;
  },
};

export default Bugsnag;
