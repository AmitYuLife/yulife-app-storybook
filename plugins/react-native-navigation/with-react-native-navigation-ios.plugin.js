const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

module.exports = function withReactNativeNavigationIosPlugin(data) {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const podFilePath = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.mm");
      const contents = fs.readFileSync(podFilePath, "utf-8");

      const splitContents = contents.split(`\n`);
      const implementationIndex = splitContents.findIndex((line) => line.includes("@implementation AppDelegate"));
      splitContents.splice(implementationIndex - 1, 0, `#import <ReactNativeNavigation/ReactNativeNavigation.h>`);

      const didFinishLaunchingIndex = splitContents.findIndex((line) =>
        line.includes("(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions")
      );

      splitContents.splice(
        didFinishLaunchingIndex + 2,
        0,
        "  [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];"
      );

      const getBundleUrlIndex = splitContents.findIndex((line) => line.includes("(NSURL *)sourceURLForBridge"));

      splitContents.splice(
        getBundleUrlIndex - 1,
        0,
        `- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge {
  return [ReactNativeNavigation extraModulesForBridge:bridge];
}`
      );

      const newContents = splitContents.join("\n");

      fs.writeFileSync(podFilePath, newContents);

      return config;
    },
  ]);
};
