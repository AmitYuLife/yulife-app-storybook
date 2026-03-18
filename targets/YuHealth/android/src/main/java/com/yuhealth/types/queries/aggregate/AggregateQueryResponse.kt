package com.yuhealth.types.queries.aggregate

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import org.joda.time.DateTime

data class AggregateQueryResponse(
  val startTime: DateTime,
  val endTime: DateTime,
  val value: Double
) {

  class Builder {
    private var startTime: DateTime? = null
    private var endTime: DateTime? = null
    private var value: Double? = null

    fun setStartTime(startTime: DateTime) = apply { this.startTime = startTime }
    fun setEndTime(endTime: DateTime) = apply { this.endTime = endTime }
    fun setValue(value: Double) = apply { this.value = value }

    fun build(): AggregateQueryResponse {
      requireNotNull(startTime) { "Field startTime is required" }
      requireNotNull(endTime) { "Field endTime is required" }
      requireNotNull(value) { "Field value is required" }

      return AggregateQueryResponse(
        startTime = startTime!!,
        endTime = endTime!!,
        value = value!!
      )
    }
  }

  companion object {
    fun toResponse(result: List<AggregateQueryResponse>?): WritableMap? {
      val response = Arguments.createMap()
      val responseItems = Arguments.createArray()
      if (result != null) {
        for (item in result) {
          val responseItem = toWritableMap(item)
          responseItems.pushMap(responseItem)
        }
      }

      response.putArray("result", responseItems)
      return response
    }

    fun toResponse(result: AggregateQueryResponse?): WritableMap? {
      val responseMap = Arguments.createMap()
      responseMap.putMap("result", toWritableMap(result))

      return responseMap
    }

    private fun toWritableMap(result: AggregateQueryResponse?): WritableMap? {
      val responseItem = Arguments.createMap()

      if (result != null) {
        responseItem.putString("startTime", result.startTime.toString())
        responseItem.putString("endTime", result.endTime.toString())
        responseItem.putDouble("value", result.value)
      }

      return responseItem
    }

    fun sumValues(result: List<AggregateQueryResponse>?): Double {
      return result?.sumOf { it.value } ?: 0.0
    }
  }
}
