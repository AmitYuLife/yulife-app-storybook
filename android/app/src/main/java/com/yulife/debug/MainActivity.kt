package com.yulife

import android.os.Build
import android.os.Bundle
import com.reactnativenavigation.NavigationActivity
import com.yuhealth.providers.healthConnectProvider.HealthConnectPermissionDelegate

class MainActivity : NavigationActivity() {
    /**
     * Align the back button behavior with Android S
     * where moving root activities to background instead of finishing activities.
     * @see [](https://developer.android.com/reference/android/app/Activity.onBackPressed
    ) */
    override fun invokeDefaultOnBackPressed() {
        if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
            if (!moveTaskToBack(false)) {
                // For non-root activities, use the default implementation to finish them.
                super.invokeDefaultOnBackPressed()
            }
            return
        }

        // Use the default back button implementation on Android S
        // because it's doing more than [Activity.moveTaskToBack] in fact.
        super.invokeDefaultOnBackPressed()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
        HealthConnectPermissionDelegate.setPermissionDelegate(this)
    }
}