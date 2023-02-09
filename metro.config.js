/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const blacklist = require("metro-config/src/defaults/exclusionList");

const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;


const E2E_EXTENTIONS = process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(",") : [];



module.exports = {
  resolver: {
    blacklistRE: blacklist([/coverage\/.*/]),
    sourceExts: [...E2E_EXTENTIONS, ...defaultSourceExts],
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
