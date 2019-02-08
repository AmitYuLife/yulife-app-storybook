package com.yulife;

import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.bugsnag.BugsnagReactNative;
import com.cmcewen.blurview.BlurViewPackage;
import com.facebook.soloader.SoLoader;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.mixpanel.android.mpmetrics.MixpanelAPI;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.robinpowered.react.Intercom.IntercomPackage;
import com.kevinejohn.RNMixpanel.RNMixpanel;
import com.testfairy.react.TestFairyPackage;
import com.wwdrew.reactnative.RNDualPedometerPackage;
import com.yulife.reactnative.fitkit.RNFitKitPackage;

import java.util.Arrays;
import java.util.List;

import io.intercom.android.sdk.Intercom;

public class MainApplication extends NavigationApplication {
    @Override
    protected ReactGateway createReactGateway() {
        NavigationReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index.android";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

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

        // Bugsnag
        BugsnagReactNative.start(this);
        SoLoader.init(this, /* native exopackage */ false);
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
                new ReactNativeConfigPackage(),             // react-native
                new BlurViewPackage(),                      // react-native-blur
                new SvgPackage(),                           // react-native-svg
                new RNMixpanel(),                           // react-native-mixpanel
                new RNDeviceInfo(),                         // react-native-device-info
                new IntercomPackage(),                      // react-native-intercom
                new ReactNativePushNotificationPackage(),   // react-native-push-notifications
                BugsnagReactNative.getPackage(),            // bugsnag-react-native
                new RNDualPedometerPackage(),               // react-native-dual-pedometer
                new RNFitKitPackage(),                      // react-native-fitkit
                new TestFairyPackage()                      // react-native-testfairy
        );
    }
}
