package com.yulife;

import com.google.firebase.messaging.RemoteMessage;
import com.mixpanel.android.mpmetrics.MixpanelFCMMessagingService;

import java.util.Map;
import android.content.Intent;

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

            Intent intent = remoteMessage.toIntent();
            
            if (!message.containsKey("mp_icnm")) {
                String iconName = "intercom_push_icon";
                intent.putExtra("mp_icnm", iconName);
                intent.putExtra("mp_icnm_w", iconName);
            }

            if (!message.containsKey("mp_color")) {
                intent.putExtra("mp_color", getResources().getString(R.color.yupink));
            }

            super.onMessageReceived(getApplicationContext(), intent);
        } else if (intercomPushClient.isIntercomPush(message)) {
            intercomPushClient.handlePush(getApplication(), message);
        }
    }
}