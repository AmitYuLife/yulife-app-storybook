import registerScreens from "@navigation";
import { setLoadingRoot } from "@navigation/root";
import { Navigation } from "react-native-navigation";
import { migrateOldAppVersionToken } from "./services/storage";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    await migrateOldAppVersionToken();

    setLoadingRoot();

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
});
