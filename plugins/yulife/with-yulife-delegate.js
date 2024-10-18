const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

const ADDITIONAL_HEADER_IMPORTS = `#import <UserNotifications/UNUserNotificationCenter.h>
#import <HealthKit/HealthKit.h>`;

module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const headerDelegate = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.h");
      const mainDelegate = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.mm");
      let headerContents = fs.readFileSync(headerDelegate, "utf-8");
      let mainContents = fs.readFileSync(mainDelegate, "utf-8");

      // We don't use Expo's metro entry point
      mainContents = mainContents.replace(".expo/.virtual-metro-entry", "index");
      const splitMainContents = mainContents.split(`\n`);
      splitMainContents.splice(
        1,
        0,
        `#import <UserNotifications/UserNotifications.h>
#import <RCTAppSetupUtils.h>
#import "RNCConfig.h"
        `
      );

      const splitContents = headerContents.split(`\n`);
      splitContents.splice(2, 0, ADDITIONAL_HEADER_IMPORTS);

      const newContents = splitContents.join("\n");

      fs.writeFileSync(headerDelegate, newContents);
      fs.writeFileSync(mainDelegate, splitMainContents.join("\n"));

      return config;
    },
  ]);
};
