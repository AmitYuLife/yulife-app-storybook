package com.yulife;

import com.cmcewen.blurview.BlurViewPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
                // eg. new VectorIconsPackage()
                new BlurViewPackage(),
                new SvgPackage()
        );
    }
}
