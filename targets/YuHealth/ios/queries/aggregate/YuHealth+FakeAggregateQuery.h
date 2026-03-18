#ifndef YuHealth_FakeAggregateQuery_h
#define YuHealth_FakeAggregateQuery_h

#import "YuHealth.h"

@interface YuHealth (Fake_Aggregate_Query)
- (void) fakeAggregateQuery:(NSDictionary *)options startTime:(NSDate *)startTime endTime:(NSDate *)endTime resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject;
@end

#endif
