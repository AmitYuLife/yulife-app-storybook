
#ifndef YuHealth_Permissions_h
#define YuHealth_Permissions_h

#import "YuHealth.h"

@interface YuHealth (Permissions)
- (void) getPermissionStatusOfCapabilities:(NSArray *)capabilities resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject;
- (void) requestPermissions:(NSArray *)capabilities resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject;
- (void) hasPermissions:(NSArray *)capabilities provider:(NSString *)provider resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject;
@end

#endif
