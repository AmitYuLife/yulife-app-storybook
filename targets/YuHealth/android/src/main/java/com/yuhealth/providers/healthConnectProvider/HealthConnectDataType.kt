package com.yuhealth.providers.healthConnectProvider

import androidx.annotation.RequiresApi
import androidx.health.connect.client.aggregate.AggregateMetric
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.DistanceRecord
import androidx.health.connect.client.records.HeartRateRecord
import androidx.health.connect.client.records.Record
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.WheelchairPushesRecord
import com.yuhealth.types.queries.HealthDataType
import kotlin.reflect.KClass

object HealthConnectDataType {
  @RequiresApi(34)
  fun getSampleRecordType(dataType: HealthDataType): KClass<out Record> {
    return when (dataType) {
      HealthDataType.CALORIES -> ActiveCaloriesBurnedRecord::class
      HealthDataType.STEP_COUNT -> StepsRecord::class
      HealthDataType.HEART_RATE -> HeartRateRecord::class
      HealthDataType.DISTANCE -> DistanceRecord::class
      HealthDataType.WHEELCHAIR_PUSHES -> WheelchairPushesRecord::class
      else -> {
        throw Exception("Sample record type not implemented for $dataType")
      }
    }
  }

  fun getAggregateRecordType(dataType: HealthDataType): AggregateMetric<Comparable<*>> {
    return when (dataType) {
      HealthDataType.STEP_COUNT -> StepsRecord.COUNT_TOTAL
      HealthDataType.CALORIES -> ActiveCaloriesBurnedRecord.ACTIVE_CALORIES_TOTAL
      HealthDataType.HEART_RATE -> HeartRateRecord.BPM_AVG
      HealthDataType.DISTANCE -> DistanceRecord.DISTANCE_TOTAL
      HealthDataType.WHEELCHAIR_PUSHES -> WheelchairPushesRecord.COUNT_TOTAL
      else -> {
        throw Exception("Aggregate record type not implemented for $dataType")
      }
    }
  }
}
