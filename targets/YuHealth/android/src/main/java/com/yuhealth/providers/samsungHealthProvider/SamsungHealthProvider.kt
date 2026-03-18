package com.yuhealth.providers.samsungHealthProvider

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import android.os.Handler
import android.os.Looper
import com.facebook.react.bridge.ReactContext
import com.samsung.android.sdk.healthdata.HealthDataResolver
import com.samsung.android.sdk.healthdata.HealthDataStore
import com.samsung.android.sdk.healthdata.HealthPermissionManager
import com.yuhealth.HealthProvider
import com.yuhealth.YuHealthUtil.Companion.suspendCoroutineWithTimeout
import com.yuhealth.events.LogEvent
import com.yuhealth.logger.NativeLogger
import com.yuhealth.providers.samsungHealthProvider.queries.SamsungHealthActivityQuery
import com.yuhealth.providers.samsungHealthProvider.queries.SamsungHealthAggregateQuery
import com.yuhealth.providers.samsungHealthProvider.queries.SamsungHealthSampleQuery
import com.yuhealth.types.HealthProviderAvailabilityStatus
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.Permission
import com.yuhealth.types.permissions.PermissionStatus
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import kotlin.coroutines.Continuation
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class SamsungHealthProvider(val context: ReactContext) : HealthProvider {
  private val TAG: String = SamsungHealthProvider::class.java.simpleName

  override val providerName: String = "SamsungHealth"
  override val supportsDisconnect: Boolean = false;
  private val connectionListener = SamsungHealthConnectionListener(this)

  override val capabilities: Array<HealthProviderCapabilities> = arrayOf(
    HealthProviderCapabilities.STEP_COUNT,
    HealthProviderCapabilities.CYCLING_DISTANCE,
    HealthProviderCapabilities.WORKOUT_MINUTES,
    HealthProviderCapabilities.ACTIVITIES,
  )

  private val healthStore: HealthDataStore = HealthDataStore(context, connectionListener)
  private val healthDataResolver: HealthDataResolver =
    HealthDataResolver(healthStore, Handler(Looper.getMainLooper()))

  val aggregateQuery = SamsungHealthAggregateQuery(healthDataResolver, this)
  val activityQuery = SamsungHealthActivityQuery(healthDataResolver)
  val sampleQuery = SamsungHealthSampleQuery(healthDataResolver, this)

  private val permissionManager = HealthPermissionManager(healthStore)
  private var isConnected = false

  var availabilityContinuation: Continuation<HealthProviderAvailabilityStatus>? = null
  var hasConnectionListenerResponded = false;

  override suspend fun getAvailabilityStatus(): HealthProviderAvailabilityStatus {
    if (isConnected) return HealthProviderAvailabilityStatus.AVAILABLE

    NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung Health get availability status called"))

    val result = suspendCoroutineWithTimeout(PROVIDER_AVAILABILITY_TIMEOUT) { continuation ->
      run {
        hasConnectionListenerResponded = false
        availabilityContinuation = continuation
        healthStore.connectService()
      }
    } ?: run {
      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung Health connection failed: Timeout reached"))
      HealthProviderAvailabilityStatus.NOT_AVAILABLE
    }

    hasConnectionListenerResponded = true
    availabilityContinuation = null

    if (result == HealthProviderAvailabilityStatus.AVAILABLE) {
      isConnected = true
    }

    return result
  }

  override suspend fun hasPermissions(requestedCapabilities: List<HealthProviderCapabilities>): Map<HealthProviderCapabilities, PermissionStatus> {
    val permissionResponse = mutableMapOf<HealthProviderCapabilities, PermissionStatus>()

    val supportedCapabilities = requestedCapabilities.filter { it in capabilities }
    val unsupportedCapabilities = requestedCapabilities.minus(supportedCapabilities)

    unsupportedCapabilities.forEach { permissionResponse[it] = PermissionStatus.UNSUPPORTED }

    if (supportedCapabilities.isEmpty()) {
      return permissionResponse.toMap()
    }

    val permissionsStatuses = getPermissionsStatus(supportedCapabilities)
    for (permissionStatus in permissionsStatuses) {
      val hasPermissions = permissionStatus.value.values.any { it === PermissionStatus.GRANTED }

      // We can continue asking indefinitely, so permission is NOT_ASKED
      permissionResponse[permissionStatus.key] =
        if (hasPermissions) PermissionStatus.GRANTED else PermissionStatus.NOT_ASKED
    }

    return permissionResponse.toMap()
  }

  override suspend fun checkCapabilityPermission(
    capabilities: List<HealthProviderCapabilities>
  ): List<Permission> {
    val response = mutableListOf<Permission>()

    val permissionsStatus = getPermissionsStatus(capabilities)

    for (permissionStatus in permissionsStatus) {
      for (permission in permissionStatus.value) {
        val capability = permissionStatus.key
        SamsungHealthCapability.translateToPermissionIdentifier(permission.key.dataType, capability)
          ?.let {
            response.add(Permission(it, permission.value, capability))
          }
      }
    }

    return response
  }

  private fun getPermissionsStatus(
    capabilities: List<HealthProviderCapabilities>
  ): Map<HealthProviderCapabilities, Map<HealthPermissionManager.PermissionKey, PermissionStatus>> {
    val permissionResponse =
      mutableMapOf<HealthProviderCapabilities, Map<HealthPermissionManager.PermissionKey, PermissionStatus>>()
    for (capability in capabilities) {
      val samsungHealthPermissions =
        SamsungHealthCapability.translateCapabilityToPermission(capability)

      val permissions = permissionManager.isPermissionAcquired(samsungHealthPermissions)

      permissionResponse[capability] = permissions.mapValues { entry ->
        if (entry.value) PermissionStatus.GRANTED else PermissionStatus.NOT_ASKED
      }
    }

    return permissionResponse
  }

  override suspend fun requestPermissions(capabilities: List<HealthProviderCapabilities>): Boolean {
    val samsungHealthPermissions =
      SamsungHealthCapability.getPermissionsFromCapabilities(capabilities)

    if (samsungHealthPermissions.isEmpty()) {
      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung Health permissions is empty"))
      return false;
    }

    val hasPermissions = suspendCoroutine { continuation ->
      context.currentActivity!!.runOnUiThread {
        runCatching {
          permissionManager.requestPermissions(samsungHealthPermissions, context.currentActivity)
        }
          .onFailure { e ->
            NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung Health error: " + e.message))
            continuation.resume(false)
          }
          .getOrNull()?.setResultListener { result ->
            val hasPermissions = result.resultMap.entries.map { it -> it.value }.all { it }

            NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung Health request permission success: $hasPermissions"))

            continuation.resume(hasPermissions)
          }
      }
    }

    return hasPermissions
  }

  override suspend fun aggregateQuery(request: AggregateQueryParams): List<AggregateQueryResponse> {
    return aggregateQuery.performQuery(request)
  }

  override suspend fun sampleQuery(request: SampleQueryParams): List<SampleQueryResponse> {
    return sampleQuery.performQuery(request)
  }

  override suspend fun activityQuery(request: ActivityQueryParams): List<ActivityQueryResponse> {
    return activityQuery.performQuery(request)
  }

  override suspend fun disconnect(): Boolean {
    NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung health disconnect() method not supported"))
    return false
  }

  companion object {
    private const val PROVIDER_AVAILABILITY_TIMEOUT = 60000L;
  }
}
