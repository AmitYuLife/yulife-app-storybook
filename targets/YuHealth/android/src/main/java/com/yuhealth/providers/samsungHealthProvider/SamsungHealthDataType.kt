package com.yuhealth.providers.samsungHealthProvider

import com.samsung.android.sdk.healthdata.HealthConstants.StepCount
import com.yuhealth.types.queries.HealthDataType

object SamsungHealthDataType {


  fun getRecordType(dataType: HealthDataType): String {
    return when (dataType) {
      HealthDataType.STEP_COUNT -> StepCount.HEALTH_DATA_TYPE
      else -> {
        throw Exception("Aggregate record type not implemented for $dataType")
      }
    }
  }
}
