import { Navigation } from "react-native-navigation";
import {
    DailyStepsContainer,
    FitKitConnectContainer,
    LoginContainer,
    ResetPasswordContainer,
    SignUpRewardContainer,
    WelcomeContainer
} from "./components/screens";

// root screens
Navigation.registerComponent("yulife.WelcomeScreen", () => WelcomeContainer);
Navigation.registerComponent("yulife.LoginScreen", () => LoginContainer);
Navigation.registerComponent("yulife.ResetPasswordScreen", () => ResetPasswordContainer);

// onboarding screens
Navigation.registerComponent("yulife.onboarding.FitKitConnectScreen", () => FitKitConnectContainer);
Navigation.registerComponent("yulife.onboarding.SignUpRewardScreen", () => SignUpRewardContainer);

// member screens
Navigation.registerComponent("yulife.member.DailyStepsScreen", () => DailyStepsContainer);

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
