import { Linking, Platform } from "react-native";

interface IAppLinkConfig {
    appName: string;
    appStoreId: string;
    appStoreLocale?: string;
    playStoreId: string;
}

async function openApp(url: string, { appName, appStoreId, appStoreLocale = "gb", playStoreId }: IAppLinkConfig) {
    Linking.openURL(url).catch((err) => {
        if (err.code === "EUNSPECIFIED") {
            if (Platform.OS === "ios") {
                // check if appStoreLocale is set
                const locale = typeof appStoreLocale === "undefined" ? "us" : appStoreLocale;

                Linking.openURL(`https://itunes.apple.com/${locale}/app/${appName}/id${appStoreId}`);
            } else {
                Linking.openURL(`https://play.google.com/store/apps/details?id=${playStoreId}`);
            }
        } else {
            throw new Error(`Could not open ${appName}. ${err.toString()}`);
        }
    });
}

export async function openCalm() {
    openApp("calm://", {
        appName: "calm",
        appStoreId: "571800810",
        playStoreId: "com.calm.android"
    });
}

export async function openHeadspace() {
    openApp("headspace://", {
        appName: "headspace-meditation",
        appStoreId: "493145008",
        playStoreId: "com.getsomeheadspace.android"
    });
}

export const handleLinkPress = (link: string) => async () => {
    const isValid = await Linking.canOpenURL(link);

    if (isValid) {
        await Linking.openURL(link);
    }
};
