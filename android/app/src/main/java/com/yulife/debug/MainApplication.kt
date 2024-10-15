package com.yulife

import android.app.Notification
import android.content.Context
import android.content.res.Configuration
import android.os.Build
import android.os.Bundle
import androidx.core.app.NotificationCompat
import com.bugsnag.android.Bugsnag
import com.facebook.react.PackageList
import com.facebook.react.ReactHost
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.config.ReactFeatureFlags
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.intercom.reactnative.IntercomModule
import com.leanplum.Leanplum
import com.leanplum.LeanplumActivityHelper
import com.leanplum.LeanplumPushNotificationCustomizer
import com.leanplum.LeanplumPushService
import com.leanplum.annotations.Parser
import com.reactnativenavigation.NavigationApplication
import com.yulife.reactnative.fitkit.RNFitKitPackage
import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ApplicationLifecycleDispatcher.onConfigurationChanged
import expo.modules.ReactNativeHostWrapper
import org.jetbrains.annotations.Nullable
import java.lang.reflect.InvocationTargetException


class MainApplication : NavigationApplication() {
    override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                val packages: MutableList<ReactPackage> = PackageList(this).packages
                packages.add(RNFitKitPackage())

                return packages;
            }

            override fun getJSMainModuleName(): String = "index"

            override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

            override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
        }
    )

    override val reactHost: ReactHost
        get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
        Bugsnag.start(this);
        IntercomModule.initialize(this, BuildConfig.INTERCOM_API_KEY_ANDROID, BuildConfig.INTERCOM_APP_ID);

        Leanplum.setApplicationContext(this);
        Parser.parseVariables(this);

        LeanplumActivityHelper.enableLifecycleCallbacks(this);
        LeanplumPushService.setCustomizer(object : LeanplumPushNotificationCustomizer {
            override fun customize(builder: NotificationCompat.Builder, notificationPayload: Bundle) {
                val icon = if (Build.VERSION.SDK_INT > Build.VERSION_CODES.R) {
                    R.drawable.yu_push_icon
                } else {
                    R.drawable.intercom_push_icon
                }
                builder.setSmallIcon(icon)
                builder.setColor(resources.getColor(R.color.yupink))
            }

            override fun customize(
                builder: Notification.Builder?,
                bundle: Bundle?,
                @Nullable style: Notification.Style?
            ) {
            }
        })

        if (!BuildConfig.REACT_NATIVE_UNSTABLE_USE_RUNTIME_SCHEDULER_ALWAYS) {
            ReactFeatureFlags.unstable_useRuntimeSchedulerAlways = false
        }
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            load()
        }
        if (BuildConfig.DEBUG) {
            initializeFlipper(this, reactNativeHost.reactInstanceManager)
        }
        ApplicationLifecycleDispatcher.onApplicationCreate(this)
    }

    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        onConfigurationChanged(this, newConfig)
    }

    private fun initializeFlipper(
        context: Context, reactInstanceManager: ReactInstanceManager
    ) {
        if (BuildConfig.DEBUG) {
            try {
                /*
                    We use reflection here to pick up the class that initializes Flipper,
                    since Flipper library is not available in release mode
                */
                val aClass = Class.forName("com.yulife.debug.ReactNativeFlipper")
                aClass
                    .getMethod(
                        "initializeFlipper",
                        Context::class.java,
                        ReactInstanceManager::class.java
                    )
                    .invoke(null, context, reactInstanceManager)
            } catch (e: ClassNotFoundException) {
                e.printStackTrace()
            } catch (e: NoSuchMethodException) {
                e.printStackTrace()
            } catch (e: IllegalAccessException) {
                e.printStackTrace()
            } catch (e: InvocationTargetException) {
                e.printStackTrace()
            }
        }
    }
}