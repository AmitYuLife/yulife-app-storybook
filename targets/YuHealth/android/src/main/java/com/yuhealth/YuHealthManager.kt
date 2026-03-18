package com.yuhealth

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.yuhealth.events.LogEvent
import com.yuhealth.foreground.ForegroundServiceManager
import com.yuhealth.logger.NativeLogger
import com.yuhealth.pedometer.PedometerManager
import com.yuhealth.pedometer.StartPedometerParams
import com.yuhealth.providers.samsungHealthProvider.SamsungHealthProvider
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.Permission
import com.yuhealth.types.permissions.PermissionStatus
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import com.yuhealth.yuhealth.providers.googleFitProvider.GoogleFitProvider
import com.yuhealth.yuhealth.providers.healthConnectProvider.HealthConnectProvider

class YuHealthManager internal constructor(private var context: ReactApplicationContext) {
  var activeProvider: HealthProvider? = null
  private val pedometerManager = PedometerManager(context)
  private val foregroundServiceManager = ForegroundServiceManager(context)

  init {
    NativeLogger.initLogger(context)
  }

  private val healthProviders: Array<HealthProvider> = arrayOf(
    SamsungHealthProvider(context),
    HealthConnectProvider(context),
    GoogleFitProvider(context),
  )

  private fun emitEvent(event: YuHealthEvent) {
    Log.d("YuHealthModule", event.eventName.event)
    context
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(event.eventName.event, event.toWriteableMap())
  }

  suspend fun getAvailabilityStatus(): ReadableMap {
    val availabilityResponseMap = Arguments.createMap()
    for (healthProvider in healthProviders) {
      val status = healthProvider.getAvailabilityStatus()
      availabilityResponseMap.putString(healthProvider.providerName, status.status)
    }

    return availabilityResponseMap
  }

  fun getCapabilities(): ReadableMap {
    val capabilitiesResponse = Arguments.createMap()

    for (healthProvider in healthProviders) {
      val capabilities = Arguments.createArray()
      for (capability in healthProvider.capabilities) {
        capabilities.pushString(capability.capability)
      }

      capabilitiesResponse.putArray(healthProvider.providerName, capabilities)
    }

    return capabilitiesResponse
  }

  suspend fun getPermissionStatusOfCapabilities(): List<Permission>? {
    if (activeProvider == null) {
      return null
    }

    return activeProvider!!.checkCapabilityPermission(activeProvider!!.capabilities.toList())
  }


  private fun getProviderInstance(provider: String?): HealthProvider? {
    for (healthProvider in healthProviders) {
      if (healthProvider.providerName.equals(provider)) {
        return healthProvider
      }
    }

    return null
  }

  private fun getProviderInstanceToUse(provider: String?): HealthProvider? {
    if (provider == null) {
      return activeProvider
    }

    return getProviderInstance(provider)
  }

  suspend fun sampleQuery(params: SampleQueryParams): List<SampleQueryResponse>? {
    if (activeProvider == null) return null

    val capabilityRequired = HealthDataType.translateToCapability(params.dataType)

    val hasPermissions = activeProvider?.hasPermissions(listOf(capabilityRequired))
    if (hasPermissions?.get(capabilityRequired) != PermissionStatus.GRANTED) {
      Log.e("YuHealthModule", "No permission for capability: " + capabilityRequired.capability)
      return null
    }

    val result = activeProvider?.sampleQuery(params)
    Log.d("YuHealthModule", "sampleQuery result: " + result.toString())

    return result
  }

  suspend fun activityQuery(params: ActivityQueryParams): List<ActivityQueryResponse>? {
    if (activeProvider == null) return null

    // Check we have the permission
    val hasPermissions =
      activeProvider?.hasPermissions(listOf(HealthProviderCapabilities.ACTIVITIES))
    if (hasPermissions?.get(HealthProviderCapabilities.ACTIVITIES) != PermissionStatus.GRANTED) {
      // We don't have permission
      Log.e("YuHealthModule", "No permission for activity capability!")
      return null
    }

    val result = activeProvider?.activityQuery(params)
    Log.d("YuHealthModule", "activityQuery result: " + result.toString())

    return result
  }

