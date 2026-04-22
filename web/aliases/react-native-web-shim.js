// Re-export everything from react-native-web, then patch in missing native-only APIs
// so the app code doesn't crash at runtime.

export * from "react-native-web";

// --- Missing APIs that don't exist in react-native-web ---

export const DevSettings = {
  addMenuItem: () => {},
  reload: () => {},
};

export const ActionSheetIOS = {
  showActionSheetWithOptions: (_options, callback) => {
    // No-op on web, could use browser prompt as fallback
    callback(0);
  },
  showShareActionSheetWithOptions: () => {},
};

export const PermissionsAndroid = {
  PERMISSIONS: {},
  RESULTS: {
    GRANTED: "granted",
    DENIED: "denied",
    NEVER_ASK_AGAIN: "never_ask_again",
  },
  check: () => Promise.resolve(false),
  request: () => Promise.resolve("denied"),
  requestMultiple: () => Promise.resolve({}),
};

export const TurboModuleRegistry = {
  get: () => null,
  getEnforcing: () => ({}),
};
