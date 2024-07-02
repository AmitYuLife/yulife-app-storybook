#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTLinkingManager.h>
#import <RCTAppSetupUtils.h>
#import <UserNotifications/UserNotifications.h>

#import <ReactNativeNavigation/ReactNativeNavigation.h>
#import <IntercomModule.h>
#import <Bugsnag/Bugsnag.h>
#import "RNCConfig.h"
#import <Leanplum.h>

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



@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSString *intercomApiKey = [RNCConfig envFor:@"INTERCOM_API_KEY_IOS"];
  NSString *intercomAppId = [RNCConfig envFor:@"INTERCOM_APP_ID"];
  [IntercomModule initialize:intercomApiKey withAppId:intercomAppId];

  [self initializeFlipper:application];
  [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];


  // Bugsnag
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

  return YES;
}

- (void) initializeFlipper:(UIApplication *)application {
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


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge {
  return [ReactNativeNavigation extraModulesForBridge:bridge];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

// Linking API
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  return [super application:application openURL:url options:options] || [RCTLinkingManager application:application openURL:url options:options];
}

// Universal Links
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
  BOOL result = [RCTLinkingManager application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
  return [super application:application continueUserActivity:userActivity restorationHandler:restorationHandler] || result;
}

-(void)applicationShouldRequestHealthAuthorization:(UIApplication *)application {
    HKHealthStore *healthStore = [[HKHealthStore alloc] init];
    [healthStore handleAuthorizationForExtensionWithCompletion:^(BOOL success, NSError * _Nullable error) {
        if (success) {
            NSLog(@"phone received health kit request");
        }
    }];
}

//Called when a notification is delivered to a foreground app.
-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
}


// Explicitly define remote notification delegates to ensure compatibility with some third-party libraries
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [IntercomModule setDeviceToken:deviceToken];
  return [super application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

// Required for the notification event. You must call the completion handler after handling the remote notification.
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
//    [Leanplum didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
    completionHandler(UIBackgroundFetchResultNoData);
}

// Required for the registrationError event.
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  [Leanplum didFailToRegisterForRemoteNotificationsWithError:error];
}

// IOS 10+ Required for localNotification event
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void (^)(void))completionHandler
{
  completionHandler();
}
@end

