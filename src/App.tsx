import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import { setAuthenticatedRoot, setUnauthenticatedRoot } from "./navigation/root";
import { getToken } from "./services/storage";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    const token = await getToken();

    Navigation.setDefaultOptions({
        bottomTabs: {
            animated: true,
            drawBehind: true,
            visible: false
        },
        layout: {
            backgroundColor: "white"
        },
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
