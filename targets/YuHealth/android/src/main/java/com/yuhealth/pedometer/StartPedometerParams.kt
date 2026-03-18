package com.yuhealth.pedometer

import android.util.Log
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.types.queries.QueryOptions
import org.joda.time.DateTime

data class StartPedometerParams(
  val startTime: DateTime,
  val endTime: DateTime,
  val queryOptions: QueryOptions,
) {
  companion object {
    fun fromRequest(params: ReadableMap?): StartPedometerParams? {
      try {
        val startTime = params?.getString("startTime")
        val endTime = params?.getString("endTime")
        val options = params?.getMap("queryOptions")

        val parsedQueryOptions = QueryOptions.toQueryOptions(options)

        val startDateTime = DateTime(startTime)
        val endDateTime = DateTime(endTime)

        return StartPedometerParams(
          startDateTime,
          endDateTime,
          parsedQueryOptions,
        )
      } catch (e: Exception) {
        Log.e("PedometerParams", "Error parsing pedometer request", e)
        return null
      }
    }
  }
}
