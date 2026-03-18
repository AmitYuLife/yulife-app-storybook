#ifndef YuHealth_Utils_h
#define YuHealth_Utils_h

#import "YuHealth.h"

@interface YuHealth (Utils)

- (NSString *)getISO8601FromDate:(NSDate *)date;

- (NSDate *)getDateFromString:(NSString *)dateString;

- (NSCompoundPredicate *)getQueryPredicate:(NSDate *)startTime endTime:(NSDate *)endTime options:(NSDictionary *)options useStrictStartDatePredicate:(Boolean) useStrictStartDatePredicate;

+ (NSDictionary *) capabilityObjectType;

- (NSDictionary *)workoutNames;

@end


#endif
