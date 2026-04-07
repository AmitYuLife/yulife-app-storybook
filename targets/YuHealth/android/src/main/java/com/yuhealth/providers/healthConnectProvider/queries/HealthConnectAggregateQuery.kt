package com.yuhealth.providers.healthConnectProvider.queries

import ActivityQueryParams
import BucketUnit
import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.aggregate.AggregateMetric
import androidx.health.connect.client.aggregate.AggregationResult
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.DistanceRecord
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.metadata.DataOrigin
import androidx.health.connect.client.request.AggregateGroupByDurationRequest
import androidx.health.connect.client.request.AggregateRequest
import androidx.health.connect.client.time.TimeRangeFilter
import com.yuhealth.YuHealthUtil.Companion.bucketAggregateResponse
import com.yuhealth.YuHealthUtil.Companion.getNonUserEnteredData
import com.yuhealth.providers.healthConnectProvider.HealthConnectDataType
import com.yuhealth.providers.healthConnectProvider.HealthConnectUtils
import com.yuhealth.toJavaLocalDateTime
import com.yuhealth.types.HealthActivityType
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import com.yuhealth.types.queries.aggregate.BucketSize
import com.yuhealth.yuhealth.providers.healthConnectProvider.HealthConnectProvider
import org.joda.time.DateTime
import java.time.Duration
import kotlin.math.ceil

