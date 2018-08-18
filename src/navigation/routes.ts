import {
    FitKitConnectContainer,
    LoginContainer,
    MemberRootContainer,
    ResetPasswordContainer,
    ResetPasswordSuccessContainer,
    SignUpContainer,
    SignUpRewardContainer,
    WelcomeContainer,
    WegiftRewardDetailsContainer,
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
    menu: "yulife.menu",
    member: "yulife.member",
    memberDailySteps: "yulife.member.DailySteps",
    memberChallengesList: "yulife.member.ChallengesList",
    memberRewardsList: "yulife.member.RewardsList",

    // rewards screens
    wegiftDetails: "yulife.rewards.WegiftDetails",
    wegiftConfirmed: "yulife.rewards.WegiftConfirmed",
    aviosDetails: "yulife.rewards.AviosDetails",
    aviosConfirmed: "yulife.rewards.AviosConfirmed",
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

    // rewards screens
    { name: ROUTES.wegiftDetails, component: WegiftRewardDetailsContainer },
    // { name: ROUTES.memberChallengesList, component: ChallengesListContainer },
    // { name: ROUTES.memberRewardsList, component: ChallengesListContainer },
];
