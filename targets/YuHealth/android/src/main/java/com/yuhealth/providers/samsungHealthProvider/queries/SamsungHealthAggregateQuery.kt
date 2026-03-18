package com.yuhealth.providers.samsungHealthProvider.queries

import ActivityQueryParams
import BucketUnit
import android.util.Log
import com.samsung.android.sdk.healthdata.HealthConstants.StepCount
import com.samsung.android.sdk.healthdata.HealthData
import com.samsung.android.sdk.healthdata.HealthDataResolver
import com.samsung.android.sdk.healthdata.HealthDataResolver.AggregateRequest.TimeGroupUnit
import com.yuhealth.YuHealthUtil
import com.yuhealth.providers.samsungHealthProvider.SamsungHealthDataType
import com.yuhealth.providers.samsungHealthProvider.SamsungHealthProvider
import com.yuhealth.types.HealthActivityType
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import com.yuhealth.types.queries.aggregate.BucketSize
import org.joda.time.DateTime
import org.joda.time.format.DateTimeFormat
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class SamsungHealthAggregateQuery(
  val healthDataResolver: HealthDataResolver,
  private val samsungHealthProvider: SamsungHealthProvider
) {
  suspend fun performQuery(request: AggregateQueryParams): List<AggregateQueryResponse> {
    if (request.dataType === HealthDataType.CYCLING_DISTANCE) {
      return getCyclingDistance(request)
    }

    if (request.dataType === HealthDataType.WORKOUT_MINUTES) {
      return getActivitySeconds(request)
    }

    val healthRequest = buildRequest(request)

    try {
      val queryResponse = suspendCoroutine<List<AggregateQueryResponse>> { contination ->
        run {
          val response = mutableListOf<AggregateQueryResponse>()

          healthDataResolver.aggregate(healthRequest)
            .setResultListener { result ->
              val iterator = result.iterator()
              while (iterator.hasNext()) {
                val healthData = iterator.next()
                val dataPoint = processDataPoint(healthData, request)
                if (dataPoint != null) {
                  response.add(dataPoint)
                }
              }

              result.close()
              contination.resume(response.toList())
            }
        }
      }

      return queryResponse

    } catch (e: Exception) {
      throw Exception("Samsung Health aggregation failed:", e)
    }
  }

  private suspend fun getFakeActivityAggregate(
    request: AggregateQueryParams,
    whitelistActivityTypes: List<HealthActivityType>?
  ): List<ActivityQueryResponse> {
    val activityQuery = ActivityQueryParams(
      request.startTime, request.endTime, QueryOptions(
        disableUserEntries = request.queryOptions.disableUserEntries,
        whitelistApps = request.queryOptions.whitelistApps,
        whitelistActivityTypes = whitelistActivityTypes
      )
    )

    return samsungHealthProvider.activityQuery.performQuery(
      activityQuery
    )
  }

  private suspend fun getActivitySeconds(
    request: AggregateQueryParams,
    activityFilters: List<HealthActivityType>? = null
  ): List<AggregateQueryResponse> {
    val activities = getFakeActivityAggregate(
      request,
      activityFilters,
    )

    if (request.bucketConfig != null) {
      return YuHealthUtil.bucketAggregateResponse(
        activities,
        request.bucketConfig,
        request.dataType
      )
    }

    val aggregateResponse = AggregateQueryResponse(
      request.startTime,
      request.endTime,
      activities.sumOf { it.duration }.toDouble()
    )

    return listOf(aggregateResponse)
  }

  private suspend fun getCyclingDistance(request: AggregateQueryParams): List<AggregateQueryResponse> {
    val activities = getFakeActivityAggregate(
      request,
      listOf(HealthActivityType.CYCLING)
    )

    if (request.bucketConfig != null) {
      return YuHealthUtil.bucketAggregateResponse(
        activities,
        request.bucketConfig,
        HealthDataType.DISTANCE
      )
    }

    val aggregateResponse = AggregateQueryResponse(
      request.startTime,
      request.endTime,
      activities.sumOf { it.distance }
    )

    return listOf(aggregateResponse)
  }

  private fun buildRequest(request: AggregateQueryParams): HealthDataResolver.AggregateRequest? {
    val dataType = SamsungHealthDataType.getRecordType(request.dataType)

    val healthRequest = HealthDataResolver.AggregateRequest.Builder()
      .setDataType(dataType)
      .addFunction(
        HealthDataResolver.AggregateRequest.AggregateFunction.SUM,
        StepCount.COUNT,
        "value"
      )
      .addGroup(StepCount.DEVICE_UUID, "deviceuuid")
      .setLocalTimeRange(
        StepCount.START_TIME,
        StepCount.TIME_OFFSET,
        YuHealthUtil.convertLocalTimeToUtcMillis(request.startTime),
        YuHealthUtil.convertLocalTimeToUtcMillis(request.endTime)
      )
      .setSort("value", HealthDataResolver.SortOrder.DESC)

    if (request.bucketConfig != null) {
      val bucketDuration = getBucketDuration(request.bucketConfig)
      healthRequest.setTimeGroup(
        bucketDuration,
        request.bucketConfig.value,
        StepCount.START_TIME,
        StepCount.TIME_OFFSET,
        "startTime"
      )
    }

    return healthRequest.build()
  }


  private fun processDataPoint(
    healthData: HealthData,
    request: AggregateQueryParams
  ): AggregateQueryResponse? {
    try {
      val value = healthData.getDouble("value")
      val aggregateResponse = AggregateQueryResponse.Builder()
        .setValue(value)

      if (request.bucketConfig == null) {
        aggregateResponse
          .setStartTime(request.startTime)
          .setEndTime(request.endTime)
      } else {
        val startTime = healthData.getString("startTime")
        attachResponseDates(startTime, request.bucketConfig, aggregateResponse)
      }

      return aggregateResponse.build()
    } catch (e: Exception) {
      Log.e("YuHealth", "Failed to process data point", e)
    }

    return null
  }

  private fun attachResponseDates(
    time: String,
    bucketConfig: BucketSize,
    responseBuilder: AggregateQueryResponse.Builder
  ) {
    val pattern = getFormatString(bucketConfig.unit)
    val startTime = DateTime.parse(time, DateTimeFormat.forPattern(pattern))
    responseBuilder.setStartTime(startTime)

    val endTime = getEndTime(bucketConfig, startTime)
    responseBuilder.setEndTime(endTime)
  }

  private fun getFormatString(bucketUnit: BucketUnit): String {
    return when (bucketUnit) {
      BucketUnit.DAY -> {
        "YYYY-MM-DD"
      }

      BucketUnit.HOUR -> {
        "YYYY-MM-DD HH"
      }

      BucketUnit.MINUTE -> {
        "YYYY-MM-DD HH:mm"
      }
    }
  }

  private fun getBucketDuration(bucketConfig: BucketSize): TimeGroupUnit {
    return when (bucketConfig.unit) {
      BucketUnit.MINUTE -> TimeGroupUnit.MINUTELY
      BucketUnit.HOUR -> TimeGroupUnit.HOURLY
      BucketUnit.DAY -> TimeGroupUnit.DAILY
    }
  }

  private fun getEndTime(bucketConfig: BucketSize, startTime: DateTime): DateTime {
    return when (bucketConfig.unit) {
      BucketUnit.MINUTE -> startTime.plusMinutes(bucketConfig.value)
      BucketUnit.HOUR -> startTime.plusHours(bucketConfig.value)
      BucketUnit.DAY -> startTime.plusDays(bucketConfig.value)
    }
  }
}
