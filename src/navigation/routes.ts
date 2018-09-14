import {
    ActivityHistoryContainer,
    AviosRewardConfirmedContainer,
    AviosRewardDetailsContainer,
    ChallengesListContainer,
    FitKitConnectContainer,
    LoginContainer,
    MemberRootContainer,
    MenuContainer,
    ResetPasswordContainer,
    ResetPasswordSuccessContainer,
    SignUpContainer,
    SignUpRewardContainer,
    WegiftRewardConfirmedContainer,
    WegiftRewardDetailsContainer,
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
    menu: "yulife.menu",
    member: "yulife.member",
    activityHistory: "yulife.member.activityHistory",

    // quests
    questsChallengesList: "yulife.quests.ChallengesList",

    // rewards screens
    wegiftDetails: "yulife.rewards.WegiftDetails",
    wegiftConfirmed: "yulife.rewards.WegiftConfirmed",
    aviosDetails: "yulife.rewards.AviosDetails",
    aviosConfirmed: "yulife.rewards.AviosConfirmed"
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
    { name: ROUTES.menu, component: MenuContainer },
    { name: ROUTES.member, component: MemberRootContainer },
    { name: ROUTES.activityHistory, component: ActivityHistoryContainer },

    // quests screens
    { name: ROUTES.questsChallengesList, component: ChallengesListContainer },

    // rewards screens
    { name: ROUTES.wegiftDetails, component: WegiftRewardDetailsContainer },
    { name: ROUTES.wegiftConfirmed, component: WegiftRewardConfirmedContainer },
    { name: ROUTES.aviosDetails, component: AviosRewardDetailsContainer },
    { name: ROUTES.aviosConfirmed, component: AviosRewardConfirmedContainer }
    // { name: ROUTES.memberChallengesList, component: ChallengesListContainer },
    // { name: ROUTES.memberRewardsList, component: ChallengesListContainer },
];
