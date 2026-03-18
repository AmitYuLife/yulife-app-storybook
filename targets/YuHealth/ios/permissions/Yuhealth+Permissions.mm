#import "YuHealth+Permissions.h"
#import "YuHealth+Utils.h"
#import "YuHealth+AggregateQuery.h"
#import "YuHealth+SampleQuery.h"
#import "YuHealth+ActivityQuery.h"

@implementation YuHealth (Permissions)

typedef NS_ENUM(NSInteger, PermissionStatus) {
    StatusGranted,
    StatusNotDetermined,
    StatusNotAsked
};

NSTimeInterval oneDayTimeInterval = -86400; // This is equivalent to -24 hours in seconds

- (NSDictionary *) permissionStatusToString {
    return @{
        @(StatusGranted): @"GRANTED",
        @(StatusNotDetermined): @"NOT_DETERMINED",
        @(StatusNotAsked): @"NOT_ASKED"
    };
}


- (void)hasPermissions:(NSArray *)capabilities provider:(NSString *)provider resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject {
    NSMutableDictionary *permissionsResults = [[NSMutableDictionary alloc] init];

    for (NSString *capability in capabilities) {
        [permissionsResults setObject:[self permissionStatusToString][@(StatusNotDetermined)] forKey:capability];
    }
    
    dispatch_group_t group = dispatch_group_create();
    
    for (NSString *capability in capabilities) {
        dispatch_group_enter(group);
        
        void (^handleResult)(NSDictionary *) = ^(NSDictionary *response) {
            NSArray<NSDictionary*> *result = response[@"result"];
            NSString *status = [self getQuerySuccessPermissionStatus:result];
            [permissionsResults setObject:status forKey:capability];
            
            dispatch_group_leave(group);
        };
        
        void (^handleError)(NSString *code, NSString *message, NSError *error) = ^(NSString *code, NSString *message, NSError *error) {
            NSString *status = [self getErrorPermissionStatus: error];
            [permissionsResults setObject:status forKey:capability];
            
            dispatch_group_leave(group);
        };
        
        [self checkPermission:capability resolver:handleResult rejector:handleError];
    }
    
    dispatch_group_notify(group, dispatch_get_main_queue(), ^{
        resolve(permissionsResults);
    });
}

- (void)getPermissionStatusOfCapabilities:(NSArray *)capabilities resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject {
    NSMutableArray *providerPermissions = [NSMutableArray arrayWithCapacity:1];
    NSString *startTime = [self getISO8601FromDate:[NSDate dateWithTimeIntervalSinceNow:-86400]]; // 24 hours ago
    NSString *endTime = [self getISO8601FromDate:[NSDate date]]; // current time
    
    dispatch_group_t group = dispatch_group_create();
    
    for (NSString *capability in capabilities) {
        
        HKSampleType *sampleType = [YuHealth capabilityObjectType][capability];
        
        void (^handleResult)(NSDictionary *) = ^(NSDictionary *response) {
            NSArray<NSDictionary*> *result = response[@"result"];
            
            NSString *status = [self getQuerySuccessPermissionStatus:result];
            
            NSDictionary *elem = @{
                @"identifier" : sampleType.identifier,
                @"capability": capability,
                @"status": status
            };
            
            [providerPermissions addObject:elem];
            dispatch_group_leave(group);
        };
        
        void (^handleError)(NSString *code, NSString *message, NSError *error) = ^(NSString *code, NSString *message, NSError *error) {
            NSString *status = [self getErrorPermissionStatus: error];
            
            NSDictionary *elem = @{
                @"identifier" : sampleType.identifier,
                @"capability": capability,
                @"status": status
            };
            
            [providerPermissions addObject:elem];
            dispatch_group_leave(group);
        };
        
        dispatch_group_enter(group);
        
        [self checkPermission:capability resolver:handleResult rejector:handleError];
    }
    
    dispatch_group_notify(group, dispatch_get_main_queue(), ^{
        NSDictionary *response = @{
            @"providerPermissions": providerPermissions
        };
        
        resolve(response);
    });
}

- (void)requestPermissions:(NSArray *)capabilities resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject {
    NSSet *readPermissions = [self getPermissionsFromArray:capabilities];
    if (![readPermissions count]) {
        NSError *error = [NSError errorWithDomain:@"YuHealth" code:-1 userInfo:@{NSLocalizedDescriptionKey: @"No permission found for this capability"}];
        reject(@"YuHealth", @"No permission found for this capability", error);
        return;
    }
    
    [self.healthStore requestAuthorizationToShareTypes:nil readTypes:readPermissions completion:^(BOOL success, NSError * _Nullable error) {
        if (!success) {
            reject(@"YuHealth", @"Authorization request failed", error);
        } else {
            resolve(@(YES));
        }
    }];
}

- (NSSet *)getPermissionsFromArray:(NSArray *)options {
    NSDictionary *permissionsDict = [YuHealth capabilityObjectType];
    NSMutableSet *permissionsSet = [NSMutableSet setWithCapacity:[options count]];
    
    for (NSString *optionKey in options) {
        HKObjectType *permission = permissionsDict[optionKey];
        if (permission) {
            [permissionsSet addObject:permission];
        }
    }
    return permissionsSet;
}

-(void) checkPermission:(NSString *)capability resolver:(RCTPromiseResolveBlock)resolve rejector:(RCTPromiseRejectBlock)reject {
    NSString *startTime = [self getISO8601FromDate:[NSDate dateWithTimeIntervalSinceNow:oneDayTimeInterval]];
    NSString *endTime = [self getISO8601FromDate:[NSDate date]]; // current time
    
    if ([capability isEqualToString:@"ACTIVITIES"]){
        NSDictionary *options = @{
            @"startTime": startTime,
            @"endTime": endTime
        };
        
        [self activityQuery: options resolver:resolve rejector:reject];
    } else {
        NSDictionary *options = @{
            @"dataType": capability,
            @"startTime": startTime,
            @"endTime": endTime
        };
        
        [self aggregateQuery:options resolver:resolve rejector:reject];
    }
}

- (NSString *) getQuerySuccessPermissionStatus:(NSArray<NSDictionary*> *)result {
    return (result.count) > 0 ? [self permissionStatusToString][@(StatusGranted)] : [self permissionStatusToString][@(StatusNotDetermined)];
}

- (NSString *) getErrorPermissionStatus:(NSError *)error {
    return [[error localizedDescription] isEqual:@"Authorization not determined"] ? [self permissionStatusToString][@(StatusNotAsked)] : [self permissionStatusToString][@(StatusNotDetermined)];
}

@end
