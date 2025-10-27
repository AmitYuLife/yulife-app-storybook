const E2E_EXTENTIONS = process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(",") : [];

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withDatadogMetroConfig } = require('@datadog/mobile-react-native/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.unshift(...E2E_EXTENTIONS)
config.resolver.assetExts.push("lottie")
config.resolver.requireCycleIgnorePatterns = [
  /.*/
]

module.exports = withDatadogMetroConfig(config);
