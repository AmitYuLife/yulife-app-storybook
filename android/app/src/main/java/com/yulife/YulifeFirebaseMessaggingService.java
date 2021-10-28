package com.yulife;

import com.google.firebase.messaging.RemoteMessage;
import com.mixpanel.android.mpmetrics.MixpanelFCMMessagingService;

import java.util.Map;
import android.content.Intent;

import com.intercom.reactnative.IntercomModule;

public class YulifeFirebaseMessaggingService extends MixpanelFCMMessagingService {

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
            }
        }
    }
}