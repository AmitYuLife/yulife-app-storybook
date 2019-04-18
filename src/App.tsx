/* tslint:disable */
const Navigation = require("react-native-navigation").Navigation;
const registerScreens = require("./navigation/index").default;

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    setDefaultOptions();

    const rootHandler = require("./navigation/root");

    await rootHandler.setLoadingRoot();

    const storageHandler = require("./services/storage");

    await storageHandler.migrateOldAppVersionToken();

    const token = await storageHandler.getToken();
    const RN = require("react-native");

    if (token) {
        const FastImage = require("react-native-fast-image").default;
        const mapAssets = require("./components/screens/member/quests/quests-scroll-screen/assets");

        await rootHandler.setNextRoot();

        // preload quest map images
        FastImage.preload(
            mapAssets.mapSlices.map((item: any) => ({
                uri: RN.Image.resolveAssetSource(item.image).uri
            }))
        );
    } else {
        await rootHandler.setUnauthenticatedRoot();
    }

    const Config = require("react-native-config").default;
    const TestFairy = require("react-native-testfairy");

    // initialize TestFairy
    if (Config.TESTFAIRY_ENABLED === "yes") {
        TestFairy.enableVideo("wifi", "high", 0.4);
        TestFairy.begin(Config.TESTFAIRY_KEY);
    }

    const handleDeepLink = require("./navigation/handleDeepLink").default;

    if (RN.Platform.OS === "android") {
        try {
            const url = await RN.Linking.getInitialURL();

            if (url) {
                await handleDeepLink(url, !!token);
            }
        } catch (e) {
            // console.log(e.message);
        }
    } else {
        RN.Linking.addEventListener("url", ({ url }: any) => handleDeepLink(url, !!token));
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
