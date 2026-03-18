package com.yuhealth.foreground

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import android.util.Log
import androidx.core.app.NotificationCompat
import com.facebook.react.bridge.ReadableMap

class ForegroundNotificationHelper private constructor(private val context: Context) {
    companion object {
        private var instance: ForegroundNotificationHelper? = null

        fun getInstance(context: Context): ForegroundNotificationHelper {
            return instance ?: synchronized(this) {
                instance ?: ForegroundNotificationHelper(context.applicationContext).also { instance = it }
            }
        }

        private var channelCreated = false

        private var notificationIcon: Int? = null
        private var notificationColor: Int? = null

        fun setNotificationIcon(iconResId: Int) {
            notificationIcon = iconResId
        }

        fun setNotificationColor(colorResId: Int) {
            notificationColor = colorResId
        }
    }

    private val notificationManager: NotificationManager =
        context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

    fun buildNotification(context: Context, config: ReadableMap): Notification? {
        val mainActivityClass = getMainActivityClass(context) ?: return null

        val notificationIntent = Intent(context, mainActivityClass)
        val pendingIntent = PendingIntent.getActivity(
            context,
            0,
            notificationIntent,
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                PendingIntent.FLAG_IMMUTABLE
            } else {
                0
            }
        )

        val title = config.getString("title") ?: "YuHealth"
        val message = config.getString("message") ?: ""

        val priority = NotificationCompat.PRIORITY_DEFAULT
        val visibility = NotificationCompat.VISIBILITY_PUBLIC

        val channelName = config.getString("channelName") ?: "Steps"
        val channelDescription = "YuHealth background activities"

        checkOrCreateChannel(notificationManager, channelName, channelDescription)

        val notificationBuilder = NotificationCompat.Builder(context, ForegroundServiceConstants.NOTIFICATION_CHANNEL_ID)
            .setContentTitle(title)
            .setContentText(message)
            .setVisibility(visibility)
            .setPriority(priority)
            .setContentIntent(pendingIntent)
            .setOngoing(true)
            .setAutoCancel(false)
            .setStyle(NotificationCompat.BigTextStyle().bigText(message))

        if (notificationIcon != null) {
            notificationBuilder.setSmallIcon(notificationIcon!!)
        } else {
            Log.e("NotificationHelper", "No notification icon set. Call YuHealthGlobal.setNotificationIcon() first!")
            notificationBuilder.setSmallIcon(context.applicationInfo.icon)
        }

        if (notificationColor != null) {
            notificationBuilder.setColor(context.getColor(notificationColor!!))
        }

        return notificationBuilder.build()
    }

    private fun getMainActivityClass(context: Context): Class<*>? {
        val packageName = context.packageName
        val launchIntent = context.packageManager.getLaunchIntentForPackage(packageName)
        if (launchIntent?.component == null) {
            Log.e("NotificationHelper", "Failed to get launch intent or component")
            return null
        }
        return try {
            Class.forName(launchIntent.component!!.className)
        } catch (e: ClassNotFoundException) {
            Log.e("NotificationHelper", "Failed to get main activity class: ${e.message}")
            null
        }
    }

    private fun checkOrCreateChannel(
        manager: NotificationManager,
        channelName: String,
        channelDescription: String
    ) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return
        if (channelCreated) return

        val importance = NotificationManager.IMPORTANCE_LOW

        val channel = NotificationChannel(
            ForegroundServiceConstants.NOTIFICATION_CHANNEL_ID,
            channelName,
            importance
        ).apply {
            description = channelDescription
            enableLights(false)
            enableVibration(false)
            setShowBadge(false)
        }

        manager.createNotificationChannel(channel)
        channelCreated = true
    }
}
