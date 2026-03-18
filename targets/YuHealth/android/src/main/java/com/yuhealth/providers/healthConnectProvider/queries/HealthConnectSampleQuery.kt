package com.yuhealth.providers.healthConnectProvider.queries

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import android.health.connect.datatypes.Metadata.RECORDING_METHOD_MANUAL_ENTRY
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.DistanceRecord
import androidx.health.connect.client.records.Record
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.request.ReadRecordsRequest
import androidx.health.connect.client.time.TimeRangeFilter
import com.yuhealth.YuHealthUtil.Companion.shouldIncludeDatapoint
import com.yuhealth.providers.healthConnectProvider.HealthConnectDataType
import com.yuhealth.providers.healthConnectProvider.HealthConnectUtils
import com.yuhealth.toJavaLocalDateTime
import com.yuhealth.types.HealthActivityType
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import com.yuhealth.yuhealth.providers.healthConnectProvider.HealthConnectProvider
import org.joda.time.DateTime
import kotlin.reflect.KClass

class HealthConnectSampleQuery(
  private val healthConnectClient: HealthConnectClient?,
  private val healthConnectProvider: HealthConnectProvider
) {
  @RequiresApi(34)
  suspend fun performQuery(request: SampleQueryParams): List<SampleQueryResponse> {
    if (healthConnectClient == null) {
      Log.e("YuHealthModule", "No healthConnectClient in sampleQuery")
      return emptyList()
    }

    val whitelistApps = HealthConnectUtils.getWhitelistApps(request.queryOptions.whitelistApps)
    if (request.dataType == HealthDataType.CYCLING_DISTANCE) {
      return getCyclingDistance(request)
    }

    if (request.dataType == HealthDataType.WORKOUT_MINUTES) {
      return getWorkoutMinutes(request)
    }

    if(request.dataType == HealthDataType.MINDFUL_MINUTES) {
      return getWorkoutMinutes(request, HealthActivityType.mindfulnessActivities)
    }

    val recordType = HealthConnectDataType.getSampleRecordType(request.dataType)
    val readRecordRequest = ReadRecordsRequest(
      recordType,
      timeRangeFilter = TimeRangeFilter.between(
        request.startTime.toJavaLocalDateTime(),
        request.endTime.toJavaLocalDateTime(),
      ),
      dataOriginFilter = whitelistApps
    )

    val response = healthConnectClient.readRecords(
      readRecordRequest
    )

    val sampleQueryResponse = mutableListOf<SampleQueryResponse>()
    for (responseRecord in response.records) {
      val sampleResponse = processRecord(recordType, responseRecord, request.queryOptions)
      if (sampleResponse != null) {
        sampleQueryResponse.add(
          sampleResponse
        )
      }
    }

    return sampleQueryResponse.toList()
  }

  @RequiresApi(34)
  private suspend fun getWorkoutMinutes(
    request: SampleQueryParams,
    activityFilters: List<HealthActivityType>? = null
  ): List<SampleQueryResponse> {

    val activityRequest = ActivityQueryParams(
      request.startTime, request.endTime, QueryOptions(
        disableUserEntries = request.queryOptions.disableUserEntries,
        whitelistActivityTypes = activityFilters ?: request.queryOptions.whitelistActivityTypes,
        whitelistApps = request.queryOptions.whitelistApps
      )
    )

    val activities = healthConnectProvider.activityQuery.performQuery(
      activityRequest, listOf(HealthDataType.WORKOUT_MINUTES)
    )

    val response = mutableListOf<SampleQueryResponse>()
    for (activity in activities) {
      val sampleResponse = SampleQueryResponse.Builder()
        .setStartTime(DateTime(activity.startTime))
        .setEndTime(DateTime(activity.endTime))
        .setBundleIdentifier(activity.bundleIdentifier)
        .setIsUserEntered(activity.isUserEntered)
        .setValue(activity.duration.toDouble())
        .build()

      response.add(
        sampleResponse
      )
    }

    return response
  }

  @RequiresApi(34)
  private suspend fun getCyclingDistance(
    request: SampleQueryParams
  ): List<SampleQueryResponse> {

    val activityRequest = ActivityQueryParams(
      request.startTime, request.endTime, QueryOptions(
        disableUserEntries = request.queryOptions.disableUserEntries,
        whitelistActivityTypes = listOf(HealthActivityType.CYCLING),
        whitelistApps = request.queryOptions.whitelistApps
      )
    )

    val cyclingActivities = healthConnectProvider.activityQuery.performQuery(
      activityRequest, listOf(HealthDataType.DISTANCE)
    )

    val response = mutableListOf<SampleQueryResponse>()
    for (activity in cyclingActivities) {
      val sampleResponse = SampleQueryResponse.Builder()
        .setStartTime(DateTime(activity.startTime))
        .setEndTime(DateTime(activity.endTime))
        .setBundleIdentifier(activity.bundleIdentifier)
        .setIsUserEntered(activity.isUserEntered)
        .setValue(activity.distance.toDouble())
        .build()

      response.add(
        sampleResponse
      )
    }

    return response
  }

  @RequiresApi(34)
  private fun processRecord(
    recordType: KClass<out Record>,
    responseRecord: Record,
    queryOptions: QueryOptions,
  ): SampleQueryResponse? {
    val isUserEntered = responseRecord.metadata.recordingMethod == RECORDING_METHOD_MANUAL_ENTRY
    val packageName = responseRecord.metadata.dataOrigin.packageName

    val includeDatapoint = shouldIncludeDatapoint(
      queryOptions,
      packageName,
      isUserEntered,
    )

    if (!includeDatapoint) {
      return null
    }

    val builder = SampleQueryResponse.Builder()
      .setBundleIdentifier(responseRecord.metadata.dataOrigin.packageName)
      .setIsUserEntered(isUserEntered)

    if (recordType == DistanceRecord::class) {
      val record = responseRecord as DistanceRecord
      builder
        .setStartTime(DateTime(record.startTime.toString()))
        .setEndTime(DateTime(record.endTime.toString()))
        .setValue(record.distance.inMeters)
    }

    if (recordType == StepsRecord::class) {
      val record = responseRecord as StepsRecord
      builder
        .setStartTime(DateTime(record.startTime.toString()))
        .setEndTime(DateTime(record.endTime.toString()))
        .setValue(record.count.toDouble())
    }

    if (recordType == ActiveCaloriesBurnedRecord::class) {
      val record = responseRecord as ActiveCaloriesBurnedRecord
      builder
        .setStartTime(DateTime(record.startTime.toString()))
        .setEndTime(DateTime(record.endTime.toString()))
        .setValue(record.energy.inKilocalories)
    }

    return builder.build()
  }
}
