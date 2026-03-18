package com.yuhealth.providers.googleFitProvider

import com.google.android.gms.fitness.data.DataType
import com.yuhealth.types.HealthProviderCapabilities

object GoogleFitCapability {
  fun translateCapabilityToPermission(capability: HealthProviderCapabilities?): ArrayList<DataType> {
    val permissions = ArrayList<DataType>()
    when (capability) {
      HealthProviderCapabilities.STEP_COUNT -> {
        permissions.add(DataType.TYPE_STEP_COUNT_DELTA)
        permissions.add(DataType.TYPE_STEP_COUNT_CUMULATIVE)
        permissions.add(DataType.AGGREGATE_STEP_COUNT_DELTA)
      }

      HealthProviderCapabilities.CALORIES -> {
        permissions.add(DataType.TYPE_CALORIES_EXPENDED)
        permissions.add(DataType.AGGREGATE_CALORIES_EXPENDED)
      }

      HealthProviderCapabilities.ACTIVITIES -> {
        permissions.add(DataType.TYPE_ACTIVITY_SEGMENT)
        permissions.add(DataType.AGGREGATE_ACTIVITY_SUMMARY)
      }

      HealthProviderCapabilities.CYCLING_DISTANCE -> {
        permissions.add(DataType.TYPE_ACTIVITY_SEGMENT)
        permissions.add(DataType.AGGREGATE_ACTIVITY_SUMMARY)
        permissions.add(DataType.TYPE_DISTANCE_DELTA)
        permissions.add(DataType.AGGREGATE_DISTANCE_DELTA)
      }

      HealthProviderCapabilities.HEART_RATE -> {
        permissions.add(DataType.TYPE_HEART_RATE_BPM)
        permissions.add(DataType.AGGREGATE_HEART_RATE_SUMMARY)
      }

      HealthProviderCapabilities.MINDFUL_MINUTES -> {
        permissions.add(DataType.AGGREGATE_ACTIVITY_SUMMARY)
        permissions.add(DataType.TYPE_ACTIVITY_SEGMENT)
      }

      else -> {}
    }

    return permissions
  }

  fun getPermissionsFromCapabilities(capabilities: List<HealthProviderCapabilities>): ArrayList<DataType> {
    val permissions = HashSet<DataType>()
    capabilities.forEach { capability ->
      permissions.addAll(translateCapabilityToPermission(capability))
    }

    return ArrayList(permissions)
  }
}
