#import <React/RCTEventEmitter.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <ReactCommon/RCTTurboModule.h>
#import <React/RCTUtils.h>
#import <RNYuHealthSpec/RNYuHealthSpec.h>
#endif

#import "YuHealth.h"
#import "YuHealth+Utils.h"
#import "queries/sample/YuHealth+SampleQuery.h"
#import "queries/aggregate/YuHealth+AggregateQuery.h"
#import "queries/activity/YuHealth+ActivityQuery.h"
#import "YuHealth+Pedometer.h"
#import "YuHealth+Permissions.h"


NSArray *healthKitCapabilities = @[
    @"STEP_COUNT",
    @"MINDFUL_MINUTES", 
    @"WORKOUT_MINUTES",
    @"CYCLING_DISTANCE",
    @"HEART_RATE",
    @"ACTIVITIES",
    @"CALORIES",
    @"WHEELCHAIR_PUSHES"
];

@implementation YuHealth {
    int listenerCount;
}

RCT_EXPORT_MODULE(YuHealth)

#pragma mark - Module Setup

+ (BOOL)requiresMainQueueSetup {
    return NO;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        if ([HKHealthStore isHealthDataAvailable]) {
            _healthStore = [[HKHealthStore alloc] init];
        }
        _pedometer = [[CMPedometer alloc] init];
    }
    return self;
}

#pragma mark - RCTEventEmitter

- (NSArray<NSString *> *)supportedEvents {
    return @[@"YU_PEDOMETER_UPDATE", @"YU_LOG_EVENT", @"YU_FOREGROUND_PEDOMETER_UPDATE"];
}

#ifdef RCT_NEW_ARCH_ENABLED
- (void)addListener:(NSString *)eventName {
  [super addListener:eventName];
}

- (void)removeListeners:(double)count {
  [super removeListeners:count];
}
#endif

#pragma mark - Exported Methods

RCT_EXPORT_METHOD(sendEventTest:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self sendEventWithName:@"YU_PEDOMETER_UPDATE" body:@{@"data": @1000}];
        resolve(@(15));
    });
}

RCT_EXPORT_METHOD(setActiveProvider:(NSString*)provider resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        resolve(@{@"HealthKit": [YuHealth healthKitCapabilities]});
    });
}

RCT_EXPORT_METHOD(getCapabilities:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        resolve(@{@"HealthKit": [YuHealth healthKitCapabilities]});
    });
}

RCT_EXPORT_METHOD(getAvailabilityStatus:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        BOOL isAvailable = [HKHealthStore isHealthDataAvailable];
        resolve(@{@"HealthKit": isAvailable ? @"AVAILABLE" : @"NOT_AVAILABLE"});
    });
}

RCT_EXPORT_METHOD(hasPermissions:(NSArray *)capabilities provider:(NSString *)provider resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self hasPermissions: capabilities provider:provider resolver:resolve rejecter:reject];
    });
}

- (void)getActiveProvider:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        resolve(@{@"HealthKit": [YuHealth healthKitCapabilities]});
    });
}

- (void)getPermissionStatusOfCapabilities:(nonnull NSArray *)capabilities resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self getPermissionStatusOfCapabilities:capabilities resolver:resolve rejecter:reject];
    });
}

- (void)stopPedometer:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self stopPedometer];
        resolve(@(YES));
    });
}

- (void)disconnect:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
  resolve(@(NO));
}

RCT_REMAP_METHOD(disconnect,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(NO));
}

RCT_REMAP_METHOD(supportsDisconnect,
                 resolve:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject) {
    resolve(@(NO));
}

- (void)supportsDisconnect:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
  resolve(@(NO));
}

#ifdef RCT_NEW_ARCH_ENABLED

- (void)requestPermissions:(nonnull NSArray *)capabilities provider:(nonnull NSString *)provider resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self requestPermissions:capabilities resolver:resolve rejecter:reject];
    });
}

