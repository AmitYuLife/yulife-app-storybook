import registerScreens from "@navigation";
import handleDeepLink from "@navigation/handleDeepLink";
import { setLoadingRoot, setNextRoot, setUnauthenticatedRoot } from "@navigation/root";
import { getToken, migrateOldAppVersionToken } from "@services/storage";
import { Linking, Platform } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import TestFairy from "react-native-testfairy";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    // initialize TestFairy
    if (Config.TESTFAIRY_ENABLED === "yes") {
        TestFairy.enableVideo("wifi", "high", 0.4);
        TestFairy.begin(Config.TESTFAIRY_KEY);
    }

    await migrateOldAppVersionToken();

    setDefaultOptions();

    setLoadingRoot();

    const token = await getToken();

    if (token) {
        await setNextRoot();

        if (Platform.OS === "android") {
            try {
                const url = await Linking.getInitialURL();

                if (url) {
                    handleDeepLink(url);
                }
            } catch (e) {
                // console.log(e.message);
            }
        } else {
            Linking.addEventListener("url", ({ url }) => handleDeepLink(url));
        }
    } else {
        await setUnauthenticatedRoot();
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
