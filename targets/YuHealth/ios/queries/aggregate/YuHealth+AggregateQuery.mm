#import "YuHealth+AggregateQuery.h"
#import "YuHealth+Utils.h"
#import "YuHealth+SampleQuery.h"
#import "YuHealth+FakeAggregateQuery.h"

@implementation YuHealth (Aggregate_Query)

- (void)aggregateQuery:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    NSDate *startTime = [self getDateFromString:options[@"startTime"]];
    NSDate *endTime = [self getDateFromString:options[@"endTime"]];
    
    if (!startTime || !endTime) {
        [self rejectWithErrorDomain:@"YuHealth" message:@"Invalid date format" rejector:reject];
        return;
    }
    
    NSString *dataType = options[@"dataType"];
    
    if([dataType isEqualToString:@"MINDFUL_MINUTES"] || [dataType isEqualToString:@"WORKOUT_MINUTES"]) {
        [self fakeAggregateQuery:options startTime:startTime endTime:endTime resolver:resolve rejector:reject];
        return;
    }
    
    [self performAggregateQuery:options startTime:startTime endTime:endTime resolver:resolve rejector:reject];
}

- (void)performAggregateQuery:(NSDictionary *)options startTime:(NSDate *)startTime endTime:(NSDate *)endTime resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    HKSampleType *sampleType = [self sampleTypeForDataType:options[@"dataType"]];
    
    if (![sampleType isKindOfClass:[HKQuantityType class]]) {
        [self rejectWithErrorDomain:@"RNFitKit" message:@"Sample type provided not of correct type" rejector:reject];
        return;
    }
    
    NSPredicate *predicate = [self getQueryPredicate:startTime endTime:endTime options:options useStrictStartDatePredicate: false];
    NSDateComponents *interval = [self intervalFromBucketConfig:options[@"bucketConfig"]];
    NSDate *anchorDate = [self anchorDateFromStartTime:startTime];
    
    HKUnit *unit = [self getUnit:options[@"dataType"]];
    HKStatisticsOptions statisticsOption = [self statisticsOptionForDataType:options[@"dataType"]];
    
    HKStatisticsCollectionQuery *query = [[HKStatisticsCollectionQuery alloc] initWithQuantityType:(HKQuantityType *)sampleType quantitySamplePredicate:predicate options:statisticsOption anchorDate:anchorDate intervalComponents:interval];
    
    query.initialResultsHandler = ^(HKStatisticsCollectionQuery *query, HKStatisticsCollection *results, NSError *error) {
        [self handleQueryResults:results from:startTime to:endTime withError:error unit:unit dataType:options[@"dataType"] resolver:resolve rejector:reject];
    };
    
    [self.healthStore executeQuery:query];
}

- (HKStatisticsOptions)statisticsOptionForDataType:(NSString *)dataType {
    if ([dataType isEqualToString:@"HEART_RATE"]) {
        return HKStatisticsOptionDiscreteAverage;
    } else {
        return HKStatisticsOptionCumulativeSum | HKStatisticsOptionSeparateBySource;
    }
}

- (HKUnit *)getUnit:(NSString*) dataType {
    if([dataType isEqualToString:@"CYCLING_DISTANCE"]){
        return [HKUnit meterUnit];
    }
    
    return [HKUnit countUnit];
}


- (void)rejectWithErrorDomain:(NSString *)domain message:(NSString *)message rejector:(RCTPromiseRejectBlock)reject {
    NSError *error = [NSError errorWithDomain:domain code:-1 userInfo:@{NSLocalizedDescriptionKey: message}];
    reject(domain, message, error);
}

- (HKSampleType *)sampleTypeForDataType:(NSString *)dataType {
    return [YuHealth capabilityObjectType][dataType];
}

- (NSDateComponents *)intervalFromBucketConfig:(NSDictionary *)bucketConfig {
    NSDateComponents *interval = [[NSDateComponents alloc] init];
    NSString *bucketSizeType = [bucketConfig valueForKeyPath:@"unit"];
    NSNumber *bucketValue = [bucketConfig valueForKeyPath:@"value"];
    
    if ([bucketSizeType isEqualToString:@"DAY"]) {
        interval.day = bucketValue.integerValue;
    } else if ([bucketSizeType isEqualToString:@"MINUTE"]) {
        interval.minute = bucketValue.integerValue;
    } else if ([bucketSizeType isEqualToString:@"HOUR"]) {
        interval.hour = bucketValue.integerValue;
    } else {
        interval.day = 365;
    }
    return interval;
}


- (NSDate *)anchorDateFromStartTime:(NSDate *)startTime {
    NSCalendar *calendar = [NSCalendar currentCalendar];
    unsigned unitFlags = NSCalendarUnitDay | NSCalendarUnitMonth | NSCalendarUnitYear;
    NSDateComponents *anchorComponents = [calendar components:unitFlags fromDate:startTime];
    anchorComponents.hour = 0;
    anchorComponents.minute = 0;
    anchorComponents.second = 0;
    return [calendar dateFromComponents:anchorComponents];
}

- (void)handleQueryResults:(HKStatisticsCollection *)results from:(NSDate *)startTime to:(NSDate *)endTime withError:(NSError *)error unit:(HKUnit *)unit dataType:(NSString *)dataType resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    if (error) {
        reject(@"RNFitKit", error.localizedDescription, error);
        return;
    }
    
    NSMutableArray *data = [NSMutableArray arrayWithCapacity:1];
    [results enumerateStatisticsFromDate:startTime
                                  toDate:endTime
                               withBlock:^(HKStatistics *result, BOOL *stop) {
        if (result.sumQuantity) {
            NSDictionary *elem = @{
                @"value"     : [self extractValue:result dataType:dataType unit:unit],
                @"startTime" : [self getISO8601FromDate:result.startDate],
                @"endTime"   : [self getISO8601FromDate:result.endDate]
            };
            [data addObject:elem];
        }
    }];
    
    resolve(@{@"result": data});
}

- (NSNumber *)extractValue:(HKStatistics *)result dataType:(NSString *)dataType unit:(HKUnit *)unit {
    if ([dataType isEqualToString:@"CYCLING_DISTANCE"]) {
        double value = [result.sumQuantity doubleValueForUnit:[HKUnit meterUnit]];
        return @(value);
    }
    
    if([dataType isEqualToString:@"CALORIES"]){
        double value = [result.sumQuantity doubleValueForUnit:[HKUnit largeCalorieUnit]];
        return @(value);
    }
    
    double value = [result.sumQuantity doubleValueForUnit:unit];
    return @(value);
}

@end
