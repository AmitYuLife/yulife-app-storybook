import { Navigation } from "react-native-navigation";
import {
    FitKitConnectScreenContainer,
    LoginScreenContainer,
    ResetPasswordScreenContainer,
    SignUpRewardScreenContainer,
    WelcomeScreenContainer
} from "./components/screens";

// root screens
Navigation.registerComponent("yulife.WelcomeScreen", () => WelcomeScreenContainer);
Navigation.registerComponent("yulife.LoginScreen", () => LoginScreenContainer);
Navigation.registerComponent("yulife.ResetPasswordScreen", () => ResetPasswordScreenContainer);

// onboarding screens
Navigation.registerComponent("yulife.onboarding.FitKitConnectScreen", () => FitKitConnectScreenContainer);
Navigation.registerComponent("yulife.onboarding.SignUpRewardScreen", () => SignUpRewardScreenContainer);

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
