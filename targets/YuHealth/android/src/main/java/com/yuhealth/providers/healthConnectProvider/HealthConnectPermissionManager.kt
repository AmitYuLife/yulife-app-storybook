package com.yuhealth.providers.healthConnectProvider

import android.app.Activity
import android.content.Intent
import androidx.annotation.RequiresApi
import androidx.health.connect.client.HealthConnectClient
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.ReactContext
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.PermissionStatus

class HealthConnectPermissionManager(
  private val reactContext: ReactContext,
  private val healthConnectClient: HealthConnectClient
) :
  ActivityEventListener {
  private var resultListener: ResultListener? = null
  private var grantedPermissions: MutableSet<String>? = null

  init {
    reactContext.addActivityEventListener(this)
  }

  @RequiresApi(34)
  suspend fun requestPermissions(
    activity: Activity,
    healthConnectPermissions: ArrayList<String>,
    listener: ResultListener
  ) {
    resultListener = listener

    val granted = healthConnectClient.permissionController.getGrantedPermissions()
    grantedPermissions = granted.toMutableSet()
    if (granted.containsAll(healthConnectPermissions)) {
      resultListener!!.onResult(Activity.RESULT_OK, healthConnectPermissions.toSet())
      return
    }

    HealthConnectPermissionDelegate.launch(healthConnectPermissions.toSet()).let {
      resultListener?.onResult(Activity.RESULT_OK, grantedPermissions!! + it.toSet())
    }
  }

  @RequiresApi(34)
  suspend fun hasPermissions(
    capabilities: List<HealthProviderCapabilities>,
    supportsMindfulness: Boolean = false
  ): Map<HealthProviderCapabilities, PermissionStatus> {
    val granted = healthConnectClient.permissionController.getGrantedPermissions()
    val permissionResponse = mutableMapOf<HealthProviderCapabilities, PermissionStatus>()

    for (capability in capabilities) {
      val permissions = HealthConnectCapability.translateCapabilityToPermission(capability, supportsMindfulness)
      permissionResponse[capability] =
        if (granted.containsAll(permissions)) PermissionStatus.GRANTED else PermissionStatus.DENIED
    }

    return permissionResponse.toMap()
  }

  override fun onActivityResult(p0: Activity?, p1: Int, p2: Int, p3: Intent?) {
    // Ignored
  }

  override fun onNewIntent(intent: Intent) {}

  interface ResultListener {
    fun onResult(resultCode: Int, grantedPermissions: Set<String>)
  }
}
