package com.yuhealth.providers.googleFitProvider.queries

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import com.google.android.gms.fitness.Fitness
import com.google.android.gms.fitness.data.DataPoint
import com.google.android.gms.fitness.data.DataSource
import com.google.android.gms.fitness.data.DataType
import com.google.android.gms.fitness.data.Field
import com.google.android.gms.fitness.request.DataReadRequest
import com.google.android.gms.fitness.result.DataReadResponse
import com.google.android.gms.tasks.Tasks
import com.yuhealth.YuHealthUtil.Companion.shouldIncludeDatapoint
import com.yuhealth.providers.googleFitProvider.GoogleFitDataType
import com.yuhealth.providers.googleFitProvider.GoogleFitPermissionManager
import com.yuhealth.providers.googleFitProvider.GoogleFitUtilities.Companion.isUserEntered
import com.yuhealth.types.HealthActivityType
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import com.yuhealth.yuhealth.providers.googleFitProvider.GoogleFitProvider
import org.joda.time.DateTime
import java.util.concurrent.TimeUnit

class GoogleFitSampleQuery(
  private val googleFitPermissionManager: GoogleFitPermissionManager,
  private val googleFitProvider: GoogleFitProvider
) {
  suspend fun performQuery(request: SampleQueryParams): List<SampleQueryResponse> {
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

  private fun processResponse(
    request: SampleQueryParams,
    response: DataReadResponse
  ): List<SampleQueryResponse> {
    val result = mutableListOf<SampleQueryResponse>()
    for (dataSet in response.dataSets) {
      for (dataPoint in dataSet.dataPoints) {
        val appPackageName = dataPoint.originalDataSource.appPackageName ?: "unknown"
        val streamIdentifier = dataPoint.originalDataSource.streamIdentifier
        val isUserEntered = isUserEntered(streamIdentifier)
        val includeDatapoint =
          shouldIncludeDatapoint(request.queryOptions, appPackageName, isUserEntered)

        if (!includeDatapoint) continue

        val sampleResponse = SampleQueryResponse.Builder()
          .setStartTime(DateTime(dataPoint.getStartTime(TimeUnit.MILLISECONDS)))
          .setEndTime(DateTime(dataPoint.getEndTime(TimeUnit.MILLISECONDS)))
          .setBundleIdentifier(appPackageName)
          .setIsUserEntered(isUserEntered)
          .setValue(extractValue(dataPoint.dataType.fields, dataPoint))
          .build()

        result.add(sampleResponse)
      }
    }

    return result
  }

  private fun extractValue(fields: List<Field>, dataPoint: DataPoint): Double {
    for (field in fields) {
      return when (field.name) {
        "steps" -> dataPoint.getValue(field).asInt().toDouble()
        "distance" -> dataPoint.getValue(field).asFloat().toDouble()
        "calories" -> dataPoint.getValue(field).asFloat().toDouble()
        else -> 0.0
      }
    }

    return 0.0
  }

  private fun buildRequest(request: SampleQueryParams): DataReadRequest {
    val fitRequest = DataReadRequest.Builder()
    fitRequest.setTimeRange(
      request.startTime.millis,
      request.endTime.millis,
      TimeUnit.MILLISECONDS
    )

    if (request.dataType == HealthDataType.STEP_COUNT) {
      val dataSource = DataSource.Builder()
        .setDataType(DataType.TYPE_STEP_COUNT_DELTA)
        .setType(DataSource.TYPE_DERIVED)
        .setStreamName("estimated_steps")
        .setAppPackageName("com.google.android.gms")
        .build()

      fitRequest.read(dataSource)
    } else {
      fitRequest.read(GoogleFitDataType.getSampleRecordType(request.dataType))
    }

    return fitRequest.build()
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

    val activities = googleFitProvider.activityQuery.performQuery(
      activityRequest, listOf(type)
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

    val cyclingActivities = googleFitProvider.activityQuery.performQuery(
      activityRequest, listOf(HealthDataType.DISTANCE)
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
}
