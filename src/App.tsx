import registerScreens from "@navigation";
import handleDeepLink from "@navigation/handleDeepLink";
import { setLoadingRoot, setNextRoot, setUnauthenticatedRoot } from "@navigation/root";
import { getToken, migrateOldAppVersionToken } from "@services/storage";
import { Image, Linking, Platform } from "react-native";
import Config from "react-native-config";
import FastImage from "react-native-fast-image";
import { Navigation } from "react-native-navigation";
import TestFairy from "react-native-testfairy";
import { mapSlices } from "./components/screens/member/quests/quests-scroll-screen/assets";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    await setLoadingRoot();

    // preload quest map images
    FastImage.preload(
        mapSlices.map((item) => ({
            uri: Image.resolveAssetSource(item.image).uri
        }))
    );

    // initialize TestFairy
    if (Config.TESTFAIRY_ENABLED === "yes") {
        TestFairy.enableVideo("wifi", "high", 0.4);
        TestFairy.begin(Config.TESTFAIRY_KEY);
    }

    await migrateOldAppVersionToken();

    setDefaultOptions();

    const token = await getToken();

    if (token) {
        await setNextRoot();
    } else {
        await setUnauthenticatedRoot();
    }

    if (Platform.OS === "android") {
        try {
            const url = await Linking.getInitialURL();

            if (url) {
                await handleDeepLink(url, !!token);
            }
        } catch (e) {
            // console.log(e.message);
        }
    } else {
        Linking.addEventListener("url", ({ url }) => handleDeepLink(url, !!token));
    }
});

function setDefaultOptions() {
    Navigation.setDefaultOptions({
        bottomTabs: {
            animate: false,
            drawBehind: true,
            visible: false
        },
        layout: {
            backgroundColor: "white", // "transparent"
            orientation: ["portrait"]
        },
        // modalPresentationStyle: OptionsModalPresentationStyle.overFullScreen,
        popGesture: false,
        statusBar: {
            drawBehind: false,
            visible: true
        },
        topBar: {
            animate: false,
            drawBehind: true,
            visible: false
        }
    });
}