- (NSArray<NSString *> *)nsArrayFromLazyVector:(facebook::react::LazyVector<NSString *>)lazyVector {
    NSMutableArray<NSString *> *array = [NSMutableArray arrayWithCapacity:lazyVector.size()];
    for (int i = 0; i < lazyVector.size(); i++) {
        [array addObject:lazyVector[i]];
    }
    return array;
}

- (NSDictionary *)getQueryOptionsDict:(JS::NativeYuHealth::INativeQueryOptions)queryOptions {
    NSMutableDictionary *queryOptionsDictionary = [NSMutableDictionary dictionary];

    if (queryOptions.disableUserEntries().has_value()) {
        queryOptionsDictionary[@"disableUserEntries"] = @(queryOptions.disableUserEntries().value());
    }
    if (queryOptions.whitelistApps().has_value()) {
        queryOptionsDictionary[@"whitelistApps"] = [self nsArrayFromLazyVector:queryOptions.whitelistApps().value()];
    }
    if (queryOptions.blacklistApps().has_value()) {
        queryOptionsDictionary[@"blacklistApps"] = [self nsArrayFromLazyVector:queryOptions.blacklistApps().value()];
    }
    if (queryOptions.whitelistActivityTypes().has_value()) {
        queryOptionsDictionary[@"whitelistActivityTypes"] = [self nsArrayFromLazyVector:queryOptions.whitelistActivityTypes().value()];
    }

    return queryOptionsDictionary.count > 0 ? queryOptionsDictionary : nil;
}

- (void)activityQuery:(JS::NativeYuHealth::IActivityQueryNativeParams &)params resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    NSMutableDictionary *options = [@{
        @"startTime": params.startTime(),
        @"endTime": params.endTime(),
    } mutableCopy];
    NSDictionary *queryOptions = [self getQueryOptionsDict:params.queryOptions()];
    if (queryOptions) options[@"queryOptions"] = queryOptions;
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self activityQuery:options resolver:resolve rejector:reject];
    });
}

- (void)aggregateQuery:(JS::NativeYuHealth::IAggregateQueryNativeParams &)params resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    NSMutableDictionary *options = [@{
        @"dataType": params.dataType(),
        @"startTime": params.startTime(),
        @"endTime": params.endTime(),
    } mutableCopy];
    NSDictionary *queryOptions = [self getQueryOptionsDict:params.queryOptions()];
    if (queryOptions) options[@"queryOptions"] = queryOptions;
    if (params.bucketConfig().has_value()) {
        auto bucketConfig = params.bucketConfig().value();
        options[@"bucketConfig"] = @{
            @"value": @(bucketConfig.value()),
            @"unit": bucketConfig.unit(),
        };
    }
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self aggregateQuery:options resolver:resolve rejector:reject];
    });
}

- (void)queryPedometerFromDate:(JS::NativeYuHealth::IQueryPedometerFromDateNativeParams &)params resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    NSMutableDictionary *options = [@{
        @"startTime": params.startTime(),
        @"endTime": params.endTime(),
    } mutableCopy];
    NSDictionary *queryOptions = [self getQueryOptionsDict:params.queryOptions()];
    if (queryOptions) options[@"queryOptions"] = queryOptions;
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self queryPedometerFromDate:options resolver:resolve rejector:reject];
    });
}

- (void)sampleQuery:(JS::NativeYuHealth::ISampleQueryNativeParams &)params resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    NSMutableDictionary *options = [@{
        @"dataType": params.dataType(),
        @"startTime": params.startTime(),
        @"endTime": params.endTime(),
    } mutableCopy];
    NSDictionary *queryOptions = [self getQueryOptionsDict:params.queryOptions()];
    if (queryOptions) options[@"queryOptions"] = queryOptions;
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self sampleQuery:options resolver:resolve rejector:reject];
    });
}

