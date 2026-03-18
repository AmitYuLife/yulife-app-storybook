package com.yuhealth.foreground

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.yuhealth.events.ForegroundPedometerUpdateEvent

private const val TAG = "YUHEALTH_FG_RECEIVER"

class ForegroundPedometerBroadcastReceiver : BroadcastReceiver() {
    companion object {
        const val ACTION = "com.yuhealth.FOREGROUND_PEDOMETER_UPDATE"
        private var reactContext: ReactApplicationContext? = null

        fun setReactContext(context: ReactApplicationContext) {
            reactContext = context
        }

        fun clearReactContext() {
            reactContext = null
        }
    }

    override fun onReceive(context: Context?, intent: Intent?) {
        if (intent?.action == ACTION) {
            val steps = intent.getIntExtra("steps", 0)
            Log.d(TAG, "Received broadcast with steps=$steps, reactContext=${reactContext != null}")
            emitPedometerUpdate(steps)
        }
    }

    private fun emitPedometerUpdate(steps: Int) {
        val context = reactContext
        if (context == null) {
            Log.w(TAG, "Cannot emit event, React context is null")
            return
        }

        try {
            val event = ForegroundPedometerUpdateEvent(steps)
            context
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit(event.eventName.event, event.toWriteableMap())
            Log.d(TAG, "Event emitted: steps=$steps")
        } catch (e: Exception) {
            Log.e(TAG, "Failed to emit pedometer update: ${e.message}", e)
        }
    }
}
