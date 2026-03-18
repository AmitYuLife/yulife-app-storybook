#import <React/RCTEventEmitter.h>
#import "YuHealth+Pedometer.h"
#import "YuHealth+Utils.h"
#import "YuHealth+AggregateQuery.h"

@implementation YuHealth (Pedometer)

- (void)queryPedometerFromDate:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    
#if TARGET_IPHONE_SIMULATOR
    [self queryPedometerFakeData:options resolver:resolve rejector:reject];
#else
    [self queryPedometerFromDateDevice:options resolver:resolve rejector:reject];
#endif
    
}

- (void)startPedometer:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
#if TARGET_IPHONE_SIMULATOR
    [self startPedometerSimulator:options];
#else
    [self startPedometerDevice:options];
#endif
}

- (void) stopPedometer
{
#if TARGET_IPHONE_SIMULATOR
    NSLog(@"YuHealthPedometer - Running on simulator, no need to stop updates");
#else
    [self.pedometer stopPedometerUpdates];
#endif
}

- (void)startPedometerSimulator:(NSDictionary *)options {
    NSLog(@"YuHealthPedometer - Running on simulator, generating simulated results");

    [self queryPedometerFakeData:options resolver:^(NSDictionary *response) {
        NSDictionary *result = response[@"result"];
        NSDictionary *pedometerUpdate = @{
            @"steps": result[@"value"],
            @"startTime": options[@"startTime"],
            @"endTime": options[@"endTime"]
        };
        [self sendEventWithName:@"YU_PEDOMETER_UPDATE" body:@{@"result": pedometerUpdate}];
    } rejector:^(NSString *code, NSString *message, NSError *error) {
        NSLog(@"Error querying fake pedometer data: %@", message);
    }];
}

- (void)startPedometerDevice:(NSDictionary *)options {
    NSString *startTimeString = options[@"startTime"];
    NSLog(@"YuHealthPedometer - Start Pedometer Updates From Date Function - Start Time: %@", startTimeString);
    
    [self.pedometer queryPedometerDataFromDate:[self getDateFromString:startTimeString]
                                        toDate:[NSDate date]
                                   withHandler:^(CMPedometerData *pedometerData, NSError *error) {
        if (!error) {
            [self sendEventWithName:@"YU_PEDOMETER_UPDATE" body:[self devicePedometerEvent:pedometerData]];
        } else {
            NSLog(@"There was a failure");
        }
    }];
    
    [self.pedometer startPedometerUpdatesFromDate:[self getDateFromString:startTimeString]
                                      withHandler:^(CMPedometerData *pedometerData, NSError *error) {
        if (!error) {
            [self sendEventWithName:@"YU_PEDOMETER_UPDATE" body:[self devicePedometerEvent:pedometerData]];
        } else {
            NSLog(@"There was a failure");
        }
    }];
}

- (void)queryPedometerFromDateDevice:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject  {
    
    NSLog(@"Running on device");
    
    NSString *startTime = options[@"startTime"];
    NSString *endTime = options[@"endTime"];
    
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self.pedometer queryPedometerDataFromDate:[self getDateFromString:startTime]
                                            toDate:[self getDateFromString:endTime]
                                       withHandler:^(CMPedometerData *pedometerData, NSError *error) {
            if (!error) {
                resolve([self devicePedometerData:pedometerData]);
            } else {
                reject(@"YuHealth", @"There was a failure", error);
            }
        }];
    });
}

- (NSDictionary *) devicePedometerData:(CMPedometerData *)data
{
    NSDictionary *elem = @{
        @"startTime": [self getISO8601FromDate:data.startDate],
        @"endTime": [self getISO8601FromDate:data.endDate],
        @"value": data.numberOfSteps?:[NSNull null],
    };
        
    return @{@"result": elem};
}

- (NSDictionary *) devicePedometerEvent:(CMPedometerData *)data
{
    NSDictionary *elem = @{
        @"startTime": [self getISO8601FromDate:data.startDate],
        @"endTime": [self getISO8601FromDate:data.endDate],
        @"steps": data.numberOfSteps?:[NSNull null],
    };
        
    return @{@"result": elem};
}

- (void)queryPedometerFakeData:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    NSLog(@"Running in Simulator");

    NSDictionary *queryOptions = @{
        @"dataType": @"STEP_COUNT",
        @"startTime": options[@"startTime"],
        @"endTime": options[@"endTime"]
    };

    [self aggregateQuery:queryOptions resolver:^(id response) {
        // Resolve with Apple Health steps if it exists
        NSArray<NSDictionary*> *result = response[@"result"];
        if ([result count] > 0) {
            id firstElement = result[0];
            resolve(@{@"result": firstElement});
        } else {
            NSDictionary *elem = @{
                @"startTime": options[@"startTime"],
                @"endTime": options[@"endTime"],
                @"value": @0,
            };
            
            resolve(@{@"result": elem});
        }
    } rejector:reject];
}

@end
