#import "YuHealth+SampleQuery.h"
#import "YuHealth+Utils.h"
#import "YuHealth+ActivityQuery.h"

@implementation YuHealth (Sample_Query)

- (void)sampleQuery:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    NSString *dataType = options[@"dataType"];
    NSDate *startTime = [self getDateFromString:options[@"startTime"]];
    NSDate *endTime = [self getDateFromString:options[@"endTime"]];

    if (!startTime || !endTime) {
        NSError *error = [NSError errorWithDomain:@"YuHealth" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"Invalid date format"}];
        reject(@"YuHealth", @"Invalid date format", error);
        return;
    }
    NSDictionary *permissionsDict = [YuHealth capabilityObjectType];
    
    if([dataType isEqualToString:@"WORKOUT_MINUTES"]) {
        [self getWorkoutMinutes:options resolver:resolve rejector:reject];
        return;
    }

    HKSampleType *sampleType = permissionsDict[dataType];

    if (!sampleType) {
        NSError *error = [NSError errorWithDomain:@"YuHealth" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"Unsupported data type"}];
        reject(@"YuHealth", @"Unsupported data type", error);
        return;
    }
    
    NSPredicate *predicate = [self getQueryPredicate:startTime endTime:endTime options:options useStrictStartDatePredicate: true];
    
    id queryOptions = [options objectForKey:@"queryOptions"];
      NSArray *whitelistApps = [queryOptions objectForKey:@"whitelistApps"];
      NSArray *blacklistApps = [queryOptions objectForKey:@"blacklistApps"];
      
    
    HKSampleQuery *query = [[HKSampleQuery alloc] initWithSampleType:sampleType predicate:predicate limit:HKObjectQueryNoLimit sortDescriptors:nil resultsHandler:^(HKSampleQuery * _Nonnull query, NSArray<HKSample *> * _Nullable results, NSError * _Nullable error) {
        if (error) {
            reject(@"YuHealth", @"Error fetching samples", error);
            return;
        }

        NSMutableArray *mappedResults = [NSMutableArray arrayWithCapacity:[results count]];
        for (HKSample *sample in results) {
            NSString *sampleSource = sample.sourceRevision.source.bundleIdentifier;

            BOOL isWhitelisted = (whitelistApps == nil || [whitelistApps containsObject:sampleSource]);
            BOOL isBlacklisted = (blacklistApps != nil && [blacklistApps containsObject:sampleSource]);

            if (isWhitelisted && !isBlacklisted) {
                NSDictionary *sampleDict = [self extractDataFromSample:sample];
                if(sampleDict) {
                    [mappedResults addObject:sampleDict];
                }
            }
        }
        
        resolve(@{
            @"result": mappedResults
        });
    }];

    [self.healthStore executeQuery:query];
}

- (NSDictionary *)extractDataFromSample:(HKSample *)sample {
    NSMutableDictionary *sampleDict = [NSMutableDictionary dictionary];
    
    [sampleDict setValue:sample.startDate ? [self getISO8601FromDate:sample.startDate] : [NSNull null] forKey:@"startTime"];
    [sampleDict setValue:sample.endDate ? [self getISO8601FromDate:sample.endDate] : [NSNull null] forKey:@"endTime"];
    [sampleDict setValue:@([sample.metadata[@"HKWasUserEntered"] isEqualToNumber:@1]) forKey:@"isUserEntered"];
    
    if (sample.sourceRevision.source.bundleIdentifier) {
        [sampleDict setValue:sample.sourceRevision.source.bundleIdentifier ?: [NSNull null] forKey:@"bundleIdentifier"];
    }
    
    [sampleDict setValue:[self extractValueFromSample:sample] forKey:@"value"];
    
    return sampleDict;
}

- (NSNumber*)extractValueFromSample:(HKSample *)sample {
    if ([sample isKindOfClass:[HKQuantitySample class]]) {
        HKQuantitySample *quantitySample = (HKQuantitySample *)sample;
        return [self getQuantityTypeValue:quantitySample];
    } else if ([sample isKindOfClass:[HKCategorySample class]]) {
        HKCategorySample *categorySample = (HKCategorySample *)sample;

        if (categorySample.value == 0) {
            NSTimeInterval timeInterval = [sample.endDate timeIntervalSinceDate:sample.startDate];
            return @(timeInterval);
        }
        
        return @(categorySample.value);
    }

    return 0;
}

- (NSNumber *)getQuantityTypeValue:(HKQuantitySample *)sample {
    if ([sample.quantityType.identifier isEqualToString:HKQuantityTypeIdentifierDistanceSwimming] ||
        [sample.quantityType.identifier isEqualToString:HKQuantityTypeIdentifierDistanceCycling]) {
        return @([sample.quantity doubleValueForUnit:[HKUnit meterUnit]]);
    }

    if ([sample.quantityType.identifier isEqualToString:HKQuantityTypeIdentifierActiveEnergyBurned]) {
        return @([sample.quantity doubleValueForUnit:[HKUnit largeCalorieUnit]]);
    }
    
    return @([sample.quantity doubleValueForUnit:[HKUnit countUnit]]);
}


- (void)getWorkoutMinutes:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    [self activityQuery: options resolver:^(NSDictionary *response) {
        NSArray<NSDictionary *> *activities = response[@"result"];
        NSMutableArray *workoutResponse = [NSMutableArray array];

        for (NSDictionary *activity in activities) {
            NSDate *startDate = [self getDateFromString:activity[@"startTime"]];
            NSDate *endDate = [self getDateFromString:activity[@"endTime"]];
    
            NSTimeInterval value = [endDate timeIntervalSinceDate:startDate];
            
            NSDictionary *activityResponse = @{
                @"startTime": activity[@"startTime"],
                @"endTime": activity[@"endTime"],
                @"value": @(value)
            };
            
            [workoutResponse addObject:activityResponse];
        }
      
        resolve(@{@"result": workoutResponse});
    } rejector:^(NSString *code, NSString *message, NSError *error) {
        reject(code, message, error);
    }];
}

@end
