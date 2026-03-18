package com.yuhealth.logger

import android.util.Log
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.yuhealth.events.LogEvent

class NativeLogger private constructor(val context: ReactContext) {
  companion object {
    private var instance: NativeLogger? = null

    fun initLogger(context: ReactContext): NativeLogger {
      if (instance == null) {
        instance = NativeLogger(context)
      }

      return instance!!
    }

    fun getInstance(): NativeLogger? {
      if (instance == null) {
        Log.d("YuHealthNativeLogger", "not initialized")
      }

      return instance
    }

  }

  fun emitNativeEvent(event: LogEvent) {
    Log.d("YuHealthNativeLogger", event.eventName.event)
    context
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(event.eventName.event, event.toWriteableMap())
  }
}
