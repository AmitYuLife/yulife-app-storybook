import { MODALS, ROUTES } from "./constants";

export default [
  {
    name: ROUTES.noAccess,
    component: require("../components/containers/no-access/no-access.container").default,
  },
  {
    name: ROUTES.login,
    component: require("../components/containers/login/login.container").default,
  },
  {
    name: ROUTES.resetPassword,
    component: require("../components/containers/reset-password/reset-password.container").default,
  },
  {
    name: ROUTES.offline,
    component: require("../components/containers/offline/offline.container").default,
  },
  {
    name: ROUTES.update,
    component: require("../components/containers/update/update.container").default,
  },

  // onboarding screens
  {
    name: ROUTES.onboardingSignUpReward,
    component: require("../components/containers/onboarding/signup-reward/signup-reward.container").default,
  },
  {
    name: ROUTES.onboardingFitKitConnect,
    component: require("../components/containers/onboarding/fitkit-connect/fitkit-connect.container").default,
  },

  // member screens
  {
    renderAfterMs: 600,
    name: ROUTES.menu,
    component: require("../components/containers/member/menu/menu.container").default,
  },
  {
    hasMenu: true,
    name: ROUTES.yuScreen,
    component: require("../components/containers/member/yu/yu-screen.container").default,
  },
  {
    name: ROUTES.yuProductSurvey,
    component: require("../components/containers/member/yu/yu-product-survey").default,
  },
  {
    name: ROUTES.avatarCreation,
    component: require("../components/containers/member/avatar-creation/avatar-creation.container").default,
  },
  {
    name: ROUTES.settings,
    component: require("../components/containers/member/settings/settings.container").default,
  },
  {
    hasMenu: true,
    name: ROUTES.dailySteps,
    component: require("../components/containers/member/daily-steps/daily-steps.container").default,
  },
  {
    hasMenu: true,
    renderAfterMs: 150,
    name: ROUTES.quests,
    component: require("../components/containers/member/quests/quests.container").default,
  },
  {
    hasMenu: true,
    renderAfterMs: 600,
    name: ROUTES.rewards,
    component: require("../components/containers/member/rewards/rewards.main.container").default,
  },
  {
    name: ROUTES.activityHistory,
    component: require("../components/containers/member/activity-history/activity-history.container").default,
  },
  {
    name: ROUTES.stats,
    component: require("../components/containers/member/stats/stats.container").default,
  },
  {
    name: ROUTES.duelsHub,
    component: require("../components/containers/member/duels-hub/duels-hub.container").default,
  },
  {
    name: ROUTES.duelsSearch,
    component: require("../components/containers/member/duels-search/duels-search.container").default,
  },
  {
    name: ROUTES.communityGoals,
    component: require("../components/containers/member/community-goals/comunity-goals.container").default,
  },
  {
    hasMenu: true,
    renderAfterMs: 450,
    name: ROUTES.leaderboards,
    component: require("../components/containers/member/leaderboard/active-leaderboard/active-leaderboard.container")
      .default,
  },
  {
    name: ROUTES.leaderboardInfo,
    component: require("../components/containers/member/leaderboard/leaderboard-info/leaderboard-info").default,
  },
  {
    name: ROUTES.leaderboardsList,
    component: require("../components/containers/member/leaderboard/leaderboard-list/leaderboard-list.container")
      .default,
  },
  {
    name: ROUTES.debug,
    component: require("../components/containers/member/debug/debug.container").default,
  },

  {
    name: ROUTES.changeMemberNickname,
    component: require("../components/containers/member/change-member-nickname/change-member-nickname.container")
      .default,
  },

  // quests screens
  {
    name: ROUTES.questsChallengesList,
    component: require("../components/containers/member/quests/challenges-list/challenges-list.container").default,
  },
  {
    name: ROUTES.questsChallengesHistory,
    component: require("../components/containers/member/quests/challenges-history/challenges-history.container")
      .default,
  },

  // rewards screens
  {
    name: ROUTES.rewardDetails,
    component: require("../components/containers/member/rewards/details/reward-details.container").default,
  },
  {
    name: ROUTES.wegiftConfirmed,
    component: require("../components/containers/member/rewards/confirmed/wegift-confirmed.container").default,
  },
  {
    name: ROUTES.aviosConfirmed,
    component: require("../components/containers/member/rewards/confirmed/avios-confirmed.container").default,
  },
  // products
  {
    name: ROUTES.fib,
    component: require("../components/containers/products/fib/fib.container").default,
  },
  {
    name: ROUTES.productDetails,
    component: require("../components/containers/products/product-details/product-details.container").default,
  },
  {
    name: ROUTES.beneficiary,
    component: require("../components/containers/products/beneficiary/beneficiary.container").default,
  },
  {
    name: ROUTES.productStep,
    component: require("../components/containers/products/product-step/product-step.container").default,
  },
  {
    name: ROUTES.wellbeingHubItems,
    component: require("../components/containers/wellbeing-hub/wellbeing-hub-items.container").default,
  },
  {
    name: ROUTES.wellbeingHubDetails,
    component: require("../components/containers/wellbeing-hub/wellbeing-hub-details.container").default,
  },
  // webview
  {
    name: ROUTES.webView,
    component: require("../components/containers/web-view/web-view.container").default,
  },

  // referrals

  {
    name: ROUTES.referralInformation,
    component: require("../components/containers/referrals/referrals.container").default,
  },

  // debug
  {
    name: ROUTES.packageIntro,
    component: require("../components/containers/member/debug/pli-packages/package-intro.debug").default,
  },
  {
    name: ROUTES.packageFinalise,
    component: require("../components/containers/member/debug/pli-packages/package-finalise.debug").default,
  },

  // modals
  {
    name: MODALS.yuProductDetails,
    component: require("../components/containers/member/yu/yu-product-details/yu-product-details").default,
  },
  {
    name: MODALS.earnRate,
    component: require("../components/containers/member/yu/yu-earn-rate-modal/yu-earn-rate-modal").default,
  },
  {
    name: MODALS.policyCertificate,
    component: require("../components/containers/products/product-details/product-details.modal").default,
  },
  {
    name: MODALS.enterSalary,
    component: require("../components/containers/products/fib/subcontainers/fib.enter-salary.container").default,
  },
  {
    name: MODALS.financialCoverForm,
    component: require("../components/screens/products/fib/underwriting-journey/subcomponents/financial-questions/financial-questions-form.screen")
      .default,
  },
  {
    name: MODALS.leaderboardLean,
    component: require("../components/containers/member/leaderboard/leaderboard-lean/leaderboard-lean").default,
  },
  {
    name: MODALS.challengeUnavailable,
    component: require("../components/modals/challenge-unavailable/challenge-unavailable.modal").default,
  },
  {
    name: MODALS.createLeaderboard,
    component: require("../components/modals/create-leaderboard/create-leaderboard.modal").default,
  },
  {
    name: MODALS.chest,
    component: require("../components/modals/animated-chest/animated-chest").default,
  },
  {
    name: MODALS.collectReward,
    component: require("../components/modals/collect-reward/collect-reward.modal").default,
  },
  {
    name: MODALS.feedback,
    component: require("../components/modals/feedback/feedback.modal").default,
  },
  {
    name: MODALS.appReview,
    component: require("../components/modals/app-review/app-review.modal").default,
  },
  {
    name: MODALS.generic,
    component: require("../components/modals/generic-modal/generic-modal").default,
  },
  {
    name: MODALS.mobileUpdate,
    component: require("../components/modals/mobile-update/mobile-update-modal").default,
  },
  {
    name: MODALS.addBeneficiary,
    component: require("../components/modals/yuscreen/beneficiary/add-beneficiary-modal").default,
  },
  {
    name: MODALS.defaultBeneficiaries,
    component: require("../components/modals/yuscreen/beneficiary/default-beneficiaries-modal").default,
  },
  {
    name: MODALS.genericOverlay,
    component: require("../components/modals/generic-overlay/generic-overlay-template").default,
  },
  {
    name: MODALS.leaderboardInvite,
    component: require("../components/modals/leaderboard-invite/leaderboard-invite.modal").default,
  },
  {
    name: MODALS.levelUnavailable,
    component: require("../components/modals/level-unavailable/level-unavailable.modal").default,
  },
  {
    name: MODALS.pushNotifications,
    component: require("../components/modals/push-notifications/push-notifications.modal").default,
  },
  {
    name: MODALS.streaks,
    component: require("../components/modals/streaks/streaks.modal").default,
  },
  {
    name: MODALS.leaderboards,
    component: require("../components/modals/generic-modal/generic-modal").default,
  },
  {
    name: MODALS.rewards,
    component: require("../components/modals/generic-modal/generic-modal").default,
  },
  {
    name: MODALS.todayYucoin,
    component: require("../components/modals/today-yucoin/today-yucoin.modal").default,
  },
  {
    name: MODALS.genericConnectionError,
    component: require("../components/modals/generic-modal/generic-connection-error-modal").default,
  },
  {
    name: MODALS.info,
    component: require("../components/modals/info/info.modal").default,
  },
  {
    name: MODALS.duelInvite,
    component: require("../components/modals/duels/duel-invite.modal").default,
  },
  {
    name: MODALS.duelRespond,
    component: require("../components/modals/duels/duel-respond.modal").default,
  },
  {
    name: MODALS.priceChanged,
    component: require("../components/modals/price-changed/price-changed").default,
  },
  {
    name: MODALS.listPicker,
    component: require("../components/modals/list-picker-modal/list-picker-modal").default,
  },
  {
    name: MODALS.personalProductStepContinue,
    component: require("../components/modals/personal-product-step-continue/personal-product-step-continue.modal")
      .default,
  },
];
