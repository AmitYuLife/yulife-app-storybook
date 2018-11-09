import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import { setNextRoot, setUnauthenticatedRoot } from "./navigation/root";
import { getToken, migrateOldAppVersionToken } from "./services/storage";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    await migrateOldAppVersionToken();
    const token = await getToken();

    Navigation.setDefaultOptions({
        bottomTabs: {
            animate: false,
            drawBehind: true,
            visible: false
        },
        layout: {
            backgroundColor: "white",
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

    if (token) {
        setNextRoot();
    } else {
        setUnauthenticatedRoot();
    }
});
