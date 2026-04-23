import { Linking, Platform } from "react-native";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { MixpanelEvent } from "@services/logging/types";

interface IAppLinkConfig {
  appName: string;
  appStoreId: string | null;
  appStoreLocale?: string;
  playStoreId: string | null;
}

export async function openApp(
  url: string,
  { appName, appStoreId, appStoreLocale = "gb", playStoreId }: IAppLinkConfig
) {
  try {
    await Linking.openURL(url);
  } catch (err) {
    if (err.code === "EUNSPECIFIED") {
      openStore({ appName, appStoreId, appStoreLocale, playStoreId });
    }
  }
}

async function openStore({ appName, appStoreId, appStoreLocale = "gb", playStoreId }: IAppLinkConfig) {
  try {
    if (Platform.OS === "ios") {
      // check if appStoreLocale is set
      const locale = typeof appStoreLocale === "undefined" ? "us" : appStoreLocale;

      await Linking.openURL(`https://itunes.apple.com/${locale}/app/${appName}/id${appStoreId}`);
    } else {
      await Linking.openURL(`https://play.google.com/store/apps/details?id=${playStoreId}`);
    }
  } catch (error) {
    Logger.notify(error, { file: "app-link index" });
  }
}

export async function openYulife() {
  return openStore({
    appName: "yulife",
    appStoreId: "1348287598",
    playStoreId: "com.yulife.app",
  });
}

export async function openGoogleFitApp() {
  if (Platform.OS === "ios") {
    return;
  }

  const playStoreId = "com.google.android.apps.fitness";
  const deepLink = `android-app://${playStoreId}`;
  openApp(deepLink, {
    appName: "",
    appStoreId: "",
    playStoreId,
  });
}

export async function openAppleHealthPrivacy() {
  Linking.openURL("App-Prefs:Privacy&path=HEALTH");
}

export async function openSamsungHealthApp() {
  if (Platform.OS === "ios") {
    return;
  }

  const playStoreId = "com.sec.android.app.shealth";
  const deepLink = `android-app://${playStoreId}`;
  openApp(deepLink, {
    appName: "",
    appStoreId: "",
    playStoreId,
  });
}

export async function openGoogleFit() {
  return openStore({
    appName: "",
    appStoreId: "",
    playStoreId: "com.google.android.apps.fitness",
  });
}

export async function openAppleHealthSummary() {
  await Linking.openURL("x-apple-health://summary");
}

export const handleLinkPress = (link: string) => async () => {
  try {
    await Linking.openURL(link);
  } catch {
    // safe fail
  }
};

export interface IContentHyperLinkProps {
  id: string;
  name: string;
  title: string;
  componentID: "rewards_details";
  uri: string;
  label: string;
}
export const handleContentHyperlink = async ({ id, name, title, componentID, uri, label }: IContentHyperLinkProps) => {
  try {
    EngagementTracking.logMixpanelEvent(`${componentID}_button_pressed` as MixpanelEvent, {
      id,
      name,
      title,
      label,
      type: uri?.split(":")?.[0],
    });

    await handleLinkPress(uri)();
  } catch (e) {
    EngagementTracking.logMixpanelEvent(`${componentID}_button_pressed_error` as MixpanelEvent, { error: e.message });
  }
};
