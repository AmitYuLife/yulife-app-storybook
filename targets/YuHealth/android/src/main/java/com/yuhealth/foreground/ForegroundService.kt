package com.yuhealth.foreground

import android.app.NotificationManager
import android.app.Service
import android.content.Context
import android.content.Intent
import android.hardware.SensorManager
import android.os.Build
import android.os.IBinder
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.yuhealth.YuHealthGlobal
import com.yuhealth.pedometer.StepSensor
import org.joda.time.DateTime

private const val TAG = "YUHEALTH_FG"
private const val NOTIFICATION_ID = 1001
private const val NOTIFICATION_CHANNEL_NAME = "Steps"
private const val PREFS_NAME = "YuHealthForegroundPrefs"
private const val PREF_END_TIME = "endTime"
private const val PREF_BASE_STEPS = "baseSteps"
private const val PREF_CURRENT_STEPS = "currentSteps"

data class NotificationCopyConfig(
  val activeTitle: String,
  val activeBody: String
)

class ForegroundService : Service() {

  companion object {
    @Volatile
    private var instance: ForegroundService? = null

    fun isServiceRunning(): Boolean = instance != null

    fun getInstance(): ForegroundService? = instance
  }

  private var sensorManager: SensorManager? = null
  private var currentStepSensor: StepSensor? = null
  private var notificationManager: NotificationManager? = null

  private var sensorStepCount: Int = 0
  private var baseSteps: Int = 0
  private var endTime: DateTime? = null

  private var notificationCopy: NotificationCopyConfig? = null

  override fun onCreate() {
    super.onCreate()
    instance = this
    sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
    notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    Log.d(TAG, "Service created")
  }

  override fun onDestroy() {
    super.onDestroy()
    stopPedometerDataCollection()

    instance = null
    YuHealthGlobal.setForegroundServiceRunning(false)

    notificationManager?.cancel(NOTIFICATION_ID)
    notificationManager = null
    Log.d(TAG, "Service destroyed")
  }

  override fun onBind(intent: Intent?): IBinder? = null

  override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
    if (intent == null) {
      Log.w(TAG, "Service started with null intent")
      return START_NOT_STICKY
    }

    when (intent.action) {
      ForegroundServiceConstants.ACTION_FOREGROUND_SERVICE_START -> handleStartService(intent)
      ForegroundServiceConstants.ACTION_FOREGROUND_SERVICE_STOP -> {
        handleStopService()
        return START_NOT_STICKY
      }
    }

