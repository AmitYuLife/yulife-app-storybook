import {
    FitKitConnectContainer,
    LoginContainer,
    MainContainer,
    ResetPasswordContainer,
    ResetPasswordSuccessContainer,
    SignUpContainer,
    SignUpRewardContainer,
    WelcomeContainer
} from "../components/screens";

// tslint:disable:object-literal-sort-keys
export const ROUTES = {
    // root screens
    login: "yulife.Login",
    resetPassword: "yulife.ResetPassword",
    resetPasswordSuccess: "yulife.ResetPasswordSuccess",
    signUp: "yulife.SignUp",
    welcome: "yulife.Welcome",

    // onboarding screens
    onboardingFitKitConnect: "yulife.onboarding.FitKitConnect",
    onboardingSignUpReward: "yulife.onboarding.SignUpReward",

    // main screen
    main: "yulife.member.main",

    // member screens
    memberDailySteps: "yulife.member.DailySteps",
    memberChallengesList: "yulife.member.ChallengesList",
    memberRewardsList: "yulife.member.RewardsList",
};
// tslint:enable:object-literal-sort-keys

export default [
    // root screens
    { name: ROUTES.welcome, component: WelcomeContainer },
    { name: ROUTES.login, component: LoginContainer },
    { name: ROUTES.resetPassword, component: ResetPasswordContainer },
    { name: ROUTES.resetPasswordSuccess, component: ResetPasswordSuccessContainer },
    { name: ROUTES.signUp, component: SignUpContainer },

    // onboarding screens
    { name: ROUTES.onboardingSignUpReward, component: SignUpRewardContainer },
    { name: ROUTES.onboardingFitKitConnect, component: FitKitConnectContainer },

    // member screens
    { name: ROUTES.main, component: MainContainer },

    // // member screens
    // { name: ROUTES.memberDailySteps, component: DailyStepsContainer },
    // { name: ROUTES.memberChallengesList, component: ChallengesListContainer },
    // { name: ROUTES.memberRewardsList, component: ChallengesListContainer },
];
