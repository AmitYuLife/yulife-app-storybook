package com.yuhealth

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap

abstract class YuHealthSpec internal constructor(context: ReactApplicationContext) :
  ReactContextBaseJavaModule(context) {

  abstract fun addListener(eventName: String)

  abstract fun removeListeners(count: Double)

  abstract fun getAvailabilityStatus(promise: Promise?)

  abstract fun getCapabilities(promise: Promise?)

  abstract fun getPermissionStatusOfCapabilities(capabilities: ReadableArray?, promise: Promise?)

  abstract fun setActiveProvider(provider: String?, promise: Promise)

  abstract fun requestPermissions(
    capabilities: ReadableArray?,
    provider: String?,
    promise: Promise?
  )

  abstract fun hasPermissions(capabilities: ReadableArray?, provider: String?, promise: Promise?)

  abstract fun getActiveProvider(promise: Promise?)

  abstract fun startPedometer(params: ReadableMap?, promise: Promise?)

  abstract fun stopPedometer(promise: Promise?)

  abstract fun sampleQuery(params: ReadableMap?, promise: Promise?)

  abstract fun aggregateQuery(params: ReadableMap?, promise: Promise?)

  abstract fun activityQuery(params: ReadableMap?, promise: Promise?)

  abstract fun queryPedometerFromDate(params: ReadableMap?, promise: Promise?)

  abstract fun supportsDisconnect(provider: String?, promise: Promise?)

  abstract fun disconnect(provider: String?, promise: Promise?)

  abstract fun startForegroundService(serviceConfig: ReadableMap?, promise: Promise?)

  abstract fun stopForegroundService(promise: Promise?)

  abstract fun isForegroundServiceRunning(promise: Promise?)

  abstract fun getForegroundSteps(promise: Promise?)
}
