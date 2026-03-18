package com.yuhealth.types

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.WritableMap
import com.yuhealth.types.permissions.PermissionIdentifier
import com.yuhealth.types.permissions.PermissionStatus

enum class HealthProviderCapabilities(val capability: String) {
  STEP_COUNT("STEP_COUNT"),
  MINDFUL_MINUTES("MINDFUL_MINUTES"),
  WORKOUT_MINUTES("WORKOUT_MINUTES"),
  CYCLING_DISTANCE("CYCLING_DISTANCE"),
  HEART_RATE("HEART_RATE"),
  ACTIVITIES("ACTIVITIES"),
  DISTANCE("DISTANCE"),
  CALORIES("CALORIES"),
  WHEELCHAIR_PUSHES("WHEELCHAIR_PUSHES");

  companion object {
    fun translateCapabilities(capabilities: ReadableArray): List<HealthProviderCapabilities> {
      val capabilitiesList: MutableList<HealthProviderCapabilities> = mutableListOf()
      for (capability in capabilities.toArrayList()) {
        try {
          val convertedCapability = HealthProviderCapabilities.valueOf(capability as String)
          capabilitiesList.add(convertedCapability)
        } catch (e: IllegalArgumentException) {
          Log.d("YuHealthModule", "Invalid type passed to translateCapabilities: $capability")
        }
      }

      return capabilitiesList.toList()
    }

    fun toPermissionResponse(permissions: Map<HealthProviderCapabilities, PermissionStatus>): WritableMap {
      val responseMap = Arguments.createMap()
      permissions.forEach { (healthProviderCapabilities, permissionStatus) ->
        responseMap.putString(
          healthProviderCapabilities.capability,
          permissionStatus.status
        )
      }

      return responseMap
    }

    fun translateToPermissionIdentifier(capability: HealthProviderCapabilities?): PermissionIdentifier? {
      return when (capability) {
        STEP_COUNT -> PermissionIdentifier.STEP_COUNT
        CALORIES -> PermissionIdentifier.CALORIES
        ACTIVITIES -> PermissionIdentifier.ACTIVITIES
        CYCLING_DISTANCE -> PermissionIdentifier.CYCLING_DISTANCE
        HEART_RATE -> PermissionIdentifier.HEART_RATE
        MINDFUL_MINUTES -> PermissionIdentifier.MINDFUL_MINUTES
        WHEELCHAIR_PUSHES -> PermissionIdentifier.WHEELCHAIR_PUSHES
        WORKOUT_MINUTES -> PermissionIdentifier.WORKOUT_MINUTES
        else -> {
          Log.e("YuHealthModule", "Unsupported capability passed to Health provider: $capability")
          null
        }
      }
    }
  }
}

