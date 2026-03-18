package com.yuhealth.providers.samsungHealthProvider.queries

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import android.database.Cursor
import android.util.Log
import com.samsung.android.sdk.healthdata.HealthConstants
import com.samsung.android.sdk.healthdata.HealthDataResolver
import com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest
import com.yuhealth.YuHealthUtil
import com.yuhealth.providers.samsungHealthProvider.SamsungHealthProvider
import com.yuhealth.types.HealthActivityType
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import org.joda.time.DateTime
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class SamsungHealthSampleQuery(
  private val healthDataResolver: HealthDataResolver,
  private val samsungHealthProvider: SamsungHealthProvider
) {
  suspend fun performQuery(
    request: SampleQueryParams,
  ): List<SampleQueryResponse> {
    if (request.dataType == HealthDataType.CYCLING_DISTANCE) {
      return getCyclingDistance(request)
    }

    if (request.dataType == HealthDataType.MINDFUL_MINUTES) {
      return getActivitySeconds(
        request,
        HealthDataType.MINDFUL_MINUTES,
        HealthActivityType.mindfulnessActivities
      )
    }

    if (request.dataType == HealthDataType.WORKOUT_MINUTES) {
      return getActivitySeconds(request, HealthDataType.WORKOUT_MINUTES)
    }

    val healthRequest = buildRequest(request)

    try {
      return suspendCoroutine { continuation ->
        healthDataResolver.read(healthRequest).setResultListener { result ->
          val response = parseCursor(result.resultCursor, request)
          continuation.resume(response)
        }
      }
    } catch (e: Exception) {
      throw Exception("Samsung Health aggregation failed:", e)
    }
  }

  private fun parseCursor(
    cursor: Cursor?,
    request: SampleQueryParams
  ): MutableList<SampleQueryResponse> {
    val response = mutableListOf<SampleQueryResponse>()
    cursor?.use {
      while (it.moveToNext()) {
        processDataPoint(it)?.let { dataPoint ->
          if (YuHealthUtil.shouldIncludeDatapoint(
              request.queryOptions,
              "com.samsung.health.exercise",
              // Samsung Health doesn't support user entries
              false,
              HealthActivityType.WALKING
            )
          ) {
            response.add(dataPoint)
          }
        }
      }
    }

    return response
  }

  private fun processDataPoint(
    cursor: Cursor
  ): SampleQueryResponse? {
    try {
      val countIndex = cursor.getColumnIndex(HealthConstants.Exercise.COUNT)
      val count = cursor.getString(countIndex).toInt()

      val startTimeIndex = cursor.getColumnIndex(HealthConstants.Exercise.START_TIME)
      val startTime = DateTime(cursor.getLong(startTimeIndex))

      val endTimeIndex = cursor.getColumnIndex(HealthConstants.Exercise.END_TIME)
      val endTime = DateTime(cursor.getLong(endTimeIndex))

      return SampleQueryResponse.Builder()
        .setStartTime(startTime)
        .setEndTime(endTime)
        .setValue(count.toDouble())
        .setIsUserEntered(false)
        .setBundleIdentifier("com.samsung.health")
        .build()
    } catch (e: Exception) {
      Log.e("YuHealth", "Failed to process data point", e)
    }

    return null
  }

  private suspend fun getActivitySeconds(
    request: SampleQueryParams,
    type: HealthDataType,
    activityTypes: List<HealthActivityType>? = null
  ): List<SampleQueryResponse> {

    val activityRequest = ActivityQueryParams(
      request.startTime, request.endTime, QueryOptions(
        disableUserEntries = request.queryOptions.disableUserEntries,
        whitelistActivityTypes = activityTypes,
        whitelistApps = request.queryOptions.whitelistApps
      )
    )

    val activities = samsungHealthProvider.activityQuery.performQuery(
      activityRequest
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

    val cyclingActivities = samsungHealthProvider.activityQuery.performQuery(
      activityRequest
    )

    val response = mutableListOf<SampleQueryResponse>()
    for (activity in cyclingActivities) {
      val sampleResponse = SampleQueryResponse.Builder()
        .setStartTime(DateTime(activity.startTime))
        .setEndTime(DateTime(activity.endTime))
        .setBundleIdentifier(activity.bundleIdentifier)
        .setIsUserEntered(activity.isUserEntered)
        .setValue(activity.distance)
        .build()

      response.add(
        sampleResponse
      )
    }

    return response
  }

  private fun buildRequest(request: SampleQueryParams): ReadRequest {
    return ReadRequest.Builder()
      .setDataType(HealthConstants.StepCount.HEALTH_DATA_TYPE)
      .setLocalTimeRange(
        HealthConstants.StepCount.START_TIME,
        HealthConstants.StepCount.TIME_OFFSET,
        YuHealthUtil.convertLocalTimeToUtcMillis(request.startTime),
        YuHealthUtil.convertLocalTimeToUtcMillis(request.endTime)
      )
      .setProperties(
        arrayOf(
          HealthConstants.Exercise.START_TIME,
          HealthConstants.Exercise.END_TIME,
          HealthConstants.Exercise.COUNT
        )
      )
      .build()
  }
}
