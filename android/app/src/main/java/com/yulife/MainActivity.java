package com.yulife;

import com.reactnativenavigation.NavigationActivity;

import android.content.res.Configuration;
import android.content.Context;

public class MainActivity extends NavigationActivity {
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(newBase);
        final Configuration override = new Configuration(newBase.getResources().getConfiguration());
        override.fontScale = 1.0f;
        applyOverrideConfiguration(override);
    }
}
