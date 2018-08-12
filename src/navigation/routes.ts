import {
    FitKitConnectContainer,
    LoginContainer,
    MemberRootContainer,
    ResetPasswordContainer,
    ResetPasswordSuccessContainer,
    SignUpContainer,
    SignUpRewardContainer,
    WelcomeContainer
} from "../components/containers";

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

    // member screens
    member: "yulife.member",
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
    { name: ROUTES.member, component: MemberRootContainer },

    // // member screens
    // { name: ROUTES.memberDailySteps, component: DailyStepsContainer },
    // { name: ROUTES.memberChallengesList, component: ChallengesListContainer },
    // { name: ROUTES.memberRewardsList, component: ChallengesListContainer },
];
