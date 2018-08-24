package com.yulife;

import com.bugsnag.BugsnagReactNative;
import com.cmcewen.blurview.BlurViewPackage;
import com.facebook.soloader.SoLoader;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.mixpanel.android.mpmetrics.MixpanelAPI;
import com.reactnativenavigation.NavigationApplication;
import com.robinpowered.react.Intercom.IntercomPackage;
import com.kevinejohn.RNMixpanel.RNMixpanel;
import com.wwdrew.reactnative.RNDualPedometerPackage;
import com.yulife.reactnative.fitkit.RNFitKitPackage;

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

        // Bugsnag
        BugsnagReactNative.start(this);
        SoLoader.init(this, /* native exopackage */ false);
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
                new ReactNativeConfigPackage(),     // react-native
                new BlurViewPackage(),              // react-native-blur
                new SvgPackage(),                   // react-native-svg
                new RNMixpanel(),                   // react-native-mixpanel
                new IntercomPackage(),              // react-native-intercom
                BugsnagReactNative.getPackage(),    // bugsnag-react-native
                new RNDualPedometerPackage(),       // react-native-dual-pedometer
                new RNFitKitPackage()               // react-native-fitkit
        );
    }
}
