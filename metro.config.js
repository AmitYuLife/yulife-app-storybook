const E2E_EXTENTIONS = process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(",") : [];

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push(...E2E_EXTENTIONS)
config.resolver.assetExts.push("lottie")
config.resolver.requireCycleIgnorePatterns = [
  /.*/
]

module.exports = config;
