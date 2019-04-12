import {
    ActivityHistoryContainer,
    AppLoadingContainer,
    AviosRewardConfirmedContainer,
    AviosRewardDetailsContainer,
    ChallengesHistoryContainer,
    ChallengesListContainer,
    DailyStepsContainer,
    DebugContainer,
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
    CreateLeaderboardModal,
    FeedbackModal,
    GenericModal,
    LeaderboardInviteModal,
    LevelUnavailableModal,
    MeditationSetUpModal,
    PushNotificationsModal,
    StreaksModal,
    TodayYucoinModal
} from "../components/modals";
import { MODALS, ROUTES } from "./constants";

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
    { name: ROUTES.debug, component: DebugContainer },

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
    { name: MODALS.createLeaderboard, component: CreateLeaderboardModal },
    { name: MODALS.chest, component: AnimatedChest },
    { name: MODALS.collectReward, component: CollectRewardModal },
    { name: MODALS.feedback, component: FeedbackModal }, // TODO: fix this
    { name: MODALS.generic, component: GenericModal },
    { name: MODALS.leaderboardInvite, component: LeaderboardInviteModal },
    { name: MODALS.levelUnavailable, component: LevelUnavailableModal },
    { name: MODALS.meditationSetUp, component: MeditationSetUpModal },
    { name: MODALS.pushNotifications, component: PushNotificationsModal },
    { name: MODALS.streaks, component: StreaksModal },
    { name: MODALS.leaderboards, component: GenericModal },
    { name: MODALS.rewards, component: GenericModal },
    { name: MODALS.todayYucoin, component: TodayYucoinModal }
];
