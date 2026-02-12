import { MODALS, ROUTES } from "./constants";

// --- Route screen imports ---

// shared
import SduiStaticContainer from "../components/containers/sdui-static/sdui-static.container";

// pre-auth screens
import JourneyContainer from "../components/containers/journey/journey.container";
import NoAccessContainer from "../components/containers/no-access/no-access.container";
import LoginLegacyContainer from "../components/containers/login/legacy/login.container";
import LoginHeroContainer from "../components/containers/login/login-hero.container";
import LoginEmailContainer from "../components/containers/login/login-email.container";
import LoginConfirmContainer from "../components/containers/login/login-confirm.container";
import LoginPasswordContainer from "../components/containers/login/login-password.container";
import ResetPasswordContainer from "../components/containers/reset-password/reset-password.container";
import OfflineContainer from "../components/containers/offline/offline.container";
import UpdateContainer from "../components/containers/update/update.container";

// onboarding screens
import SignupRewardContainer from "../components/containers/onboarding/signup-reward/signup-reward.container";
import FitkitConnectContainer from "../components/containers/onboarding/fitkit-connect/fitkit-connect.container";

// member screens
import MenuContainer from "../components/containers/member/menu/menu.container";
import YuScreenContainer from "../components/containers/member/yu/yu-screen.container";
import YumojiBuilderContainer from "../components/containers/member/yumoji-builder/yumoji-builder.container";
import SettingsContainer from "../components/containers/member/settings/_settings.container";
import DailyStepsContainer from "../components/containers/member/daily-steps/daily-steps-wrapper.container";
import SudokuStagingContainer from "../components/screens/games/sudoku/sudoku-staging/sudoku-staging.container";
import SudokuPracticeContainer from "../components/screens/games/sudoku/sudoku-practice/sudoku-practice.container";
import SudokuGameContainer from "../components/screens/games/sudoku/sudoku-game/sudoku.container";
import SudokuCompletedContainer from "../components/screens/games/sudoku/sudoku-completed/sudoku-completed.container";
import SudokuLeaderboardContainer from "../components/screens/games/sudoku/sudoku-leaderboard/sudoku-leaderboard.container";
import QuestsContainer from "../components/containers/member/quests/quests.container";
import RewardsManager from "../components/containers/member/rewards/rewards.manager";
import PurchasesContainer from "../components/containers/member/rewards/rewards.purchases.container";
import WalletContainer from "../components/containers/member/rewards/rewards.wallet.container";
import WalletItemsContainer from "../components/containers/member/rewards/rewards.wallet.items.container";
import ActivityHistoryContainer from "../components/containers/member/activity-history/index";
import ChallengesHistoryNewContainer from "../components/containers/member/quests/challenges-history-new/challenges-history-new.container";
import DuelsHubContainer from "../components/containers/member/duels-hub/duels-hub.container";
import DuelsSearchContainer from "../components/containers/member/duels-search/duels-search.container";
import InspectContainer from "../components/containers/member/inspect/inspect.container";
import GiftingManagerContainer from "../components/containers/member/gifting/gifting-manager.container";
import GiftViewContainer from "../components/containers/member/gift-view/gift-view.container";
import SmokingContainer from "../components/containers/member/smoking/smoking-hub/smoking.container";
import SmokingStreakLapsedContainer from "../components/containers/member/smoking/smoking-streak-lapsed/smoking-streak-lapsed.container";
import SmokingCommitmentContainer from "../components/containers/member/smoking/smoking-commitment/smoking-commitment.container";

// Content Location
import SelectContentLocationContainer from "../components/containers/member/content-location/select-content-location.container";

// Leaderboard
import LeaderboardContainer from "../components/containers/member/leaderboard/leaderboard.container";
import LeaderboardInfoContainer from "../components/containers/member/leaderboard/leaderboard-info/leaderboard-info";
import LeaderboardSearchContainer from "../components/containers/member/leaderboard/leaderboard-search.container";

