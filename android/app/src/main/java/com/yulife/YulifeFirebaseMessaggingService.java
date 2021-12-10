package com.yulife;

import com.google.firebase.messaging.RemoteMessage;
import com.leanplum.LeanplumPushFirebaseMessagingService;

import java.util.Map;
import android.content.Intent;

import com.intercom.reactnative.IntercomModule;

public class YulifeFirebaseMessaggingService extends LeanplumPushFirebaseMessagingService {
    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        IntercomModule.sendTokenToIntercom(getApplication(), token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (IntercomModule.isIntercomPush(remoteMessage)) {
            IntercomModule.handleRemotePushMessage(getApplication(), remoteMessage);
        } else {
            super.onMessageReceived(remoteMessage);
        }
    }
}