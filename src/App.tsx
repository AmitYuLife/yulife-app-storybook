import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import { ROUTES } from "./navigation/routes";
import {
    // getFitkitPermission,
    getToken,
} from "./services/storage";
import { Style } from "./styles";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    const token = await getToken();
    // const fitkitPermission = await getFitkitPermission();
    const name = token ? ROUTES.member : ROUTES.welcome;
    const children = [
        {
            component: {
                id: name,
                name,
            },
        },
    ];

    Navigation.setDefaultOptions({
        layout: {
            backgroundColor: "white",
        },
        topBar: {
            visible: false,
            drawBehind: true,
        },
        sideMenu: {
            left: { width: Style.DEVICE_WIDTH },
        },
    });

    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        name: ROUTES.login,
                        id: ROUTES.menu,
                    },
                },
                center: {
                    stack: { children },
                },
            },
        },
    });
});

// TODO use this for logging?
Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    // tslint:disable-next-line
    console.log(`Component Name -> ${componentName} -> ${componentId}`);
});
