package com.yuhealth.providers.samsungHealthProvider

import android.util.Log
import com.samsung.android.sdk.healthdata.HealthConstants
import com.samsung.android.sdk.healthdata.HealthPermissionManager
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.PermissionIdentifier

object SamsungHealthCapability {
  fun translateCapabilityToPermission(capability: HealthProviderCapabilities?): Set<HealthPermissionManager.PermissionKey> {
    val permissions = mutableSetOf<HealthPermissionManager.PermissionKey>()

    when (capability) {
      HealthProviderCapabilities.STEP_COUNT -> {
        permissions.add(
          HealthPermissionManager.PermissionKey(
            HealthConstants.StepCount.HEALTH_DATA_TYPE,
            HealthPermissionManager.PermissionType.READ
          )
        )
        permissions.add(
          HealthPermissionManager.PermissionKey(
            HealthConstants.StepDailyTrend.HEALTH_DATA_TYPE,
            HealthPermissionManager.PermissionType.READ
          )
        )
      }

      HealthProviderCapabilities.ACTIVITIES,
      HealthProviderCapabilities.WORKOUT_MINUTES,
      HealthProviderCapabilities.CALORIES,
      HealthProviderCapabilities.CYCLING_DISTANCE
      -> {
        permissions.add(
          HealthPermissionManager.PermissionKey(
            HealthConstants.Exercise.HEALTH_DATA_TYPE,
            HealthPermissionManager.PermissionType.READ
          )
        )
      }

      HealthProviderCapabilities.HEART_RATE,
      -> {
        permissions.add(
          HealthPermissionManager.PermissionKey(
            HealthConstants.HeartRate.HEALTH_DATA_TYPE,
            HealthPermissionManager.PermissionType.READ
          )
        )
      }

      else -> {
        Log.e("YuHealthModule", "Unsupported capability passed to SamsungHealth: $capability")
      }
    }

    return permissions.toSet()
  }

  fun translateToPermissionIdentifier(
    dataType: String,
    capability: HealthProviderCapabilities
  ): PermissionIdentifier? {
    return when {
      dataType == HealthConstants.StepCount.HEALTH_DATA_TYPE -> PermissionIdentifier.STEP_COUNT
      dataType == HealthConstants.StepDailyTrend.HEALTH_DATA_TYPE -> PermissionIdentifier.STEP_DAILY_TREND
      dataType == HealthConstants.Exercise.HEALTH_DATA_TYPE && capability == HealthProviderCapabilities.ACTIVITIES -> PermissionIdentifier.ACTIVITIES
      dataType == HealthConstants.Exercise.HEALTH_DATA_TYPE && capability == HealthProviderCapabilities.CALORIES -> PermissionIdentifier.CALORIES
      dataType == HealthConstants.Exercise.HEALTH_DATA_TYPE && capability == HealthProviderCapabilities.CYCLING_DISTANCE -> PermissionIdentifier.CYCLING_DISTANCE
      dataType == HealthConstants.HeartRate.HEALTH_DATA_TYPE -> PermissionIdentifier.HEART_RATE
      else -> {
        Log.e(
          "YuHealthModule",
          "Unsupported capability or data type passed to Samsung Health: capability ($capability), data type ($dataType)"
        )
        null
      }
    }
  }


  fun getPermissionsFromCapabilities(capabilities: List<HealthProviderCapabilities>): Set<HealthPermissionManager.PermissionKey> {
    val permissions = mutableSetOf<HealthPermissionManager.PermissionKey>()
    capabilities.forEach { capability ->
      permissions.addAll(translateCapabilityToPermission(capability))
    }

    return permissions.toSet()
  }
}
