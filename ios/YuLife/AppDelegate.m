/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "ReactNativeConfig.h"
#import "Intercom/intercom.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <ReactNativeNavigation/ReactNativeNavigation.h>

@implementation AppDelegate
  
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
  {
    // Intercom
    NSString *intercomApiKey = [ReactNativeConfig envFor:@"INTERCOM_API_KEY_IOS"];
    NSString *intercomAppId = [ReactNativeConfig envFor:@"INTERCOM_APP_ID"];
    [Intercom setApiKey:intercomApiKey forAppId:intercomAppId];
    
    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
    
    return YES;
  }
  
  // Required for Intercom push notifications
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
  {
    [Intercom setDeviceToken:deviceToken];
  }
  
  @end
