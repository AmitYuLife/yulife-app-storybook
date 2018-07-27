import { Navigation } from "react-native-navigation";
import {
    LoginScreen,
    WelcomeScreenContainer
} from "./components/screens";

Navigation.registerComponent("yulife.WelcomeScreen", () => WelcomeScreenContainer);
Navigation.registerComponent("yulife.LoginScreen", () => LoginScreen);

Navigation.events().registerAppLaunchedListener(() => {

    Navigation.setDefaultOptions({
        topBar: {
            visible: false
        }
    });

    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: "yulife.WelcomeScreen"
                    },
                    id: "TEST",
                }]
            }
        }
    });
});
