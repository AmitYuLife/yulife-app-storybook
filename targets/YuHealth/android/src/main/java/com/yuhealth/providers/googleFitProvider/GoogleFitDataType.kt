package com.yuhealth.providers.googleFitProvider

import com.google.android.gms.fitness.data.DataPoint
import com.google.android.gms.fitness.data.DataSource
import com.google.android.gms.fitness.data.DataType
import com.google.android.gms.fitness.data.Field
import com.yuhealth.types.queries.HealthDataType

object GoogleFitDataType {
  fun getSampleRecordType(dataType: HealthDataType): DataType {
    return when (dataType) {
      HealthDataType.CALORIES -> DataType.TYPE_CALORIES_EXPENDED
      HealthDataType.HEART_RATE -> DataType.TYPE_HEART_RATE_BPM
      HealthDataType.DISTANCE -> DataType.TYPE_DISTANCE_DELTA
      else -> {
        throw Exception("Sample record type not implemented for $dataType")
      }
    }
  }

  fun getAggregateRecordType(dataType: HealthDataType): DataType {
    return when (dataType) {
      HealthDataType.CALORIES -> DataType.AGGREGATE_CALORIES_EXPENDED
      HealthDataType.HEART_RATE -> DataType.AGGREGATE_HEART_RATE_SUMMARY
      HealthDataType.DISTANCE -> DataType.AGGREGATE_DISTANCE_DELTA
      else -> {
        throw Exception("Aggregate record type not implemented for $dataType")
      }
    }
  }

  fun getStepCountDataSource(): DataSource {
    return DataSource.Builder()
      .setDataType(DataType.TYPE_STEP_COUNT_DELTA)
      .setType(DataSource.TYPE_DERIVED)
      .setStreamName("estimated_steps")
      .setAppPackageName("com.google.android.gms")
      .build()
  }

  fun extractValue(fields: List<Field>, dataPoint: DataPoint): Double {
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
}
