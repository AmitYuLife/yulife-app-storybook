const fs = require("fs");
const { withDangerousMod } = require("@expo/config-plugins");

// This combines Yulife and Intercom push notifications

const YULIFE_PUSH_HANDLER = (packageName) => `package ${packageName};

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.util.Log;
import androidx.core.app.NotificationCompat;
import com.google.firebase.messaging.RemoteMessage;
import java.util.Map;

public class YulifePushNotificationHandler {
    private static final String TAG = "YulifePushHandler";
    private static final String CHANNEL_ID = "yulife_notifications";
    private static final String CHANNEL_NAME = "Yulife Notifications";
    private static final String CHANNEL_DESCRIPTION = "Notifications from Yulife";
    
    private final Context context;
    
    public YulifePushNotificationHandler(Context context) {
        this.context = context;
        createNotificationChannel();
    }
    
    /**
     * Check if this is a Yulife-originated push notification
     */
    public boolean isYulifePush(RemoteMessage remoteMessage) {
        Map<String, String> data = remoteMessage.getData();
        if (data == null) {
            return false;
        }
        String yulifeValue = data.get("yulife");
        if (yulifeValue == null) {
            return false;
        }
        return yulifeValue.equals("1");
    }
    
    /**
     * Handle Yulife push notification
     */
    public void handlePushNotification(RemoteMessage remoteMessage) {
        if (!isYulifePush(remoteMessage)) {
            return;
        }
        
        Log.d(TAG, "Handling Yulife push notification");
        
        Map<String, String> data = remoteMessage.getData();

        // Log the full received data
        Log.d(TAG, "Received push data: " + data.toString());
        
        // Extract notification data
        String title = data.get("title");
        String body = data.get("message");
        String deeplink = data.get("deeplink");
        
        // Display the notification
        displayNotification(title, body, deeplink, data);
    }
    
    /**
     * Display the notification
     */
    private void displayNotification(String title, String body, String deeplink, Map<String, String> data) {
        NotificationManager notificationManager = 
            (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        
        if (notificationManager == null) {
            Log.e(TAG, "NotificationManager is null");
            return;
        }
        
        // Create intent for notification click
        Intent intent;
        
        if (deeplink != null) {
            // Use ACTION_VIEW with the URI for deep linking
            intent = new Intent(Intent.ACTION_VIEW, android.net.Uri.parse(deeplink));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        } else {
            // Fallback to just opening the app if no deeplink
            intent = new Intent(context, MainActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        }
        
        // Add all data as extras for additional context if needed
        for (Map.Entry<String, String> entry : data.entrySet()) {
            intent.putExtra(entry.getKey(), entry.getValue());
        }
        
        PendingIntent pendingIntent = PendingIntent.getActivity(
            context, 
            (int) System.currentTimeMillis(),
            intent, 
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );
        
        // Build the notification
        NotificationCompat.Builder notificationBuilder = 
            new NotificationCompat.Builder(context, CHANNEL_ID)
                .setContentTitle(title)
                .setContentText(body)
                .setAutoCancel(true)
                .setSmallIcon(R.drawable.notification_icon)
                .setColor(context.getResources().getColor(R.color.notification_icon_color))
                .setContentIntent(pendingIntent)
                .setPriority(NotificationCompat.PRIORITY_HIGH);
        
        // Set notification style for longer text
        if (body != null && body.length() > 50) {
            notificationBuilder.setStyle(new NotificationCompat.BigTextStyle().bigText(body));
        }
        
        // Generate unique notification ID based on current time
        int notificationId = (int) System.currentTimeMillis();
        
        // Show the notification
        notificationManager.notify(notificationId, notificationBuilder.build());
        
        Log.d(TAG, "Notification displayed with ID: " + notificationId);
    }
    
    /**
     * Create notification channel for Android O and above
     */
    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager notificationManager = 
                (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            
            if (notificationManager != null) {
                NotificationChannel channel = new NotificationChannel(
                    CHANNEL_ID,
                    CHANNEL_NAME,
                    NotificationManager.IMPORTANCE_HIGH
                );
                channel.setDescription(CHANNEL_DESCRIPTION);
                channel.enableLights(true);
                channel.setLightColor(Color.RED);
                channel.enableVibration(true);
                
                notificationManager.createNotificationChannel(channel);
                Log.d(TAG, "Notification channel created");
            }
        }
    }
}`;

const FIREBASE_MESSAGING = (packageName) => `package ${packageName};

import androidx.annotation.NonNull;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import java.util.Map;
import android.content.Intent;
import android.util.Log;

import com.intercom.reactnative.IntercomModule;

public class YulifeFirebaseMessagingService extends FirebaseMessagingService {
    private static final String TAG = "YulifeFirebaseMessaging";
    private YulifePushNotificationHandler yulifeHandler;

    @Override
    public void onCreate() {
        super.onCreate();
        yulifeHandler = new YulifePushNotificationHandler(getApplicationContext());
        Log.d(TAG, "Firebase Messaging Service created");
    }

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        Log.d(TAG, "New FCM token: " + token);
        IntercomModule.sendTokenToIntercom(getApplication(), token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.d(TAG, "Message received from: " + remoteMessage.getFrom());

        // Log full message data
        if (remoteMessage.getData() != null && !remoteMessage.getData().isEmpty()) {
            Log.d(TAG, "Received push data: " + remoteMessage.getData().toString());
        }

        // First, check if it's a Yulife backend notification
        if (yulifeHandler != null && yulifeHandler.isYulifePush(remoteMessage)) {
            Log.d(TAG, "Handling as Yulife push notification");
            yulifeHandler.handlePushNotification(remoteMessage);
        }
        // Then check if it's an Intercom push
        else if (IntercomModule.isIntercomPush(remoteMessage)) {
            Log.d(TAG, "Handling as Intercom push notification");
            IntercomModule.handleRemotePushMessage(getApplication(), remoteMessage);
        }
        else {
            Log.d(TAG, "Unhandled push notification from: " + remoteMessage.getFrom());
        }
    }
}`;

module.exports = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      const packagePath = config.android.package.replace(/\./g, "/");

      // Write YulifePushNotificationHandler
      fs.writeFileSync(
        `./android/app/src/main/java/${packagePath}/YulifePushNotificationHandler.java`,
        YULIFE_PUSH_HANDLER(config.android.package)
      );

      // Write YulifeFirebaseMessagingService
      fs.writeFileSync(
        `./android/app/src/main/java/${packagePath}/YulifeFirebaseMessagingService.java`,
        FIREBASE_MESSAGING(config.android.package)
      );

      return config;
    },
  ]);
};