    return START_REDELIVER_INTENT
  }

  private fun handleStartService(intent: Intent) {
    val config = intent.getBundleExtra(ForegroundServiceConstants.SERVICE_CONFIG)

    if (config == null) {
      Log.e(TAG, "Start service called with null config")
      stopSelf()
      return
    }

    try {
      baseSteps = config.getDouble("baseSteps", 0.0).toInt()

      notificationCopy = NotificationCopyConfig(
        activeTitle = config.getString("copyActiveTitle") ?: "",
        activeBody = config.getString("copyActiveBody") ?: ""
      )

      endTime = config.getString("endTime")?.let {
        try {
          DateTime(it)
        } catch (e: Exception) {
          Log.e(TAG, "Failed to parse endTime: ${e.message}")
          null
        }
      }

      val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
      val storedEndTimeMillis = prefs.getLong(PREF_END_TIME, 0)
      val storedEndTime = if (storedEndTimeMillis > 0) DateTime(storedEndTimeMillis) else null

      val currentEndTime = endTime

      if (storedEndTime != null && currentEndTime != null && storedEndTime.millis != currentEndTime.millis) {
        Log.d(TAG, "Different challenge detected, clearing stored data")
        clearStoredEndTime()
      }

      val persistedSteps = if (storedEndTime != null && currentEndTime != null && storedEndTime.millis == currentEndTime.millis) {
        prefs.getInt(PREF_CURRENT_STEPS, baseSteps)
      } else {
        baseSteps
      }
      sensorStepCount = persistedSteps

      saveToPrefs(currentEndTime, baseSteps, persistedSteps)
      Log.d(TAG, "Loaded persisted steps: $persistedSteps")

      val copy = notificationCopy ?: return
      val notification = ForegroundNotificationHelper.getInstance(applicationContext)
        .buildNotification(applicationContext, createNotificationConfig(replaceStepsTemplate(copy.activeTitle, baseSteps), copy.activeBody))

      if (notification == null) {
        Log.e(TAG, "Failed to build notification")
        stopSelf()
        return
      }

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
        startForeground(NOTIFICATION_ID, notification, android.content.pm.ServiceInfo.FOREGROUND_SERVICE_TYPE_DATA_SYNC)
      } else {
        startForeground(NOTIFICATION_ID, notification)
      }

      YuHealthGlobal.setForegroundServiceRunning(true)
      startPedometerDataCollection(baseSteps)
      onStepCountUpdated()


      Log.d(TAG, "Service started, baseSteps=$baseSteps")
    } catch (e: Exception) {
      Log.e(TAG, "Failed to start service: ${e.message}", e)
      stopSelf()
    }
  }

  private fun handleStopService() {
    Log.d(TAG, "Stopping service")
    stopPedometerDataCollection()

    YuHealthGlobal.setForegroundServiceRunning(false)

    stopForeground(true)
    stopSelf()
  }

  private fun broadcastPedometerUpdate(steps: Int) {
    val intent = Intent(ForegroundPedometerBroadcastReceiver.ACTION)
    intent.setPackage(packageName)
    intent.putExtra("steps", steps)
    sendBroadcast(intent)
    Log.d(TAG, "Broadcast sent: steps=$steps")
  }

  private fun startPedometerDataCollection(startingSteps: Int) {
    if (sensorManager == null) {
      Log.e(TAG, "SensorManager is null")
      return
    }

    sensorStepCount = startingSteps;

    val stepSensors = listOf(
      com.yuhealth.pedometer.StepCounter(),
      com.yuhealth.pedometer.StepDetector()
    )

    for (sensor in stepSensors) {
      if (sensor.isAvailable(sensorManager!!)) {
        currentStepSensor = sensor

        sensor.subscribe(
          todayStepsBeforeSubscribe = startingSteps,
          startTime = DateTime.now(),
          sensorManager = sensorManager!!,
          emitEvent = { allSteps, _ ->
            sensorStepCount = allSteps
            onStepCountUpdated()
          }
        )

        Log.d(TAG, "Pedometer started with sensor: ${sensor.sensorType}")
        return
      }
    }

    Log.w(TAG, "No step sensor available")
  }

  private fun stopPedometerDataCollection() {
    if (sensorManager != null) {
      currentStepSensor?.unsubscribe(sensorManager!!)
    }
    currentStepSensor = null
  }

  private fun onStepCountUpdated() {
    YuHealthGlobal.setForegroundSteps(sensorStepCount)

    saveCurrentStepsToPrefs(sensorStepCount)

    updateNotificationWithStepCount(sensorStepCount)

    if (YuHealthGlobal.isPedometerRunning()) {
      broadcastPedometerUpdate(sensorStepCount)
    }
  }

  private fun updateNotificationWithStepCount(totalSteps: Int) {
    val currentEndTime = endTime
    if (currentEndTime != null && DateTime.now().isAfter(currentEndTime)) {
      handleEndTimePass()
      return
    }

    val copy = notificationCopy ?: return
    notifyIfActive(
      createNotificationConfig(replaceStepsTemplate(copy.activeTitle, totalSteps), copy.activeBody)
    )
  }

  private fun handleEndTimePass() {
    Log.d(TAG, "Challenge ended, stopping service")
    stopPedometerDataCollection()
    YuHealthGlobal.setForegroundServiceRunning(false)

    stopForeground(true)
    stopSelf()
  }

  private fun replaceStepsTemplate(template: String, steps: Int): String {
    return template.replace("%{steps}", steps.toString())
  }

  private fun createNotificationConfig(title: String, message: String): WritableMap {
    return Arguments.createMap().apply {
      putDouble("id", NOTIFICATION_ID.toDouble())
      putString("title", title)
      putString("message", message)
      putString("channelName", NOTIFICATION_CHANNEL_NAME)
    }
  }

  private fun notifyIfActive(config: WritableMap) {
    try {
      val notification = ForegroundNotificationHelper.getInstance(applicationContext)
        .buildNotification(applicationContext, config)

      if (notification != null) {
        notificationManager?.notify(NOTIFICATION_ID, notification)
      } else {
        Log.w(TAG, "Failed to build notification")
      }
    } catch (e: Exception) {
      Log.e(TAG, "Failed to notify: ${e.message}", e)
    }
  }

  private fun saveToPrefs(endTime: DateTime?, baseSteps: Int, currentSteps: Int) {
    val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    prefs.edit().apply {
      if (endTime != null) {
        putLong(PREF_END_TIME, endTime.millis)
      } else {
        remove(PREF_END_TIME)
      }
      putInt(PREF_BASE_STEPS, baseSteps)
      putInt(PREF_CURRENT_STEPS, currentSteps)
      apply()
    }
    Log.d(TAG, "Saved to prefs: endTime=${endTime?.millis}, baseSteps=$baseSteps, currentSteps=$currentSteps")
  }

  private fun saveCurrentStepsToPrefs(currentSteps: Int) {
    val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    prefs.edit().apply {
      putInt(PREF_CURRENT_STEPS, currentSteps)
      apply()
    }
  }

  private fun clearStoredEndTime() {
    val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    prefs.edit().clear().apply()
    Log.d(TAG, "Cleared stored prefs")
  }
}
