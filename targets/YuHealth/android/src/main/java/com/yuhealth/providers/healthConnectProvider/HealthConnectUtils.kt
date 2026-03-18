package com.yuhealth.providers.healthConnectProvider

import androidx.health.connect.client.records.metadata.DataOrigin

object HealthConnectUtils {
  fun getWhitelistApps(whitelistApps: Set<String>?): Set<DataOrigin> {
    val dataOrigins = try {
      whitelistApps?.map { origin ->
        DataOrigin(origin)
      }?.toSet() ?: emptySet()
    } catch (e: Exception) {
      emptySet()
    }

    return dataOrigins;
  }
}
