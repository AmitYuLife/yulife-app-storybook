import { Navigation } from "react-native-navigation";
import {
    LoginScreen,
    WelcomeScreen
} from "./components/screens";

Navigation.registerComponent("yulife.WelcomeScreen", () => WelcomeScreen);
Navigation.registerComponent("yulife.LoginScreen", () => LoginScreen);

Navigation.events().registerAppLaunchedListener(() => {

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
