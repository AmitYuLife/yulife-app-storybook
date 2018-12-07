import {
    ActivityHistoryContainer,
    AppLoadingContainer,
    AviosRewardConfirmedContainer,
    AviosRewardDetailsContainer,
    ChallengesHistoryContainer,
    ChallengesListContainer,
    DailyStepsContainer,
    FitKitConnectContainer,
    IntroContainer,
    LeaderboardsContainer,
    LinkRewardDetailsContainer,
    LoginContainer,
    MenuContainer,
    NoAccessContainer,
    QuestsContainer,
    ResetPasswordContainer,
    ResetPasswordSuccessContainer,
    RewardsContainer,
    SettingsContainer,
    SignUpContainer,
    SignUpRewardContainer,
    WegiftRewardConfirmedContainer,
    WegiftRewardDetailsContainer,
    WelcomeContainer
} from "../components/containers";
import {
    AnimatedChest,
    ChallengeDetailsModal,
    ChallengeUnavailableModal,
    CollectRewardModal,
    GenericModal,
    LevelUnavailableModal,
    MeditationSetUpModal,
    PushNotificationsModal,
    StreaksModal,
    TodayYucoinModal
} from "../components/modals";

// tslint:disable:object-literal-sort-keys
export const ROUTES = {
    // root screens
    loading: "yulife.Loading",
    noAccess: "yulife.NoAccess",
    login: "yulife.Login",
    resetPassword: "yulife.ResetPassword",
    resetPasswordSuccess: "yulife.ResetPasswordSuccess",
    signUp: "yulife.SignUp",
    welcome: "yulife.Welcome",

    // onboarding screens
    onboardingFitKitConnect: "yulife.onboarding.FitKitConnect",
    onboardingSignUpReward: "yulife.onboarding.SignUpReward",
    onboardingIntro: "yulife.onboarding.Intro",

    // member screens
    menu: "yulife.menu",
    settings: "yulife.member.Settings",
    memberZone: "yulife.member.Zone",
    dailySteps: "yulife.member.DailySteps",
    quests: "yulife.member.Quests",
    rewards: "yulife.member.Rewards",
    activityHistory: "yulife.member.ActivityHistory",
    leaderboards: "yulife.member.Leaderboards",

    // quests
    questsChallengesList: "yulife.quests.ChallengesList",
    questsChallengesHistory: "yulife.quests.ChallengesHistory",

    // rewards screens
    linkDetails: "yulife.rewards.LinkDetails",
    wegiftDetails: "yulife.rewards.WegiftDetails",
    wegiftConfirmed: "yulife.rewards.WegiftConfirmed",
    aviosDetails: "yulife.rewards.AviosDetails",
    aviosConfirmed: "yulife.rewards.AviosConfirmed"
};

export const MODALS = {
    challengeDetails: "yulife.modals.ChallengeDetails",
    challengeUnavailable: "yulife.modals.ChallengeUnavailable",
    chest: "yulife.modals.Chest",
    collectReward: "yulife.modals.CollectReward",
    generic: "yulife.modals.Generic",
    leaderboards: "yulife.modals.Leaderboards",
    levelUnavailable: "yulife.modals.LevelUnavailable",
    meditationSetUp: "yulife.modals.MeditationSetUp",
    pushNotifications: "yulife.modals.PushNotifications",
    rewards: "yulife.modals.Rewards",
    streaks: "yulife.modals.Streaks",
    todayYucoin: "yulife.modals.todayYucoin"
};
// tslint:enable:object-literal-sort-keys

export default [
    // root screens
    { name: ROUTES.loading, component: AppLoadingContainer },
    { name: ROUTES.noAccess, component: NoAccessContainer },
    { name: ROUTES.welcome, component: WelcomeContainer },
    { name: ROUTES.login, component: LoginContainer },
    { name: ROUTES.resetPassword, component: ResetPasswordContainer },
    { name: ROUTES.resetPasswordSuccess, component: ResetPasswordSuccessContainer },
    { name: ROUTES.signUp, component: SignUpContainer },

    // onboarding screens
    { name: ROUTES.onboardingSignUpReward, component: SignUpRewardContainer },
    { name: ROUTES.onboardingFitKitConnect, component: FitKitConnectContainer },
    { name: ROUTES.onboardingIntro, component: IntroContainer },

    // member screens
    { name: ROUTES.menu, component: MenuContainer },
    { name: ROUTES.settings, component: SettingsContainer },
    { name: ROUTES.dailySteps, component: DailyStepsContainer },
    { name: ROUTES.quests, component: QuestsContainer },
    { name: ROUTES.rewards, component: RewardsContainer },
    { name: ROUTES.activityHistory, component: ActivityHistoryContainer },
    { name: ROUTES.leaderboards, component: LeaderboardsContainer },

    // quests screens
    { name: ROUTES.questsChallengesList, component: ChallengesListContainer },
    { name: ROUTES.questsChallengesHistory, component: ChallengesHistoryContainer },

    // rewards screens
    { name: ROUTES.linkDetails, component: LinkRewardDetailsContainer },
    { name: ROUTES.wegiftDetails, component: WegiftRewardDetailsContainer },
    { name: ROUTES.wegiftConfirmed, component: WegiftRewardConfirmedContainer },
    { name: ROUTES.aviosDetails, component: AviosRewardDetailsContainer },
    { name: ROUTES.aviosConfirmed, component: AviosRewardConfirmedContainer },
    // { name: ROUTES.memberChallengesList, component: ChallengesListContainer },
    // { name: ROUTES.memberRewardsList, component: ChallengesListContainer },

    // modals
    { name: MODALS.challengeDetails, component: ChallengeDetailsModal },
    { name: MODALS.challengeUnavailable, component: ChallengeUnavailableModal },
    { name: MODALS.chest, component: AnimatedChest },
    { name: MODALS.collectReward, component: CollectRewardModal },
    { name: MODALS.generic, component: GenericModal },
    { name: MODALS.levelUnavailable, component: LevelUnavailableModal },
    { name: MODALS.meditationSetUp, component: MeditationSetUpModal },
    { name: MODALS.pushNotifications, component: PushNotificationsModal },
    { name: MODALS.streaks, component: StreaksModal },
    { name: MODALS.leaderboards, component: GenericModal },
    { name: MODALS.rewards, component: GenericModal },
    { name: MODALS.todayYucoin, component: TodayYucoinModal }
];
