const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

module.exports = function withIntercomIos(data) {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const mainDelegate = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.mm");
      let mainContents = fs.readFileSync(mainDelegate, "utf-8");

      const splitContents = mainContents.split(`\n`);
      const didFailToRegisterForRemoteNotificationsWithErrorIndex = splitContents.findIndex((line) =>
        line.includes("didRegisterForRemoteNotificationsWithDeviceToken")
      );

      splitContents.splice(
        didFailToRegisterForRemoteNotificationsWithErrorIndex + 2,
        0,
        `  [IntercomModule setDeviceToken:deviceToken];`
      );

      splitContents.splice(
        didFailToRegisterForRemoteNotificationsWithErrorIndex - 1,
        0,
        `//Called when a notification is delivered to a foreground app.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}`
      );

      const newContents = splitContents.join("\n");

      fs.writeFileSync(mainDelegate, newContents);

      return config;
    },
  ]);
};
