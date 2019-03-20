package com.yulife;

import com.google.firebase.messaging.RemoteMessage;
import com.mixpanel.android.mpmetrics.MixpanelFCMMessagingService;

import java.util.Map;

import io.intercom.android.sdk.push.IntercomPushClient;

public class YulifeFirebaseMessaggingService extends MixpanelFCMMessagingService {
    private IntercomPushClient intercomPushClient = new IntercomPushClient();

    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        intercomPushClient.sendTokenToIntercom(getApplication(), token);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Map message = remoteMessage.getData();

        if (message.containsKey("mp_message")) {
            // default if we don't set it in MP
            if (!message.containsKey("mc_icnm")) {
                message.put("mc_icnm", "intercom_push_icon");
            }
            super.onMessageReceived(remoteMessage);
        } else if (intercomPushClient.isIntercomPush(message)) {
            intercomPushClient.handlePush(getApplication(), message);
        }
    }
}