import NotificationsContainer from "../components/containers/member/notifications/notifications.container";

// tools
import ToolsContainer from "../components/containers/member/tools/tools.container";

// events
import EventDialogContainer from "../components/containers/member/events/event-dialog/event-dialog.container";

// debug
import DebugContainer from "../components/containers/member/debug/debug.container";
import DebugPlayground from "../components/containers/member/debug/play-ground";
import ComponentBenchmark from "../components/containers/member/debug/component-benchmark";
import Game2048Selector from "../components/containers/game/2048/selector";
import Game2048Container from "../components/containers/game/2048";
import YuHealthDebug from "../components/containers/member/debug/yu-health-debug";
import WatchDebug from "../components/containers/member/debug/watch-debug";
import UserFeaturesContainer from "../components/containers/member/debug/user-features/user-features.container";
import UserInfoContainer from "../components/containers/member/debug/user-info/user-info.container";
import TestJourneyContainer from "../components/containers/member/debug/test-journey/test-journey.container";
import SmokingJourneyPlants from "../components/containers/member/debug/smoking-journey/plants/plants";
import SmokingJourneyStories from "../components/containers/member/debug/smoking-journey/stories/stories";
import SmokingJourneyTree from "../components/containers/member/debug/smoking-journey/tree/tree";
import LevelSelectorContainer from "../components/containers/member/debug/level-selector/level-selector.container";
import PathwaysProgressContainer from "../components/containers/member/debug/pathways-progress/pathways-progress.container";
import WorkoutDebugContainer from "../components/containers/member/debug/workout-debug/workout-debug.container";
import GenericHeadingContainer from "../components/containers/member/debug/generic-heading/generic-heading.container";

// meditation
import MeditopiaMediaListContainer from "../components/containers/member/media/meditopia-media-list/meditopia-media-list.container";
import BreathingExerciseContainer from "../components/games/breathing/exercise/breathing-exercise.container";

// fiit media
import FiitMediaCategoryListContainer from "../components/containers/member/media/fiit-media-category-list/fiit-media-category-list.container";
import FiitMediaListContainer from "../components/containers/member/media/fiit-media-list/fiit-media-list.container";
import MediaPlayerContainer from "../components/containers/member/media/media-player/media-player.container";
import MediaPlayerSduiContainer from "../components/containers/member/media/media-player/media-player-sdui.container";

// settings
import CyclingMeasurementContainer from "../components/containers/member/settings/cycling-measurement.container";
import LanguageSelectorContainer from "../components/containers/member/settings/language-selector.container";

import PermissionsContainer from "../components/containers/member/permissions/permissions-wrapper.container";
import LeaderboardSettingsContainer from "../components/containers/member/leaderboard-settings/leaderboard-settings.container";

// quests screens
import ChallengesListWrapperContainer from "../components/containers/member/quests/challenges-list/challenges-list-wrapper.container";

// products
import ProductDetailsContainer from "../components/containers/products/product-details/product-details.container";
import BeneficiaryContainer from "../components/containers/products/beneficiary/beneficiary.container";
import ProductPaymentHistoryContainer from "../components/containers/products/product-payment-history/product-payment-history.container";

import WellbeingHubItemsContainer from "../components/containers/wellbeing-hub/wellbeing-hub-items.container";

// webview
import WebViewContainer from "../components/containers/web-view/web-view.container";

// referrals
import ReferralsContainer from "../components/containers/referrals/referrals.container";

// today-earnings
import TodayEarningsContainer from "../components/containers/today-earnings/today-earnings.container";

// perk
import PerkSubscriptionInfoContainer from "../components/containers/perk/perk-subscription-info.container";

// yu health
import YuHealthConnectContainer from "../components/containers/member/yu-health-connect/yu-health-connect.container";
import YuHealthConnectSelectContainer from "../components/containers/member/yu-health-connect/yu-health-connect-select.container";

