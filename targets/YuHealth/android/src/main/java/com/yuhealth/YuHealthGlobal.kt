package com.yuhealth

import android.content.Context
import com.yuhealth.foreground.ForegroundNotificationHelper

object YuHealthGlobal {
    private var foregroundSteps: Int = 0
    private var isForegroundServiceRunning: Boolean = false
    private var isPedometerRunning: Boolean = false
    private var appContext: Context? = null

    private const val PREFS_NAME = "YuHealthForegroundPrefs"
    private const val PREF_CURRENT_STEPS = "currentSteps"

    fun initialize(context: Context) {
        appContext = context.applicationContext
    }

    fun setNotificationIcon(iconResId: Int) {
        ForegroundNotificationHelper.setNotificationIcon(iconResId)
    }

    fun setNotificationColor(colorResId: Int) {
        ForegroundNotificationHelper.setNotificationColor(colorResId)
    }

    fun setForegroundSteps(steps: Int) {
        foregroundSteps = steps
    }

    fun getForegroundSteps(): Int {
        if (foregroundSteps > 0) {
            return foregroundSteps
        }

        val context = appContext ?: return 0
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        return prefs.getInt(PREF_CURRENT_STEPS, 0)
    }

    fun setForegroundServiceRunning(isRunning: Boolean) {
        isForegroundServiceRunning = isRunning
    }

    fun isForegroundServiceRunning(): Boolean {
        return isForegroundServiceRunning
    }

    fun setPedometerRunning(isRunning: Boolean) {
        isPedometerRunning = isRunning
    }

    fun isPedometerRunning(): Boolean {
        return isPedometerRunning
    }
}
