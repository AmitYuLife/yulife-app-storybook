package com.yulife;

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
}