// battle pass
import BattlePassContainer from "../components/containers/battle-pass/battle-pass.container";
import BattlePassLeaderboardContainer from "../components/containers/battle-pass/battle-pass-leaderboard/battle-pass-leaderboard.container";
import RewardsUnlockContainer from "../components/containers/rewards-unlock/rewards-unlock.container";

// wrapped
import WrappedContainer from "../components/containers/wrapped/wrapped.container";

// achievements
import AchievementsContainer from "../components/containers/achievements/achievements.container";

// pathways
import PathwaysContainer from "../modules/pathways/containers/pathways.container";
import PathwaysReflectedContainer from "../modules/pathways/containers/pathways-reflected.container";
import PathwaysClaimContainer from "../modules/pathways/containers/pathways-claim.container";
import PathwaysChallengeSuccessContainer from "../modules/pathways/containers/pathways-challenge-success.container";
import PathwaysChallengeFeedbackContainer from "../modules/pathways/containers/pathways-challenge-feedback.container";
import PathwaysChallengeIntroContainer from "../modules/pathways/containers/pathways-challenge-intro.container";
import PathwaysMediaPlayerContainer from "../modules/pathways/containers/pathways-media-player.container";

// mood calendar
import PathwaysMoodCalendarContainer from "../modules/pathways/containers/pathways-mood-calendar.container";

// --- Modal imports ---
import YuCoinPowerExplained from "../components/containers/member/yu/yu-coin-power-explained/index";
import PolicyCertificateModal from "../components/containers/products/product-details/product-details.modal";
import ChallengeUnavailableModal from "../components/modals/challenge-unavailable/challenge-unavailable.modal";
import AnimatedChest from "../components/modals/animated-chest/animated-chest";
import EOTWChest from "../components/modals/eotw-chest/eotw-chest";
import CollectRewardModal from "../components/modals/collect-reward/collect-reward.modal";
import FeedbackModal from "../components/modals/feedback/feedback.modal";
import AppReviewModal from "../components/modals/app-review/app-review.modal";
import GenericModal from "../components/modals/generic-modal/generic-modal";
import MobileUpdateModal from "../components/modals/mobile-update/mobile-update-modal";
import AddBeneficiaryModal from "../components/modals/yuscreen/beneficiary/add-beneficiary-modal";
import DefaultBeneficiariesModal from "../components/modals/yuscreen/beneficiary/default-beneficiaries-modal";
import LevelUnavailableModal from "../components/modals/level-unavailable/level-unavailable.modal";
import PushNotificationsModal from "../components/modals/push-notifications/push-notifications.modal";
import StreaksModal from "../components/modals/streaks/streaks.modal";
import StreakSavedModal from "../components/modals/streak-saved/streak-saved.modal";
import GenericConnectionErrorModal from "../components/modals/generic-modal/generic-connection-error-modal";
import InfoModal from "../components/modals/info/info.modal";
import DuelInviteModal from "../components/modals/duels/duel-invite.modal";
import DuelRespondModal from "../components/modals/duels/duel-respond.modal";
import BlurredOverlay from "../components/modals/blurred-overlay/blurred-overlay";
import ConsumablesModal from "../components/modals/consumables/consumables.modal";
import ItemDetailsHalfModal from "../components/modals/item-details-half-modal/item-details-half-modal.modal";
import SduiStepFeedbackHalfModal from "../components/modals/sdui-step-feedback-half-modal/sdui-step-feedback-half-modal.modal";
import SwitchToGoogleFitModal from "../components/modals/switch-to-googlefit-modal/switch-to-googlefit-modal";
import WhatsNew from "../components/modals/whats-new/whats-new";
import CollectEventRewardModal from "../components/modals/collect-event-reward/collect-event-reward.modal";
import SudokuHelpModal from "../components/modals/sudoku-help/sudoku-help-modal";
import SudokuPauseModal from "../components/modals/sudoku-pause/sudoku-pause-modal";
import SudokuLeaderboardConsentModal from "../components/modals/sudoku-leaderboard-consent/sudoku-leaderboard-consent-modal";
import LeaderboardCommunityOverlay from "../components/modals/leaderboard-community-overlay/leaderboard-community-overlay";
import ChallengeNoDataModal from "../components/modals/challenge-no-data/challenge-no-data.modal";
import JoinLeaderboardOverlay from "../components/modals/join-leaderboard-overlay/join-leaderboard-overlay";
import LeaderboardRankModal from "../components/modals/leaderboard-rank-modal/leaderboard-rank-modal";
import HeroImageModal from "../components/modals/hero-image-modal/hero-image-modal";
import HealthPermissionModal from "../components/modals/health-permission/health-permission.modal";
import SmokingStreakCelebrationModal from "../components/modals/smoking-streak-celebration/smoking-streak-celebration.modal";
import SmokingEditStateModal from "../components/modals/smoking-edit-state/smoking-edit-state.modal";
import OpenRandomChestModal from "../components/modals/open-random-chest/open-random-chest-modal";
import ViewAchievementModal from "../components/modals/view-achievement-modal/view-achievement-modal";
import UnlockedAchievementsModal from "../components/modals/unlocked-achievements-modal/unlocked-achievements-modal";

