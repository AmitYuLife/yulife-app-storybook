const withYulifeColorsPlugin = require("./with-yulife-colors.plugin");
const withYulifeDelegate = require("./with-yulife-delegate");
const withYulifeFirebaseMessagingPlugin = require("./with-yulife-firebase-messaging.plugin");
const withYulifeAndroidManifestPlugin = require("./with-yulife-android-manifest.plugin");
const withYulifePodsPlugin = require("./with-yulife-pods.plugin");
const withYulifeSplashScreenPlugin = require("./with-yulife-splash-screen.plugin");
const withYulifeStringsPlugin = require("./with-yulife-strings.plugin");
const withYulifeSupportPlugin = require("./with-yulife-support.plugin");
const withYulifeBugsnagFix = require("./with-yulife-bugsnag-fix.plugin");
const { withPlugins } = require("@expo/config-plugins");

module.exports = (app) => {
  return withPlugins(app, [
    withYulifeDelegate,
    withYulifePodsPlugin,
    withYulifeColorsPlugin,
    withYulifeSupportPlugin,
    withYulifeStringsPlugin,
    withYulifeAndroidManifestPlugin,
    withYulifeSplashScreenPlugin,
    withYulifeFirebaseMessagingPlugin,
    withYulifeBugsnagFix,
  ]);
};
