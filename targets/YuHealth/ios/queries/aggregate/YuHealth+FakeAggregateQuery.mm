#import "YuHealth+AggregateQuery.h"
#import "YuHealth+Utils.h"
#import "YuHealth+SampleQuery.h"

@implementation YuHealth (Fake_Aggregate_Query)

- (void)fakeAggregateQuery:(NSDictionary *)options startTime:(NSDate *)startTime endTime:(NSDate *)endTime resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    [self sampleQuery:options resolver:^(NSDictionary *response) {
        NSArray<NSDictionary*> *activities = response[@"result"];
        [self processFakeAggregate:activities withOptions:options resolver:resolve];
    } rejector:^(NSString *code, NSString *message, NSError *error) {
        reject(code, message, error);
    }];
}

- (void)processFakeAggregate:(NSArray<NSDictionary*> *)results withOptions:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve {
    if ([options objectForKey:@"bucketConfig"]) {
        NSDictionary *bucketConfig = options[@"bucketConfig"];
        NSArray<NSDictionary *> *bucketedResponse = [self bucketAggregateResponse:results bucketConfig:bucketConfig dataType:options[@"dataType"]];
        resolve(@{@"result": bucketedResponse});
    } else {
        double sum = [self sumValues:results];
        NSDictionary *response = @{
            @"startTime": options[@"startTime"],
            @"endTime": options[@"endTime"],
            @"value": @(sum)
        };
        resolve(@{@"result": @[response]});
    }
}

- (double)sumValues:(NSArray<NSDictionary *> *)activities {
    double sum = 0;
    for (NSDictionary *activity in activities) {
        sum += [activity[@"value"] doubleValue];
    }
    return sum;
}


- (NSArray<NSDictionary *> *)bucketAggregateResponse:(NSArray<NSDictionary *> *)activities
                                                 bucketConfig:(NSDictionary *)bucketConfig
                                                    dataType:(NSString *)dataType {
    NSMutableDictionary<NSDate *, NSNumber *> *buckets = [NSMutableDictionary new];
    
    for (NSDictionary *result in activities) {
        NSDate *activityStartTime = [self getDateFromString:result[@"startTime"]];
        NSDate *activityBucketTime = [self bucketTimeForActivityStartTime:activityStartTime withConfig:bucketConfig];
        
        double value = [result[@"value"] doubleValue];

        if (value > 0) {
            double existingValue = [buckets[activityBucketTime] doubleValue];
            buckets[activityBucketTime] = @(value + existingValue);
        }
    }

    NSMutableArray<NSDictionary *> *result = [NSMutableArray new];
    [buckets enumerateKeysAndObjectsUsingBlock:^(NSDate *startTime, NSNumber *value, BOOL *stop) {
        NSDate *endTime = [self endTimeForStartTime:startTime withConfig:bucketConfig];
        
        [result addObject:@{
            @"startTime":[self getISO8601FromDate:startTime],
            @"endTime":[self getISO8601FromDate:endTime],
            @"value": value,
            
        }];
    }];

    return result;
}



- (NSDate *)bucketTimeForActivityStartTime:(NSDate *)startTime withConfig:(NSDictionary *)bucketConfig {
    NSCalendar *calendar = [NSCalendar currentCalendar];
    NSString *bucketUnit = bucketConfig[@"unit"];
    NSInteger bucketValue = [bucketConfig[@"value"] integerValue];
    
    NSDateComponents *components = [calendar componentsInTimeZone:[NSTimeZone systemTimeZone] fromDate:startTime];
    [self resetComponents:&components forUnit:bucketUnit withBucketValue:bucketValue];
    
    return [calendar dateFromComponents:components];
}

- (void)resetComponents:(NSDateComponents **)components forUnit:(NSString *)unit withBucketValue:(NSInteger)value {
    if ([unit isEqualToString:@"MINUTE"]) {
        (*components).second = 0;
        NSInteger minutesPast = (*components).minute % value;
        (*components).minute -= minutesPast;
    } else if ([unit isEqualToString:@"HOUR"]) {
        (*components).minute = 0;
        (*components).second = 0;
        NSInteger hoursPast = (*components).hour % value;
        (*components).hour -= hoursPast;
    } else if ([unit isEqualToString:@"DAY"]) {
        (*components).hour = 0;
        (*components).minute = 0;
        (*components).second = 0;
        NSInteger daysPast = (*components).day % value;
        (*components).day -= daysPast;
    }
}


- (NSDate *)endTimeForStartTime:(NSDate *)startTime withConfig:(NSDictionary *)bucketConfig {
    NSCalendar *calendar = [NSCalendar currentCalendar];
    NSDate *endTime;
    NSString *bucketUnit = bucketConfig[@"unit"];
    NSInteger bucketValue = [[bucketConfig valueForKeyPath:@"value"] intValue];

    if ([bucketUnit isEqualToString:@"MINUTE"]) {
        endTime = [calendar dateByAddingUnit:NSCalendarUnitMinute value:bucketValue toDate:startTime options:0];
    } else if ([bucketUnit isEqualToString:@"HOUR"]) {
        endTime = [calendar dateByAddingUnit:NSCalendarUnitHour value:bucketValue toDate:startTime options:0];
    } else if ([bucketUnit isEqualToString:@"DAY"]) {
        endTime = [calendar dateByAddingUnit:NSCalendarUnitDay value:bucketValue toDate:startTime options:0];
    }
    
    return endTime;
}

@end
