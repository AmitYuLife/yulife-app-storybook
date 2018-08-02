import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import { ROUTES } from "./navigation/routes";
import { getFitkitPermission, getToken } from "./services/storage";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    const token = await getToken();
    // const fitkitPermission = await getFitkitPermission();
    const name = token ? ROUTES.main : ROUTES.welcome;
    const children = [
        {
            component: {
                id: name,
                name,
            },
        },
    ];

    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
        },
    });

    Navigation.setRoot({ root: { stack: { children } } });
});

// TODO use this for logging?
Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    console.log(`Component Name -> ${componentName} -> ${componentId}`);
});
