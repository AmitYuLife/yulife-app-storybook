package com.yuhealth.providers.samsungHealthProvider

import android.util.Log
import com.samsung.android.sdk.healthdata.HealthConnectionErrorResult
import com.samsung.android.sdk.healthdata.HealthDataStore
import com.yuhealth.events.LogEvent
import com.yuhealth.logger.NativeLogger
import com.yuhealth.types.HealthProviderAvailabilityStatus
import kotlin.coroutines.resume

class SamsungHealthConnectionListener(private val samsungHealthProvider: SamsungHealthProvider) :
  HealthDataStore.ConnectionListener {
  private val TAG: String = SamsungHealthConnectionListener::class.java.simpleName

  override fun onConnected() {
    Log.d(TAG, "Samsung Health connected")
    if(!samsungHealthProvider.hasConnectionListenerResponded) {
      samsungHealthProvider.hasConnectionListenerResponded = true
      samsungHealthProvider.availabilityContinuation?.resume(HealthProviderAvailabilityStatus.AVAILABLE)
    }
  }

  override fun onConnectionFailed(error: HealthConnectionErrorResult) {
    if (error.hasResolution()) {
      val availabilityStatus = when (error.errorCode) {
        HealthConnectionErrorResult.PLATFORM_NOT_INSTALLED -> HealthProviderAvailabilityStatus.NOT_AVAILABLE
        HealthConnectionErrorResult.OLD_VERSION_PLATFORM -> HealthProviderAvailabilityStatus.UPDATE_REQUIRED
        HealthConnectionErrorResult.PLATFORM_DISABLED -> HealthProviderAvailabilityStatus.NOT_AVAILABLE
        HealthConnectionErrorResult.USER_AGREEMENT_NEEDED -> HealthProviderAvailabilityStatus.NOT_AVAILABLE
        else -> HealthProviderAvailabilityStatus.NOT_AVAILABLE
      }

      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung Health connection failed. Error code: ${error.errorCode}"));
      Log.d(TAG, "Samsung Health connection failed with status: $availabilityStatus")

       if(!samsungHealthProvider.hasConnectionListenerResponded) {
         samsungHealthProvider.hasConnectionListenerResponded = true
         samsungHealthProvider.availabilityContinuation?.resume(availabilityStatus)
       }

       return
    }

    Log.d(TAG, "Samsung Health connection failed without resolution available");
    NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Samsung Health connection failed without resolution: $error.errorCode"))

    if(!samsungHealthProvider.hasConnectionListenerResponded) {
      samsungHealthProvider.hasConnectionListenerResponded = true
      samsungHealthProvider.availabilityContinuation?.resume(HealthProviderAvailabilityStatus.NOT_AVAILABLE)
    }
  }

  override fun onDisconnected() {
    Log.d(TAG, "Samsung Health disconnected")
  }
}