  suspend fun aggregateQuery(params: AggregateQueryParams): List<AggregateQueryResponse>? {
    if (activeProvider == null) return null

    val capabilityRequired = HealthDataType.translateToCapability(params.dataType)
    val hasPermissions = activeProvider?.hasPermissions(listOf(capabilityRequired))
    if (hasPermissions?.get(capabilityRequired) != PermissionStatus.GRANTED) {
      Log.e("YuHealthModule", "No permission for capability: " + capabilityRequired.capability)
      return null
    }

    val result = activeProvider?.aggregateQuery(params)
    Log.d("YuHealthModule", "sampleQuery result: " + result.toString())

    return result
  }

  suspend fun requestPermissions(
    capabilities: List<HealthProviderCapabilities>,
    provider: String?,
  ): Boolean {
    val activeProvider = getProviderInstanceToUse(provider)
      ?: throw Throwable("requestPermissions() called without provider")

    return activeProvider.requestPermissions(capabilities)
  }

  suspend fun hasPermissions(
    capabilities: List<HealthProviderCapabilities>,
    provider: String?,
  ): Map<HealthProviderCapabilities, PermissionStatus> {
    val activeProvider = getProviderInstanceToUse(provider)
      ?: throw Throwable("hasPermissions() called without provider")

    return activeProvider.hasPermissions(capabilities)
  }

  fun setActiveProvider(provider: String?) {
    Log.d("YuHealthModule", "setProvider")

    var providerInstance = getProviderInstance(provider)
    if (providerInstance == null) {
      providerInstance = getProviderInstance("GoogleFit")
      // TODO: Select good provider to use with getAvailabilityPermissions
    }

    Log.d("YuHealthModule", "Provider set to: " + providerInstance.toString())

    this.activeProvider = providerInstance!!
  }

  suspend fun queryPedometerFromDate(params: AggregateQueryParams): AggregateQueryResponse {
    if (activeProvider == null) {
      throw Throwable("queryPedometerFromDate() called without provider")
    }

    val response = activeProvider!!.aggregateQuery(params)

    if (response.isEmpty()) {
      return AggregateQueryResponse(params.startTime, params.endTime, 0.0)
    }

    return response.first()
  }

  suspend fun startPedometer(pedometerParams: StartPedometerParams) {
    if (activeProvider == null) {
      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("startPedometer() called without active provider"))
      return
    }
    val todayAggregateQueryParams = AggregateQueryParams(
      startTime = pedometerParams.startTime,
      endTime = pedometerParams.endTime,
      queryOptions = pedometerParams.queryOptions,
      dataType = HealthDataType.STEP_COUNT,
      bucketConfig = null
    )

    val todayStepsBeforeSubscribe = activeProvider!!.aggregateQuery(todayAggregateQueryParams)

    pedometerManager.startPedometer(
      pedometerParams = pedometerParams,
      todayStepsBeforeSubscribe = AggregateQueryResponse.sumValues(todayStepsBeforeSubscribe)
        .toInt(),
      emitEvent = ::emitEvent
    )
  }

  fun stopPedometer() {
    pedometerManager.stopPedometer()
  }

  suspend fun disconnect(provider: String?) {
    val activeProvider = getProviderInstanceToUse(provider)
      ?: throw Throwable("disconnect() called without provider")

    activeProvider.disconnect()
  }

  fun supportsDisconnect(provider: String?): Boolean {
    val activeProvider = getProviderInstanceToUse(provider)
      ?: throw Throwable("supportsDisconnect() called without provider")

    return activeProvider.supportsDisconnect
  }

  fun startForegroundService(serviceConfig: ReadableMap?): Boolean {
    return foregroundServiceManager.startForegroundService(serviceConfig)
  }

  fun stopForegroundService(): Boolean {
    return foregroundServiceManager.stopForegroundService()
  }

  fun isForegroundServiceRunning(): Boolean {
    return foregroundServiceManager.isServiceRunning()
  }

  fun getForegroundSteps(): Int {
    return YuHealthGlobal.getForegroundSteps()
  }
}
