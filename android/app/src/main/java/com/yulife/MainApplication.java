package com.yulife;

import com.cmcewen.blurview.BlurViewPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.mixpanel.android.mpmetrics.MixpanelAPI;
import com.reactnativenavigation.NavigationApplication;
import com.robinpowered.react.Intercom.IntercomPackage;
import com.kevinejohn.RNMixpanel.RNMixpanel;

import java.util.Arrays;
import java.util.List;

import io.intercom.android.sdk.Intercom;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        // Intercom
        Intercom.initialize(this, BuildConfig.INTERCOM_API_KEY_ANDROID, BuildConfig.INTERCOM_APP_ID);

        // Mixpanel
        MixpanelAPI mixpanel = MixpanelAPI.getInstance(this, BuildConfig.MIXPANEL_API_TOKEN);
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
                new RNMixpanel(),
                new BlurViewPackage(),
                new SvgPackage(),
                new ReactNativeConfigPackage(),
                new IntercomPackage()
        );
    }
}
