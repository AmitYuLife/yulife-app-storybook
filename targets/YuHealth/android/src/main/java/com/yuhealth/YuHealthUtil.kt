package com.yuhealth

import BucketUnit
import SampleQueryParams
import com.yuhealth.types.HealthActivityType
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import com.yuhealth.types.queries.aggregate.BucketSize
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlinx.coroutines.withTimeoutOrNull
import org.joda.time.DateTime
import kotlin.coroutines.Continuation
import kotlin.math.ceil

class YuHealthUtil {
  companion object {
    suspend inline fun <T> suspendCoroutineWithTimeout(
      timeout: Long,
      crossinline block: (Continuation<T>) -> Unit
    ): T? {
      var finalValue: T? = null
      withTimeoutOrNull(timeout) {
        finalValue = suspendCancellableCoroutine(block = block)
      }
      return finalValue
    }

    fun shouldIncludeDatapoint(
      options: QueryOptions,
      appPackageName: String,
      isUserEntry: Boolean = false,
      activity: HealthActivityType? = null
    ): Boolean {
      if (options.disableUserEntries && isUserEntry) {
        return false
      }

      if (options.blacklistApps.contains(appPackageName)) {
        return false
      }

      val isWhitelistEmpty = options.whitelistApps.isNullOrEmpty()
      if (!isWhitelistEmpty && !options.whitelistApps!!.contains(appPackageName)) {
        return false
      }

      val isActivityTypesEmpty = options.whitelistActivityTypes.isNullOrEmpty()
      if (!isActivityTypesEmpty && !options.whitelistActivityTypes!!.contains(activity)) {
        return false
      }

      return true
    }

    fun bucketAggregateResponse(
      activities: List<ActivityQueryResponse>,
      bucketConfig: BucketSize,
      dataType: HealthDataType
    ): List<AggregateQueryResponse> {
      val buckets = mutableMapOf<DateTime, Double>()

      activities.forEach { activity ->
        val activityBucketTime = when (bucketConfig.unit) {
          BucketUnit.MINUTE -> activity.startTime.withSecondOfMinute(0).withMillisOfSecond(0)
            .plusMinutes(bucketConfig.value - (activity.startTime.minuteOfHour % bucketConfig.value))

          BucketUnit.HOUR -> activity.startTime.withMinuteOfHour(0).withSecondOfMinute(0)
            .withMillisOfSecond(0)
            .plusHours(bucketConfig.value - (activity.startTime.hourOfDay % bucketConfig.value))

          BucketUnit.DAY -> {
            val dayBucketStart = activity.startTime.withTimeAtStartOfDay()
            val daysToSubtract = (activity.startTime.dayOfMonth - 1) % bucketConfig.value
            dayBucketStart.minusDays(daysToSubtract)
          }
        }

        val value = when (dataType) {
          HealthDataType.DISTANCE -> activity.distance
          HealthDataType.STEP_COUNT -> activity.steps.toDouble()
          HealthDataType.CALORIES -> activity.calories
          HealthDataType.MINDFUL_MINUTES -> activity.duration.toDouble()
          HealthDataType.WORKOUT_MINUTES -> activity.duration.toDouble()
          else -> 0.0
        }

        if (value > 0.0) {
          buckets[activityBucketTime] =
            ceil(value + (buckets[activityBucketTime] ?: 0.0))
        }
      }

      return buckets.map { (startTime, distance) ->
        val endTime = when (bucketConfig.unit) {
          BucketUnit.MINUTE -> startTime.plusMinutes(bucketConfig.value)
          BucketUnit.HOUR -> startTime.plusHours(bucketConfig.value)
          BucketUnit.DAY -> startTime.plusDays(bucketConfig.value)
        }
        AggregateQueryResponse(startTime, endTime, distance)
      }
    }


    suspend fun getNonUserEnteredData(
      provider: HealthProvider,
      startTime: DateTime,
      endTime: DateTime,
      dataType: HealthDataType,
      queryOptions: QueryOptions
    ): Double {
      val sampleRequest = SampleQueryParams(
        startTime,
        endTime,
        dataType,
        queryOptions
      )

      return provider.sampleQuery(sampleRequest).sumOf { it.value }
    }

    /**
     * Converts a DateTime to milliseconds by interpreting its local time as UTC.
     * Example: 2025-01-15T00:00:00+01:00 becomes 2025-01-15T00:00:00Z
     * To get the steps from a datetime string with a timezone, Samsung Health wants you to strip the timezone, and pass the milliseconds as if it was UTC (which is wrong!)
     */
    fun convertLocalTimeToUtcMillis(dateTime: DateTime): Long {
      return DateTime(dateTime.toLocalDateTime().toString(), org.joda.time.DateTimeZone.UTC).millis
    }
  }

}
