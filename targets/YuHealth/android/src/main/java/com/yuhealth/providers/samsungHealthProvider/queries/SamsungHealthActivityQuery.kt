package com.yuhealth.providers.samsungHealthProvider.queries

import ActivityQueryParams
import android.database.Cursor
import android.util.Log
import com.samsung.android.sdk.healthdata.HealthConstants
import com.samsung.android.sdk.healthdata.HealthDataResolver
import com.samsung.android.sdk.healthdata.HealthDataResolver.ReadRequest
import com.yuhealth.YuHealthUtil
import com.yuhealth.providers.samsungHealthProvider.SamsungHealthActivityType
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import org.joda.time.DateTime
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class SamsungHealthActivityQuery(private val healthDataResolver: HealthDataResolver) {
  suspend fun performQuery(
    request: ActivityQueryParams,
  ): List<ActivityQueryResponse> {
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
    request: ActivityQueryParams
  ): MutableList<ActivityQueryResponse> {
    val response = mutableListOf<ActivityQueryResponse>()
    cursor?.use {
      while (it.moveToNext()) {
        processDataPoint(it)?.let { dataPoint ->
          if (YuHealthUtil.shouldIncludeDatapoint(
              request.queryOptions,
              "com.samsung.health.exercise",
              // Samsung Health doesn't support user entries
              false,
              dataPoint.activityType
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
  ): ActivityQueryResponse? {
    try {
      val exerciseTypeIndex = cursor.getColumnIndex(HealthConstants.Exercise.EXERCISE_TYPE)
      val exerciseType =
        SamsungHealthActivityType.getHealthActivityType(cursor.getInt(exerciseTypeIndex))

      val durationIndex = cursor.getColumnIndex(HealthConstants.Exercise.DURATION)
      val duration = (cursor.getString(durationIndex).toInt()) / 1000

      val caloriesIndex = cursor.getColumnIndex(HealthConstants.Exercise.CALORIE)
      val calories = cursor.getString(caloriesIndex).toDouble()

      val distanceIndex = cursor.getColumnIndex(HealthConstants.Exercise.DISTANCE)
      val distance = cursor.getFloat(distanceIndex).toDouble()

      val startTimeIndex = cursor.getColumnIndex(HealthConstants.Exercise.START_TIME)
      val startTime = DateTime(cursor.getLong(startTimeIndex))

      val endTimeIndex = cursor.getColumnIndex(HealthConstants.Exercise.END_TIME)
      val endTime = DateTime(cursor.getLong(endTimeIndex))

      return ActivityQueryResponse.Builder()
        .setStartTime(startTime)
        .setEndTime(endTime)
        .setCalories(calories)
        .setDistance(distance)
        .setDuration(duration)
        .setActivityType(exerciseType)
        .setBundleIdentifier("com.samsung.health.exercise")
        .build()
    } catch (e: Exception) {
      Log.e("YuHealth", "Failed to process data point", e)
    }

    return null
  }

  private fun buildRequest(request: ActivityQueryParams): ReadRequest {
    return ReadRequest.Builder()
      .setDataType(HealthConstants.Exercise.HEALTH_DATA_TYPE)
      .setProperties(
        arrayOf(
          HealthConstants.Exercise.START_TIME,
          HealthConstants.Exercise.END_TIME,
          HealthConstants.Exercise.DURATION,
          HealthConstants.Exercise.EXERCISE_TYPE,
          HealthConstants.Exercise.CALORIE,
          HealthConstants.Exercise.DISTANCE,
        )
      )
      .setLocalTimeRange(
        HealthConstants.StepCount.START_TIME,
        HealthConstants.StepCount.TIME_OFFSET,
        YuHealthUtil.convertLocalTimeToUtcMillis(request.startTime),
        YuHealthUtil.convertLocalTimeToUtcMillis(request.endTime)
      )
      .build()
  }
}
