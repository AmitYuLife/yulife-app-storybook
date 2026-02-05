import { MODALS, ROUTES } from "./constants";

// Lazy component loader for RN 0.79+ bridgeless mode compatibility
// Dynamic require() calls must be deferred until after runtime initialization
const lazy = (getModule: () => { default: React.ComponentType<unknown> }) => {
  let cached: React.ComponentType<unknown> | null = null;
  return () => {
    if (!cached) {
      cached = getModule().default;
    }

    return cached;
  };
};

// Type for route definition with lazy component
type RouteDefinition = {
  name: string;
  component: () => React.ComponentType<unknown>;
  renderAfterMs?: number;
  hasMenu?: boolean;
};

const routesForRegistration: RouteDefinition[] = [
  {
    name: ROUTES.sduiStatic,
    component: lazy(() => require("../components/containers/sdui-static/sdui-static.container")),
  },
  {
    name: ROUTES.journey,
    component: lazy(() => require("../components/containers/journey/journey.container")),
  },
  {
    name: ROUTES.noAccess,
    component: lazy(() => require("../components/containers/no-access/no-access.container")),
  },
  {
    name: ROUTES.loginLegacy,
    component: lazy(() => require("../components/containers/login/legacy/login.container")),
  },
  {
    name: ROUTES.loginHero,
    component: lazy(() => require("../components/containers/login/login-hero.container")),
  },
  {
    name: ROUTES.loginEmail,
    component: lazy(() => require("../components/containers/login/login-email.container")),
  },
  {
    name: ROUTES.loginConfirm,
    component: lazy(() => require("../components/containers/login/login-confirm.container")),
  },
  {
    name: ROUTES.loginPassword,
    component: lazy(() => require("../components/containers/login/login-password.container")),
  },
  {
    name: ROUTES.resetPassword,
    component: lazy(() => require("../components/containers/reset-password/reset-password.container")),
  },
  {
    name: ROUTES.offline,
    component: lazy(() => require("../components/containers/offline/offline.container")),
  },
  {
    name: ROUTES.update,
    component: lazy(() => require("../components/containers/update/update.container")),
  },

  // onboarding screens
  {
    name: ROUTES.onboardingSignUpReward,
    component: lazy(() => require("../components/containers/onboarding/signup-reward/signup-reward.container")),
  },
  {
    name: ROUTES.onboardingFitKitConnect,
    component: lazy(() => require("../components/containers/onboarding/fitkit-connect/fitkit-connect.container")),
  },

  // member screens
  {
    renderAfterMs: 600,
    name: ROUTES.menu,
    component: lazy(() => require("../components/containers/member/menu/menu.container")),
  },
  {
    hasMenu: true,
    name: ROUTES.yuScreen,
    component: lazy(() => require("../components/containers/member/yu/yu-screen.container")),
  },
  {
    name: ROUTES.yumojiBuilder,
    component: lazy(() => require("../components/containers/member/yumoji-builder/yumoji-builder.container")),
  },
  {
    name: ROUTES.settings,
    component: lazy(() => require("../components/containers/member/settings/_settings.container")),
  },
  {
    hasMenu: true,
    name: ROUTES.dailySteps,
    component: lazy(() => require("../components/containers/member/daily-steps/daily-steps-wrapper.container")),
  },
  {
    name: ROUTES.sudokuStaging,
    component: lazy(() => require("../components/screens/games/sudoku/sudoku-staging/sudoku-staging.container")),
  },
  {
    name: ROUTES.sudokuPractice,
    component: lazy(() => require("../components/screens/games/sudoku/sudoku-practice/sudoku-practice.container")),
  },
  {
    name: ROUTES.sudokuGame,
    component: lazy(() => require("../components/screens/games/sudoku/sudoku-game/sudoku.container")),
  },
  {
    name: ROUTES.sudokuCompleted,
    component: lazy(() => require("../components/screens/games/sudoku/sudoku-completed/sudoku-completed.container")),
  },
  {
    name: ROUTES.sudokuLeaderboard,
    component: lazy(() =>
      require("../components/screens/games/sudoku/sudoku-leaderboard/sudoku-leaderboard.container")
    ),
  },
  {
    hasMenu: true,
    renderAfterMs: 150,
    name: ROUTES.quests,
    component: lazy(() => require("../components/containers/member/quests/quests.container")),
  },
  {
    hasMenu: true,
    renderAfterMs: 600,
    name: ROUTES.rewards,
    component: lazy(() => require("../components/containers/member/rewards/rewards.manager")),
  },
  {
    name: ROUTES.rewardDetailsSdui,
    component: lazy(() => require("../components/containers/sdui-static/sdui-static.container")),
  },
  {
    name: ROUTES.purchases,
    component: lazy(() => require("../components/containers/member/rewards/rewards.purchases.container")),
  },
  {
    name: ROUTES.wallet,
    component: lazy(() => require("../components/containers/member/rewards/rewards.wallet.container")),
  },
  {
    name: ROUTES.walletItems,
    component: lazy(() => require("../components/containers/member/rewards/rewards.wallet.items.container")),
  },
  {
    name: ROUTES.rewardPurchase,
    component: lazy(() => require("../components/containers/sdui-static/sdui-static.container")),
  },
  {
    name: ROUTES.activityHistory,
    component: lazy(() => require("../components/containers/member/activity-history/index")),
  },
  {
    name: ROUTES.challengesHistoryNew,
    component: lazy(() =>
      require("../components/containers/member/quests/challenges-history-new/challenges-history-new.container")
    ),
  },
  {
    name: ROUTES.duelsHub,
    component: lazy(() => require("../components/containers/member/duels-hub/duels-hub.container")),
  },
  {
    name: ROUTES.duelsSearch,
    component: lazy(() => require("../components/containers/member/duels-search/duels-search.container")),
  },
  {
    name: ROUTES.inspect,
    component: lazy(() => require("../components/containers/member/inspect/inspect.container")),
  },
  {
    name: ROUTES.gifting,
    component: lazy(() => require("../components/containers/member/gifting/gifting-manager.container")),
  },
  {
    name: ROUTES.giftView,
    component: lazy(() => require("../components/containers/member/gift-view/gift-view.container")),
  },
  {
    name: ROUTES.smoking,
    component: lazy(() => require("../components/containers/member/smoking/smoking-hub/smoking.container")),
  },
  {
    name: ROUTES.smokingStreakLapsed,
    component: lazy(() =>
      require("../components/containers/member/smoking/smoking-streak-lapsed/smoking-streak-lapsed.container")
    ),
  },
  {
    name: ROUTES.smokingCommitment,
    component: lazy(() =>
      require("../components/containers/member/smoking/smoking-commitment/smoking-commitment.container")
    ),
  },

  // Content Location
  {
    name: ROUTES.selectContentLocation,
    component: lazy(() =>
      require("../components/containers/member/content-location/select-content-location.container")
    ),
  },

  // Leaderboard
  {
    hasMenu: true,
    renderAfterMs: 450,
    name: ROUTES.leaderboard,
    component: lazy(() => require("../components/containers/member/leaderboard/leaderboard.container")),
  },
  {
    name: ROUTES.leaderboardInfo,
    component: lazy(() => require("../components/containers/member/leaderboard/leaderboard-info/leaderboard-info")),
  },
  {
    name: ROUTES.leaderboardSearch,
    component: lazy(() => require("../components/containers/member/leaderboard/leaderboard-search.container")),
  },

  {
    name: ROUTES.notifications,
    component: lazy(() => require("../components/containers/member/notifications/notifications.container")),
  },

  // tools
  {
    name: ROUTES.tools,
    component: lazy(() => require("../components/containers/member/tools/tools.container")),
  },

  // events
  {
    name: ROUTES.eventDialog,
    component: lazy(() => require("../components/containers/member/events/event-dialog/event-dialog.container")),
  },

  // debug
  {
    name: ROUTES.debug,
    component: lazy(() => require("../components/containers/member/debug/debug.container")),
  },
  {
    name: ROUTES.debugPlayground,
    component: lazy(() => require("../components/containers/member/debug/play-ground")),
  },
  {
    name: ROUTES.debugComponentBenchmark,
    component: lazy(() => require("../components/containers/member/debug/component-benchmark")),
  },
  {
    name: ROUTES.game2048Selector,
    component: lazy(() => require("../components/containers/game/2048/selector")),
  },
  {
    name: ROUTES.game2048,
    component: lazy(() => require("../components/containers/game/2048")),
  },
  {
    name: ROUTES.yuHealthDebug,
    component: lazy(() => require("../components/containers/member/debug/yu-health-debug")),
  },
  {
    name: ROUTES.watchDebug,
    component: lazy(() => require("../components/containers/member/debug/watch-debug")),
  },

  {
    name: ROUTES.userFeatures,
    component: lazy(() => require("../components/containers/member/debug/user-features/user-features.container")),
  },
  {
    name: ROUTES.debugUserInfo,
    component: require("../components/containers/member/debug/user-info/user-info.container").default,
  },

  // meditation

  {
    name: ROUTES.meditopiaMediaList,
    component: lazy(() =>
      require("../components/containers/member/media/meditopia-media-list/meditopia-media-list.container")
    ),
  },
  {
    name: ROUTES.breathingExercise,
    component: lazy(() => require("../components/games/breathing/exercise/breathing-exercise.container")),
  },
  // fiit media category list
  {
    name: ROUTES.fiitMediaCategoryList,
    component: lazy(() =>
      require("../components/containers/member/media/fiit-media-category-list/fiit-media-category-list.container")
    ),
  },
  // fiit media list
  {
    name: ROUTES.fiitMediaList,
    component: lazy(() => require("../components/containers/member/media/fiit-media-list/fiit-media-list.container")),
  },
  {
    name: ROUTES.mediaPlayer,
    component: lazy(() => require("../components/containers/member/media/media-player/media-player.container")),
  },
  {
    name: ROUTES.mediaPlayerSdui,
    component: lazy(() => require("../components/containers/member/media/media-player/media-player-sdui.container")),
  },

  // settings
  {
    name: ROUTES.cyclingMeasurement,
    component: lazy(() => require("../components/containers/member/settings/cycling-measurement.container")),
  },
  {
    name: ROUTES.languageSelector,
    component: lazy(() => require("../components/containers/member/settings/language-selector.container")),
  },
  {
    name: ROUTES.testJourney,
    component: lazy(() => require("../components/containers/member/debug/test-journey/test-journey.container")),
  },
  {
    name: ROUTES.smokingJourneyPlants,
    component: lazy(() => require("../components/containers/member/debug/smoking-journey/plants/plants")),
  },
  {
    name: ROUTES.smokingJourneyStories,
    component: lazy(() => require("../components/containers/member/debug/smoking-journey/stories/stories")),
  },
  {
    name: ROUTES.smokingJourneyTree,
    component: lazy(() => require("../components/containers/member/debug/smoking-journey/tree/tree")),
  },
  {
    name: ROUTES.levelSelector,
    component: lazy(() => require("../components/containers/member/debug/level-selector/level-selector.container")),
  },
  {
    name: ROUTES.pathwaysProgress,
    component: require("../components/containers/member/debug/pathways-progress/pathways-progress.container").default,
  },
  {
    name: ROUTES.workoutDebug,
    component: lazy(() => require("../components/containers/member/debug/workout-debug/workout-debug.container")),
  },
  {
    name: ROUTES.permissions,
    component: lazy(() => require("../components/containers/member/permissions/permissions-wrapper.container")),
  },
  {
    name: ROUTES.leaderboardSettings,
    component: lazy(() =>
      require("../components/containers/member/leaderboard-settings/leaderboard-settings.container")
    ),
  },

  // quests screens
  {
    name: ROUTES.questsChallengesList,
    component: lazy(() =>
      require("../components/containers/member/quests/challenges-list/challenges-list-wrapper.container")
    ),
  },
  // products
  {
    name: ROUTES.productDetails,
    component: lazy(() => require("../components/containers/products/product-details/product-details.container")),
  },
  {
    name: ROUTES.beneficiary,
    component: lazy(() => require("../components/containers/products/beneficiary/beneficiary.container")),
  },
  {
    name: ROUTES.productPaymentHistory,
    component: lazy(() =>
      require("../components/containers/products/product-payment-history/product-payment-history.container")
    ),
  },
  {
    name: ROUTES.wellbeingHubItems,
    component: lazy(() => require("../components/containers/wellbeing-hub/wellbeing-hub-items.container")),
  },
  {
    name: ROUTES.sduiWellbeingHubItemDetails,
    component: lazy(() => require("../components/containers/sdui-static/sdui-static.container")),
  },
  // webview
  {
    name: ROUTES.webView,
    component: lazy(() => require("../components/containers/web-view/web-view.container")),
  },

  // referrals

  {
    name: ROUTES.referralInformation,
    component: lazy(() => require("../components/containers/referrals/referrals.container")),
  },

  // today-earnings

  {
    name: ROUTES.todayEarnings,
    component: lazy(() => require("../components/containers/today-earnings/today-earnings.container")),
  },

  // perk
  {
    name: ROUTES.perkSubscriptionInfo,
    component: lazy(() => require("../components/containers/perk/perk-subscription-info.container")),
  },

  // yu health
  {
    name: ROUTES.yuHealthConnect,
    component: lazy(() => require("../components/containers/member/yu-health-connect/yu-health-connect.container")),
  },
  {
    name: ROUTES.yuHealthConnectSelect,
    component: lazy(() =>
      require("../components/containers/member/yu-health-connect/yu-health-connect-select.container")
    ),
  },

  // battle pass

  {
    name: ROUTES.battlePass,
    component: lazy(() => require("../components/containers/battle-pass/battle-pass.container")),
    hasMenu: true,
  },
  {
    name: ROUTES.battlePassLeaderboard,
    component: lazy(() =>
      require("../components/containers/battle-pass/battle-pass-leaderboard/battle-pass-leaderboard.container")
    ),
  },
  {
    name: ROUTES.rewardsUnlock,
    component: lazy(() => require("../components/containers/rewards-unlock/rewards-unlock.container")),
  },

  // wrapped
  {
    name: ROUTES.wrapped,
    component: lazy(() => require("../components/containers/wrapped/wrapped.container")),
  },

  // generic heading testing

  {
    name: ROUTES.genericHeading,
    component: lazy(() => require("../components/containers/member/debug/generic-heading/generic-heading.container")),
  },

  // achievements
  {
    name: ROUTES.achievements,
    component: lazy(() => require("../components/containers/achievements/achievements.container")),
  },

  // pathways
  {
    name: ROUTES.pathways,
    component: lazy(() => require("../modules/pathways/containers/pathways.container")),
  },
  {
    name: ROUTES.pathwaysReflected,
    component: lazy(() => require("../modules/pathways/containers/pathways-reflected.container")),
  },
  {
    name: ROUTES.pathwaysClaim,
    component: lazy(() => require("../modules/pathways/containers/pathways-claim.container")),
  },
  {
    name: ROUTES.pathwayChallengeSuccess,
    component: lazy(() => require("../modules/pathways/containers/pathways-challenge-success.container")),
  },
  {
    name: ROUTES.pathwayChallengeFeedback,
    component: require("../modules/pathways/containers/pathways-challenge-feedback.container").default,
  },
  {
    name: ROUTES.pathwayChallengeIntro,
    component: lazy(() => require("../modules/pathways/containers/pathways-challenge-intro.container")),
  },
  {
    name: ROUTES.pathwaysMediaPlayer,
    component: lazy(() => require("../modules/pathways/containers/pathways-media-player.container")),
  },

  // mood calendar
  {
    name: ROUTES.moodCalendar,
    component: lazy(() => require("../modules/pathways/containers/pathways-mood-calendar.container")),
  },

  // modals
  {
    name: MODALS.yuCoinPowerExplained,
    component: lazy(() => require("../components/containers/member/yu/yu-coin-power-explained/index")),
  },
  {
    name: MODALS.policyCertificate,
    component: lazy(() => require("../components/containers/products/product-details/product-details.modal")),
  },
  {
    name: MODALS.challengeUnavailable,
    component: lazy(() => require("../components/modals/challenge-unavailable/challenge-unavailable.modal")),
  },
  {
    name: MODALS.chest,
    component: lazy(() => require("../components/modals/animated-chest/animated-chest")),
  },
  {
    name: MODALS.EOTWChest,
    component: lazy(() => require("../components/modals/eotw-chest/eotw-chest")),
  },
  {
    name: MODALS.collectReward,
    component: lazy(() => require("../components/modals/collect-reward/collect-reward.modal")),
  },
  {
    name: MODALS.feedback,
    component: lazy(() => require("../components/modals/feedback/feedback.modal")),
  },
  {
    name: MODALS.appReview,
    component: lazy(() => require("../components/modals/app-review/app-review.modal")),
  },
  {
    name: MODALS.generic,
    component: lazy(() => require("../components/modals/generic-modal/generic-modal")),
  },
  {
    name: MODALS.mobileUpdate,
    component: lazy(() => require("../components/modals/mobile-update/mobile-update-modal")),
  },
  {
    name: MODALS.addBeneficiary,
    component: lazy(() => require("../components/modals/yuscreen/beneficiary/add-beneficiary-modal")),
  },
  {
    name: MODALS.defaultBeneficiaries,
    component: lazy(() => require("../components/modals/yuscreen/beneficiary/default-beneficiaries-modal")),
  },
  {
    name: MODALS.levelUnavailable,
    component: lazy(() => require("../components/modals/level-unavailable/level-unavailable.modal")),
  },
  {
    name: MODALS.pushNotifications,
    component: lazy(() => require("../components/modals/push-notifications/push-notifications.modal")),
  },
  {
    name: MODALS.streaks,
    component: lazy(() => require("../components/modals/streaks/streaks.modal")),
  },
  {
    name: MODALS.streakSaved,
    component: lazy(() => require("../components/modals/streak-saved/streak-saved.modal")),
  },
  {
    name: MODALS.rewards,
    component: lazy(() => require("../components/modals/generic-modal/generic-modal")),
  },
  {
    name: MODALS.genericConnectionError,
    component: lazy(() => require("../components/modals/generic-modal/generic-connection-error-modal")),
  },
  {
    name: MODALS.info,
    component: lazy(() => require("../components/modals/info/info.modal")),
  },
  {
    name: MODALS.duelInvite,
    component: lazy(() => require("../components/modals/duels/duel-invite.modal")),
  },
  {
    name: MODALS.duelRespond,
    component: lazy(() => require("../components/modals/duels/duel-respond.modal")),
  },
  {
    name: MODALS.blurredOverlay,
    component: lazy(() => require("../components/modals/blurred-overlay/blurred-overlay")),
  },
  {
    name: MODALS.consumableModal,
    component: lazy(() => require("../components/modals/consumables/consumables.modal")),
  },
  {
    name: MODALS.itemDetailsHalfModal,
    component: lazy(() => require("../components/modals/item-details-half-modal/item-details-half-modal.modal")),
  },
  {
    name: MODALS.sduiStepFeedbackHalfModal,
    component: lazy(() =>
      require("../components/modals/sdui-step-feedback-half-modal/sdui-step-feedback-half-modal.modal")
    ),
  },
  {
    name: MODALS.switchToGoogleFit,
    component: lazy(() => require("../components/modals/switch-to-googlefit-modal/switch-to-googlefit-modal")),
  },
  {
    name: MODALS.whatsNew,
    component: lazy(() => require("../components/modals/whats-new/whats-new")),
  },
  {
    name: MODALS.collectEventReward,
    component: lazy(() => require("../components/modals/collect-event-reward/collect-event-reward.modal")),
  },
  {
    name: MODALS.sudokuHelp,
    component: lazy(() => require("../components/modals/sudoku-help/sudoku-help-modal")),
  },
  {
    name: MODALS.sudokuPause,
    component: lazy(() => require("../components/modals/sudoku-pause/sudoku-pause-modal")),
  },
  {
    name: MODALS.sudokuLeaderboardConsent,
    component: lazy(() => require("../components/modals/sudoku-leaderboard-consent/sudoku-leaderboard-consent-modal")),
  },
  {
    name: MODALS.leaderboardCommunityOverlay,
    component: lazy(() => require("../components/modals/leaderboard-community-overlay/leaderboard-community-overlay")),
  },
  {
    name: MODALS.challengeNoData,
    component: lazy(() => require("../components/modals/challenge-no-data/challenge-no-data.modal")),
  },
  {
    name: MODALS.joinLeaderboardOverlay,
    component: lazy(() => require("../components/modals/join-leaderboard-overlay/join-leaderboard-overlay")),
  },
  {
    name: MODALS.leaderboardRank,
    component: lazy(() => require("../components/modals/leaderboard-rank-modal/leaderboard-rank-modal")),
  },

  {
    name: MODALS.genericWithHeroImage,
    component: lazy(() => require("../components/modals/hero-image-modal/hero-image-modal")),
  },
  {
    name: MODALS.healthPermission,
    component: lazy(() => require("../components/modals/health-permission/health-permission.modal")),
  },
  {
    name: MODALS.smokingStreakCelebration,
    component: lazy(() => require("../components/modals/smoking-streak-celebration/smoking-streak-celebration.modal")),
  },
  {
    name: MODALS.smokingEditStateModal,
    component: lazy(() => require("../components/modals/smoking-edit-state/smoking-edit-state.modal")),
  },
  {
    name: MODALS.openRandomChest,
    component: lazy(() => require("../components/modals/open-random-chest/open-random-chest-modal")),
  },
  {
    name: MODALS.viewAchievementModal,
    component: lazy(() => require("../components/modals/view-achievement-modal/view-achievement-modal")),
  },
  {
    name: MODALS.unlockedAchievementsModal,
    component: lazy(() => require("../components/modals/unlocked-achievements-modal/unlocked-achievements-modal")),
  },
];

export default routesForRegistration;
export const preRegisteredRoutes = routesForRegistration.map(({ name }) => name);
export const dynamicallyRegisteredRoutes: string[] = [];
