package com.yuhealth.providers.healthConnectProvider.queries

import ActivityQueryParams
import android.health.connect.datatypes.Metadata
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.records.ExerciseSessionRecord
import androidx.health.connect.client.request.ReadRecordsRequest
import androidx.health.connect.client.time.TimeRangeFilter
import com.yuhealth.YuHealthUtil.Companion.shouldIncludeDatapoint
import com.yuhealth.providers.healthConnectProvider.HealthConnectActivityType
import com.yuhealth.providers.healthConnectProvider.HealthConnectUtils
import com.yuhealth.toJavaLocalDateTime
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.yuhealth.providers.healthConnectProvider.HealthConnectProvider
import org.joda.time.DateTime
import org.joda.time.Seconds
import kotlin.math.ceil

class HealthConnectActivityQuery(
  private val healthConnectClient: HealthConnectClient?,
  private val healthConnectProvider: HealthConnectProvider
) {
  @RequiresApi(34)
  suspend fun performQuery(
    request: ActivityQueryParams,
    fetchMetrics: List<HealthDataType> = listOf(
      HealthDataType.STEP_COUNT,
      HealthDataType.DISTANCE,
      HealthDataType.CALORIES
    )
  ): List<ActivityQueryResponse> {
    if (healthConnectClient == null) {
      Log.e("YuHealthModule", "No healthConnectClient in activityQuery")
      return emptyList()
    }

    val whitelistApps = HealthConnectUtils.getWhitelistApps(request.queryOptions.whitelistApps)

    val readRecordRequest = ReadRecordsRequest(
      ExerciseSessionRecord::class,
      timeRangeFilter = TimeRangeFilter.between(
        request.startTime.toJavaLocalDateTime(),
        request.endTime.toJavaLocalDateTime()
      ),
      dataOriginFilter = whitelistApps,
    )

    val response = healthConnectClient.readRecords(
      readRecordRequest
    ).records

    return processResponse(request, response, fetchMetrics)
  }

  @RequiresApi(34)
  suspend fun processResponse(
    request: ActivityQueryParams,
    response: List<ExerciseSessionRecord>,
    fetchMetrics: List<HealthDataType>,
  ): MutableList<ActivityQueryResponse> {
    val activityQueryResponse = mutableListOf<ActivityQueryResponse>()

    for (record in response) {
      Log.d("YuHealthModule", record.toString())

      val healthActivityType = HealthConnectActivityType.getHealthActivityType(record.exerciseType)
      val isUserEntered = record.metadata.recordingMethod == Metadata.RECORDING_METHOD_MANUAL_ENTRY

      val includeActivity =
        shouldIncludeDatapoint(
          request.queryOptions,
          record.metadata.dataOrigin.packageName,
          isUserEntered,
          healthActivityType
        )

      if (!includeActivity) {
        continue
      }

      val startTime = DateTime(record.startTime.toString())
      val endTime = DateTime(record.endTime.toString())

      val activityResponseBuilder =
        ActivityQueryResponse.Builder()
          .setStartTime(startTime)
          .setEndTime(endTime)
          .setBundleIdentifier(record.metadata.dataOrigin.packageName)
          .setActivityType(healthActivityType)
          .setIsUserEntered(isUserEntered)

      Log.d("HealthConnectActivityQuery", record.exerciseType.toString())

      for (metric in fetchMetrics) {
        if (metric === HealthDataType.MINDFUL_MINUTES || metric === HealthDataType.WORKOUT_MINUTES) {
          val durationInSeconds =
            Seconds.secondsBetween(startTime, endTime).seconds
          activityResponseBuilder.setDuration(durationInSeconds)
          continue
        }

        val aggregateRequest =
          AggregateQueryParams(
            DateTime(record.startTime.toString()),
            DateTime(record.endTime.toString()),
            bucketConfig = null,
            dataType = metric,
            queryOptions = request.queryOptions
          )

        val queryResult = healthConnectProvider.aggregateQuery(aggregateRequest)
        if (queryResult.isEmpty()) {
          continue
        }

        if (metric == HealthDataType.DISTANCE) {
          activityResponseBuilder.setDistance(ceil(queryResult[0].value))
        }

        if (metric == HealthDataType.CALORIES) {
          activityResponseBuilder.setCalories(ceil(queryResult[0].value))
        }

        if (metric == HealthDataType.STEP_COUNT) {
          activityResponseBuilder.setSteps(queryResult[0].value.toInt())
        }
      }

      activityQueryResponse.add(
        activityResponseBuilder.build()
      )
    }

    return activityQueryResponse
  }


}
