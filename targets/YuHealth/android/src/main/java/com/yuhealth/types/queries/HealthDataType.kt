package com.yuhealth.types.queries

import android.util.Log
import com.facebook.react.bridge.ReadableArray
import com.yuhealth.types.HealthProviderCapabilities

enum class HealthDataType(val dataType: String) {
  CALORIES("CALORIES"),
  STEP_COUNT("STEP_COUNT"),
  CYCLING_DISTANCE("CYCLING_DISTANCE"),
  MINDFUL_MINUTES("MINDFUL_MINUTES"),
  DISTANCE("distance"),
  WORKOUT_MINUTES("WORKOUT_MINUTES"),
  HEART_RATE("HEART_RATE"),
  WHEELCHAIR_PUSHES("WHEELCHAIR_PUSHES");

  companion object {
    fun translateDataType(dataType: String): HealthDataType? {
      try {
        return HealthDataType.valueOf(dataType)
      } catch (e: IllegalArgumentException) {
        Log.d("YuHealthModule", "Unknown data type passed to translateDataType: $dataType")
        return null
      }
    }

    fun translateToCapability(dataType: HealthDataType): HealthProviderCapabilities {
      return when (dataType) {
        STEP_COUNT -> HealthProviderCapabilities.STEP_COUNT
        CALORIES -> HealthProviderCapabilities.CALORIES
        CYCLING_DISTANCE -> HealthProviderCapabilities.CYCLING_DISTANCE
        MINDFUL_MINUTES -> HealthProviderCapabilities.MINDFUL_MINUTES
        WORKOUT_MINUTES -> HealthProviderCapabilities.WORKOUT_MINUTES
        HEART_RATE -> HealthProviderCapabilities.HEART_RATE
        DISTANCE -> HealthProviderCapabilities.DISTANCE
        WHEELCHAIR_PUSHES -> HealthProviderCapabilities.WHEELCHAIR_PUSHES
      }
    }

    fun translateDataTypes(dataTypes: ReadableArray): List<HealthDataType> {
      val capabilitiesList: MutableList<HealthDataType> = mutableListOf()
      for (dataType in dataTypes.toArrayList()) {
        val convertedDataType = translateDataType(dataType as String)
        if (convertedDataType != null) {
          capabilitiesList.add(convertedDataType)
        }
      }

      return capabilitiesList.toList()
    }
  }
}

