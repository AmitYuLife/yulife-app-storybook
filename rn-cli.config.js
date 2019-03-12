const blacklist = require("metro-config/src/defaults/blacklist");

const E2E_EXTENTIONS = process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(",") : [];

module.exports = {
    resolver: {
        blacklistRE: blacklist([/coverage\/.*/]),
        sourceExts: [
            ...E2E_EXTENTIONS,
            ...["ts", "tsx", "js", "jsx"],
        ],
    },
    transformer: {
        babelTransformerPath: require.resolve("react-native-typescript-transformer"),
    },
};
