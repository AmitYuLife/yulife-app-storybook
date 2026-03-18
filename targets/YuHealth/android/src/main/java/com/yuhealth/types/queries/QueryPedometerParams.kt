package com.yuhealth.types.queries

import android.util.Log
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.convertReadableMapToWritableMap
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import org.joda.time.DateTime

data class QueryPedometerParams(
  val startTime: DateTime,
  val endTime: DateTime,
  val queryOptions: QueryOptions,
) {
  companion object {
    fun toAggregateQueryParams(params: ReadableMap): AggregateQueryParams? {
      return try {
        val writableMapParams = params.convertReadableMapToWritableMap()
        writableMapParams.putString("dataType", HealthDataType.STEP_COUNT.dataType)

        AggregateQueryParams.fromRequest(writableMapParams)
      } catch (e: Exception) {
        Log.e("YuHealthModule", "Error parsing query pedometer from date request", e);
        null;
      }
    }
  }
}
