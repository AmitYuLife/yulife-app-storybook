const blacklist = require("metro-config/src/defaults/blacklist");

module.exports = {
    resolver: {
        blacklistRE: blacklist([/coverage\/.*/]),
        sourceExts: ["ts", "tsx", "js", "jsx"]
    },
    transformer: {
        babelTransformerPath: require.resolve("react-native-typescript-transformer")
    }
};
