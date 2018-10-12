import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import { setAuthenticatedRoot, setUnauthenticatedRoot } from "./navigation/root";
import { getToken, migrateOldAppVersionToken } from "./services/storage";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    await migrateOldAppVersionToken();
    const token = await getToken();

    Navigation.setDefaultOptions({
        bottomTabs: {
            animated: true,
            drawBehind: true,
            visible: false
        },
        layout: {
            backgroundColor: "white",
            orientation: ["portrait"]
        },
        // modalPresentationStyle: "overCurrentContext",
        popGesture: false,
        // statusBar: {
        //     // drawBehind: true,
        //     visible: true,
        // },
        topBar: {
            drawBehind: true,
            visible: false
        }
    });

    if (token) {
        setAuthenticatedRoot();
    } else {
        setUnauthenticatedRoot();
    }
});
