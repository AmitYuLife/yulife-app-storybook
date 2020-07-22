import { Linking, Platform } from "react-native";

interface IAppLinkConfig {
  appName: string;
  appStoreId: string | null;
  appStoreLocale?: string;
  playStoreId: string | null;
}

const noop = (): null => null;

async function openApp(url: string, { appName, appStoreId, appStoreLocale = "gb", playStoreId }: IAppLinkConfig) {
  Linking.openURL(url).catch((err) => {
    if (err.code === "EUNSPECIFIED") {
      if (Platform.OS === "ios") {
        // check if appStoreLocale is set
        const locale = typeof appStoreLocale === "undefined" ? "us" : appStoreLocale;

        Linking.openURL(`https://itunes.apple.com/${locale}/app/${appName}/id${appStoreId}`).catch(noop);
      } else {
        Linking.openURL(`https://play.google.com/store/apps/details?id=${playStoreId}`).catch(noop);
      }
    }
  });
}

export async function openCalm() {
  return openApp("calm://", {
    appName: "calm",
    appStoreId: "571800810",
    playStoreId: "com.calm.android",
  });
}

export async function openHeadspace() {
  return openApp("headspace://", {
    appName: "headspace-meditation",
    appStoreId: "493145008",
    playStoreId: null,
  });
}

export const handleLinkPress = (link: string) => async () => {
  const isValid = await Linking.canOpenURL(link);

  if (isValid) {
    await Linking.openURL(link);
  }
};
