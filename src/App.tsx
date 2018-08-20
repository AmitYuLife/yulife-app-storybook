import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import {
    // getFitkitPermission,
    getToken,
} from "./services/storage";
import { setAuthenticatedRoot, setUnauthenticatedRoot } from "./navigation/root";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    const token = await getToken();
    // const fitkitPermission = await getFitkitPermission();

    Navigation.setDefaultOptions({
        layout: {
            backgroundColor: "white",
        },
        topBar: {
            visible: false,
            drawBehind: true,
        },
    });

    if (token) {
        setAuthenticatedRoot();
    } else {
        setUnauthenticatedRoot();
    }
});

// TODO use this for logging?
Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    // tslint:disable-next-line
    console.log(`Component Name -> ${componentName} -> ${componentId}`);
});
