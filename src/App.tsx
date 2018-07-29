import { Navigation } from "react-native-navigation";
import {
    ChallengesListContainer,
    DailyStepsContainer,
    FitKitConnectContainer,
    LoginContainer,
    ResetPasswordContainer,
    SignUpRewardContainer,
    WelcomeContainer
} from "./components/screens";

// root screens
Navigation.registerComponent("yulife.Welcome", () => WelcomeContainer);
Navigation.registerComponent("yulife.Login", () => LoginContainer);
Navigation.registerComponent("yulife.ResetPassword", () => ResetPasswordContainer);

// onboarding screens
Navigation.registerComponent("yulife.onboarding.FitKitConnect", () => FitKitConnectContainer);
Navigation.registerComponent("yulife.onboarding.SignUpReward", () => SignUpRewardContainer);

// member screens
Navigation.registerComponent("yulife.member.DailySteps", () => DailyStepsContainer);
Navigation.registerComponent("yulife.member.ChallengesList", () => ChallengesListContainer);

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
                        name: "yulife.Welcome"
                    },
                    id: "TEST",
                }]
            }
        }
    });
});
