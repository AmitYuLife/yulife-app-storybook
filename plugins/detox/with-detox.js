const fs = require("fs");
const {
  withDangerousMod,
  withAppBuildGradle,
  withAndroidManifest,
  withPlugins,
  withProjectBuildGradle,
} = require("@expo/config-plugins");

const NETWORK_SECURITY_CONFIG = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">10.0.2.2</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>`;

const DETOX_TEST_CLASS = `package com.yulife.debug;

import com.wix.detox.Detox;
import com.wix.detox.config.DetoxConfig;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {
    @Rule
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

    @Test
    public void runDetoxTests() {
        DetoxConfig detoxConfig = new DetoxConfig();
        detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;
        detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;
        detoxConfig.rnContextLoadTimeoutSec = (BuildConfig.DEBUG ? 180 : 60);

        Detox.runTests(mActivityRule, detoxConfig);
    }
}`;

const BUILD_GRADLE_REPO = `maven {
    url("$rootDir/../node_modules/detox/Detox-android")
}`;

const BUILD_GRADLE_REPOSITORIES = `allprojects {
    repositories {`;

const detoxBuildGradlePlugin = (app) => {
  return withProjectBuildGradle(app, (config) => {
    config.modResults.contents = config.modResults.contents.replace(
      /allprojects {\s*repositories {/,
      `${BUILD_GRADLE_REPOSITORIES}\n${BUILD_GRADLE_REPO}\n`
    );

    return config;
  });
};

const dangerousDetoxPlugin = (app) =>
  withDangerousMod(app, [
    "android",
    async (config) => {
      fs.mkdirSync("./android/app/src/main/res/xml", { recursive: true });
      fs.writeFileSync("./android/app/src/main/res/xml/network_security_config.xml", NETWORK_SECURITY_CONFIG);

      fs.mkdirSync(`android/app/src/androidTest/java/com/yulife`, { recursive: true });
      fs.writeFileSync(`android/app/src/androidTest/java/com/yulife/DetoxTest.java`, DETOX_TEST_CLASS);

      return config;
    },
  ]);

const manifestPlugin = (config) => {
  return withAndroidManifest(config, async (app) => {
    let androidManifest = app.modResults.manifest;
    androidManifest.application[0].$["android:networkSecurityConfig"] = "@xml/network_security_config";

    return app;
  });
};

const DETOX_DEFAULT_CONFIG = `testBuildType System.getProperty('testBuildType', 'debug')
testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'`;

const DETOX_DEPENCENCIES = `androidTestImplementation('com.wix:detox:+')
implementation 'androidx.appcompat:appcompat:1.1.0'`;

const detoxAppBuildGradlePlugin = (app) =>
  withAppBuildGradle(app, (config) => {
    const splitContents = config.modResults.contents.split(`\n`);

    const defaultConfigLine = splitContents.findIndex((line) => line.includes(`defaultConfig {`));
    splitContents.splice(defaultConfigLine + 1, 0, DETOX_DEFAULT_CONFIG);

    const dependenciesLine = splitContents.findIndex((line) => line.includes(`dependencies {`));
    splitContents.splice(dependenciesLine + 1, 0, DETOX_DEPENCENCIES);

    config.modResults.contents = splitContents.join(`\n`);

    return config;
  });

module.exports = (app) =>
  withPlugins(app, [dangerousDetoxPlugin, detoxBuildGradlePlugin, manifestPlugin, detoxAppBuildGradlePlugin]);
