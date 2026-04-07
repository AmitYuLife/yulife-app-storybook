package com.yuhealth.providers.healthConnectProvider

import android.util.Log
import androidx.annotation.RequiresApi
import androidx.health.connect.client.permission.HealthPermission
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.DistanceRecord
import androidx.health.connect.client.records.ExerciseSessionRecord
import androidx.health.connect.client.records.HeartRateRecord
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.WheelchairPushesRecord
import com.yuhealth.types.HealthProviderCapabilities

object HealthConnectCapability {
  @RequiresApi(34)
  fun translateCapabilityToPermission(capability: HealthProviderCapabilities?): ArrayList<String> {
    val permissions = ArrayList<String>()
    when (capability) {
      HealthProviderCapabilities.STEP_COUNT -> {
        permissions.add(HealthPermission.getReadPermission(StepsRecord::class))
      }

      HealthProviderCapabilities.CALORIES -> {
        permissions.add(HealthPermission.getReadPermission(ActiveCaloriesBurnedRecord::class))
      }

      HealthProviderCapabilities.ACTIVITIES -> {
        permissions.add(HealthPermission.getReadPermission(DistanceRecord::class))
        // TODO: Disabled as not used in YuLife yet & we can't pass review when requesting this
        // permissions.add(HealthPermission.getReadPermission(ActiveCaloriesBurnedRecord::class))
        permissions.add(HealthPermission.getReadPermission(ExerciseSessionRecord::class))
      }

      HealthProviderCapabilities.WORKOUT_MINUTES -> {
        permissions.add(HealthPermission.getReadPermission(ExerciseSessionRecord::class))
      }

      HealthProviderCapabilities.CYCLING_DISTANCE -> {
        permissions.add(HealthPermission.getReadPermission(ExerciseSessionRecord::class))
        permissions.add(HealthPermission.getReadPermission(DistanceRecord::class))
      }

      HealthProviderCapabilities.HEART_RATE -> {
        permissions.add(HealthPermission.getReadPermission(HeartRateRecord::class))
      }

      HealthProviderCapabilities.WHEELCHAIR_PUSHES -> {
        permissions.add(HealthPermission.getReadPermission(WheelchairPushesRecord::class))
      }

      HealthProviderCapabilities.MINDFUL_MINUTES -> {
        permissions.add(HealthPermission.getReadPermission(ExerciseSessionRecord::class))
      }

      else -> {
        Log.e("YuHealthModule", "Unsupported capability passed to HealthConnect: $capability")
      }
    }

    return permissions
  }

  @RequiresApi(34)
  fun getPermissionsFromCapabilities(capabilities: List<HealthProviderCapabilities>): ArrayList<String> {
    val permissions = HashSet<String>()
    capabilities.forEach { capability ->
      permissions.addAll(translateCapabilityToPermission(capability))
    }

    return ArrayList(permissions)
  }
}
