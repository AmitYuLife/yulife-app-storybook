#ifndef YuHealth_AggregateQuery_h
#define YuHealth_AggregateQuery_h

#import "YuHealth.h"

@interface YuHealth (Aggregate_Query)
- (void) aggregateQuery:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject;
@end

#endif
