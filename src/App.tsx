import { Navigation } from "react-native-navigation";
import registerScreens from "./navigation";
import { getFitkitPermision, getToken } from "./services/storage";

// register all the screens
registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
    const token = await getToken();
    // const fitkitPermision = await getFitkitPermision();

    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
        },
    });

    await Navigation.setRoot({
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
