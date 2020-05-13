import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation/index";
import { migrateOldAppVersionToken } from "./services/storage";

const LOADING_ROUTE = "yulife.Loading";

Navigation.registerComponent(
    LOADING_ROUTE,
    () => require("./components/containers/app-loading/app-loading.container").default
);

Navigation.events().registerAppLaunchedListener(async () => {
    await Navigation.setRoot({
        root: {
            component: {
                id: LOADING_ROUTE,
                name: LOADING_ROUTE,
            },
        },
    });

    await migrateOldAppVersionToken();

    // register all the screens
    registerScreens();

    setDefaultOptions();
});

function setDefaultOptions() {
    Navigation.setDefaultOptions({
        animations: {
            setRoot: {
                waitForRender: true,
            },
            push: {
                waitForRender: true,
            },
        },
        bottomTabs: {
            animate: false,
            drawBehind: true,
            visible: false,
        },
        layout: {
            backgroundColor: "white", // ios
            componentBackgroundColor: "white", // android
            orientation: ["portrait"],
        },
        // modalPresentationStyle: OptionsModalPresentationStyle.overFullScreen,
        popGesture: false,
        statusBar: {
            drawBehind: false,
            visible: true,
        },
        topBar: {
            animate: false,
            drawBehind: true,
            visible: false,
        },
    });
}
