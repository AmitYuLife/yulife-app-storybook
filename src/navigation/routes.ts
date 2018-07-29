import {
    DailyStepsContainer,
    FitKitConnectContainer,
    LoginContainer,
    ResetPasswordContainer,
    SignUpRewardContainer,
    WelcomeContainer,
    ChallengesListContainer,
} from "./../components/screens";

export default [
    // root screens
    { name: "Welcome", component: WelcomeContainer },
    { name: "Login", component: LoginContainer },
    { name: "ResetPassword", component: ResetPasswordContainer },

    // onboarding screens
    { name: "onboarding.SignUpReward", component: SignUpRewardContainer },
    { name: "onboarding.FitKitConnect", component: FitKitConnectContainer },

    // member screens
    { name: "member.DailySteps", component: DailyStepsContainer },
    { name: "member.ChallengesList", component: ChallengesListContainer },
];
