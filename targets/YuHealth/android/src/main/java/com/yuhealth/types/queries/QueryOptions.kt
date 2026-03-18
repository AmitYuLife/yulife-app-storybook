package com.yuhealth.types.queries

import android.util.Log
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.types.HealthActivityType
import java.util.ArrayList

class QueryOptions(
  val blacklistApps: List<String> = emptyList(),
  val whitelistApps: Set<String>? = null,
  val whitelistActivityTypes: List<HealthActivityType>? = null,
  val disableUserEntries: Boolean = false
) {
  companion object {
    fun toQueryOptions(options: ReadableMap?): QueryOptions {
      val blacklistApps = try {
        options?.getArray("blacklistApps")?.toArrayList()?.map {
          it.toString()
        } ?: emptyList()
      } catch (e: Exception) {
        emptyList()
      }

      val whitelistApps = try {
        (options?.getArray("whitelistApps")?.toArrayList()?.map {
          it.toString()
        })?.toSet()
      } catch (e: Exception) {
        null
      }

      val whitelistActivityTypes = try {
        val activityTypes = options?.getArray("whitelistActivityTypes")?.toArrayList()
        if (activityTypes.isNullOrEmpty()) null
        else translateActivityTypes(activityTypes)
      } catch (e: Exception) {
        null
      }

      val disableUserEntries = try {
        options?.getBoolean("disableUserEntries") ?: false
      } catch (e: Exception) {
        false
      }

      return QueryOptions(
        blacklistApps,
        whitelistApps,
        whitelistActivityTypes,
        disableUserEntries,
      )
    }

    private fun translateActivityTypes(activityTypes: ArrayList<Any?>?): List<HealthActivityType>? {
      if (activityTypes == null) {
        return null
      }

      val activitiesList: MutableList<HealthActivityType> = mutableListOf()
      for (capability in activityTypes) {
        try {
          val convertedCapability = HealthActivityType.valueOf(capability as String)
          activitiesList.add(convertedCapability)
        } catch (e: IllegalArgumentException) {
          Log.d("YuHealthModule", "Invalid type passed to translateActivityTypes: $capability")
        }
      }

      return activitiesList.toList()
    }
  }
}
