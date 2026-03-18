
#ifndef YuHealth_Pedometer_h
#define YuHealth_Pedometer_h

#import "YuHealth.h"

@interface YuHealth (Pedometer)
- (void) queryPedometerFromDate:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject;
- (void) startPedometer:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject;
- (void) stopPedometer;
@end

#endif
