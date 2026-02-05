const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

// Updated for Expo SDK 53 with Swift AppDelegate
module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const appDelegatePath = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.swift");

      if (!fs.existsSync(appDelegatePath)) {
        console.warn("AppDelegate.swift not found, skipping YuLife delegate plugin");
        return config;
      }

      let contents = fs.readFileSync(appDelegatePath, "utf-8");

      // Update bundle entry point from expo's virtual entry to index (already done in RNN plugin, but just in case)
      contents = contents.replace('.expo/.virtual-metro-entry', 'index');

      fs.writeFileSync(appDelegatePath, contents);
      return config;
    },
  ]);
};
