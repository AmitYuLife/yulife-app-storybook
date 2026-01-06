import { MODALS, ROUTES } from "./constants";

const routesForRegistration = [
  {
    name: ROUTES.sduiStatic,
    component: require("../components/containers/sdui-static/sdui-static.container").default,
  },
  {
    name: ROUTES.journey,
    component: require("../components/containers/journey/journey.container").default,
  },
  {
    name: ROUTES.noAccess,
    component: require("../components/containers/no-access/no-access.container").default,
  },
  {
    name: ROUTES.loginLegacy,
    component: require("../components/containers/login/legacy/login.container").default,
  },
  {
    name: ROUTES.loginHero,
    component: require("../components/containers/login/login-hero.container").default,
  },
  {
    name: ROUTES.loginEmail,
    component: require("../components/containers/login/login-email.container").default,
  },
  {
    name: ROUTES.loginConfirm,
    component: require("../components/containers/login/login-confirm.container").default,
  },
  {
    name: ROUTES.loginPassword,
    component: require("../components/containers/login/login-password.container").default,
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
    name: ROUTES.yumojiBuilder,
    component: require("../components/containers/member/yumoji-builder/yumoji-builder.container").default,
  },
  {
    name: ROUTES.settings,
    component: require("../components/containers/member/settings/_settings.container").default,
  },
  {
    hasMenu: true,
    name: ROUTES.dailySteps,
    component: require("../components/containers/member/daily-steps/daily-steps-wrapper.container").default,
  },
  {
    name: ROUTES.sudokuStaging,
    component: require("../components/screens/games/sudoku/sudoku-staging/sudoku-staging.container").default,
  },
  {
    name: ROUTES.sudokuPractice,
    component: require("../components/screens/games/sudoku/sudoku-practice/sudoku-practice.container").default,
  },
  {
    name: ROUTES.sudokuGame,
    component: require("../components/screens/games/sudoku/sudoku-game/sudoku.container").default,
  },
  {
    name: ROUTES.sudokuCompleted,
    component: require("../components/screens/games/sudoku/sudoku-completed/sudoku-completed.container").default,
  },
  {
    name: ROUTES.sudokuLeaderboard,
    component: require("../components/screens/games/sudoku/sudoku-leaderboard/sudoku-leaderboard.container").default,
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
    component: require("../components/containers/member/rewards/rewards.manager").default,
  },
  {
    name: ROUTES.rewardDetailsSdui,
    component: require("../components/containers/sdui-static/sdui-static.container").default,
  },
  {
    name: ROUTES.purchases,
    component: require("../components/containers/member/rewards/rewards.purchases.container").default,
  },
  {
    name: ROUTES.wallet,
    component: require("../components/containers/member/rewards/rewards.wallet.container").default,
  },
  {
    name: ROUTES.walletItems,
    component: require("../components/containers/member/rewards/rewards.wallet.items.container").default,
  },
  {
    name: ROUTES.rewardPurchase,
    component: require("../components/containers/sdui-static/sdui-static.container").default,
  },
  {
    name: ROUTES.activityHistory,
    component: require("../components/containers/member/activity-history/index").default,
  },
  {
    name: ROUTES.challengesHistoryNew,
    component: require("../components/containers/member/quests/challenges-history-new/challenges-history-new.container")
      .default,
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
    name: ROUTES.inspect,
    component: require("../components/containers/member/inspect/inspect.container").default,
  },
  {
    name: ROUTES.gifting,
    component: require("../components/containers/member/gifting/gifting-manager.container").default,
  },
  {
    name: ROUTES.giftView,
    component: require("../components/containers/member/gift-view/gift-view.container").default,
  },
  {
    name: ROUTES.smoking,
    component: require("../components/containers/member/smoking/smoking-hub/smoking.container").default,
  },
  {
    name: ROUTES.smokingStreakLapsed,
    component: require("../components/containers/member/smoking/smoking-streak-lapsed/smoking-streak-lapsed.container")
      .default,
  },
  {
    name: ROUTES.smokingCommitment,
    component: require("../components/containers/member/smoking/smoking-commitment/smoking-commitment.container")
      .default,
  },

  // Content Location
  {
    name: ROUTES.selectContentLocation,
    component: require("../components/containers/member/content-location/select-content-location.container").default,
  },

  // Leaderboard
  {
    hasMenu: true,
    renderAfterMs: 450,
    name: ROUTES.leaderboard,
    component: require("../components/containers/member/leaderboard/leaderboard.container").default,
  },
  {
    name: ROUTES.leaderboardInfo,
    component: require("../components/containers/member/leaderboard/leaderboard-info/leaderboard-info").default,
  },
  {
    name: ROUTES.leaderboardSearch,
    component: require("../components/containers/member/leaderboard/leaderboard-search.container").default,
  },

  {
    name: ROUTES.notifications,
    component: require("../components/containers/member/notifications/notifications.container").default,
  },

  // tools
  {
    name: ROUTES.tools,
    component: require("../components/containers/member/tools/tools.container").default,
  },

  // events
  {
    name: ROUTES.eventDialog,
    component: require("../components/containers/member/events/event-dialog/event-dialog.container").default,
  },

  // debug
  {
    name: ROUTES.debug,
    component: require("../components/containers/member/debug/debug.container").default,
  },
  {
    name: ROUTES.debugPlayground,
    component: require("../components/containers/member/debug/play-ground").default,
  },
  {
    name: ROUTES.debugComponentBenchmark,
    component: require("../components/containers/member/debug/component-benchmark").default,
  },
  {
    name: ROUTES.game2048Selector,
    component: require("../components/containers/game/2048/selector").default,
  },
  {
    name: ROUTES.game2048,
    component: require("../components/containers/game/2048").default,
  },
  {
    name: ROUTES.yuHealthDebug,
    component: require("../components/containers/member/debug/yu-health-debug").default,
  },
  {
    name: ROUTES.watchDebug,
    component: require("../components/containers/member/debug/watch-debug").default,
  },

  {
    name: ROUTES.userFeatures,
    component: require("../components/containers/member/debug/user-features/user-features.container").default,
  },

  // meditation

  {
    name: ROUTES.meditopiaMediaList,
    component: require("../components/containers/member/media/meditopia-media-list/meditopia-media-list.container")
      .default,
  },
  {
    name: ROUTES.breathingExercise,
    component: require("../components/games/breathing/exercise/breathing-exercise.container").default,
  },
  // fiit media category list
  {
    name: ROUTES.fiitMediaCategoryList,
    component:
      require("../components/containers/member/media/fiit-media-category-list/fiit-media-category-list.container")
        .default,
  },
  // fiit media list
  {
    name: ROUTES.fiitMediaList,
    component: require("../components/containers/member/media/fiit-media-list/fiit-media-list.container").default,
  },
  {
    name: ROUTES.mediaPlayer,
    component: require("../components/containers/member/media/media-player/media-player.container").default,
  },
  {
    name: ROUTES.mediaPlayerSdui,
    component: require("../components/containers/member/media/media-player/media-player-sdui.container").default,
  },

  // settings
  {
    name: ROUTES.cyclingMeasurement,
    component: require("../components/containers/member/settings/cycling-measurement.container").default,
  },
  {
    name: ROUTES.languageSelector,
    component: require("../components/containers/member/settings/language-selector.container").default,
  },
  {
    name: ROUTES.testJourney,
    component: require("../components/containers/member/debug/test-journey/test-journey.container").default,
  },
  {
    name: ROUTES.smokingJourneyPlants,
    component: require("../components/containers/member/debug/smoking-journey/plants/plants").default,
  },
  {
    name: ROUTES.smokingJourneyStories,
    component: require("../components/containers/member/debug/smoking-journey/stories/stories").default,
  },
  {
    name: ROUTES.smokingJourneyTree,
    component: require("../components/containers/member/debug/smoking-journey/tree/tree").default,
  },
  {
    name: ROUTES.levelSelector,
    component: require("../components/containers/member/debug/level-selector/level-selector.container").default,
  },
  {
    name: ROUTES.workoutDebug,
    component: require("../components/containers/member/debug/workout-debug/workout-debug.container").default,
  },
  {
    name: ROUTES.permissions,
    component: require("../components/containers/member/permissions/permissions-wrapper.container").default,
  },
  {
    name: ROUTES.leaderboardSettings,
    component: require("../components/containers/member/leaderboard-settings/leaderboard-settings.container").default,
  },

  // quests screens
  {
    name: ROUTES.questsChallengesList,
    component: require("../components/containers/member/quests/challenges-list/challenges-list-wrapper.container")
      .default,
  },
  // products
  {
    name: ROUTES.productDetails,
    component: require("../components/containers/products/product-details/product-details.container").default,
  },
  {
    name: ROUTES.beneficiary,
    component: require("../components/containers/products/beneficiary/beneficiary.container").default,
  },
  {
    name: ROUTES.productPaymentHistory,
    component: require("../components/containers/products/product-payment-history/product-payment-history.container")
      .default,
  },
  {
    name: ROUTES.wellbeingHubItems,
    component: require("../components/containers/wellbeing-hub/wellbeing-hub-items.container").default,
  },
  {
    name: ROUTES.sduiWellbeingHubItemDetails,
    component: require("../components/containers/sdui-static/sdui-static.container").default,
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

  // today-earnings

  {
    name: ROUTES.todayEarnings,
    component: require("../components/containers/today-earnings/today-earnings.container").default,
  },

  // perk
  {
    name: ROUTES.perkSubscriptionInfo,
    component: require("../components/containers/perk/perk-subscription-info.container").default,
  },

  // yu health
  {
    name: ROUTES.yuHealthConnect,
    component: require("../components/containers/member/yu-health-connect/yu-health-connect.container").default,
  },
  {
    name: ROUTES.yuHealthConnectSelect,
    component: require("../components/containers/member/yu-health-connect/yu-health-connect-select.container").default,
  },

  // battle pass

  {
    name: ROUTES.battlePass,
    component: require("../components/containers/battle-pass/battle-pass.container").default,
    hasMenu: true,
  },
  {
    name: ROUTES.battlePassLeaderboard,
    component: require("../components/containers/battle-pass/battle-pass-leaderboard/battle-pass-leaderboard.container")
      .default,
  },
  {
    name: ROUTES.rewardsUnlock,
    component: require("../components/containers/rewards-unlock/rewards-unlock.container").default,
  },

  // wrapped
  {
    name: ROUTES.wrapped,
    component: require("../components/containers/wrapped/wrapped.container").default,
  },

  // generic heading testing

  {
    name: ROUTES.genericHeading,
    component: require("../components/containers/member/debug/generic-heading/generic-heading.container").default,
  },

  // achievements
  {
    name: ROUTES.achievements,
    component: require("../components/containers/achievements/achievements.container").default,
  },

  // pathways
  {
    name: ROUTES.pathways,
    component: require("../modules/pathways/containers/pathways.container").default,
  },
  {
    name: ROUTES.pathwaysReflected,
    component: require("../modules/pathways/containers/pathways-reflected.container").default,
  },
  {
    name: ROUTES.pathwaysClaim,
    component: require("../modules/pathways/containers/pathways-claim.container").default,
  },
  {
    name: ROUTES.pathwayChallengeSuccess,
    component: require("../modules/pathways/containers/pathways-challenge-success.container").default,
  },
  {
    name: ROUTES.pathwayChallengeIntro,
    component: require("../modules/pathways/containers/pathways-challenge-intro.container").default,
  },
  {
    name: ROUTES.pathwaysMediaPlayer,
    component: require("../modules/pathways/containers/pathways-media-player.container").default,
  },

  // mood calendar
  {
    name: ROUTES.moodCalendar,
    component: require("../modules/pathways/containers/pathways-mood-calendar.container").default,
  },

  // modals
  {
    name: MODALS.yuCoinPowerExplained,
    component: require("../components/containers/member/yu/yu-coin-power-explained/index").default,
  },
  {
    name: MODALS.policyCertificate,
    component: require("../components/containers/products/product-details/product-details.modal").default,
  },
  {
    name: MODALS.challengeUnavailable,
    component: require("../components/modals/challenge-unavailable/challenge-unavailable.modal").default,
  },
  {
    name: MODALS.chest,
    component: require("../components/modals/animated-chest/animated-chest").default,
  },
  {
    name: MODALS.EOTWChest,
    component: require("../components/modals/eotw-chest/eotw-chest").default,
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
    name: MODALS.streakSaved,
    component: require("../components/modals/streak-saved/streak-saved.modal").default,
  },
  {
    name: MODALS.rewards,
    component: require("../components/modals/generic-modal/generic-modal").default,
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
    name: MODALS.blurredOverlay,
    component: require("../components/modals/blurred-overlay/blurred-overlay").default,
  },
  {
    name: MODALS.consumableModal,
    component: require("../components/modals/consumables/consumables.modal").default,
  },
  {
    name: MODALS.itemDetailsHalfModal,
    component: require("../components/modals/item-details-half-modal/item-details-half-modal.modal").default,
  },
  {
    name: MODALS.sduiStepFeedbackHalfModal,
    component: require("../components/modals/sdui-step-feedback-half-modal/sdui-step-feedback-half-modal.modal")
      .default,
  },
  {
    name: MODALS.switchToGoogleFit,
    component: require("../components/modals/switch-to-googlefit-modal/switch-to-googlefit-modal").default,
  },
  {
    name: MODALS.whatsNew,
    component: require("../components/modals/whats-new/whats-new").default,
  },
  {
    name: MODALS.collectEventReward,
    component: require("../components/modals/collect-event-reward/collect-event-reward.modal").default,
  },
  {
    name: MODALS.sudokuHelp,
    component: require("../components/modals/sudoku-help/sudoku-help-modal").default,
  },
  {
    name: MODALS.sudokuPause,
    component: require("../components/modals/sudoku-pause/sudoku-pause-modal").default,
  },
  {
    name: MODALS.sudokuLeaderboardConsent,
    component: require("../components/modals/sudoku-leaderboard-consent/sudoku-leaderboard-consent-modal").default,
  },
  {
    name: MODALS.leaderboardCommunityOverlay,
    component: require("../components/modals/leaderboard-community-overlay/leaderboard-community-overlay").default,
  },
  {
    name: MODALS.challengeNoData,
    component: require("../components/modals/challenge-no-data/challenge-no-data.modal").default,
  },
  {
    name: MODALS.joinLeaderboardOverlay,
    component: require("../components/modals/join-leaderboard-overlay/join-leaderboard-overlay").default,
  },
  {
    name: MODALS.leaderboardRank,
    component: require("../components/modals/leaderboard-rank-modal/leaderboard-rank-modal").default,
  },

  {
    name: MODALS.genericWithHeroImage,
    component: require("../components/modals/hero-image-modal/hero-image-modal").default,
  },
  {
    name: MODALS.healthPermission,
    component: require("../components/modals/health-permission/health-permission.modal").default,
  },
  {
    name: MODALS.smokingStreakCelebration,
    component: require("../components/modals/smoking-streak-celebration/smoking-streak-celebration.modal").default,
  },
  {
    name: MODALS.smokingEditStateModal,
    component: require("../components/modals/smoking-edit-state/smoking-edit-state.modal").default,
  },
  {
    name: MODALS.openRandomChest,
    component: require("../components/modals/open-random-chest/open-random-chest-modal").default,
  },
  {
    name: MODALS.viewAchievementModal,
    component: require("../components/modals/view-achievement-modal/view-achievement-modal").default,
  },
  {
    name: MODALS.unlockedAchievementsModal,
    component: require("../components/modals/unlocked-achievements-modal/unlocked-achievements-modal").default,
  },
];

export default routesForRegistration;
export const preRegisteredRoutes = routesForRegistration.map(({ name }) => name);
export const dynamicallyRegisteredRoutes: string[] = [];
