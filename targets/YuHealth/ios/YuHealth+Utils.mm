#import "YuHealth+Utils.h"

@implementation YuHealth (Utils)
- (NSString *)getISO8601FromDate:(NSDate *)date {
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ"];
    [formatter setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
    [formatter setTimeZone:[NSTimeZone timeZoneWithAbbreviation:@"UTC"]];
    
    return [formatter stringFromDate:date];
}

- (NSDate *)getDateFromString:(NSString *)dateString {
    NSArray *dateFormatsToTry = @[@"yyyy-MM-dd'T'HH:mm:ssZ", @"yyyy-MM-dd'T'HH:mm:ss", @"yyyy-MM-dd'T'HH:mm:ssZZ", @"yyyy-MM-dd'T'HH:mm:ssZZZ", @"yyyy-MM-dd'T'HH:mm:ssZZZZ"];
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc]init];
    [dateFormatter setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
    
    for (NSString * format in dateFormatsToTry) {
        [dateFormatter setDateFormat:format];
        NSDate *date = [dateFormatter dateFromString:dateString];
        if (date) {
            return date;
        }
    }
    
    NSDataDetector *detector = [NSDataDetector dataDetectorWithTypes:NSTextCheckingTypeDate error:nil];
    NSTextCheckingResult *result = [detector firstMatchInString:dateString options:0 range:NSMakeRange(0, [dateString length])];
    if ([result resultType] == NSTextCheckingTypeDate) {
        NSDate * date = [result date];
        if (date) {
            return date;
        }
    }
    
    return [NSDate date];
}

- (NSCompoundPredicate *)getQueryPredicate:(NSDate *)startTime endTime:(NSDate *)endTime options:(NSDictionary *)options useStrictStartDatePredicate:(BOOL) useStrictStartDatePredicate {
    NSMutableArray *allPredicatesArray = [NSMutableArray array];

    
    if(useStrictStartDatePredicate) {
        // Entry start date should be between start and end time
        NSPredicate *timePredicate = [HKQuery predicateForSamplesWithStartDate:startTime
                                                                        endDate:endTime
                                                                        options:HKQueryOptionStrictStartDate
        ];
        
        [allPredicatesArray addObject:timePredicate];
    } else {
        // Entry start date or end date must be between start and end time
        NSPredicate *timePredicate = [NSPredicate predicateWithFormat:@"%K >= %@ AND %K <= %@",
                                      HKPredicateKeyPathEndDate, startTime,
                                      HKPredicateKeyPathStartDate, endTime];
        
        [allPredicatesArray addObject:timePredicate];
    }
    
    // Additional predicate for disabling user entries
    id queryOptions = [options objectForKey:@"queryOptions"];
    if ([[queryOptions objectForKey:@"disableUserEntries"] isEqual:@(YES)]) {
        NSPredicate *userEntryPredicate = [NSPredicate predicateWithFormat:@"metadata.%K != YES", HKMetadataKeyWasUserEntered];
        [allPredicatesArray addObject:userEntryPredicate];
    }
    
    
    NSArray *whitelistActivityTypes = [queryOptions objectForKey:@"whitelistActivityTypes"];
    NSPredicate *workoutPredicate = nil;

    if ([whitelistActivityTypes isKindOfClass:[NSArray class]] && whitelistActivityTypes.count > 0) {
        NSDictionary *reverseDict = [self reverseWorkoutNames];
        NSMutableArray *workoutTypes = [NSMutableArray array];
        for (NSString *activityType in whitelistActivityTypes) {
            NSNumber *workoutType = reverseDict[activityType];
            if (workoutType) {
                [workoutTypes addObject:workoutType];
            }
        }
        
        if (workoutTypes.count > 0) {
            workoutPredicate = [HKQuery predicateForWorkoutsWithWorkoutActivityType:(HKWorkoutActivityType)[workoutTypes.firstObject intValue]];
            if (workoutTypes.count > 1) {
                NSMutableArray *predicates = [NSMutableArray array];
                for (NSNumber *workoutType in workoutTypes) {
                    NSPredicate *individualPredicate = [HKQuery predicateForWorkoutsWithWorkoutActivityType:(HKWorkoutActivityType)[workoutType intValue]];
                    [predicates addObject:individualPredicate];
                }
                workoutPredicate = [NSCompoundPredicate orPredicateWithSubpredicates:predicates];
            }
        } else {
            workoutPredicate = [NSPredicate predicateWithValue:NO];
        }
    }

    if (workoutPredicate) {
        [allPredicatesArray addObject:workoutPredicate];
    }
    
    NSCompoundPredicate *compoundPredicate = [NSCompoundPredicate andPredicateWithSubpredicates:allPredicatesArray];
    return compoundPredicate;
}

