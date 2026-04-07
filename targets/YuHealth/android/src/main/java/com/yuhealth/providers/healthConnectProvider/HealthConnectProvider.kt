package com.yuhealth.yuhealth.providers.healthConnectProvider

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import android.app.Activity
import androidx.annotation.RequiresApi
import androidx.health.connect.client.HealthConnectClient
import com.facebook.react.bridge.ReactContext
import com.yuhealth.HealthProvider
import com.yuhealth.events.LogEvent
import com.yuhealth.logger.NativeLogger
import com.yuhealth.providers.healthConnectProvider.HealthConnectCapability
import com.yuhealth.providers.healthConnectProvider.HealthConnectPermissionManager
import com.yuhealth.providers.healthConnectProvider.queries.HealthConnectActivityQuery
import com.yuhealth.providers.healthConnectProvider.queries.HealthConnectAggregateQuery
import com.yuhealth.providers.healthConnectProvider.queries.HealthConnectSampleQuery
import com.yuhealth.types.HealthProviderAvailabilityStatus
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.Permission
import com.yuhealth.types.permissions.PermissionStatus
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class HealthConnectProvider(val context: ReactContext) : HealthProvider {
  override val providerName: String = "HealthConnect"
  override val supportsDisconnect: Boolean = true;

  private val healthConnectClient = try {
    HealthConnectClient.getOrCreate(context)
  } catch (e: Exception) {
    null
  }

  val sampleQuery = HealthConnectSampleQuery(healthConnectClient, this)
  val aggregateQuery = HealthConnectAggregateQuery(healthConnectClient, this)
  val activityQuery = HealthConnectActivityQuery(healthConnectClient, this)

  private val healthConnectPermissionManager = healthConnectClient?.let {
    HealthConnectPermissionManager(context, it)
  }

  override val capabilities: Array<HealthProviderCapabilities> = arrayOf(
    HealthProviderCapabilities.STEP_COUNT,
    HealthProviderCapabilities.CYCLING_DISTANCE,
    HealthProviderCapabilities.CALORIES,
    HealthProviderCapabilities.ACTIVITIES,
    HealthProviderCapabilities.HEART_RATE,
    HealthProviderCapabilities.WORKOUT_MINUTES,
    HealthProviderCapabilities.WHEELCHAIR_PUSHES,
    HealthProviderCapabilities.MINDFUL_MINUTES
  )

  override suspend fun getAvailabilityStatus(): HealthProviderAvailabilityStatus {
    val availabilityStatus = HealthConnectClient.getSdkStatus(context)
    if (availabilityStatus == HealthConnectClient.SDK_UNAVAILABLE) {
      return HealthProviderAvailabilityStatus.NOT_AVAILABLE
    }

    if (availabilityStatus == HealthConnectClient.SDK_UNAVAILABLE_PROVIDER_UPDATE_REQUIRED) {
      return HealthProviderAvailabilityStatus.UPDATE_REQUIRED
    }

    return HealthProviderAvailabilityStatus.AVAILABLE
  }

  @RequiresApi(34)
  override suspend fun hasPermissions(capabilities: List<HealthProviderCapabilities>): Map<HealthProviderCapabilities, PermissionStatus> {
    val permissionResponse = mutableMapOf<HealthProviderCapabilities, PermissionStatus>()
    val supportedCapabilities = capabilities.filter { it in this.capabilities }
    val unsupportedCapabilities = capabilities.minus(supportedCapabilities.toSet())

    unsupportedCapabilities.forEach { permissionResponse[it] = PermissionStatus.UNSUPPORTED }

    if(supportedCapabilities.isEmpty()) {
      return permissionResponse.toMap()
    }

    val hasPermissionsResponse = this.healthConnectPermissionManager!!.hasPermissions(supportedCapabilities)
    return permissionResponse + hasPermissionsResponse
  }

  @RequiresApi(34)
  override suspend fun checkCapabilityPermission(capabilities: List<HealthProviderCapabilities>): List<Permission> {
    val response = mutableListOf<Permission>()

    val permissions = hasPermissions(capabilities)

    for (permission in permissions) {
      HealthProviderCapabilities.translateToPermissionIdentifier(permission.key)?.let {
        response.add(Permission(it, permission.value, permission.key))
      }
    }

    return response
  }

  @RequiresApi(34)
  override suspend fun requestPermissions(capabilities: List<HealthProviderCapabilities>): Boolean =
    suspendCoroutine { continuation ->
      CoroutineScope(Dispatchers.Main).launch {
        val healthConnectPermissions =
          HealthConnectCapability.getPermissionsFromCapabilities(capabilities)

        healthConnectPermissionManager!!.requestPermissions(
          context.currentActivity!!,
          healthConnectPermissions,
          object : HealthConnectPermissionManager.ResultListener {
            override fun onResult(resultCode: Int, grantedPermissions: Set<String>) {
              val hasAllPermissions = grantedPermissions.containsAll(healthConnectPermissions)
              if (resultCode == Activity.RESULT_OK && hasAllPermissions) {
                continuation.resume(true)
              } else {
                continuation.resume(false)
              }
            }
          }
        )
      }
    }

  @RequiresApi(34)
  override suspend fun aggregateQuery(request: AggregateQueryParams): List<AggregateQueryResponse> {
    return aggregateQuery.performQuery(request)
  }

  @RequiresApi(34)
  override suspend fun sampleQuery(request: SampleQueryParams): List<SampleQueryResponse> {
    return sampleQuery.performQuery(request)
  }

  @RequiresApi(34)
  override suspend fun activityQuery(request: ActivityQueryParams): List<ActivityQueryResponse> {
    return activityQuery.performQuery(request)
  }

  override suspend fun disconnect(): Boolean {
    if(healthConnectClient === null){
      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Health connect provider disconnect failed: health connect client not found"))
      return false
    }

    try {
      healthConnectClient.permissionController.revokeAllPermissions()
      return true
    } catch(e: Exception){
      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Health connect provider disconnected failed ${e.message}"))
      return false
    }
  }
}


