const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

module.exports = function withYuWatch(data) {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const podFilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");
      let contents = fs.readFileSync(podFilePath, "utf-8");

      const splitContents = contents.split(`\n`);
      const insertIndex = splitContents.findIndex((line) => line.includes("react_native_post_install"));

      const postInstallEnd = splitContents.slice(insertIndex).findIndex((line) => line.includes(")"));

      console.log({ postInstallEnd });
      splitContents.splice(insertIndex + postInstallEnd + 1, 0, `    flipper_post_install(installer)`);

      const newContents = splitContents.join("\n");
      fs.writeFileSync(podFilePath, newContents);

      const mainDelegate = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.mm");
      let mainContents = fs.readFileSync(mainDelegate, "utf-8");
      const splitDelegate = mainContents.split(`\n`);
      const didFinishLaunchingWithOptionsIndex = splitDelegate.findIndex((line) =>
        line.includes(`application didFinishLaunchingWithOptions`)
      );

      splitDelegate.splice(didFinishLaunchingWithOptionsIndex + 2, 0, `  [self initializeFlipper:application];`);

      const sourceUrlForBridgeLineIndex = splitDelegate.findIndex((line) =>
        line.includes(`sourceURLForBridge:(RCTBridge *)bridge`)
      );

      splitDelegate.splice(
        sourceUrlForBridgeLineIndex - 1,
        0,
        `- (void) initializeFlipper:(UIApplication *)application {
  #if DEBUG
  #ifdef FB_SONARKIT_ENABLED
    FlipperClient *client = [FlipperClient sharedClient];
    SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
    [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application withDescriptorMapper: layoutDescriptorMapper]];
    [client addPlugin: [[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
    [client addPlugin: [FlipperKitReactPlugin new]];
    [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
    [client start];
  #endif
  #endif
}
`
      );

      const implementationIndex = splitDelegate.findIndex((line) => line.includes(`@implementation AppDelegate`));
      splitDelegate.splice(
        implementationIndex - 1,
        0,
        `
#if DEBUG
#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitLayoutPlugin/SKDescriptorMapper.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#endif
#endif
        `
      );

      const newDelegate = splitDelegate.join("\n");

      fs.writeFileSync(mainDelegate, newDelegate);

      return config;
    },
  ]);
};
