#import "YuHealth+SampleQuery.h"
#import "YuHealth+Utils.h"

@implementation YuHealth (Activity_Query)

- (void)activityQuery:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    NSDate *startTime = [self getDateFromString:options[@"startTime"]];
    NSDate *endTime = [self getDateFromString:options[@"endTime"]];
    
    if (!startTime || !endTime) {
        NSError *error = [NSError errorWithDomain:@"YuHealth" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"Invalid date format"}];
        reject(@"YuHealth", @"Invalid date format", error);
        return;
    }
    
    HKSampleType *sampleType = [HKWorkoutType workoutType];

    NSCompoundPredicate *predicate = [self getQueryPredicate:startTime endTime:endTime options:options useStrictStartDatePredicate: true];
    
    HKSampleQuery *query = [[HKSampleQuery alloc]
                            initWithSampleType:sampleType
                            predicate:predicate
                            limit:HKObjectQueryNoLimit
                            sortDescriptors:nil
                            resultsHandler:^(HKSampleQuery * _Nonnull query,
                                             NSArray<HKSample *> * _Nullable results,
                                             NSError * _Nullable error)
                            {
    
        if (error) {
            reject(@"YuHealth", @"Error fetching activities", error);
            return;
        }

        NSMutableArray *mappedResults = [NSMutableArray arrayWithCapacity:[results count]];
        for (HKWorkout *sample in results) {
            NSDictionary *sampleDict = [self extractDataFromActivitySample:sample];
            [mappedResults addObject:sampleDict];
        }
        
        resolve(@{
            @"result": mappedResults
        });
    }];

    [self.healthStore executeQuery:query];
}


- (NSDictionary *)extractDataFromActivitySample:(HKWorkout *)sample {
    NSMutableDictionary *sampleDict = [NSMutableDictionary dictionary];
    NSDictionary *workoutNames = [self workoutNames];
    
    NSString *workoutName = [workoutNames objectForKey:@(sample.workoutActivityType)];
    if (workoutName == nil) {
        workoutName = [workoutNames objectForKey:@"Other"];
    }
    
    [sampleDict setValue:sample.startDate ? [self getISO8601FromDate:sample.startDate] : [NSNull null] forKey:@"startTime"];
    [sampleDict setValue:sample.endDate ? [self getISO8601FromDate:sample.endDate] : [NSNull null] forKey:@"endTime"];
    [sampleDict setValue:@([sample.metadata[@"HKWasUserEntered"] isEqualToNumber:@1]) forKey:@"isUserEntered"];
    [sampleDict setValue:workoutName forKey:@"activity"];
    
    if (sample.sourceRevision.source.bundleIdentifier) {
        [sampleDict setValue:sample.sourceRevision.source.bundleIdentifier ?: [NSNull null] forKey:@"bundleIdentifier"];
    }
    
    HKQuantity *calories = sample.totalEnergyBurned;
    if (calories) {
        double caloriesValue = [calories doubleValueForUnit:[HKUnit kilocalorieUnit]];
        [sampleDict setValue:@(caloriesValue) forKey:@"calories"];
    }
    
    HKQuantity *distance = sample.totalDistance;
    if (distance) {
        double distanceValue = [distance doubleValueForUnit:[HKUnit meterUnit]];
        [sampleDict setValue:@(distanceValue) forKey:@"distance"];
    }
    
    
    return sampleDict;
}

@end
