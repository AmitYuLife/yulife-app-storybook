const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

module.exports = function withLeanplumIosPlugin(data) {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const mainDelegate = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.mm");
      let mainContents = fs.readFileSync(mainDelegate, "utf-8");

      const splitContents = mainContents.split(`\n`);

      splitContents.splice(
        splitContents.length - 2,
        0,
        `// IOS 10+ Required for localNotification event
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void (^)(void))completionHandler
{
  completionHandler();
}`
      );

      const didFailToRegisterForRemoteNotificationsWithErrorIndex = splitContents.findIndex((line) =>
        line.includes("didFailToRegisterForRemoteNotificationsWithError")
      );
      splitContents.splice(
        didFailToRegisterForRemoteNotificationsWithErrorIndex + 2,
        1,
        `  [Leanplum didFailToRegisterForRemoteNotificationsWithError:error];`
      );

      const didReceiveRemoteNotificationIndex = splitContents.findIndex((line) =>
        line.includes(`application didReceiveRemoteNotification`)
      );
      splitContents.splice(
        didReceiveRemoteNotificationIndex + 2,
        1,
        `  completionHandler(UIBackgroundFetchResultNoData);`
      );

      splitContents.splice(1, 0, `#import <Leanplum/Leanplum.h>`);
      const newContents = splitContents.join("\n");

      fs.writeFileSync(mainDelegate, newContents);

      return config;
    },
  ]);
};
