const E2E_EXTENTIONS = process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(",") : [];

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: [...E2E_EXTENTIONS, ...defaultConfig.resolver.sourceExts],
    assetExts: [...defaultConfig.resolver.assetExts, "lottie"],
    requireCycleIgnorePatterns: [
      /.*/
    ]
  },
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
}

module.exports = mergeConfig(defaultConfig, config);
