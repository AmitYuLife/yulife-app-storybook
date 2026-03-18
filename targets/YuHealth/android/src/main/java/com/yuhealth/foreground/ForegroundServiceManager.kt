package com.yuhealth.foreground

import android.content.Intent
import android.os.Build
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.events.LogEvent
import com.yuhealth.foreground.ForegroundServiceConstants.ACTION_FOREGROUND_SERVICE_START
import com.yuhealth.foreground.ForegroundServiceConstants.ACTION_FOREGROUND_SERVICE_STOP
import com.yuhealth.foreground.ForegroundServiceConstants.ERROR_INVALID_CONFIG
import com.yuhealth.foreground.ForegroundServiceConstants.ERROR_SERVICE_ERROR
import com.yuhealth.foreground.ForegroundServiceConstants.SERVICE_CONFIG
import com.yuhealth.logger.NativeLogger

private const val TAG = "YUHEALTH_FG_MANAGER"

class ForegroundServiceManager(private val context: ReactApplicationContext) {
    init {
        ForegroundPedometerBroadcastReceiver.setReactContext(context)
    }

    fun startForegroundService(serviceConfig: ReadableMap?): Boolean {
        if (serviceConfig == null) {
            return false
        }

        if (isServiceRunning()) {
            stopForegroundService()
            Log.d(TAG, "Service was already running, killed")
        }

        try {
            val flattenedConfig = flattenCopyConfig(serviceConfig)
            val intent = createIntent(ACTION_FOREGROUND_SERVICE_START, flattenedConfig)
            startServiceCompat(intent)
            Log.d(TAG, "Service started")

        } catch (e: Exception) {
            Log.e(TAG, "Failed to start service: ${e.message}", e)
            NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Failed to start service: ${e.message}"))
        }

        return true
    }

    fun stopForegroundService(): Boolean {
        if (!isServiceRunning()) {
            Log.d(TAG, "Service not running, nothing to stop")
            return false
        }

        try {
            val intent = createIntent(ACTION_FOREGROUND_SERVICE_STOP)

            try {
                startServiceCompat(intent)
                Log.d(TAG, "Stop command sent")
                return true
            } catch (e: IllegalStateException) {
                context.stopService(intent)
                Log.d(TAG, "Service stopped via stopService")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Failed to stop service: ${e.message}", e)
            NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Failed to stop service: ${e.message}"))
        }

        return false
    }

    fun isServiceRunning(): Boolean = ForegroundService.isServiceRunning()

    fun onDestroy() {
        ForegroundPedometerBroadcastReceiver.clearReactContext()
    }

    private fun flattenCopyConfig(config: ReadableMap): ReadableMap {
        val flattenedMap = Arguments.createMap()
        val copyConfig = config.getMap("copyConfig")!!

        flattenedMap.putDouble("baseSteps", config.getDouble("baseSteps"))
        config.getString("endTime")?.let { flattenedMap.putString("endTime", it) }

        flattenedMap.putString("copyActiveTitle", copyConfig.getString("activeTitle"))
        flattenedMap.putString("copyActiveBody", copyConfig.getString("activeBody"))

        return flattenedMap
    }

    private fun createIntent(action: String, config: ReadableMap? = null): Intent {
        return Intent(context, ForegroundService::class.java).apply {
            this.action = action
            config?.let { putExtra(SERVICE_CONFIG, Arguments.toBundle(it)) }
        }
    }

    private fun startServiceCompat(intent: Intent) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            context.startForegroundService(intent)
        } else {
            context.startService(intent)
        }
    }
}
