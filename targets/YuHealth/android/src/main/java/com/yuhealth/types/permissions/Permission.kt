package com.yuhealth.types.permissions

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.yuhealth.types.HealthProviderCapabilities

data class Permission(val permissionIdentifier: PermissionIdentifier, val permissionStatus: PermissionStatus, val healthProviderCapability: HealthProviderCapabilities) {
  companion object {
    fun toResponse(result: List<Permission>): WritableMap? {
      val response = Arguments.createMap()
      val responseItems = Arguments.createArray()

      for (item in result) {
        val responseItem = Arguments.createMap()
        responseItem.putString("identifier", item.permissionIdentifier.indentifier)
        responseItem.putString("status", item.permissionStatus.status)
        responseItem.putString("capability", item.healthProviderCapability.capability)
        responseItems.pushMap(responseItem)
      }

      response.putArray("providerPermissions", responseItems)
      return response
    }
  }
}

