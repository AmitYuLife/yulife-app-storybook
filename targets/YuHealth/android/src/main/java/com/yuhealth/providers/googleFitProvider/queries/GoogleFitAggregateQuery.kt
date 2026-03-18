package com.yuhealth.providers.googleFitProvider.queries

import ActivityQueryParams
import BucketUnit
import com.google.android.gms.fitness.Fitness
import com.google.android.gms.fitness.data.DataPoint
import com.google.android.gms.fitness.data.DataType
import com.google.android.gms.fitness.request.DataReadRequest
import com.google.android.gms.fitness.result.DataReadResponse
import com.google.android.gms.tasks.Tasks
import com.yuhealth.YuHealthUtil.Companion.bucketAggregateResponse
import com.yuhealth.YuHealthUtil.Companion.getNonUserEnteredData
import com.yuhealth.providers.googleFitProvider.GoogleFitDataType
import com.yuhealth.providers.googleFitProvider.GoogleFitPermissionManager
import com.yuhealth.providers.googleFitProvider.GoogleFitUtilities.Companion.isUserEntered
import com.yuhealth.types.HealthActivityType
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import com.yuhealth.types.queries.aggregate.BucketSize
import com.yuhealth.yuhealth.providers.googleFitProvider.GoogleFitProvider
import org.joda.time.DateTime
import java.util.concurrent.TimeUnit

class GoogleFitAggregateQuery(
  private val googleFitPermissionManager: GoogleFitPermissionManager,
  private val googleFitProvider: GoogleFitProvider
) {
  suspend fun performQuery(request: AggregateQueryParams): List<AggregateQueryResponse> {
    if (request.dataType === HealthDataType.CYCLING_DISTANCE) {
      return getCyclingDistance(request)
    }

    if (request.dataType === HealthDataType.MINDFUL_MINUTES) {
      return getActivitySeconds(request, HealthActivityType.mindfulnessActivities)
    }

    if (request.dataType === HealthDataType.WORKOUT_MINUTES) {
      return getActivitySeconds(request)
    }

    val fitRequest = buildRequest(request)

    val response = Fitness
      .getHistoryClient(
        googleFitProvider.context.currentActivity!!,
        googleFitPermissionManager.getAccount()!!
      )
      .readData(fitRequest)

    val result = Tasks.await(response)
    return processResponse(request, result)
  }

  private suspend fun processResponse(
    request: AggregateQueryParams,
    response: DataReadResponse
  ): List<AggregateQueryResponse> {
    val result = mutableListOf<AggregateQueryResponse>()

    for (bucket in response.buckets) {
      for (dataSet in bucket.dataSets) {
        for (dataPoint in dataSet.dataPoints) {
          val processedDataPoint = processDataPoint(dataPoint, request)
          if (processedDataPoint.value > 0.0) {
            result.add(processedDataPoint)
          }
        }
      }
    }

    return result
  }

  private suspend fun processDataPoint(
    dp: DataPoint,
    request: AggregateQueryParams
  ): AggregateQueryResponse {
    val startTime = DateTime(dp.getStartTime(TimeUnit.MILLISECONDS)).toString()
    val endTime = DateTime(dp.getEndTime(TimeUnit.MILLISECONDS)).toString()
    val appPackageName = dp.originalDataSource.appPackageName
    val streamIdentifier = dp.originalDataSource.streamIdentifier
    val isUserInput = isUserEntered(streamIdentifier)

    val isBlacklistedApp = request.queryOptions.blacklistApps.contains(appPackageName)
    val shouldPerformSampleQuery =
      isUserInput && request.queryOptions.disableUserEntries || isBlacklistedApp

    val value = if (!shouldPerformSampleQuery) {
      GoogleFitDataType.extractValue(dp.dataType.fields, dp)
    } else {
      getNonUserEnteredData(
        googleFitProvider,
        DateTime(startTime),
        DateTime(endTime),
        request.dataType,
        request.queryOptions
      )
    }

    return AggregateQueryResponse(DateTime(startTime), DateTime(endTime), value)
  }


  private fun getBucketDuration(bucketConfig: BucketSize): TimeUnit {
    return when (bucketConfig.unit) {
      BucketUnit.MINUTE -> TimeUnit.MINUTES
      BucketUnit.HOUR -> TimeUnit.HOURS
      BucketUnit.DAY -> TimeUnit.DAYS
    }
  }

  private fun buildRequest(request: AggregateQueryParams): DataReadRequest {
    val fitRequest = DataReadRequest.Builder()
    fitRequest.setTimeRange(
      request.startTime.millis,
      request.endTime.millis,
      TimeUnit.MILLISECONDS
    )

    if (request.bucketConfig != null) {
      fitRequest.bucketByTime(
        request.bucketConfig.value,
        getBucketDuration(request.bucketConfig)
      )
    } else {
      fitRequest.bucketByTime(365 * 10, TimeUnit.DAYS)
    }

    if (request.dataType == HealthDataType.STEP_COUNT) {
      val dataSource = GoogleFitDataType.getStepCountDataSource()
      fitRequest.aggregate(dataSource, DataType.AGGREGATE_STEP_COUNT_DELTA)
    } else {
      fitRequest.aggregate(GoogleFitDataType.getAggregateRecordType(request.dataType))
    }

    return fitRequest.build()
  }

  private suspend fun getFakeActivityAggregate(
    request: AggregateQueryParams,
    fetchMetrics: List<HealthDataType>,
    whitelistActivityTypes: List<HealthActivityType>?
  ): List<ActivityQueryResponse> {
    val activityQuery = ActivityQueryParams(
      request.startTime, request.endTime, QueryOptions(
        disableUserEntries = request.queryOptions.disableUserEntries,
        whitelistApps = request.queryOptions.whitelistApps,
        whitelistActivityTypes = whitelistActivityTypes
      )
    )

    return googleFitProvider.activityQuery.performQuery(
      activityQuery, fetchMetrics
    )
  }

  private suspend fun getActivitySeconds(
    request: AggregateQueryParams,
    activityFilters: List<HealthActivityType>? = null
  ): List<AggregateQueryResponse> {
    val activities = getFakeActivityAggregate(
      request,
      listOf(request.dataType),
      activityFilters,
    )

    if (request.bucketConfig != null) {
      return bucketAggregateResponse(
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
      listOf(HealthDataType.DISTANCE),
      listOf(HealthActivityType.CYCLING)
    )

    if (request.bucketConfig != null) {
      return bucketAggregateResponse(activities, request.bucketConfig, HealthDataType.DISTANCE)
    }

    val aggregateResponse = AggregateQueryResponse(
      request.startTime,
      request.endTime,
      activities.sumOf { it.distance }
    )

    return listOf(aggregateResponse)
  }
}
