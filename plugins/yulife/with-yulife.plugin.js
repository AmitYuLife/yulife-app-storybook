const withYulifeColorsPlugin = require("./with-yulife-colors.plugin");
const withYulifeDelegate = require("./with-yulife-delegate");
const withYulifeFirebaseMessagingPlugin = require("./with-yulife-firebase-messaging.plugin");
const withYulifeMetadataPlugin = require("./with-yulife-metadata.plugin");
const withYulifePodsPlugin = require("./with-yulife-pods.plugin");
const withYulifeSplashScreenPlugin = require("./with-yulife-splash-screen.plugin");
const withYulifeStringsPlugin = require("./with-yulife-strings.plugin");
const withYulifeSupportPlugin = require("./with-yulife-support.plugin");
const { withPlugins } = require("@expo/config-plugins");

module.exports = (app) => {
  return withPlugins(app, [
    withYulifeDelegate,
    withYulifePodsPlugin,
    withYulifeColorsPlugin,
    withYulifeSupportPlugin,
    withYulifeStringsPlugin,
    withYulifeMetadataPlugin,
    withYulifeSplashScreenPlugin,
    withYulifeFirebaseMessagingPlugin,
  ]);
};