- (NSDictionary *)reverseWorkoutNames {
    NSDictionary *workoutNames = [self workoutNames];
    NSMutableDictionary *reversed = [NSMutableDictionary dictionary];
    for (NSNumber *key in workoutNames) {
        reversed[workoutNames[key]] = key;
    }
    return reversed;
}

+ (NSDictionary *)capabilityObjectType {
    return @{
        @"STEP_COUNT": [HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierStepCount],
        @"CALORIES": [HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierActiveEnergyBurned],
        @"CYCLING_DISTANCE": [HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierDistanceCycling],
        @"MINDFUL_MINUTES": [HKObjectType categoryTypeForIdentifier:HKCategoryTypeIdentifierMindfulSession],
        @"HEART_RATE": [HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierHeartRate],
        @"WHEELCHAIR_PUSHES": [HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierPushCount],
        @"WORKOUT_MINUTES": [HKWorkoutType workoutType],
        @"ACTIVITIES": [HKWorkoutType workoutType]
    };
}

- (NSDictionary *)workoutNames {
    NSDictionary *workoutNames = @{
            @(HKWorkoutActivityTypeAmericanFootball): @"FOOTBALL_AMERICAN",
            @(HKWorkoutActivityTypeArchery): @"ARCHERY",
            @(HKWorkoutActivityTypeAustralianFootball): @"FOOTBALL_AUSTRALIAN",
            @(HKWorkoutActivityTypeBadminton): @"BADMINTON",
            @(HKWorkoutActivityTypeBaseball): @"BASEBALL",
            @(HKWorkoutActivityTypeBasketball): @"BASKETBALL",
            @(HKWorkoutActivityTypeBowling): @"BOWLING",
            @(HKWorkoutActivityTypeBoxing): @"BOXING",
            @(HKWorkoutActivityTypeClimbing): @"ROCK_CLIMBING",
            @(HKWorkoutActivityTypeCrossTraining): @"CROSSFIT",
            @(HKWorkoutActivityTypeCurling): @"CURLING",
            @(HKWorkoutActivityTypeCycling): @"CYCLING",
            @(HKWorkoutActivityTypeDance): @"DANCING",
            @(HKWorkoutActivityTypeElliptical): @"ELLIPTICAL",
            @(HKWorkoutActivityTypeEquestrianSports): @"POLO",
            @(HKWorkoutActivityTypeFencing): @"FENCING",
            @(HKWorkoutActivityTypeFishing): @"FISHING",
            @(HKWorkoutActivityTypeFunctionalStrengthTraining): @"STRENGTH_TRAINING",
            @(HKWorkoutActivityTypeGolf): @"GOLF",
            @(HKWorkoutActivityTypeGymnastics): @"GYMNASTICS",
            @(HKWorkoutActivityTypeHandball): @"HANDBALL",
            @(HKWorkoutActivityTypeHiking): @"HIKING",
            @(HKWorkoutActivityTypeHockey): @"HOCKEY",
            @(HKWorkoutActivityTypeHunting): @"HUNTING",
            @(HKWorkoutActivityTypeLacrosse): @"LACROSSE",
            @(HKWorkoutActivityTypeMartialArts): @"MARTIAL_ARTS",
            @(HKWorkoutActivityTypeMindAndBody): @"MIND_AND_BODY",
            @(HKWorkoutActivityTypeMixedCardio): @"MIXED_METABOLIC_CARDIO_TRAINING",
            @(HKWorkoutActivityTypePaddleSports): @"PADDLE_SPORTS",
            @(HKWorkoutActivityTypePlay): @"PLAY",
            @(HKWorkoutActivityTypePreparationAndRecovery): @"PREPARATION_AND_RECOVERY",
            @(HKWorkoutActivityTypeRacquetball): @"RACQUETBALL",
            @(HKWorkoutActivityTypeRowing): @"ROWING",
            @(HKWorkoutActivityTypeRugby): @"RUGBY",
            @(HKWorkoutActivityTypeRunning): @"RUNNING",
            @(HKWorkoutActivityTypeSailing): @"SAILING",
            @(HKWorkoutActivityTypeSkatingSports): @"SKATING",
            @(HKWorkoutActivityTypeSnowSports): @"SNOWBOARDING",
            @(HKWorkoutActivityTypeSoccer): @"FOOTBALL_SOCCER",
            @(HKWorkoutActivityTypeSoftball): @"SOFTBALL",
            @(HKWorkoutActivityTypeSquash): @"SQUASH",
            @(HKWorkoutActivityTypeStairClimbing): @"STAIR_CLIMBING",
            @(HKWorkoutActivityTypeSurfingSports): @"SURFING",
            @(HKWorkoutActivityTypeSwimming): @"SWIMMING",
            @(HKWorkoutActivityTypeTableTennis): @"TABLE_TENNIS",
            @(HKWorkoutActivityTypeTennis): @"TENNIS",
            @(HKWorkoutActivityTypeTrackAndField): @"TRACK_AND_FIELD",
            @(HKWorkoutActivityTypeTraditionalStrengthTraining): @"STRENGTH_TRAINING",
            @(HKWorkoutActivityTypeVolleyball): @"VOLLEYBALL",
            @(HKWorkoutActivityTypeWalking): @"WALKING",
            @(HKWorkoutActivityTypeWaterFitness): @"SWIMMING_OPEN_WATER",
            @(HKWorkoutActivityTypeWaterPolo): @"WATER_POLO",
            @(HKWorkoutActivityTypeWaterSports): @"WATER_SPORTS",
            @(HKWorkoutActivityTypeWrestling): @"WRESTLING",
            @(HKWorkoutActivityTypeYoga): @"YOGA",
            @(HKWorkoutActivityTypeBarre): @"BARRE",
            @(HKWorkoutActivityTypeCoreTraining): @"CORE_TRAINING",
            @(HKWorkoutActivityTypeCrossCountrySkiing): @"SKIING_CROSS_COUNTRY",
            @(HKWorkoutActivityTypeDownhillSkiing): @"SKIING",
            @(HKWorkoutActivityTypeFlexibility): @"FLEXIBILITY",
            @(HKWorkoutActivityTypeHighIntensityIntervalTraining): @"INTERVAL_TRAINING_HIGH_INTENSITY",
            @(HKWorkoutActivityTypeJumpRope): @"JUMP_ROPE",
            @(HKWorkoutActivityTypeKickboxing): @"KICKBOXING",
            @(HKWorkoutActivityTypePilates): @"PILATES",
            @(HKWorkoutActivityTypeSnowboarding): @"SNOWBOARDING",
            @(HKWorkoutActivityTypeStairs): @"STAIRS",
            @(HKWorkoutActivityTypeStepTraining): @"STEP_TRAINING",
            @(HKWorkoutActivityTypeWheelchairWalkPace): @"WHEELCHAIR",
            @(HKWorkoutActivityTypeWheelchairRunPace): @"WHEELCHAIR_RUN",
            @(HKWorkoutActivityTypeTaiChi): @"TAI_CHI",
            @(HKWorkoutActivityTypeHandCycling): @"CYCLING_HAND",
            @(HKWorkoutActivityTypeOther): @"OTHER"
        };
        
    return workoutNames;
}

@end
