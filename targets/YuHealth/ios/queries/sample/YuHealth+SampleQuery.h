#ifndef YuHealth_SampleQuery_h
#define YuHealth_SampleQuery_h

#import "YuHealth.h"

@interface YuHealth (Sample_Query)
- (void) sampleQuery:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject;
@end

#endif
