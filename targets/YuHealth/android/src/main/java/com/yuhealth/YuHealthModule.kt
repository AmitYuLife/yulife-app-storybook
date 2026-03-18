package com.yuhealth

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.events.LogEvent
import com.yuhealth.logger.NativeLogger
import com.yuhealth.pedometer.StartPedometerParams
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.Permission
import com.yuhealth.types.queries.QueryPedometerParams
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import kotlinx.coroutines.CoroutineExceptionHandler
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

private const val TAG = "YuHealthModule"

class YuHealthModule internal constructor(private var context: ReactApplicationContext) :
  YuHealthSpec(context) {
  var yuHealthManager = YuHealthManager(context)

  init {
    YuHealthGlobal.initialize(context)
  }

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  override fun addListener(eventName: String) {
    // Required definition for TurboModules
  }

  @ReactMethod
  override fun removeListeners(count: Double) {
    // Required definition for TurboModules
  }

  @OptIn(DelicateCoroutinesApi::class)
  @ReactMethod
  override fun getAvailabilityStatus(promise: Promise?) {
    Log.d(TAG, "getAvailabilityStatus")
    GlobalScope.launch {
      val availabilityResponse = yuHealthManager.getAvailabilityStatus()
      promise?.resolve(availabilityResponse)
    }
  }

  @ReactMethod
  override fun getCapabilities(promise: Promise?) {
    val capabilities = yuHealthManager.getCapabilities()
    promise?.resolve(capabilities)
  }

  @ReactMethod
  override fun getPermissionStatusOfCapabilities(capabilities: ReadableArray?, promise: Promise?) {
    val exceptionHandler = CoroutineExceptionHandler { _, exception ->
      promise?.reject(Throwable(exception.message))
    }

    CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
      val permissions = yuHealthManager.getPermissionStatusOfCapabilities()

      if (permissions == null) {
        promise?.reject(Throwable("Capabilities Permission can't be null"))
        return@launch
      }

      promise?.resolve(Permission.toResponse(permissions))
    }
  }

  @ReactMethod
  override fun setActiveProvider(provider: String?, promise: Promise) {
    Log.d(TAG, "setProvider")
    yuHealthManager.setActiveProvider(provider)
    promise.resolve(null)
  }

  @ReactMethod
  override fun requestPermissions(
    capabilities: ReadableArray?,
    provider: String?,
    promise: Promise?
  ) {
    if (capabilities == null) {
      promise?.reject(Throwable("Error parsing requestPermissions request"))
      return
    }

    val translatedCapabilities = HealthProviderCapabilities.translateCapabilities(capabilities)
    if (translatedCapabilities.isEmpty()) {
      Log.e("YuHealthModule", "hasPermissions: Capabilities not recognized")
      promise?.resolve(false)
      return
    }

    val exceptionHandler = CoroutineExceptionHandler { _, exception ->
      exception.message?.let { promise?.reject(Throwable("requestPermissions error: $it")) }
    }

    CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
      yuHealthManager.requestPermissions(translatedCapabilities, provider)

      val permissions = yuHealthManager.hasPermissions(translatedCapabilities, provider)
      promise?.resolve(HealthProviderCapabilities.toPermissionResponse(permissions))
    }
  }


  @ReactMethod
  override fun hasPermissions(capabilities: ReadableArray?, provider: String?, promise: Promise?) {
    if (capabilities == null) {
      promise?.resolve(true)
      Log.e("YuHealthModule", "hasPermissions: capabilities is null")
      return
    }

    val translatedCapabilities = HealthProviderCapabilities.translateCapabilities(capabilities)
    if (translatedCapabilities.isEmpty()) {
      Log.e("YuHealthModule", "hasPermissions: Capabilities not recognized")
      promise?.resolve(false)
      return
    }

    val exceptionHandler = CoroutineExceptionHandler { _, exception ->
      exception.message?.let { promise?.reject(Throwable("hasPermissions error: $it")) }
    }

    CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
      val permissions = yuHealthManager.hasPermissions(translatedCapabilities, provider)
      promise?.resolve(HealthProviderCapabilities.toPermissionResponse(permissions))
    }
  }


  @ReactMethod
  override fun getActiveProvider(promise: Promise?) {
    val activeProvider = yuHealthManager.activeProvider
    promise?.resolve(activeProvider?.providerName)
  }

  @ReactMethod
  @OptIn(DelicateCoroutinesApi::class)
  override fun startPedometer(params: ReadableMap?, promise: Promise?) {
    val pedometerParams = StartPedometerParams.fromRequest(params)
    if (pedometerParams == null) {
      promise?.reject(Throwable("Error parsing pedometerParams"))
      return
    }

    val exceptionHandler = CoroutineExceptionHandler { _, exception ->
      Log.d(TAG, "Starting pedometer failed $exception.message")
      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Failed to start pedometer $exception.message"))
      promise?.resolve(false)
    }

    CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
      yuHealthManager.startPedometer(pedometerParams)
      promise?.resolve(true)
    }
  }

  @ReactMethod
  override fun stopPedometer(promise: Promise?) {
    try {
      yuHealthManager.stopPedometer()
      promise?.resolve(true)
    } catch (e: Exception) {
      promise?.resolve(false)
    }
  }

  @ReactMethod
  @OptIn(DelicateCoroutinesApi::class)
  override fun queryPedometerFromDate(params: ReadableMap?, promise: Promise?) {
    if (params == null) {
      promise?.reject(Throwable("QueryPedometerFromDate called without params"))
      return
    }

    val exceptionHandler = CoroutineExceptionHandler { _, exception ->
      promise?.reject(Throwable(exception.message))
    }

    CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
      val aggregateQueryParams = QueryPedometerParams.toAggregateQueryParams(params)

      if (aggregateQueryParams == null) {
        promise?.reject(Throwable("Error parsing queryPedometerFromDate params"))
        return@launch
      }

      val aggregateResponse = yuHealthManager.queryPedometerFromDate(aggregateQueryParams)
      val response = AggregateQueryResponse.toResponse(aggregateResponse)

      promise?.resolve(response)
    }
  }

  @ReactMethod
  override fun sampleQuery(params: ReadableMap?, promise: Promise?) {
    try {
      val sampleRequest = SampleQueryParams.fromRequest(params)
      if (sampleRequest == null) {
        promise?.reject(Throwable("Error parsing sampleQuery request"))
        return
      }

      val exceptionHandler = CoroutineExceptionHandler { _, exception ->
        exception.message?.let { promise?.reject(Throwable("Sample query error: $it")) }
      }

      CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
        val sampleResponse = yuHealthManager.sampleQuery(sampleRequest)
        val response = SampleQueryResponse.toResponse(sampleResponse)
        promise?.resolve(response)
      }
    } catch (e: Exception) {
      promise?.reject(Throwable(e.message))
    }

  }

  @ReactMethod
  override fun aggregateQuery(params: ReadableMap?, promise: Promise?) {
    try {
      val aggregateRequest = AggregateQueryParams.fromRequest(params)
      if (aggregateRequest == null) {
        promise?.reject(Throwable("Error parsing aggregateQuery request"))
        return
      }

      val exceptionHandler = CoroutineExceptionHandler { _context, exception ->
        exception.message?.let { promise?.reject(Throwable("Aggregate query error: $it")) }
      }

      CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
        val aggregateResponse = yuHealthManager.aggregateQuery(aggregateRequest)
        val response = AggregateQueryResponse.toResponse(aggregateResponse)

        promise?.resolve(response)
      }
    } catch (e: Exception) {
      promise?.reject(Throwable("Error initializing aggregate query: ${e.message}"))
    }
  }

  @ReactMethod
  override fun activityQuery(params: ReadableMap?, promise: Promise?) {
    try {
      val activityQuery = ActivityQueryParams.fromRequest(params)
      if (activityQuery == null) {
        promise?.reject(Throwable("Error parsing activityQuery request"))
        return
      }

      val exceptionHandler = CoroutineExceptionHandler { _, exception ->
        exception.message?.let { promise?.reject(Throwable("Activity query error: $it")) }
      }

      CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
        val aggregateResponse = yuHealthManager.activityQuery(activityQuery)
        val response = ActivityQueryResponse.toResponse(aggregateResponse)

        promise?.resolve(response)
      }
    } catch (e: Exception) {
      promise?.reject(Throwable("Error initializing activity query: ${e.message}"))
    }
  }

  @ReactMethod
  override fun supportsDisconnect(provider: String?, promise: Promise?) {
    try {
      val disconnectSupported = yuHealthManager.supportsDisconnect(provider)

      promise?.resolve(disconnectSupported)
    } catch (e: Exception) {
      promise?.reject(Throwable("Error supports disconnect: ${e.message}"))
    }
  }

  @ReactMethod
  override fun disconnect(provider: String?, promise: Promise?) {
    try {
      val exceptionHandler = CoroutineExceptionHandler { _, exception ->
        exception.message?.let { promise?.reject(Throwable("Disconnect from provider: $it")) }
      }

      CoroutineScope(Dispatchers.IO + exceptionHandler).launch {
        yuHealthManager.disconnect(provider)
        promise?.resolve(true)
      }
    } catch (e: Exception) {
      promise?.reject(Throwable("Error disconnecting from provider: ${e.message}"))
    }
  }

  @ReactMethod
  override fun startForegroundService(serviceConfig: ReadableMap?, promise: Promise?) {
    try {
      CoroutineScope(Dispatchers.IO).launch {
        val result = yuHealthManager.startForegroundService(serviceConfig)
        promise?.resolve(result)
      }
    } catch(e: Exception) {
      promise?.reject(Throwable("Error starting foreground service: ${e.message}"))
    }
  }

  @ReactMethod
  override fun stopForegroundService(promise: Promise?) {
    CoroutineScope(Dispatchers.IO).launch {
      val result = yuHealthManager.stopForegroundService()
      promise?.resolve(result)
    }
  }

  @ReactMethod
  override fun isForegroundServiceRunning(promise: Promise?) {
    val isRunning = yuHealthManager.isForegroundServiceRunning()
    promise?.resolve(isRunning)
  }

  @ReactMethod
  override fun getForegroundSteps(promise: Promise?) {
    val steps = yuHealthManager.getForegroundSteps()
    promise?.resolve(steps)
  }

  companion object {
    const val NAME = "YuHealth"
  }
}
