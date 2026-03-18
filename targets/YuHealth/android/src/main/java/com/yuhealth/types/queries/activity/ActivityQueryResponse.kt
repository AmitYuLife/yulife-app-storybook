package com.yuhealth.types.queries.activity

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.yuhealth.types.HealthActivityType
import org.joda.time.DateTime

data class ActivityQueryResponse(
  val startTime: DateTime,
  val endTime: DateTime,
  val bundleIdentifier: String,
  val calories: Double,
  val steps: Int,
  val duration: Int,
  val distance: Double,
  val activityType: HealthActivityType,
  val isUserEntered: Boolean,
) {

  class Builder {

    private var startTime: DateTime? = null
    private var endTime: DateTime? = null
    private var bundleIdentifier: String? = null
    private var calories: Double = 0.0
    private var duration: Int = 0
    private var steps: Int = 0
    private var isUserEntered: Boolean = false
    private var distance: Double = 0.0
    private var activityType: HealthActivityType? = null

    fun setStartTime(startTime: DateTime) = apply { this.startTime = startTime }
    fun setEndTime(endTime: DateTime) = apply { this.endTime = endTime }
    fun setBundleIdentifier(bundleIdentifier: String) =
      apply { this.bundleIdentifier = bundleIdentifier }

    fun setCalories(calories: Double) = apply { this.calories = calories }
    fun setDuration(duration: Int) = apply { this.duration = duration }
    fun setSteps(steps: Int) = apply { this.steps = steps }
    fun setDistance(distance: Double) = apply { this.distance = distance }
    fun setActivityType(activityType: HealthActivityType) =
      apply { this.activityType = activityType }

    fun setIsUserEntered(isUserEntered: Boolean) = apply { this.isUserEntered = isUserEntered }

    fun build(): ActivityQueryResponse {
      requireNotNull(startTime) { "Field startTime is required" }
      requireNotNull(endTime) { "Field endTime is required" }
      requireNotNull(bundleIdentifier) { "Field bundleIdentifier is required" }
      requireNotNull(activityType) { "Field activityType is required" }

      return ActivityQueryResponse(
        startTime = startTime!!,
        endTime = endTime!!,
        bundleIdentifier = bundleIdentifier!!,
        calories = calories,
        steps = steps,
        duration = duration,
        distance = distance,
        activityType = activityType!!,
        isUserEntered = isUserEntered
      )
    }
  }

  companion object {
    fun toResponse(result: List<ActivityQueryResponse>?): WritableMap? {
      val response = Arguments.createMap()
      val responseItems = Arguments.createArray()
      if (result != null) {
        for (item in result) {
          val responseItem = Arguments.createMap()
          responseItem.putString("startTime", item.startTime.toString())
          responseItem.putString("endTime", item.endTime.toString())
          responseItem.putString("activity", item.activityType.activityName)
          responseItem.putString("bundleIdentifier", item.bundleIdentifier)
          responseItem.putBoolean("isUserEntered", item.isUserEntered)
          responseItem.putDouble("calories", item.calories)
          responseItem.putInt("steps", item.steps)
          responseItem.putDouble("distance", item.distance)
          responseItems.pushMap(responseItem)
        }
      }

      response.putArray("result", responseItems)
      return response
    }
  }
}
