const fs = require("fs");
const { withDangerousMod } = require("@expo/config-plugins");

// This combines Leanplum and Intercom push notifications

const FIREBASE_MESSAGING = (packageName) => `package ${packageName};

import androidx.annotation.NonNull;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.leanplum.LeanplumFirebaseServiceHandler;

import java.util.Map;
import android.content.Intent;

import com.intercom.reactnative.IntercomModule;

public class YulifeFirebaseMessaggingService extends FirebaseMessagingService {
    private final LeanplumFirebaseServiceHandler handler = new LeanplumFirebaseServiceHandler();

    @Override
    public void onCreate() {
        super.onCreate();
        handler.onCreate(getApplicationContext());
    }

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        handler.onNewToken(token, getApplicationContext());
        IntercomModule.sendTokenToIntercom(getApplication(), token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (IntercomModule.isIntercomPush(remoteMessage)) {
            IntercomModule.handleRemotePushMessage(getApplication(), remoteMessage);
        } else {
            handler.onMessageReceived(remoteMessage, getApplicationContext());
        }
    }
}`;

module.exports = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      fs.writeFileSync(
        `./android/app/src/main/java/${config.android.package.replace(
          /\./g,
          "/"
        )}/YulifeFirebaseMessaggingService.java`,
        FIREBASE_MESSAGING(config.android.package)
      );
      return config;
    },
  ]);
};
