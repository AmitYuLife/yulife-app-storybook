package com.yuhealth.providers.googleFitProvider.queries

import ActivityQueryParams
import com.google.android.gms.fitness.Fitness
import com.google.android.gms.fitness.data.DataPoint
import com.google.android.gms.fitness.data.DataType
import com.google.android.gms.fitness.data.Field
import com.google.android.gms.fitness.request.DataReadRequest
import com.google.android.gms.fitness.result.DataReadResponse
import com.google.android.gms.tasks.Tasks
import com.yuhealth.YuHealthUtil.Companion.shouldIncludeDatapoint
import com.yuhealth.providers.googleFitProvider.GoogleFitActivityType
import com.yuhealth.providers.googleFitProvider.GoogleFitPermissionManager
import com.yuhealth.providers.googleFitProvider.GoogleFitUtilities.Companion.isUserEntered
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.yuhealth.providers.googleFitProvider.GoogleFitProvider
import org.joda.time.DateTime
import org.joda.time.Seconds
import java.util.concurrent.TimeUnit

class GoogleFitActivityQuery(
  private val googleFitPermissionManager: GoogleFitPermissionManager,
  private val googleFitProvider: GoogleFitProvider
) {
  suspend fun performQuery(
    request: ActivityQueryParams, fetchMetrics: List<HealthDataType> = listOf(
      HealthDataType.STEP_COUNT,
      HealthDataType.DISTANCE,
      HealthDataType.CALORIES
    )
  ): List<ActivityQueryResponse> {
    val fitRequest = buildRequest(request)

    val response = Fitness
      .getHistoryClient(
        googleFitProvider.context.currentActivity!!,
        googleFitPermissionManager.getAccount()!!
      )
      .readData(fitRequest)

    val result = Tasks.await(response)
    return processResponse(request, result, fetchMetrics)
  }


  private suspend fun processResponse(
    request: ActivityQueryParams,
    response: DataReadResponse,
    fetchMetrics: List<HealthDataType>
  ): List<ActivityQueryResponse> {
    val result = mutableListOf<ActivityQueryResponse>()

    // TODO: Refactor (processDataPoint func, etc)
    for (dataSet in response.dataSets) {
      for (dataPoint in dataSet.dataPoints) {
        val activityResponse = processDataPoint(dataPoint, fetchMetrics, request)
        if (activityResponse != null) {
          result.add(activityResponse)
        }
      }

    }

    return result
  }

  private suspend fun processDataPoint(
    dataPoint: DataPoint,
    fetchMetrics: List<HealthDataType>,
    request: ActivityQueryParams
  ): ActivityQueryResponse? {
    val startTime = DateTime(dataPoint.getStartTime(TimeUnit.MILLISECONDS))
    val endTime = DateTime(dataPoint.getEndTime(TimeUnit.MILLISECONDS))

    val activityType = dataPoint.getValue(Field.FIELD_ACTIVITY).asActivity()
    val healthActivityType = GoogleFitActivityType.getHealthActivityType(activityType)
    val packageName = dataPoint.originalDataSource.appPackageName ?: "unknown"
    val isUserEntry = isUserEntered(dataPoint.originalDataSource.streamIdentifier)

    val includeActivity =
      shouldIncludeDatapoint(request.queryOptions, packageName, isUserEntry, healthActivityType)

    if (!includeActivity) return null

    val activityBuilderResponse = ActivityQueryResponse.Builder()
      .setStartTime(startTime)
      .setEndTime(endTime)
      .setBundleIdentifier(packageName)
      .setActivityType(healthActivityType)
      .setIsUserEntered(isUserEntry)

    for (metric in fetchMetrics) {
      if (metric === HealthDataType.MINDFUL_MINUTES || metric === HealthDataType.WORKOUT_MINUTES) {
        val durationInSeconds = Seconds.secondsBetween(startTime, endTime).seconds
        activityBuilderResponse.setDuration(durationInSeconds)
        continue
      }

      val aggregateRequest =
        AggregateQueryParams(
          DateTime(startTime),
          DateTime(endTime),
          bucketConfig = null,
          dataType = metric,
          queryOptions = request.queryOptions
        )

      val queryResult = googleFitProvider.aggregateQuery(aggregateRequest)
      if (queryResult.isEmpty()) {
        continue
      }

      if (metric == HealthDataType.DISTANCE) {
        activityBuilderResponse.setDistance(queryResult[0].value)
      }

      if (metric == HealthDataType.CALORIES) {
        activityBuilderResponse.setCalories(queryResult[0].value)
      }

      if (metric == HealthDataType.STEP_COUNT) {
        activityBuilderResponse.setSteps(queryResult[0].value.toInt())
      }
    }


    return activityBuilderResponse.build()
  }

  private fun buildRequest(request: ActivityQueryParams): DataReadRequest {
    val fitRequest = DataReadRequest.Builder()
    fitRequest.setTimeRange(
      request.startTime.millis,
      request.endTime.millis,
      TimeUnit.MILLISECONDS
    )

    fitRequest.read(DataType.TYPE_ACTIVITY_SEGMENT)

    return fitRequest.build()
  }
}
