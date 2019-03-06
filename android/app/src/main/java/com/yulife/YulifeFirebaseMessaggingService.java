package com.yulife;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;

import io.intercom.android.sdk.push.IntercomPushClient;

public class YulifeFirebaseMessaggingService extends FirebaseMessagingService {
    private IntercomPushClient intercomPushClient = new IntercomPushClient();

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);

        intercomPushClient.sendTokenToIntercom(getApplication(), token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Map message = remoteMessage.getData();

        if (intercomPushClient.isIntercomPush(message)) {
            intercomPushClient.handlePush(getApplication(), message);
        } else {
            super.onMessageReceived(remoteMessage);
        }
    }
}