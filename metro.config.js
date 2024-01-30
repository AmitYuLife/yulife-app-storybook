const E2E_EXTENTIONS = process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(",") : [];

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: [...E2E_EXTENTIONS, ...defaultConfig.resolver.sourceExts],
  },
}

module.exports = mergeConfig(defaultConfig, config);