// Type for route definition
type RouteDefinition = {
  name: string;
  component: React.ComponentType<unknown>;
  renderAfterMs?: number;
  hasMenu?: boolean;
};

const routesForRegistration: RouteDefinition[] = [
  {
    name: ROUTES.sduiStatic,
    component: SduiStaticContainer,
  },
  {
    name: ROUTES.journey,
    component: JourneyContainer,
  },
  {
    name: ROUTES.noAccess,
    component: NoAccessContainer,
  },
  {
    name: ROUTES.loginLegacy,
    component: LoginLegacyContainer,
  },
  {
    name: ROUTES.loginHero,
    component: LoginHeroContainer,
  },
  {
    name: ROUTES.loginEmail,
    component: LoginEmailContainer,
  },
  {
    name: ROUTES.loginConfirm,
    component: LoginConfirmContainer,
  },
  {
    name: ROUTES.loginPassword,
    component: LoginPasswordContainer,
  },
  {
    name: ROUTES.resetPassword,
    component: ResetPasswordContainer,
  },
  {
    name: ROUTES.offline,
    component: OfflineContainer,
  },
  {
    name: ROUTES.update,
    component: UpdateContainer,
  },

  // onboarding screens
  {
    name: ROUTES.onboardingSignUpReward,
    component: SignupRewardContainer,
  },
  {
    name: ROUTES.onboardingFitKitConnect,
    component: FitkitConnectContainer,
  },

  // member screens
  {
    renderAfterMs: 600,
    name: ROUTES.menu,
    component: MenuContainer,
  },
  {
    hasMenu: true,
    name: ROUTES.yuScreen,
    component: YuScreenContainer,
  },
  {
    name: ROUTES.yumojiBuilder,
    component: YumojiBuilderContainer,
  },
  {
    name: ROUTES.settings,
    component: SettingsContainer,
  },
  {
    hasMenu: true,
    name: ROUTES.dailySteps,
    component: DailyStepsContainer,
  },
  {
    name: ROUTES.sudokuStaging,
    component: SudokuStagingContainer,
  },
  {
    name: ROUTES.sudokuPractice,
    component: SudokuPracticeContainer,
  },
  {
    name: ROUTES.sudokuGame,
    component: SudokuGameContainer,
  },
  {
    name: ROUTES.sudokuCompleted,
    component: SudokuCompletedContainer,
  },
  {
    name: ROUTES.sudokuLeaderboard,
    component: SudokuLeaderboardContainer,
  },
  {
    hasMenu: true,
    renderAfterMs: 150,
    name: ROUTES.quests,
    component: QuestsContainer,
  },
  {
    hasMenu: true,
    renderAfterMs: 600,
    name: ROUTES.rewards,
    component: RewardsManager,
  },
  {
    name: ROUTES.rewardDetailsSdui,
    component: SduiStaticContainer,
  },
  {
    name: ROUTES.purchases,
    component: PurchasesContainer,
  },
  {
    name: ROUTES.wallet,
    component: WalletContainer,
  },
  {
    name: ROUTES.walletItems,
    component: WalletItemsContainer,
  },
  {
    name: ROUTES.rewardPurchase,
    component: SduiStaticContainer,
  },
  {
    name: ROUTES.activityHistory,
    component: ActivityHistoryContainer,
  },
  {
    name: ROUTES.challengesHistoryNew,
    component: ChallengesHistoryNewContainer,
  },
  {
    name: ROUTES.duelsHub,
    component: DuelsHubContainer,
  },
  {
    name: ROUTES.duelsSearch,
    component: DuelsSearchContainer,
  },
  {
    name: ROUTES.inspect,
    component: InspectContainer,
  },
  {
    name: ROUTES.gifting,
    component: GiftingManagerContainer,
  },
  {
    name: ROUTES.giftView,
    component: GiftViewContainer,
  },
  {
    name: ROUTES.smoking,
    component: SmokingContainer,
  },
  {
    name: ROUTES.smokingStreakLapsed,
    component: SmokingStreakLapsedContainer,
  },
  {
    name: ROUTES.smokingCommitment,
    component: SmokingCommitmentContainer,
  },

  // Content Location
  {
    name: ROUTES.selectContentLocation,
    component: SelectContentLocationContainer,
  },

  // Leaderboard
  {
    hasMenu: true,
    renderAfterMs: 450,
    name: ROUTES.leaderboard,
    component: LeaderboardContainer,
  },
  {
    name: ROUTES.leaderboardInfo,
    component: LeaderboardInfoContainer,
  },
  {
    name: ROUTES.leaderboardSearch,
    component: LeaderboardSearchContainer,
  },

  {
    name: ROUTES.notifications,
    component: NotificationsContainer,
  },

  // tools
  {
    name: ROUTES.tools,
    component: ToolsContainer,
  },

  // events
  {
    name: ROUTES.eventDialog,
    component: EventDialogContainer,
  },

  // debug
  {
    name: ROUTES.debug,
    component: DebugContainer,
  },
  {
    name: ROUTES.debugPlayground,
    component: DebugPlayground,
  },
  {
    name: ROUTES.debugComponentBenchmark,
    component: ComponentBenchmark,
  },
  {
    name: ROUTES.game2048Selector,
    component: Game2048Selector,
  },
  {
    name: ROUTES.game2048,
    component: Game2048Container,
  },
  {
    name: ROUTES.yuHealthDebug,
    component: YuHealthDebug,
  },
  {
    name: ROUTES.watchDebug,
    component: WatchDebug,
  },

  {
    name: ROUTES.userFeatures,
    component: UserFeaturesContainer,
  },
  {
    name: ROUTES.debugUserInfo,
    component: UserInfoContainer,
  },

  // meditation

  {
    name: ROUTES.meditopiaMediaList,
    component: MeditopiaMediaListContainer,
  },
  {
    name: ROUTES.breathingExercise,
    component: BreathingExerciseContainer,
  },
  // fiit media category list
  {
    name: ROUTES.fiitMediaCategoryList,
    component: FiitMediaCategoryListContainer,
  },
  // fiit media list
  {
    name: ROUTES.fiitMediaList,
    component: FiitMediaListContainer,
  },
  {
    name: ROUTES.mediaPlayer,
    component: MediaPlayerContainer,
  },
  {
    name: ROUTES.mediaPlayerSdui,
    component: MediaPlayerSduiContainer,
  },

  // settings
  {
    name: ROUTES.cyclingMeasurement,
    component: CyclingMeasurementContainer,
  },
  {
    name: ROUTES.languageSelector,
    component: LanguageSelectorContainer,
  },
  {
    name: ROUTES.testJourney,
    component: TestJourneyContainer,
  },
  {
    name: ROUTES.smokingJourneyPlants,
    component: SmokingJourneyPlants,
  },
  {
    name: ROUTES.smokingJourneyStories,
    component: SmokingJourneyStories,
  },
  {
    name: ROUTES.smokingJourneyTree,
    component: SmokingJourneyTree,
  },
  {
    name: ROUTES.levelSelector,
    component: LevelSelectorContainer,
  },
  {
    name: ROUTES.pathwaysProgress,
    component: PathwaysProgressContainer,
  },
  {
    name: ROUTES.workoutDebug,
    component: WorkoutDebugContainer,
  },
  {
    name: ROUTES.permissions,
    component: PermissionsContainer,
  },
  {
    name: ROUTES.leaderboardSettings,
    component: LeaderboardSettingsContainer,
  },

  // quests screens
  {
    name: ROUTES.questsChallengesList,
    component: ChallengesListWrapperContainer,
  },
  // products
  {
    name: ROUTES.productDetails,
    component: ProductDetailsContainer,
  },
  {
    name: ROUTES.beneficiary,
    component: BeneficiaryContainer,
  },
  {
    name: ROUTES.productPaymentHistory,
    component: ProductPaymentHistoryContainer,
  },
  {
    name: ROUTES.wellbeingHubItems,
    component: WellbeingHubItemsContainer,
  },
  {
    name: ROUTES.sduiWellbeingHubItemDetails,
    component: SduiStaticContainer,
  },
  // webview
  {
    name: ROUTES.webView,
    component: WebViewContainer,
  },

  // referrals

  {
    name: ROUTES.referralInformation,
    component: ReferralsContainer,
  },

  // today-earnings

  {
    name: ROUTES.todayEarnings,
    component: TodayEarningsContainer,
  },

  // perk
  {
    name: ROUTES.perkSubscriptionInfo,
    component: PerkSubscriptionInfoContainer,
  },

  // yu health
  {
    name: ROUTES.yuHealthConnect,
    component: YuHealthConnectContainer,
  },
  {
    name: ROUTES.yuHealthConnectSelect,
    component: YuHealthConnectSelectContainer,
  },

  // battle pass

  {
    name: ROUTES.battlePass,
    component: BattlePassContainer,
    hasMenu: true,
  },
  {
    name: ROUTES.battlePassLeaderboard,
    component: BattlePassLeaderboardContainer,
  },
  {
    name: ROUTES.rewardsUnlock,
    component: RewardsUnlockContainer,
  },

  // wrapped
  {
    name: ROUTES.wrapped,
    component: WrappedContainer,
  },

  // generic heading testing

  {
    name: ROUTES.genericHeading,
    component: GenericHeadingContainer,
  },

  // achievements
  {
    name: ROUTES.achievements,
    component: AchievementsContainer,
  },

  // pathways
  {
    name: ROUTES.pathways,
    component: PathwaysContainer,
  },
  {
    name: ROUTES.pathwaysReflected,
    component: PathwaysReflectedContainer,
  },
  {
    name: ROUTES.pathwaysClaim,
    component: PathwaysClaimContainer,
  },
  {
    name: ROUTES.pathwayChallengeSuccess,
    component: PathwaysChallengeSuccessContainer,
  },
  {
    name: ROUTES.pathwayChallengeFeedback,
    component: PathwaysChallengeFeedbackContainer,
  },
  {
    name: ROUTES.pathwayChallengeIntro,
    component: PathwaysChallengeIntroContainer,
  },
  {
    name: ROUTES.pathwaysMediaPlayer,
    component: PathwaysMediaPlayerContainer,
  },

  // mood calendar
  {
    name: ROUTES.moodCalendar,
    component: PathwaysMoodCalendarContainer,
  },

  // modals
  {
    name: MODALS.yuCoinPowerExplained,
    component: YuCoinPowerExplained,
  },
  {
    name: MODALS.policyCertificate,
    component: PolicyCertificateModal,
  },
  {
    name: MODALS.challengeUnavailable,
    component: ChallengeUnavailableModal,
  },
  {
    name: MODALS.chest,
    component: AnimatedChest,
  },
  {
    name: MODALS.EOTWChest,
    component: EOTWChest,
  },
  {
    name: MODALS.collectReward,
    component: CollectRewardModal,
  },
  {
    name: MODALS.feedback,
    component: FeedbackModal,
  },
  {
    name: MODALS.appReview,
    component: AppReviewModal,
  },
  {
    name: MODALS.generic,
    component: GenericModal,
  },
  {
    name: MODALS.mobileUpdate,
    component: MobileUpdateModal,
  },
  {
    name: MODALS.addBeneficiary,
    component: AddBeneficiaryModal,
  },
  {
    name: MODALS.defaultBeneficiaries,
    component: DefaultBeneficiariesModal,
  },
  {
    name: MODALS.levelUnavailable,
    component: LevelUnavailableModal,
  },
  {
    name: MODALS.pushNotifications,
    component: PushNotificationsModal,
  },
  {
    name: MODALS.streaks,
    component: StreaksModal,
  },
  {
    name: MODALS.streakSaved,
    component: StreakSavedModal,
  },
  {
    name: MODALS.rewards,
    component: GenericModal,
  },
  {
    name: MODALS.genericConnectionError,
    component: GenericConnectionErrorModal,
  },
  {
    name: MODALS.info,
    component: InfoModal,
  },
  {
    name: MODALS.duelInvite,
    component: DuelInviteModal,
  },
  {
    name: MODALS.duelRespond,
    component: DuelRespondModal,
  },
  {
    name: MODALS.blurredOverlay,
    component: BlurredOverlay,
  },
  {
    name: MODALS.consumableModal,
    component: ConsumablesModal,
  },
  {
    name: MODALS.itemDetailsHalfModal,
    component: ItemDetailsHalfModal,
  },
  {
    name: MODALS.sduiStepFeedbackHalfModal,
    component: SduiStepFeedbackHalfModal,
  },
  {
    name: MODALS.switchToGoogleFit,
    component: SwitchToGoogleFitModal,
  },
  {
    name: MODALS.whatsNew,
    component: WhatsNew,
  },
  {
    name: MODALS.collectEventReward,
    component: CollectEventRewardModal,
  },
  {
    name: MODALS.sudokuHelp,
    component: SudokuHelpModal,
  },
  {
    name: MODALS.sudokuPause,
    component: SudokuPauseModal,
  },
  {
    name: MODALS.sudokuLeaderboardConsent,
    component: SudokuLeaderboardConsentModal,
  },
  {
    name: MODALS.leaderboardCommunityOverlay,
    component: LeaderboardCommunityOverlay,
  },
  {
    name: MODALS.challengeNoData,
    component: ChallengeNoDataModal,
  },
  {
    name: MODALS.joinLeaderboardOverlay,
    component: JoinLeaderboardOverlay,
  },
  {
    name: MODALS.leaderboardRank,
    component: LeaderboardRankModal,
  },

  {
    name: MODALS.genericWithHeroImage,
    component: HeroImageModal,
  },
  {
    name: MODALS.healthPermission,
    component: HealthPermissionModal,
  },
  {
    name: MODALS.smokingStreakCelebration,
    component: SmokingStreakCelebrationModal,
  },
  {
    name: MODALS.smokingEditStateModal,
    component: SmokingEditStateModal,
  },
  {
    name: MODALS.openRandomChest,
    component: OpenRandomChestModal,
  },
  {
    name: MODALS.viewAchievementModal,
    component: ViewAchievementModal,
  },
  {
    name: MODALS.unlockedAchievementsModal,
    component: UnlockedAchievementsModal,
  },
];

export default routesForRegistration;
export const preRegisteredRoutes = routesForRegistration.map(({ name }) => name);
export const dynamicallyRegisteredRoutes: string[] = [];