class HealthConnectAggregateQuery(
  private val healthConnectClient: HealthConnectClient?,
  private val healthConnectProvider: HealthConnectProvider
) {
  @RequiresApi(34)
  suspend fun performQuery(request: AggregateQueryParams): List<AggregateQueryResponse> {
    if (healthConnectClient == null) {
      Log.e("YuHealthModule", "No healthConnectClient in aggregateQuery")
      return emptyList()
    }

    val whitelistApps = HealthConnectUtils.getWhitelistApps(request.queryOptions.whitelistApps)

    if (request.dataType == HealthDataType.CYCLING_DISTANCE) {
      return getCyclingDistance(request)
    }

    if (request.dataType == HealthDataType.WORKOUT_MINUTES) {
      return getWorkoutMinutes(request)
    }

    if(request.dataType === HealthDataType.MINDFUL_MINUTES) {
      return getWorkoutMinutes(request, HealthActivityType.mindfulnessActivities)
    }

    val recordType = HealthConnectDataType.getAggregateRecordType(request.dataType)

    if (request.bucketConfig == null) {
      return runNonBucketedAggregation(request, recordType, whitelistApps)
    }

    return runBucketedAggregation(request, recordType, whitelistApps)
  }

  private fun extractValue(
    record: AggregationResult,
    recordType: AggregateMetric<Comparable<*>>
  ): Double {
    if (!record.contains(recordType)) {
      // Aggregation returned no data for this metric
      return 0.0
    }

    if (recordType == DistanceRecord.DISTANCE_TOTAL) {
      return record[recordType]!!.inMeters
    }

    if (recordType == StepsRecord.COUNT_TOTAL) {
      return record[recordType]!!.toDouble()
    }

    if (recordType == ActiveCaloriesBurnedRecord.ACTIVE_CALORIES_TOTAL) {
      return record[recordType]!!.inKilocalories
    }

    return 0.0
  }

  @RequiresApi(Build.VERSION_CODES.O)
  private fun getBucketDuration(bucketConfig: BucketSize): Duration {
    return when (bucketConfig.unit) {
      BucketUnit.MINUTE -> Duration.ofMinutes(bucketConfig.value.toLong())
      BucketUnit.HOUR -> Duration.ofHours(bucketConfig.value.toLong())
      BucketUnit.DAY -> Duration.ofDays(bucketConfig.value.toLong())
    }
  }

  @RequiresApi(Build.VERSION_CODES.O)
  private suspend fun runBucketedAggregation(
    request: AggregateQueryParams,
    recordType: AggregateMetric<Comparable<*>>,
    whitelistApps: Set<DataOrigin>
  ): MutableList<AggregateQueryResponse> {
    val bucketedRequest = AggregateGroupByDurationRequest(
      metrics = setOf(recordType),
      timeRangeFilter = TimeRangeFilter.between(
        request.startTime.toJavaLocalDateTime(),
        request.endTime.toJavaLocalDateTime(),
      ),
      dataOriginFilter = whitelistApps,
      timeRangeSlicer = getBucketDuration(request.bucketConfig!!)
    )

    val response = healthConnectClient!!.aggregateGroupByDuration(bucketedRequest)
    val aggregateResults = mutableListOf<AggregateQueryResponse>()

    for (record in response) {
      val aggregateResponse = AggregateQueryResponse(
        DateTime(record.startTime.toString()),
        DateTime(record.endTime.toString()),
        extractValue(record.result, recordType)
      )

      aggregateResults.add(aggregateResponse)
    }

    return aggregateResults
  }

  @RequiresApi(Build.VERSION_CODES.O)
  private suspend fun runNonBucketedAggregation(
    request: AggregateQueryParams,
    recordType: AggregateMetric<Comparable<*>>,
    whitelistApps: Set<DataOrigin>
  ): List<AggregateQueryResponse> {
    val nonBucketedRequest = AggregateRequest(
      metrics = setOf(recordType),
      timeRangeFilter = TimeRangeFilter.between(
        request.startTime.toJavaLocalDateTime(),
        request.endTime.toJavaLocalDateTime(),
      ),
      dataOriginFilter = whitelistApps
    )

    val response = healthConnectClient!!.aggregate(nonBucketedRequest)
    val containsBlacklistApps = response.dataOrigins.any { it ->
      it.packageName in request.queryOptions.blacklistApps
    }

    val value = if (!containsBlacklistApps) {
      extractValue(response, recordType)
    } else {
      getNonUserEnteredData(
        healthConnectProvider,
        request.startTime,
        request.endTime,
        request.dataType,
        request.queryOptions
      )
    }

    val aggregateResponse = AggregateQueryResponse(
      request.startTime,
      request.endTime,
      value
    )

    return listOf(aggregateResponse)
  }

  @RequiresApi(34)
  private suspend fun getWorkoutMinutes(
    request: AggregateQueryParams,
    activityFilters: List<HealthActivityType>? = null
  ): List<AggregateQueryResponse> {
    val activityQuery = ActivityQueryParams(
      request.startTime, request.endTime, QueryOptions(
        disableUserEntries = request.queryOptions.disableUserEntries,
        whitelistActivityTypes = activityFilters ?: request.queryOptions.whitelistActivityTypes,
        whitelistApps = request.queryOptions.whitelistApps,
      )
    )

    val activities = healthConnectProvider.activityQuery.performQuery(
      activityQuery, listOf(HealthDataType.WORKOUT_MINUTES)
    )

    if (request.bucketConfig != null) {
      return bucketAggregateResponse(
        activities,
        request.bucketConfig,
        HealthDataType.WORKOUT_MINUTES
      )
    }

    val aggregateResponse =
      AggregateQueryResponse.Builder().setStartTime(request.startTime).setEndTime(request.endTime)
        .setValue(ceil(activities.sumOf { it.duration }.toDouble())).build()

    return listOf(aggregateResponse)
  }

  @RequiresApi(34)
  private suspend fun getCyclingDistance(request: AggregateQueryParams): List<AggregateQueryResponse> {
    val activityQuery = ActivityQueryParams(
      request.startTime, request.endTime, QueryOptions(
        disableUserEntries = request.queryOptions.disableUserEntries,
        whitelistActivityTypes = listOf(HealthActivityType.CYCLING),
        whitelistApps = request.queryOptions.whitelistApps
      )
    )

    val activities = healthConnectProvider.activityQuery.performQuery(
      activityQuery, listOf(HealthDataType.DISTANCE)
    )

    if (request.bucketConfig != null) {
      return bucketAggregateResponse(activities, request.bucketConfig, HealthDataType.DISTANCE)
    }

    val aggregateResponse =
      AggregateQueryResponse.Builder().setStartTime(request.startTime).setEndTime(request.endTime)
        .setValue(ceil(activities.sumOf { it.distance })).build()

    return listOf(aggregateResponse)
  }
}
