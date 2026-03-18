#ifndef YuHealth_ActivityQuery_h
#define YuHealth_ActivityQuery_h

#import "YuHealth.h"

@interface YuHealth (Activity_Query)
- (void) activityQuery:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject;
@end

#endif
