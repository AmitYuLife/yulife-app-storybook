package com.yuhealth.types.queries.aggregate

import android.util.Log
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import org.joda.time.DateTime

data class AggregateQueryParams(
  val startTime: DateTime,
  val endTime: DateTime,
  val queryOptions: QueryOptions,
  val bucketConfig: BucketSize?,
  val dataType: HealthDataType,
) {
  companion object {
    fun fromRequest(params: ReadableMap?): AggregateQueryParams? {
      try {
        val startTime = params?.getString("startTime");
        val endTime = params?.getString("endTime");
        val dataType = params?.getString("dataType");
        val options = params?.getMap("queryOptions")
        val bucketConfig = params?.getMap("bucketConfig")

        val parsedDataType = HealthDataType.translateDataType(dataType!!)
        val parsedQueryOptions = QueryOptions.toQueryOptions(options)
        val parsedBucketConfig =
          if (bucketConfig != null) BucketSize.toBucketSize(bucketConfig) else null;

        val startDateTime = DateTime(startTime)
        val endDateTime = DateTime(endTime)

        return AggregateQueryParams(
          startDateTime,
          endDateTime,
          parsedQueryOptions,
          parsedBucketConfig,
          parsedDataType!!
        )
      } catch (e: Exception) {
        Log.e("YuHealthModule", "Error parsing aggregateQuery request", e);
        return null;
      }
    }
  }
}
