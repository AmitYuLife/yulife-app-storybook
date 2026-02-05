const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

// In Expo SDK 53+, Intercom notification handling is done automatically
// via @intercom/intercom-react-native's native integration.
// This plugin is now a no-op but kept for backwards compatibility.
module.exports = function withIntercomIos(data) {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const appDelegatePath = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.swift");

      if (!fs.existsSync(appDelegatePath)) {
        console.warn("AppDelegate.swift not found, skipping Intercom iOS plugin");
        return config;
      }

      // Intercom integration in Expo SDK 53 is handled by the @intercom/intercom-react-native config plugin
      // No additional modifications needed for Swift AppDelegate
      console.log("Intercom iOS plugin: Using native Expo config plugin integration");

      return config;
    },
  ]);
};
