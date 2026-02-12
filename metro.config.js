const path = require('path');
const E2E_EXTENTIONS = process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(",") : [];

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withDatadogMetroConfig } = require('@datadog/mobile-react-native/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Disable package exports to fix "Property 'require' doesn't exist" error in RN 0.79
// This reverts to file-based resolution and avoids new "exports" field processing
config.resolver.unstable_enablePackageExports = false;

config.resolver.sourceExts.unshift(...E2E_EXTENTIONS)
config.resolver.assetExts.push("lottie")
config.resolver.requireCycleIgnorePatterns = [
  /.*/
]

// Add custom polyfill to alias 'require' to '__r' for packages that use CommonJS require directly
const defaultGetPolyfills = config.serializer?.getPolyfills;
config.serializer = {
  ...config.serializer,
  getPolyfills: (ctx) => {
    const polyfills = defaultGetPolyfills ? defaultGetPolyfills(ctx) : [];
    // Add our require alias polyfill at the beginning so it runs after Metro's runtime but before other polyfills
    return [
      path.resolve(__dirname, 'metro-polyfills/require-alias.js'),
      ...polyfills,
    ];
  },
};

module.exports = withDatadogMetroConfig({ ...config, useDebugId: false });
