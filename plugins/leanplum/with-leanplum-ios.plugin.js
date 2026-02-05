const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

// Updated for Expo SDK 53 with Swift AppDelegate
// Leanplum notification handling is managed by the @leanplum/react-native-sdk config plugin
module.exports = function withLeanplumIosPlugin(data) {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const appDelegatePath = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.swift");

      if (!fs.existsSync(appDelegatePath)) {
        console.warn("AppDelegate.swift not found, skipping Leanplum iOS plugin");
        return config;
      }

      // Leanplum integration in Expo SDK 53 is handled by the native config plugin
      // No additional modifications needed for Swift AppDelegate
      console.log("Leanplum iOS plugin: Using native Expo config plugin integration");

      return config;
    },
  ]);
};
