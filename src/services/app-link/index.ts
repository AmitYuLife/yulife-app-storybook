import { Linking, Platform } from "react-native";
import Logger from "@services/logging/logger";
import { MixpanelEvent } from "@services/logging/types";

interface IAppLinkConfig {
  appName: string;
  appStoreId: string | null;
  appStoreLocale?: string;
  playStoreId: string | null;
}

async function openApp(url: string, { appName, appStoreId, appStoreLocale = "gb", playStoreId }: IAppLinkConfig) {
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
    Logger.error(error, { file: "app-link index" });
  }
}

export async function openFiit() {
  const playStoreId = "tv.fiit.app";

  const deepLink = Platform.select({
    ios: "fiit://",
    android: `android-app://${playStoreId}`,
  });
  return openApp(deepLink, {
    appName: "fiit-workouts-fitness-plans",
    appStoreId: "1296861162",
    playStoreId: "tv.fiit.app",
  });
}

export async function openCalm() {
  const playStoreId = "com.calm.android";
  const deepLink = Platform.select({
    ios: "calm://",
    android: `android-app://${playStoreId}`,
  });

  return openApp(deepLink, {
    appName: "calm",
    appStoreId: "571800810",
    playStoreId,
  });
}

export async function openHeadspace() {
  return openApp("headspace://", {
    appName: "headspace-meditation",
    appStoreId: "493145008",
    playStoreId: "com.getsomeheadspace.android",
  });
}

export async function openMeditopia() {
  const playStoreId = "app.meditasyon";
  const deepLink = Platform.select({
    ios: "meditopia://",
    android: `android-app://${playStoreId}`,
  });
  return openApp(deepLink, {
    appName: "meditopia-meditation-sleep",
    appStoreId: "1190294015",
    playStoreId,
  });
}

export async function openYulife() {
  return openStore({
    appName: "yulife",
    appStoreId: "1348287598",
    playStoreId: "com.yulife.app",
  });
}

export async function openGoogleFit() {
  return openStore({
    appName: "",
    appStoreId: "",
    playStoreId: "com.google.android.apps.fitness",
  });
}

export const handleLinkPress = (link: string) => async () => {
  try {
    await Linking.openURL(link);
  } catch (e) {
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
    Logger.logMixpanelEvent(`${componentID}_button_pressed` as MixpanelEvent, {
      id,
      name,
      title,
      label,
      type: uri?.split(":")?.[0],
    });

    await handleLinkPress(uri)();
  } catch (e) {
    Logger.logMixpanelEvent(`${componentID}_button_pressed_error` as MixpanelEvent, { error: e.message });
  }
};
