package com.yulife;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactInstanceManager;
import com.leanplum.annotations.Parser;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationPackage;
import com.facebook.react.ReactNativeHost;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

import com.yulife.reactnative.fitkit.RNFitKitPackage;
import com.leanplum.Leanplum;
import com.leanplum.LeanplumActivityHelper;
import com.bugsnag.BugsnagReactNative;
import com.mixpanel.android.mpmetrics.MixpanelAPI;
import com.intercom.reactnative.IntercomModule;

public class MainApplication extends NavigationApplication {

  private final ReactNativeHost mReactNativeHost = new NavigationReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for
      // example:
      // packages.add(new MyReactNativePackage());
      packages.add(new RNFitKitPackage());
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();

    // Intercom
    IntercomModule.initialize(this, BuildConfig.INTERCOM_API_KEY_ANDROID, BuildConfig.INTERCOM_APP_ID);

    // Mixpanel
    MixpanelAPI mixpanel = MixpanelAPI.getInstance(this, BuildConfig.MIXPANEL_API_TOKEN);

    // Bugsnag
    BugsnagReactNative.start(this);

    // Leanplum
    Leanplum.setApplicationContext(this);
    Parser.parseVariables(this);
    //  For session lifecyle tracking.
    LeanplumActivityHelper.enableLifecycleCallbacks(this);

    // Flipper
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method
   * with something like initializeFlipper(this,
   * getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         * We use reflection here to pick up the class that initializes Flipper, since
         * Flipper library is not available in release mode
         */
        Class<?> aClass = Class.forName("com.yulife.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class, ReactInstanceManager.class).invoke(null, context,
            reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}