- (void)startPedometer:(JS::NativeYuHealth::IStartPedometerNativeParams &)params resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    NSMutableDictionary *options = [@{
        @"startTime": params.startTime(),
        @"endTime": params.endTime(),
    } mutableCopy];
    NSDictionary *queryOptions = [self getQueryOptionsDict:params.queryOptions()];
    if (queryOptions) options[@"queryOptions"] = queryOptions;
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self startPedometer:options resolver:resolve rejector:reject];
        resolve(@(YES));
    });
}

- (void)startForegroundService:(JS::NativeYuHealth::IForegroundServiceConfig &)serviceConfig resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    resolve(@(YES));
}

- (void)stopForegroundService:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    resolve(@(YES));
}

- (void)isForegroundServiceRunning:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    resolve(@(NO));
}

- (void)getForegroundSteps:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
    resolve(@(0));
}

#endif

RCT_REMAP_METHOD(requestPermissions,
                 capabilities:(NSArray *)capabilities
                 provider:(NSString *)provider
                 resolve:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self requestPermissions:capabilities resolver:resolve rejecter:reject];
    });
}

RCT_REMAP_METHOD(getPermissionStatusOfCapabilities,
                 capabilities:(NSArray *)capabilities
                 resolve:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self getPermissionStatusOfCapabilities:capabilities resolver:resolve rejecter:reject];
    });
}

RCT_REMAP_METHOD(sampleQuery,
                 options:(NSDictionary *)options
                 sampleResolver:(RCTPromiseResolveBlock)resolve
                 sampleRejecter:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self sampleQuery:options resolver:resolve rejector:reject];
    });
}

RCT_REMAP_METHOD(activityQuery,
                 options:(NSDictionary *)options
                 activityResolver:(RCTPromiseResolveBlock)resolve
                 activityRejecter:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self activityQuery:options resolver:resolve rejector:reject];
    });
}

RCT_REMAP_METHOD(aggregateQuery,
                 options:(NSDictionary *)options
                 aggregateResolver:(RCTPromiseResolveBlock)resolve
                 aggregateRejector:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self aggregateQuery:options resolver:resolve rejector:reject];
    });
}

RCT_REMAP_METHOD(startPedometer,
                 options:(NSDictionary *)options
                 pedometerResolver:(RCTPromiseResolveBlock)resolve
                 pedometerRejecter:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self startPedometer:options resolver:resolve rejector:reject];
        resolve(@(YES));
    });
}

RCT_REMAP_METHOD(stopPedometer,
                 stopPedometerResolver:  (RCTPromiseResolveBlock)resolve
                 stopPedometerRejecter:  (RCTPromiseRejectBlock)reject)
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self stopPedometer];
        resolve(@(YES));
    });
}

RCT_REMAP_METHOD(queryPedometerFromDate,
                 options:(NSDictionary *)options
                 queryPedometerFromDateResolver:(RCTPromiseResolveBlock)resolve
                 queryPedometerFromDateRejecter:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self queryPedometerFromDate:options resolver:resolve rejector:reject];
    });
}

RCT_REMAP_METHOD(startForegroundService,
                 notificationConfig:(NSDictionary *)notificationConfig
                 startForegroundServiceResolver:(RCTPromiseResolveBlock)resolve
                 startForegroundServiceRejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(YES));
}

RCT_REMAP_METHOD(stopForegroundService,
                 stopForegroundServiceResolver:(RCTPromiseResolveBlock)resolve
                 stopForegroundServiceRejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(YES));
}

RCT_REMAP_METHOD(isForegroundServiceRunning,
                 isForegroundServiceRunningResolver:(RCTPromiseResolveBlock)resolve
                 isForegroundServiceRunningRejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(NO));
}

RCT_REMAP_METHOD(getForegroundSteps,
                 getForegroundStepsResolver:(RCTPromiseResolveBlock)resolve
                 getForegroundStepsRejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(0));
}

+ (NSArray *)healthKitCapabilities {
    return healthKitCapabilities;
}


#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeYuHealthSpecJSI>(params);
}
#endif

@end
