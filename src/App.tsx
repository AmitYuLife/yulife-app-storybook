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
        await rootHandler.setAuthenticatedRoot(); // TODO: use setNextRoot when the right intro's ready
    } else {
        await rootHandler.setUnauthenticatedRoot();
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
