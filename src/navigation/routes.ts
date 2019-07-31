import { MODALS, ROUTES } from "./constants";

export default [
    {
        name: ROUTES.noAccess,
        component: require("../components/containers/no-access/no-access.container").default
    },
    {
        name: ROUTES.login,
        component: require("../components/containers/login/login.container").default
    },
    {
        name: ROUTES.resetPassword,
        component: require("../components/containers/reset-password/reset-password.container").default
    },
    {
        name: ROUTES.resetPasswordSuccess,
        component: require("../components/containers/reset-password/reset-password-success.container").default
    },
    {
        name: ROUTES.signUp,
        component: require("../components/containers/sign-up/sign-up.container").default
    },
    {
        name: ROUTES.offline,
        component: require("../components/containers/offline/offline.container").default
    },

    // onboarding screens
    {
        name: ROUTES.onboardingSignUpReward,
        component: require("../components/containers/onboarding/signup-reward/signup-reward.container").default
    },
    {
        name: ROUTES.onboardingFitKitConnect,
        component: require("../components/containers/onboarding/fitkit-connect/fitkit-connect.container").default
    },

    // member screens
    {
        name: ROUTES.menu,
        component: require("../components/containers/member/menu/menu.container").default
    },
    {
        name: ROUTES.settings,
        component: require("../components/containers/member/settings/settings.container").default
    },
    {
        name: ROUTES.dailySteps,
        component: require("../components/containers/member/daily-steps/daily-steps.container").default
    },
    {
        lazyLoad: true,
        name: ROUTES.quests,
        component: require("../components/containers/member/quests/quests.container").default
    },
    {
        lazyLoad: true,
        name: ROUTES.rewards,
        component: require("../components/containers/member/rewards/rewards.container").default
    },
    {
        name: ROUTES.activityHistory,
        component: require("../components/containers/member/activity-history/activity-history.container").default
    },
    {
        lazyLoad: true,
        name: ROUTES.leaderboards,
        component: require("../components/containers/member/leaderboards/leaderboards.container").default
    },
    {
        name: ROUTES.debug,
        component: require("../components/containers/member/debug/debug.container").default
    },

    // quests screens
    {
        name: ROUTES.questsChallengesList,
        component: require("../components/containers/member/quests/challenges-list/challenges-list.container").default
    },
    {
        name: ROUTES.questsChallengesHistory,
        component: require("../components/containers/member/quests/challenges-history/challenges-history.container")
            .default
    },

    // rewards screens
    {
        name: ROUTES.linkDetails,
        component: require("../components/containers/member/rewards/details/link-details.container").default
    },
    {
        name: ROUTES.wegiftDetails,
        component: require("../components/containers/member/rewards/details/wegift-details.container").default
    },
    {
        name: ROUTES.wegiftConfirmed,
        component: require("../components/containers/member/rewards/confirmed/wegift-confirmed.container").default
    },
    {
        name: ROUTES.aviosDetails,
        component: require("../components/containers/member/rewards/details/avios-details.container").default
    },
    {
        name: ROUTES.aviosConfirmed,
        component: require("../components/containers/member/rewards/confirmed/avios-confirmed.container").default
    },

    // modals
    {
        name: MODALS.challengeDetails,
        component: require("../components/modals/challenge-details/challenge-details.modal").default
    },
    {
        name: MODALS.challengeUnavailable,
        component: require("../components/modals/challenge-unavailable/challenge-unavailable.modal").default
    },
    {
        name: MODALS.createLeaderboard,
        component: require("../components/modals/create-leaderboard/create-leaderboard.modal").default
    },
    {
        name: MODALS.chest,
        component: require("../components/modals/animated-chest/animated-chest").default
    },
    {
        name: MODALS.collectReward,
        component: require("../components/modals/collect-reward/collect-reward.modal").default
    },
    {
        name: MODALS.feedback,
        component: require("../components/modals/feedback/feedback.modal").default
    },
    {
        name: MODALS.generic,
        component: require("../components/modals/generic-modal/generic-modal").default
    },
    {
        name: MODALS.leaderboardInvite,
        component: require("../components/modals/leaderboard-invite/leaderboard-invite.modal").default
    },
    {
        name: MODALS.levelUnavailable,
        component: require("../components/modals/level-unavailable/level-unavailable.modal").default
    },
    {
        name: MODALS.meditationSetUp,
        component: require("../components/modals/meditation-set-up/meditation-set-up.modal").default
    },
    {
        name: MODALS.pushNotifications,
        component: require("../components/modals/push-notifications/push-notifications.modal").default
    },
    {
        name: MODALS.streaks,
        component: require("../components/modals/streaks/streaks.modal").default
    },
    {
        name: MODALS.leaderboards,
        component: require("../components/modals/generic-modal/generic-modal").default
    },
    {
        name: MODALS.rewards,
        component: require("../components/modals/generic-modal/generic-modal").default
    },
    {
        name: MODALS.todayYucoin,
        component: require("../components/modals/today-yucoin/today-yucoin.modal").default
    },
    {
        name: MODALS.genericConnectionError,
        component: require("../components/modals/generic-modal/generic-connection-error-modal").default
    }
];
