import {
    ChallengesListContainer,
    DailyStepsContainer,
    FitKitConnectContainer,
    LoginContainer,
    ResetPasswordContainer,
    ResetPasswordSuccessContainer,
    SignUpContainer,
    SignUpRewardContainer,
    WelcomeContainer,
} from "../components/screens";

export const ROUTES = {
    // root screens
    welcome: "yulife.Welcome",
    login: "yulife.Login",
    resetPassword: "yulife.ResetPassword",
    resetPasswordSuccess: "yulife.ResetPasswordSuccess",
    signUp: "yulife.SignUp",

    // onboarding screens
    onboardingSignUpReward: "yulife.onboarding.SignUpReward",
    onboardingFitKitConnect: "yulife.onboarding.FitKitConnect",

    // member screens
    memberDailySteps: "yulife.member.DailySteps",
    memberChallengesList: "yulife.member.ChallengesList",
    memberRewardsList: "yulife.member.RewardsList",
};

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
    { name: ROUTES.memberDailySteps, component: DailyStepsContainer },
    { name: ROUTES.memberChallengesList, component: ChallengesListContainer },
    { name: ROUTES.memberRewardsList, component: ChallengesListContainer },
];
