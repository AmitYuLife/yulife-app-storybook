import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import { getFitkitPermission, getToken } from "./services/storage";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    const token = await getToken();
    // const fitkitPermission = await getFitkitPermission();

    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
        },
    });

    // TODO use this for logging?
    // Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    //     console.log("Component Name", componentName);
    // });

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: token ? "yulife.member.DailySteps" : "yulife.Welcome",
                        },
                        id: "TEST",
                    },
                ],
            },
        },
    });
});
