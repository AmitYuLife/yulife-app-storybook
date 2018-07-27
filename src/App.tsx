import { Navigation } from "react-native-navigation";
import {
    FitKitConnectScreenContainer,
    LoginScreenContainer,
    ResetPasswordScreenContainer,
    WelcomeScreenContainer
} from "./components/screens";

Navigation.registerComponent("yulife.WelcomeScreen", () => WelcomeScreenContainer);
Navigation.registerComponent("yulife.LoginScreen", () => LoginScreenContainer);
Navigation.registerComponent("yulife.ResetPasswordScreen", () => ResetPasswordScreenContainer);

Navigation.registerComponent("yulife.onboarding.FitKitConnectScreen", () => FitKitConnectScreenContainer);

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
