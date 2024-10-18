const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

const BUGSNAG_SETUP = `
NSString *appVersion = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
NSString *appBundleVersion = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"];
NSString *bugsnagApiKey = [RNCConfig envFor:@"BUGSNAG_API_KEY"];
NSString *stage = [ RNCConfig envFor:@"ENV"];
BugsnagConfiguration *config = [BugsnagConfiguration loadConfig];
config.appVersion = appVersion;
config.bundleVersion = appBundleVersion;
config.apiKey = bugsnagApiKey;
config.releaseStage = stage;
config.redactedKeys = [NSSet setWithArray:@[@"password", @"email"]];

[Bugsnag startWithConfiguration:config];
`;

module.exports = function withYuWatch(data) {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const mainDelegate = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.mm");
      let mainContents = fs.readFileSync(mainDelegate, "utf-8");
      const splitContents = mainContents.split(`\n`);

      const userNotificationCenterIndex = splitContents.findIndex((line) =>
        line.includes("[super application:application didFinishLaunchingWithOptions:launchOptions];")
      );

      splitContents.splice(userNotificationCenterIndex - 1, 0, BUGSNAG_SETUP);
      splitContents.splice(1, 0, `#import <Bugsnag/Bugsnag.h>`);

      const newContents = splitContents.join("\n");
      fs.writeFileSync(mainDelegate, newContents);

      return config;
    },
  ]);
};
