const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const mainDelegate = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.mm");
      let mainContents = fs.readFileSync(mainDelegate, "utf-8");
      const splitContents = mainContents.split(`\n`);

      const userNotificationCenterIndex = splitContents.findIndex((line) =>
        line.includes("(void)userNotificationCenter:(UNUserNotificationCenter *)")
      );

      splitContents.splice(
        userNotificationCenterIndex - 1,
        0,
        `-(void)applicationShouldRequestHealthAuthorization:(UIApplication *)application {
    HKHealthStore *healthStore = [[HKHealthStore alloc] init];
    [healthStore handleAuthorizationForExtensionWithCompletion:^(BOOL success, NSError * _Nullable error) {
        if (success) {
            NSLog(@"phone received health kit request");
        }
    }];
}`
      );

      const newContents = splitContents.join("\n");
      fs.writeFileSync(mainDelegate, newContents);
      return config;
    },
  ]);
};
