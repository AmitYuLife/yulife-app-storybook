/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  ApiConfigFragmentDoc: typeof types.ApiConfigFragmentDoc;
  MobileGameUserAchievementFragmentDoc: typeof types.MobileGameUserAchievementFragmentDoc;
  MobileGameUserAchievementsFragmentDoc: typeof types.MobileGameUserAchievementsFragmentDoc;
  YumojiRemoteFilesFragmentDoc: typeof types.YumojiRemoteFilesFragmentDoc;
  UserProfileBadgeCountsFragmentDoc: typeof types.UserProfileBadgeCountsFragmentDoc;
  MobileGameBattlePassFragmentDoc: typeof types.MobileGameBattlePassFragmentDoc;
  MobileBattlePassDonationTemplateFragmentDoc: typeof types.MobileBattlePassDonationTemplateFragmentDoc;
  MobileGameBattlePassRewardInfoFragmentDoc: typeof types.MobileGameBattlePassRewardInfoFragmentDoc;
  MobileGameBattlePassProgressInfoFragmentDoc: typeof types.MobileGameBattlePassProgressInfoFragmentDoc;
  MobileGameBattlePassRewardFragmentDoc: typeof types.MobileGameBattlePassRewardFragmentDoc;
  MobileGameBattlePassRewardTeaserFragmentDoc: typeof types.MobileGameBattlePassRewardTeaserFragmentDoc;
  ChallengeFragmentDoc: typeof types.ChallengeFragmentDoc;
  ChallengeCompletionSummaryFragmentDoc: typeof types.ChallengeCompletionSummaryFragmentDoc;
  MilestoneFragmentDoc: typeof types.MilestoneFragmentDoc;
  ChallengeTemplateFragmentDoc: typeof types.ChallengeTemplateFragmentDoc;
  UserChallengesDoneTodayFragmentDoc: typeof types.UserChallengesDoneTodayFragmentDoc;
  RewardChestDetailsFragmentDoc: typeof types.RewardChestDetailsFragmentDoc;
  RewardChestItemFragmentDoc: typeof types.RewardChestItemFragmentDoc;
  RewardChestPrizeFragmentDoc: typeof types.RewardChestPrizeFragmentDoc;
  ConditionalValueFragmentDoc: typeof types.ConditionalValueFragmentDoc;
  GameConsumableFragmentDoc: typeof types.GameConsumableFragmentDoc;
  AbsoluteContentItemFragmentDoc: typeof types.AbsoluteContentItemFragmentDoc;
  ContentItemFragmentDoc: typeof types.ContentItemFragmentDoc;
  ContentItemAccordionFragmentDoc: typeof types.ContentItemAccordionFragmentDoc;
  ContentItemBeneficiariesSectionFragmentDoc: typeof types.ContentItemBeneficiariesSectionFragmentDoc;
  ContentItemBlurredRaysWrapperFragmentDoc: typeof types.ContentItemBlurredRaysWrapperFragmentDoc;
  ContentItemBoxFragmentDoc: typeof types.ContentItemBoxFragmentDoc;
  ContentItemBoxOptionCardFragmentDoc: typeof types.ContentItemBoxOptionCardFragmentDoc;
  ContentItemButtonFragmentDoc: typeof types.ContentItemButtonFragmentDoc;
  ContentItemChoiceFragmentDoc: typeof types.ContentItemChoiceFragmentDoc;
  ContentItemCollapsingGenericHeaderFragmentDoc: typeof types.ContentItemCollapsingGenericHeaderFragmentDoc;
  ContentItemConfirmFragmentDoc: typeof types.ContentItemConfirmFragmentDoc;
  ContentItemDatePickerFragmentDoc: typeof types.ContentItemDatePickerFragmentDoc;
  ContentItemDropdownInputFragmentDoc: typeof types.ContentItemDropdownInputFragmentDoc;
  ContentItemDropdownInputOptionsFragmentDoc: typeof types.ContentItemDropdownInputOptionsFragmentDoc;
  ContentItemFadeFragmentDoc: typeof types.ContentItemFadeFragmentDoc;
  ContentItemFormFragmentDoc: typeof types.ContentItemFormFragmentDoc;
  ContentItemFormElementsFragmentDoc: typeof types.ContentItemFormElementsFragmentDoc;
  ContentItemFormInputValidationFragmentDoc: typeof types.ContentItemFormInputValidationFragmentDoc;
  ContentItemFormSelectInputFragmentDoc: typeof types.ContentItemFormSelectInputFragmentDoc;
  ContentItemFormSelectInputOptionsFragmentDoc: typeof types.ContentItemFormSelectInputOptionsFragmentDoc;
  ContentItemFormSubmitButtonFragmentDoc: typeof types.ContentItemFormSubmitButtonFragmentDoc;
  ContentItemFormTextInputFragmentDoc: typeof types.ContentItemFormTextInputFragmentDoc;
  ContentItemHeaderBarFragmentDoc: typeof types.ContentItemHeaderBarFragmentDoc;
  ContentItemHintFragmentDoc: typeof types.ContentItemHintFragmentDoc;
  ContentItemImageFragmentDoc: typeof types.ContentItemImageFragmentDoc;
  ContentItemImageChoiceFragmentDoc: typeof types.ContentItemImageChoiceFragmentDoc;
  ContentItemInfoButtonFragmentDoc: typeof types.ContentItemInfoButtonFragmentDoc;
  ContentItemInfoCardFragmentDoc: typeof types.ContentItemInfoCardFragmentDoc;
  ContentItemKeyValueBoxFragmentDoc: typeof types.ContentItemKeyValueBoxFragmentDoc;
  ContentItemLinearGradientFragmentDoc: typeof types.ContentItemLinearGradientFragmentDoc;
  ContentItemListFragmentDoc: typeof types.ContentItemListFragmentDoc;
  ContentItemLoaderFragmentDoc: typeof types.ContentItemLoaderFragmentDoc;
  ContentItemLottieFragmentDoc: typeof types.ContentItemLottieFragmentDoc;
  ContentItemMarkdownFragmentDoc: typeof types.ContentItemMarkdownFragmentDoc;
  ContentItemMediaFragmentDoc: typeof types.ContentItemMediaFragmentDoc;
  ContentItemMultiButtonFragmentDoc: typeof types.ContentItemMultiButtonFragmentDoc;
  ContentItemMultiSelectFragmentDoc: typeof types.ContentItemMultiSelectFragmentDoc;
  ContentItemOverlayFragmentDoc: typeof types.ContentItemOverlayFragmentDoc;
  ContentItemPadFragmentDoc: typeof types.ContentItemPadFragmentDoc;
  ContentItemPaymentButtonFragmentDoc: typeof types.ContentItemPaymentButtonFragmentDoc;
  ContentItemProcessingTimerFragmentDoc: typeof types.ContentItemProcessingTimerFragmentDoc;
  ContentItemProductDetailsHeaderFragmentDoc: typeof types.ContentItemProductDetailsHeaderFragmentDoc;
  ContentItemProductDetailsHeaderFundingFragmentDoc: typeof types.ContentItemProductDetailsHeaderFundingFragmentDoc;
  ContentItemProductDetailsHeaderFundingThemeFragmentDoc: typeof types.ContentItemProductDetailsHeaderFundingThemeFragmentDoc;
  ContentItemProductDetailsHoldingHeaderFragmentDoc: typeof types.ContentItemProductDetailsHoldingHeaderFragmentDoc;
  ContentItemProgressBarFragmentDoc: typeof types.ContentItemProgressBarFragmentDoc;
  ContentItemProgressStepsFragmentDoc: typeof types.ContentItemProgressStepsFragmentDoc;
  ContentItemProgressStepsThemeFragmentDoc: typeof types.ContentItemProgressStepsThemeFragmentDoc;
  ContentItemProgressStepsThemeOptionFragmentDoc: typeof types.ContentItemProgressStepsThemeOptionFragmentDoc;
  ContentItemRadioFragmentDoc: typeof types.ContentItemRadioFragmentDoc;
  ContentItemRadioIconFragmentDoc: typeof types.ContentItemRadioIconFragmentDoc;
  ContentItemRowIconTextBannerFragmentDoc: typeof types.ContentItemRowIconTextBannerFragmentDoc;
  ContentItemRowIconTextBannerContainerActionsFragmentDoc: typeof types.ContentItemRowIconTextBannerContainerActionsFragmentDoc;
  ContentItemScaleFragmentDoc: typeof types.ContentItemScaleFragmentDoc;
  ContentItemScrollPickerFragmentDoc: typeof types.ContentItemScrollPickerFragmentDoc;
  ContentItemSearchPostcodeFragmentDoc: typeof types.ContentItemSearchPostcodeFragmentDoc;
  ContentItemShowHideBalanceFragmentDoc: typeof types.ContentItemShowHideBalanceFragmentDoc;
  ContentItemSliderInputFragmentDoc: typeof types.ContentItemSliderInputFragmentDoc;
  ContentItemStackedShadowWrapperFragmentDoc: typeof types.ContentItemStackedShadowWrapperFragmentDoc;
  ContentItemSwitchFragmentDoc: typeof types.ContentItemSwitchFragmentDoc;
  ContentItemTextFragmentDoc: typeof types.ContentItemTextFragmentDoc;
  ContentItemTextAreaInputFragmentDoc: typeof types.ContentItemTextAreaInputFragmentDoc;
  ContentItemTextGroupFragmentDoc: typeof types.ContentItemTextGroupFragmentDoc;
  ContentItemTextInputFragmentDoc: typeof types.ContentItemTextInputFragmentDoc;
  ContentItemWrapperFragmentDoc: typeof types.ContentItemWrapperFragmentDoc;
  ContentItemYuCoinPowerFragmentDoc: typeof types.ContentItemYuCoinPowerFragmentDoc;
  UserDailyChallengeAmountAvailableFragmentDoc: typeof types.UserDailyChallengeAmountAvailableFragmentDoc;
  DailyPensionContributionFragmentDoc: typeof types.DailyPensionContributionFragmentDoc;
  DuelOpponentFragmentDoc: typeof types.DuelOpponentFragmentDoc;
  GiftFragmentDoc: typeof types.GiftFragmentDoc;
  GiftBackgroundAssetFragmentDoc: typeof types.GiftBackgroundAssetFragmentDoc;
  GiftParticipantFragmentDoc: typeof types.GiftParticipantFragmentDoc;
  GiftStickerAssetFragmentDoc: typeof types.GiftStickerAssetFragmentDoc;
  GoalDetailsFragmentDoc: typeof types.GoalDetailsFragmentDoc;
  HeroCardFragmentDoc: typeof types.HeroCardFragmentDoc;
  HintFragmentDoc: typeof types.HintFragmentDoc;
  MobileInventoryInfoFragmentDoc: typeof types.MobileInventoryInfoFragmentDoc;
  MediaFragmentDoc: typeof types.MediaFragmentDoc;
  MobileGameRewardPassFragmentDoc: typeof types.MobileGameRewardPassFragmentDoc;
  MobileGameThemeFragmentDoc: typeof types.MobileGameThemeFragmentDoc;
  MobileWeeklyActivityProgressFragmentDoc: typeof types.MobileWeeklyActivityProgressFragmentDoc;
  UserMoodSubmissionFragmentDoc: typeof types.UserMoodSubmissionFragmentDoc;
  UserMoodSubmissionsResponseFragmentDoc: typeof types.UserMoodSubmissionsResponseFragmentDoc;
  NotificationSettingsPropsFragmentDoc: typeof types.NotificationSettingsPropsFragmentDoc;
  UserProfileNotificationFragmentDoc: typeof types.UserProfileNotificationFragmentDoc;
  UserPathwayAdviceItemFragmentDoc: typeof types.UserPathwayAdviceItemFragmentDoc;
  UserPathwaysFragmentDoc: typeof types.UserPathwaysFragmentDoc;
  UserPathwaysItemFragmentDoc: typeof types.UserPathwaysItemFragmentDoc;
  UserPathwaysReflectionProgressFragmentDoc: typeof types.UserPathwaysReflectionProgressFragmentDoc;
  UserWalletItemFragmentDoc: typeof types.UserWalletItemFragmentDoc;
  UserWalletRewardFragmentDoc: typeof types.UserWalletRewardFragmentDoc;
  UserWalletSectionFragmentDoc: typeof types.UserWalletSectionFragmentDoc;
  LinearGradientOrientationFragmentDoc: typeof types.LinearGradientOrientationFragmentDoc;
  ProductActionFragmentDoc: typeof types.ProductActionFragmentDoc;
  RemoteImageFragmentDoc: typeof types.RemoteImageFragmentDoc;
  SduiActionFragmentDoc: typeof types.SduiActionFragmentDoc;
  SduiSectionFragmentDoc: typeof types.SduiSectionFragmentDoc;
  SduiStyleFragmentDoc: typeof types.SduiStyleFragmentDoc;
  SduiStyleDynamicFragmentDoc: typeof types.SduiStyleDynamicFragmentDoc;
  VariableRemoteImageFragmentDoc: typeof types.VariableRemoteImageFragmentDoc;
  SocialGroupLeaderboardEnrollmentFragmentDoc: typeof types.SocialGroupLeaderboardEnrollmentFragmentDoc;
  SocialGroupFragmentDoc: typeof types.SocialGroupFragmentDoc;
  SocialGroupLeaderboardFragmentDoc: typeof types.SocialGroupLeaderboardFragmentDoc;
  SocialGroupLeaderboardEnrollmentGroupFragmentDoc: typeof types.SocialGroupLeaderboardEnrollmentGroupFragmentDoc;
  SocialGroupLeaderboardItemFragmentDoc: typeof types.SocialGroupLeaderboardItemFragmentDoc;
  UserFragmentDoc: typeof types.UserFragmentDoc;
  UserActiveChallengeFragmentDoc: typeof types.UserActiveChallengeFragmentDoc;
  UserActiveStreakFragmentDoc: typeof types.UserActiveStreakFragmentDoc;
  UserCoinLedgerFragmentDoc: typeof types.UserCoinLedgerFragmentDoc;
  UserConnectionsFragmentDoc: typeof types.UserConnectionsFragmentDoc;
  UserFeatureFragmentDoc: typeof types.UserFeatureFragmentDoc;
  UserPassiveChallengesEarnRateFragmentDoc: typeof types.UserPassiveChallengesEarnRateFragmentDoc;
  UserProfileEventsFragmentDoc: typeof types.UserProfileEventsFragmentDoc;
  UserProfileTodayScreenFragmentDoc: typeof types.UserProfileTodayScreenFragmentDoc;
  UserStatisticDetailsFragmentDoc: typeof types.UserStatisticDetailsFragmentDoc;
  UserTodayActivitiesFragmentDoc: typeof types.UserTodayActivitiesFragmentDoc;
  UserTodayActivityFragmentDoc: typeof types.UserTodayActivityFragmentDoc;
  MobileUserWrappedFragmentDoc: typeof types.MobileUserWrappedFragmentDoc;
  YuHealthOptionsFragmentDoc: typeof types.YuHealthOptionsFragmentDoc;
  GetMobileGameUserAchievementsDocument: typeof types.GetMobileGameUserAchievementsDocument;
  MarkMobileGameUserAchievementsViewedDocument: typeof types.MarkMobileGameUserAchievementsViewedDocument;
  UpdateMobileGameUserAchievementDocument: typeof types.UpdateMobileGameUserAchievementDocument;
  GetInboxMessagesDocument: typeof types.GetInboxMessagesDocument;
  MarkInboxMessagesAsSeenDocument: typeof types.MarkInboxMessagesAsSeenDocument;
  GetMobileAssetsWithVersionDocument: typeof types.GetMobileAssetsWithVersionDocument;
  CompleteMobileGameBattlePassSeasonDocument: typeof types.CompleteMobileGameBattlePassSeasonDocument;
  GetMobileBattlePassDonationProgressDetailsDocument: typeof types.GetMobileBattlePassDonationProgressDetailsDocument;
  GetMobileBattlePassDonationTemplatesDocument: typeof types.GetMobileBattlePassDonationTemplatesDocument;
  GetMobileGameBattlePassDocument: typeof types.GetMobileGameBattlePassDocument;
  GetMobileGameBattlePassFullDocument: typeof types.GetMobileGameBattlePassFullDocument;
  GetMobileGameBattlePassRewardInfoDocument: typeof types.GetMobileGameBattlePassRewardInfoDocument;
  GetMobileUnlockableBattlePassTeasersDocument: typeof types.GetMobileUnlockableBattlePassTeasersDocument;
  SubmitMobileGameBattlePassDonationsDocument: typeof types.SubmitMobileGameBattlePassDonationsDocument;
  GetSudokuBoardDocument: typeof types.GetSudokuBoardDocument;
  GetSudokuPracticeDocument: typeof types.GetSudokuPracticeDocument;
  GetSudokuStatsDocument: typeof types.GetSudokuStatsDocument;
  SubmitMobileQuestLevelSudokuSolutionDocument: typeof types.SubmitMobileQuestLevelSudokuSolutionDocument;
  CancelMobileQuestLevelChallengeDocument: typeof types.CancelMobileQuestLevelChallengeDocument;
  CancelPathwayChallengeDocument: typeof types.CancelPathwayChallengeDocument;
  CompletePathwayChallengeDocument: typeof types.CompletePathwayChallengeDocument;
  CreateMobileQuestLevelChallengeDocument: typeof types.CreateMobileQuestLevelChallengeDocument;
  GetMobileQuestLevelChallengeDetailsDocument: typeof types.GetMobileQuestLevelChallengeDetailsDocument;
  GetMobileQuestLevelMediaInternalContentDocument: typeof types.GetMobileQuestLevelMediaInternalContentDocument;
  GetPassiveChallengesLastUpdateDocument: typeof types.GetPassiveChallengesLastUpdateDocument;
  GetPathwayChallengeDocument: typeof types.GetPathwayChallengeDocument;
  GetQuestMapDocument: typeof types.GetQuestMapDocument;
  GetQuestMapLevelDocument: typeof types.GetQuestMapLevelDocument;
  GetUnityRewardsDocument: typeof types.GetUnityRewardsDocument;
  GetUserChallengesDoneTodayDocument: typeof types.GetUserChallengesDoneTodayDocument;
  StartPathwayChallengeDocument: typeof types.StartPathwayChallengeDocument;
  SubmitUnityDocument: typeof types.SubmitUnityDocument;
  ToggleMobileQuestLevelChallengePauseDocument: typeof types.ToggleMobileQuestLevelChallengePauseDocument;
  UpdateMobileQuestLevelChallengeDocument: typeof types.UpdateMobileQuestLevelChallengeDocument;
  UpdateUserHourlyActivityDocument: typeof types.UpdateUserHourlyActivityDocument;
  UpsertDailyPassivesDocument: typeof types.UpsertDailyPassivesDocument;
  UpsertOnboardingChallengeDocument: typeof types.UpsertOnboardingChallengeDocument;
  ClaimMobileRewardChestDocument: typeof types.ClaimMobileRewardChestDocument;
  GetMobileRewardChestDetailsDocument: typeof types.GetMobileRewardChestDetailsDocument;
  OpenMobileRewardChestDocument: typeof types.OpenMobileRewardChestDocument;
  GetPublicYuApiConfigDocument: typeof types.GetPublicYuApiConfigDocument;
  GetPublicYuApiConfigWithFingerprintThemeDocument: typeof types.GetPublicYuApiConfigWithFingerprintThemeDocument;
  GetPublicYuApiConfigWithThemeDocument: typeof types.GetPublicYuApiConfigWithThemeDocument;
  DeleteConnectionDocument: typeof types.DeleteConnectionDocument;
  GetNewConnectionLinkDocument: typeof types.GetNewConnectionLinkDocument;
  GetMobileAvailableContentLocationsDocument: typeof types.GetMobileAvailableContentLocationsDocument;
  UpdateMobileUserContentLocationDocument: typeof types.UpdateMobileUserContentLocationDocument;
  DebugEndTournamentEarlyDocument: typeof types.DebugEndTournamentEarlyDocument;
  DebugGetActiveTournamentsDocument: typeof types.DebugGetActiveTournamentsDocument;
  GetDebugCodesDocument: typeof types.GetDebugCodesDocument;
  GetUserDebugDataDocument: typeof types.GetUserDebugDataDocument;
  ResetDataDocument: typeof types.ResetDataDocument;
  SetFeatureDocument: typeof types.SetFeatureDocument;
  SetUserPathwayProgressDocument: typeof types.SetUserPathwayProgressDocument;
  SetUserQuestProgressDocument: typeof types.SetUserQuestProgressDocument;
  SubmitChallengeDebugDataDocument: typeof types.SubmitChallengeDebugDataDocument;
  SubmitUserDebugDataDocument: typeof types.SubmitUserDebugDataDocument;
  AddDeviceTokenDocument: typeof types.AddDeviceTokenDocument;
  ConfirmDuelsScoreDocument: typeof types.ConfirmDuelsScoreDocument;
  GetDuelInvitationsDocument: typeof types.GetDuelInvitationsDocument;
  GetDuelTemplatesDocument: typeof types.GetDuelTemplatesDocument;
  GetDuellerDetailsDocument: typeof types.GetDuellerDetailsDocument;
  GetDuelsDocument: typeof types.GetDuelsDocument;
  GetDuelsCompletedDocument: typeof types.GetDuelsCompletedDocument;
  GetDuelsTodayDocument: typeof types.GetDuelsTodayDocument;
  GetDuelsTomorrowDocument: typeof types.GetDuelsTomorrowDocument;
  GetRecentDuelOpponentsDocument: typeof types.GetRecentDuelOpponentsDocument;
  InviteToDuelDocument: typeof types.InviteToDuelDocument;
  RespondToDuelDocument: typeof types.RespondToDuelDocument;
  SyncDuelScoreDocument: typeof types.SyncDuelScoreDocument;
  ClaimGiftDocument: typeof types.ClaimGiftDocument;
  GetGiftDocument: typeof types.GetGiftDocument;
  GetGiftingRecipientsDocument: typeof types.GetGiftingRecipientsDocument;
  SendThanksForGiftDocument: typeof types.SendThanksForGiftDocument;
  ClaimGoalRewardsDocument: typeof types.ClaimGoalRewardsDocument;
  CompleteGoalDocument: typeof types.CompleteGoalDocument;
  GetGoalDetailsDocument: typeof types.GetGoalDetailsDocument;
  GetGoalMilestoneDetailsDocument: typeof types.GetGoalMilestoneDetailsDocument;
  JoinGoalDocument: typeof types.JoinGoalDocument;
  GetMobileHeroCardsDocument: typeof types.GetMobileHeroCardsDocument;
  GetOptionsForGiftDocument: typeof types.GetOptionsForGiftDocument;
  GetStatisticsDocument: typeof types.GetStatisticsDocument;
  SendGiftToRecipientsDocument: typeof types.SendGiftToRecipientsDocument;
  EquipItemDocument: typeof types.EquipItemDocument;
  GetInventoryDocument: typeof types.GetInventoryDocument;
  InventoryItemFragmentDoc: typeof types.InventoryItemFragmentDoc;
  GetSduiJourneyDocument: typeof types.GetSduiJourneyDocument;
  SubmitSduiJourneyDocument: typeof types.SubmitSduiJourneyDocument;
  GetLeaderboardSettingsDocument: typeof types.GetLeaderboardSettingsDocument;
  ChangeUserLocaleDocument: typeof types.ChangeUserLocaleDocument;
  GetMediaDocument: typeof types.GetMediaDocument;
  CollectAwardDocument: typeof types.CollectAwardDocument;
  GetPendingUserFeedbackDocument: typeof types.GetPendingUserFeedbackDocument;
  SearchLeaderboardUserDocument: typeof types.SearchLeaderboardUserDocument;
  SubmitAppStoreReviewActionDocument: typeof types.SubmitAppStoreReviewActionDocument;
  SubmitFeedbackFormDocument: typeof types.SubmitFeedbackFormDocument;
  UpdateMemberConsentDocument: typeof types.UpdateMemberConsentDocument;
  GetPotentialRewardsDocument: typeof types.GetPotentialRewardsDocument;
  GetUserMoodSubmissionsDocument: typeof types.GetUserMoodSubmissionsDocument;
  GetInboxNotificationsSettingsDocument: typeof types.GetInboxNotificationsSettingsDocument;
  GetUserLeaderboardEnrollmentsDocument: typeof types.GetUserLeaderboardEnrollmentsDocument;
  GetUserNotificationsSettingsDocument: typeof types.GetUserNotificationsSettingsDocument;
  UpdateUserNotificationsSettingsDocument: typeof types.UpdateUserNotificationsSettingsDocument;
  GetMobileWhatsNewModalDocument: typeof types.GetMobileWhatsNewModalDocument;
  PerformMobileOnboardingStepDocument: typeof types.PerformMobileOnboardingStepDocument;
  GetUserPathwayGoalsSectionDocument: typeof types.GetUserPathwayGoalsSectionDocument;
  GetUserPathwaysDocument: typeof types.GetUserPathwaysDocument;
  MarkPathwayGoalCompletedDocument: typeof types.MarkPathwayGoalCompletedDocument;
  SubmitPathwayChallengeFeedbackDocument: typeof types.SubmitPathwayChallengeFeedbackDocument;
  ConfirmPaymentCardDocument: typeof types.ConfirmPaymentCardDocument;
  GetMobilePaymentCardSetupDocument: typeof types.GetMobilePaymentCardSetupDocument;
  GetPerkSubscriptionInfoDocument: typeof types.GetPerkSubscriptionInfoDocument;
  SubscribeToPerkDocument: typeof types.SubscribeToPerkDocument;
  CreateOrUpdateBeneficiaryDocument: typeof types.CreateOrUpdateBeneficiaryDocument;
  RemoveBeneficiaryFromProductDocument: typeof types.RemoveBeneficiaryFromProductDocument;
  GetProductBeneficiariesDocument: typeof types.GetProductBeneficiariesDocument;
  GetYuScreenProductDetailsDocument: typeof types.GetYuScreenProductDetailsDocument;
  SetShareOfBenefitForProductDocument: typeof types.SetShareOfBenefitForProductDocument;
  GetReferralInformationDocument: typeof types.GetReferralInformationDocument;
  GetReferralOnboardingPopoverDocument: typeof types.GetReferralOnboardingPopoverDocument;
  GetReferralRewardAmountDocument: typeof types.GetReferralRewardAmountDocument;
  GetReferralHistoryDocument: typeof types.GetReferralHistoryDocument;
  GetMobileGameShopfrontDocument: typeof types.GetMobileGameShopfrontDocument;
  GetMobileGameUserWalletRewardItemsDocument: typeof types.GetMobileGameUserWalletRewardItemsDocument;
  GetMobileGameUserWalletRewardsDocument: typeof types.GetMobileGameUserWalletRewardsDocument;
  GetMobilePurchasesListDocument: typeof types.GetMobilePurchasesListDocument;
  GetMobileRecentlyUsedRewardsListDocument: typeof types.GetMobileRecentlyUsedRewardsListDocument;
  GetMobileRewardsListDocument: typeof types.GetMobileRewardsListDocument;
  GetMobileRewardsListItemsDocument: typeof types.GetMobileRewardsListItemsDocument;
  GetMobileUnlockableBattlePassVouchersDocument: typeof types.GetMobileUnlockableBattlePassVouchersDocument;
  GetSduiStaticStepDocument: typeof types.GetSduiStaticStepDocument;
  FeatureCardSectionContentFragmentDoc: typeof types.FeatureCardSectionContentFragmentDoc;
  HeroCardSectionContentFragmentDoc: typeof types.HeroCardSectionContentFragmentDoc;
  MaximiseYuSectionContentProgressFragmentDoc: typeof types.MaximiseYuSectionContentProgressFragmentDoc;
  ProductCardCarouselSectionItemFragmentDoc: typeof types.ProductCardCarouselSectionItemFragmentDoc;
  ReferralSectionContentFragmentDoc: typeof types.ReferralSectionContentFragmentDoc;
  WellbeingHubSectionContentFragmentDoc: typeof types.WellbeingHubSectionContentFragmentDoc;
  GetHealthSmokingStateDocument: typeof types.GetHealthSmokingStateDocument;
  HealthSmokingStateFragmentDoc: typeof types.HealthSmokingStateFragmentDoc;
  StartSmokingStreakDocument: typeof types.StartSmokingStreakDocument;
  UpdateSmokingStateDocument: typeof types.UpdateSmokingStateDocument;
  UpdateSmokingStreakDocument: typeof types.UpdateSmokingStreakDocument;
  GetLeaderboardFullDocument: typeof types.GetLeaderboardFullDocument;
  GetMobileSocialGroupLeaderboardItemsDocument: typeof types.GetMobileSocialGroupLeaderboardItemsDocument;
  GetMobileSocialGroupLeaderboardsDocument: typeof types.GetMobileSocialGroupLeaderboardsDocument;
  UpdateMobileSocialLeaderboardConsentsDocument: typeof types.UpdateMobileSocialLeaderboardConsentsDocument;
  GetUserSurgeDocument: typeof types.GetUserSurgeDocument;
  GetAllMobileGameThemesDocument: typeof types.GetAllMobileGameThemesDocument;
  GetMobileGameThemeDocument: typeof types.GetMobileGameThemeDocument;
  SetTestMobileGameThemeDocument: typeof types.SetTestMobileGameThemeDocument;
  GetTodayEarningsDocument: typeof types.GetTodayEarningsDocument;
  GetTournamentDetailsDocument: typeof types.GetTournamentDetailsDocument;
  GetTournamentLeaderboardDocument: typeof types.GetTournamentLeaderboardDocument;
  GetTournamentTeamLeaderboardDocument: typeof types.GetTournamentTeamLeaderboardDocument;
  ClearUserProfileBadgeCountDocument: typeof types.ClearUserProfileBadgeCountDocument;
  GetUserProfileBadgeCountDocument: typeof types.GetUserProfileBadgeCountDocument;
  ActivateGameConsumableDocument: typeof types.ActivateGameConsumableDocument;
  GetGameConsumablesDocument: typeof types.GetGameConsumablesDocument;
  GetDailyPensionContributionDocument: typeof types.GetDailyPensionContributionDocument;
  GetMobileHintsDocument: typeof types.GetMobileHintsDocument;
  GetLinkedBusinessesDocument: typeof types.GetLinkedBusinessesDocument;
  GetMagicLinkDocument: typeof types.GetMagicLinkDocument;
  GetMobileUserActivityHistoryDocument: typeof types.GetMobileUserActivityHistoryDocument;
  GetSessionDocument: typeof types.GetSessionDocument;
  GetStreakDetailsDocument: typeof types.GetStreakDetailsDocument;
  GetTotalCoinsDocument: typeof types.GetTotalCoinsDocument;
  GetUserConnectionsDocument: typeof types.GetUserConnectionsDocument;
  GetUserDailyChallengeAmountAvailableDocument: typeof types.GetUserDailyChallengeAmountAvailableDocument;
  GetUserFeaturesDocument: typeof types.GetUserFeaturesDocument;
  GetUserProfileDocument: typeof types.GetUserProfileDocument;
  GetUserTodayScreenDocument: typeof types.GetUserTodayScreenDocument;
  LoginUserDocument: typeof types.LoginUserDocument;
  RefreshSessionDocument: typeof types.RefreshSessionDocument;
  RestoreStreakDocument: typeof types.RestoreStreakDocument;
  SendMagicLinkDocument: typeof types.SendMagicLinkDocument;
  UpdateCyclingMeasurementDocument: typeof types.UpdateCyclingMeasurementDocument;
  CompleteGame2048Document: typeof types.CompleteGame2048Document;
  GetGame2048HighScoreDocument: typeof types.GetGame2048HighScoreDocument;
  ClaimMobileGameWeeklyRewardsDocument: typeof types.ClaimMobileGameWeeklyRewardsDocument;
  GetMobileGameWeekliesDocument: typeof types.GetMobileGameWeekliesDocument;
  JoinWeeklyGoalDocument: typeof types.JoinWeeklyGoalDocument;
  GetWellbeingHubItemsDocument: typeof types.GetWellbeingHubItemsDocument;
  SendWellbeingHubItemDocumentsDocument: typeof types.SendWellbeingHubItemDocumentsDocument;
  GetMobileUserWrappedDocument: typeof types.GetMobileUserWrappedDocument;
  MarkMobileUserWrappedAsViewedDocument: typeof types.MarkMobileUserWrappedAsViewedDocument;
  GetProductPaymentHistoryDocument: typeof types.GetProductPaymentHistoryDocument;
  GetProductYumojiPartDocument: typeof types.GetProductYumojiPartDocument;
  GetYuCoinPowerInfoDocument: typeof types.GetYuCoinPowerInfoDocument;
  GetYumojiBuilderCategoryListDocument: typeof types.GetYumojiBuilderCategoryListDocument;
  GetYumojiBuilderInitialPartsDocument: typeof types.GetYumojiBuilderInitialPartsDocument;
  GetYumojiBuilderItemsForCategoryDocument: typeof types.GetYumojiBuilderItemsForCategoryDocument;
  GetYumojiPartUrlSetDocument: typeof types.GetYumojiPartUrlSetDocument;
  GetYumojiPartUrlSetSwiperDocument: typeof types.GetYumojiPartUrlSetSwiperDocument;
  GetYumojiRemoteFittingRoomDocument: typeof types.GetYumojiRemoteFittingRoomDocument;
  GetYumojiRemotePartsDocument: typeof types.GetYumojiRemotePartsDocument;
  MobileGameRecentlyUsedRewardFragmentDoc: typeof types.MobileGameRecentlyUsedRewardFragmentDoc;
  MobileRewardsListFragmentDoc: typeof types.MobileRewardsListFragmentDoc;
  MobileRewardsListItemFragmentDoc: typeof types.MobileRewardsListItemFragmentDoc;
  UpdateAvatarDocument: typeof types.UpdateAvatarDocument;
  ProductPaymentHistoryInfoPanelButtonFragmentDoc: typeof types.ProductPaymentHistoryInfoPanelButtonFragmentDoc;
  GetYuScreenV5Document: typeof types.GetYuScreenV5Document;
  GetYuScreenV5SectionsDocument: typeof types.GetYuScreenV5SectionsDocument;
  YuScreenSectionFragmentDoc: typeof types.YuScreenSectionFragmentDoc;
  YumojiRemotePartFragmentDoc: typeof types.YumojiRemotePartFragmentDoc;
};
const documents: Documents = {
  ApiConfigFragmentDoc: types.ApiConfigFragmentDoc,
  MobileGameUserAchievementFragmentDoc: types.MobileGameUserAchievementFragmentDoc,
  MobileGameUserAchievementsFragmentDoc: types.MobileGameUserAchievementsFragmentDoc,
  YumojiRemoteFilesFragmentDoc: types.YumojiRemoteFilesFragmentDoc,
  UserProfileBadgeCountsFragmentDoc: types.UserProfileBadgeCountsFragmentDoc,
  MobileGameBattlePassFragmentDoc: types.MobileGameBattlePassFragmentDoc,
  MobileBattlePassDonationTemplateFragmentDoc: types.MobileBattlePassDonationTemplateFragmentDoc,
  MobileGameBattlePassRewardInfoFragmentDoc: types.MobileGameBattlePassRewardInfoFragmentDoc,
  MobileGameBattlePassProgressInfoFragmentDoc: types.MobileGameBattlePassProgressInfoFragmentDoc,
  MobileGameBattlePassRewardFragmentDoc: types.MobileGameBattlePassRewardFragmentDoc,
  MobileGameBattlePassRewardTeaserFragmentDoc: types.MobileGameBattlePassRewardTeaserFragmentDoc,
  ChallengeFragmentDoc: types.ChallengeFragmentDoc,
  ChallengeCompletionSummaryFragmentDoc: types.ChallengeCompletionSummaryFragmentDoc,
  MilestoneFragmentDoc: types.MilestoneFragmentDoc,
  ChallengeTemplateFragmentDoc: types.ChallengeTemplateFragmentDoc,
  UserChallengesDoneTodayFragmentDoc: types.UserChallengesDoneTodayFragmentDoc,
  RewardChestDetailsFragmentDoc: types.RewardChestDetailsFragmentDoc,
  RewardChestItemFragmentDoc: types.RewardChestItemFragmentDoc,
  RewardChestPrizeFragmentDoc: types.RewardChestPrizeFragmentDoc,
  ConditionalValueFragmentDoc: types.ConditionalValueFragmentDoc,
  GameConsumableFragmentDoc: types.GameConsumableFragmentDoc,
  AbsoluteContentItemFragmentDoc: types.AbsoluteContentItemFragmentDoc,
  ContentItemFragmentDoc: types.ContentItemFragmentDoc,
  ContentItemAccordionFragmentDoc: types.ContentItemAccordionFragmentDoc,
  ContentItemBeneficiariesSectionFragmentDoc: types.ContentItemBeneficiariesSectionFragmentDoc,
  ContentItemBlurredRaysWrapperFragmentDoc: types.ContentItemBlurredRaysWrapperFragmentDoc,
  ContentItemBoxFragmentDoc: types.ContentItemBoxFragmentDoc,
  ContentItemBoxOptionCardFragmentDoc: types.ContentItemBoxOptionCardFragmentDoc,
  ContentItemButtonFragmentDoc: types.ContentItemButtonFragmentDoc,
  ContentItemChoiceFragmentDoc: types.ContentItemChoiceFragmentDoc,
  ContentItemCollapsingGenericHeaderFragmentDoc: types.ContentItemCollapsingGenericHeaderFragmentDoc,
  ContentItemConfirmFragmentDoc: types.ContentItemConfirmFragmentDoc,
  ContentItemDatePickerFragmentDoc: types.ContentItemDatePickerFragmentDoc,
  ContentItemDropdownInputFragmentDoc: types.ContentItemDropdownInputFragmentDoc,
  ContentItemDropdownInputOptionsFragmentDoc: types.ContentItemDropdownInputOptionsFragmentDoc,
  ContentItemFadeFragmentDoc: types.ContentItemFadeFragmentDoc,
  ContentItemFormFragmentDoc: types.ContentItemFormFragmentDoc,
  ContentItemFormElementsFragmentDoc: types.ContentItemFormElementsFragmentDoc,
  ContentItemFormInputValidationFragmentDoc: types.ContentItemFormInputValidationFragmentDoc,
  ContentItemFormSelectInputFragmentDoc: types.ContentItemFormSelectInputFragmentDoc,
  ContentItemFormSelectInputOptionsFragmentDoc: types.ContentItemFormSelectInputOptionsFragmentDoc,
  ContentItemFormSubmitButtonFragmentDoc: types.ContentItemFormSubmitButtonFragmentDoc,
  ContentItemFormTextInputFragmentDoc: types.ContentItemFormTextInputFragmentDoc,
  ContentItemHeaderBarFragmentDoc: types.ContentItemHeaderBarFragmentDoc,
  ContentItemHintFragmentDoc: types.ContentItemHintFragmentDoc,
  ContentItemImageFragmentDoc: types.ContentItemImageFragmentDoc,
  ContentItemImageChoiceFragmentDoc: types.ContentItemImageChoiceFragmentDoc,
  ContentItemInfoButtonFragmentDoc: types.ContentItemInfoButtonFragmentDoc,
  ContentItemInfoCardFragmentDoc: types.ContentItemInfoCardFragmentDoc,
  ContentItemKeyValueBoxFragmentDoc: types.ContentItemKeyValueBoxFragmentDoc,
  ContentItemLinearGradientFragmentDoc: types.ContentItemLinearGradientFragmentDoc,
  ContentItemListFragmentDoc: types.ContentItemListFragmentDoc,
  ContentItemLoaderFragmentDoc: types.ContentItemLoaderFragmentDoc,
  ContentItemLottieFragmentDoc: types.ContentItemLottieFragmentDoc,
  ContentItemMarkdownFragmentDoc: types.ContentItemMarkdownFragmentDoc,
  ContentItemMediaFragmentDoc: types.ContentItemMediaFragmentDoc,
  ContentItemMultiButtonFragmentDoc: types.ContentItemMultiButtonFragmentDoc,
  ContentItemMultiSelectFragmentDoc: types.ContentItemMultiSelectFragmentDoc,
  ContentItemOverlayFragmentDoc: types.ContentItemOverlayFragmentDoc,
  ContentItemPadFragmentDoc: types.ContentItemPadFragmentDoc,
  ContentItemPaymentButtonFragmentDoc: types.ContentItemPaymentButtonFragmentDoc,
  ContentItemProcessingTimerFragmentDoc: types.ContentItemProcessingTimerFragmentDoc,
  ContentItemProductDetailsHeaderFragmentDoc: types.ContentItemProductDetailsHeaderFragmentDoc,
  ContentItemProductDetailsHeaderFundingFragmentDoc: types.ContentItemProductDetailsHeaderFundingFragmentDoc,
  ContentItemProductDetailsHeaderFundingThemeFragmentDoc: types.ContentItemProductDetailsHeaderFundingThemeFragmentDoc,
  ContentItemProductDetailsHoldingHeaderFragmentDoc: types.ContentItemProductDetailsHoldingHeaderFragmentDoc,
  ContentItemProgressBarFragmentDoc: types.ContentItemProgressBarFragmentDoc,
  ContentItemProgressStepsFragmentDoc: types.ContentItemProgressStepsFragmentDoc,
  ContentItemProgressStepsThemeFragmentDoc: types.ContentItemProgressStepsThemeFragmentDoc,
  ContentItemProgressStepsThemeOptionFragmentDoc: types.ContentItemProgressStepsThemeOptionFragmentDoc,
  ContentItemRadioFragmentDoc: types.ContentItemRadioFragmentDoc,
  ContentItemRadioIconFragmentDoc: types.ContentItemRadioIconFragmentDoc,
  ContentItemRowIconTextBannerFragmentDoc: types.ContentItemRowIconTextBannerFragmentDoc,
  ContentItemRowIconTextBannerContainerActionsFragmentDoc:
    types.ContentItemRowIconTextBannerContainerActionsFragmentDoc,
  ContentItemScaleFragmentDoc: types.ContentItemScaleFragmentDoc,
  ContentItemScrollPickerFragmentDoc: types.ContentItemScrollPickerFragmentDoc,
  ContentItemSearchPostcodeFragmentDoc: types.ContentItemSearchPostcodeFragmentDoc,
  ContentItemShowHideBalanceFragmentDoc: types.ContentItemShowHideBalanceFragmentDoc,
  ContentItemSliderInputFragmentDoc: types.ContentItemSliderInputFragmentDoc,
  ContentItemStackedShadowWrapperFragmentDoc: types.ContentItemStackedShadowWrapperFragmentDoc,
  ContentItemSwitchFragmentDoc: types.ContentItemSwitchFragmentDoc,
  ContentItemTextFragmentDoc: types.ContentItemTextFragmentDoc,
  ContentItemTextAreaInputFragmentDoc: types.ContentItemTextAreaInputFragmentDoc,
  ContentItemTextGroupFragmentDoc: types.ContentItemTextGroupFragmentDoc,
  ContentItemTextInputFragmentDoc: types.ContentItemTextInputFragmentDoc,
  ContentItemWrapperFragmentDoc: types.ContentItemWrapperFragmentDoc,
  ContentItemYuCoinPowerFragmentDoc: types.ContentItemYuCoinPowerFragmentDoc,
  UserDailyChallengeAmountAvailableFragmentDoc: types.UserDailyChallengeAmountAvailableFragmentDoc,
  DailyPensionContributionFragmentDoc: types.DailyPensionContributionFragmentDoc,
  DuelOpponentFragmentDoc: types.DuelOpponentFragmentDoc,
  GiftFragmentDoc: types.GiftFragmentDoc,
  GiftBackgroundAssetFragmentDoc: types.GiftBackgroundAssetFragmentDoc,
  GiftParticipantFragmentDoc: types.GiftParticipantFragmentDoc,
  GiftStickerAssetFragmentDoc: types.GiftStickerAssetFragmentDoc,
  GoalDetailsFragmentDoc: types.GoalDetailsFragmentDoc,
  HeroCardFragmentDoc: types.HeroCardFragmentDoc,
  HintFragmentDoc: types.HintFragmentDoc,
  MobileInventoryInfoFragmentDoc: types.MobileInventoryInfoFragmentDoc,
  MediaFragmentDoc: types.MediaFragmentDoc,
  MobileGameRewardPassFragmentDoc: types.MobileGameRewardPassFragmentDoc,
  MobileGameThemeFragmentDoc: types.MobileGameThemeFragmentDoc,
  MobileWeeklyActivityProgressFragmentDoc: types.MobileWeeklyActivityProgressFragmentDoc,
  UserMoodSubmissionFragmentDoc: types.UserMoodSubmissionFragmentDoc,
  UserMoodSubmissionsResponseFragmentDoc: types.UserMoodSubmissionsResponseFragmentDoc,
  NotificationSettingsPropsFragmentDoc: types.NotificationSettingsPropsFragmentDoc,
  UserProfileNotificationFragmentDoc: types.UserProfileNotificationFragmentDoc,
  UserPathwayAdviceItemFragmentDoc: types.UserPathwayAdviceItemFragmentDoc,
  UserPathwaysFragmentDoc: types.UserPathwaysFragmentDoc,
  UserPathwaysItemFragmentDoc: types.UserPathwaysItemFragmentDoc,
  UserPathwaysReflectionProgressFragmentDoc: types.UserPathwaysReflectionProgressFragmentDoc,
  UserWalletItemFragmentDoc: types.UserWalletItemFragmentDoc,
  UserWalletRewardFragmentDoc: types.UserWalletRewardFragmentDoc,
  UserWalletSectionFragmentDoc: types.UserWalletSectionFragmentDoc,
  LinearGradientOrientationFragmentDoc: types.LinearGradientOrientationFragmentDoc,
  ProductActionFragmentDoc: types.ProductActionFragmentDoc,
  RemoteImageFragmentDoc: types.RemoteImageFragmentDoc,
  SduiActionFragmentDoc: types.SduiActionFragmentDoc,
  SduiSectionFragmentDoc: types.SduiSectionFragmentDoc,
  SduiStyleFragmentDoc: types.SduiStyleFragmentDoc,
  SduiStyleDynamicFragmentDoc: types.SduiStyleDynamicFragmentDoc,
  VariableRemoteImageFragmentDoc: types.VariableRemoteImageFragmentDoc,
  SocialGroupLeaderboardEnrollmentFragmentDoc: types.SocialGroupLeaderboardEnrollmentFragmentDoc,
  SocialGroupFragmentDoc: types.SocialGroupFragmentDoc,
  SocialGroupLeaderboardFragmentDoc: types.SocialGroupLeaderboardFragmentDoc,
  SocialGroupLeaderboardEnrollmentGroupFragmentDoc: types.SocialGroupLeaderboardEnrollmentGroupFragmentDoc,
  SocialGroupLeaderboardItemFragmentDoc: types.SocialGroupLeaderboardItemFragmentDoc,
  UserFragmentDoc: types.UserFragmentDoc,
  UserActiveChallengeFragmentDoc: types.UserActiveChallengeFragmentDoc,
  UserActiveStreakFragmentDoc: types.UserActiveStreakFragmentDoc,
  UserCoinLedgerFragmentDoc: types.UserCoinLedgerFragmentDoc,
  UserConnectionsFragmentDoc: types.UserConnectionsFragmentDoc,
  UserFeatureFragmentDoc: types.UserFeatureFragmentDoc,
  UserPassiveChallengesEarnRateFragmentDoc: types.UserPassiveChallengesEarnRateFragmentDoc,
  UserProfileEventsFragmentDoc: types.UserProfileEventsFragmentDoc,
  UserProfileTodayScreenFragmentDoc: types.UserProfileTodayScreenFragmentDoc,
  UserStatisticDetailsFragmentDoc: types.UserStatisticDetailsFragmentDoc,
  UserTodayActivitiesFragmentDoc: types.UserTodayActivitiesFragmentDoc,
  UserTodayActivityFragmentDoc: types.UserTodayActivityFragmentDoc,
  MobileUserWrappedFragmentDoc: types.MobileUserWrappedFragmentDoc,
  YuHealthOptionsFragmentDoc: types.YuHealthOptionsFragmentDoc,
  GetMobileGameUserAchievementsDocument: types.GetMobileGameUserAchievementsDocument,
  MarkMobileGameUserAchievementsViewedDocument: types.MarkMobileGameUserAchievementsViewedDocument,
  UpdateMobileGameUserAchievementDocument: types.UpdateMobileGameUserAchievementDocument,
  GetInboxMessagesDocument: types.GetInboxMessagesDocument,
  MarkInboxMessagesAsSeenDocument: types.MarkInboxMessagesAsSeenDocument,
  GetMobileAssetsWithVersionDocument: types.GetMobileAssetsWithVersionDocument,
  CompleteMobileGameBattlePassSeasonDocument: types.CompleteMobileGameBattlePassSeasonDocument,
  GetMobileBattlePassDonationProgressDetailsDocument: types.GetMobileBattlePassDonationProgressDetailsDocument,
  GetMobileBattlePassDonationTemplatesDocument: types.GetMobileBattlePassDonationTemplatesDocument,
  GetMobileGameBattlePassDocument: types.GetMobileGameBattlePassDocument,
  GetMobileGameBattlePassFullDocument: types.GetMobileGameBattlePassFullDocument,
  GetMobileGameBattlePassRewardInfoDocument: types.GetMobileGameBattlePassRewardInfoDocument,
  GetMobileUnlockableBattlePassTeasersDocument: types.GetMobileUnlockableBattlePassTeasersDocument,
  SubmitMobileGameBattlePassDonationsDocument: types.SubmitMobileGameBattlePassDonationsDocument,
  GetSudokuBoardDocument: types.GetSudokuBoardDocument,
  GetSudokuPracticeDocument: types.GetSudokuPracticeDocument,
  GetSudokuStatsDocument: types.GetSudokuStatsDocument,
  SubmitMobileQuestLevelSudokuSolutionDocument: types.SubmitMobileQuestLevelSudokuSolutionDocument,
  CancelMobileQuestLevelChallengeDocument: types.CancelMobileQuestLevelChallengeDocument,
  CancelPathwayChallengeDocument: types.CancelPathwayChallengeDocument,
  CompletePathwayChallengeDocument: types.CompletePathwayChallengeDocument,
  CreateMobileQuestLevelChallengeDocument: types.CreateMobileQuestLevelChallengeDocument,
  GetMobileQuestLevelChallengeDetailsDocument: types.GetMobileQuestLevelChallengeDetailsDocument,
  GetMobileQuestLevelMediaInternalContentDocument: types.GetMobileQuestLevelMediaInternalContentDocument,
  GetPassiveChallengesLastUpdateDocument: types.GetPassiveChallengesLastUpdateDocument,
  GetPathwayChallengeDocument: types.GetPathwayChallengeDocument,
  GetQuestMapDocument: types.GetQuestMapDocument,
  GetQuestMapLevelDocument: types.GetQuestMapLevelDocument,
  GetUnityRewardsDocument: types.GetUnityRewardsDocument,
  GetUserChallengesDoneTodayDocument: types.GetUserChallengesDoneTodayDocument,
  StartPathwayChallengeDocument: types.StartPathwayChallengeDocument,
  SubmitUnityDocument: types.SubmitUnityDocument,
  ToggleMobileQuestLevelChallengePauseDocument: types.ToggleMobileQuestLevelChallengePauseDocument,
  UpdateMobileQuestLevelChallengeDocument: types.UpdateMobileQuestLevelChallengeDocument,
  UpdateUserHourlyActivityDocument: types.UpdateUserHourlyActivityDocument,
  UpsertDailyPassivesDocument: types.UpsertDailyPassivesDocument,
  UpsertOnboardingChallengeDocument: types.UpsertOnboardingChallengeDocument,
  ClaimMobileRewardChestDocument: types.ClaimMobileRewardChestDocument,
  GetMobileRewardChestDetailsDocument: types.GetMobileRewardChestDetailsDocument,
  OpenMobileRewardChestDocument: types.OpenMobileRewardChestDocument,
  GetPublicYuApiConfigDocument: types.GetPublicYuApiConfigDocument,
  GetPublicYuApiConfigWithFingerprintThemeDocument: types.GetPublicYuApiConfigWithFingerprintThemeDocument,
  GetPublicYuApiConfigWithThemeDocument: types.GetPublicYuApiConfigWithThemeDocument,
  DeleteConnectionDocument: types.DeleteConnectionDocument,
  GetNewConnectionLinkDocument: types.GetNewConnectionLinkDocument,
  GetMobileAvailableContentLocationsDocument: types.GetMobileAvailableContentLocationsDocument,
  UpdateMobileUserContentLocationDocument: types.UpdateMobileUserContentLocationDocument,
  DebugEndTournamentEarlyDocument: types.DebugEndTournamentEarlyDocument,
  DebugGetActiveTournamentsDocument: types.DebugGetActiveTournamentsDocument,
  GetDebugCodesDocument: types.GetDebugCodesDocument,
  GetUserDebugDataDocument: types.GetUserDebugDataDocument,
  ResetDataDocument: types.ResetDataDocument,
  SetFeatureDocument: types.SetFeatureDocument,
  SetUserPathwayProgressDocument: types.SetUserPathwayProgressDocument,
  SetUserQuestProgressDocument: types.SetUserQuestProgressDocument,
  SubmitChallengeDebugDataDocument: types.SubmitChallengeDebugDataDocument,
  SubmitUserDebugDataDocument: types.SubmitUserDebugDataDocument,
  AddDeviceTokenDocument: types.AddDeviceTokenDocument,
  ConfirmDuelsScoreDocument: types.ConfirmDuelsScoreDocument,
  GetDuelInvitationsDocument: types.GetDuelInvitationsDocument,
  GetDuelTemplatesDocument: types.GetDuelTemplatesDocument,
  GetDuellerDetailsDocument: types.GetDuellerDetailsDocument,
  GetDuelsDocument: types.GetDuelsDocument,
  GetDuelsCompletedDocument: types.GetDuelsCompletedDocument,
  GetDuelsTodayDocument: types.GetDuelsTodayDocument,
  GetDuelsTomorrowDocument: types.GetDuelsTomorrowDocument,
  GetRecentDuelOpponentsDocument: types.GetRecentDuelOpponentsDocument,
  InviteToDuelDocument: types.InviteToDuelDocument,
  RespondToDuelDocument: types.RespondToDuelDocument,
  SyncDuelScoreDocument: types.SyncDuelScoreDocument,
  ClaimGiftDocument: types.ClaimGiftDocument,
  GetGiftDocument: types.GetGiftDocument,
  GetGiftingRecipientsDocument: types.GetGiftingRecipientsDocument,
  SendThanksForGiftDocument: types.SendThanksForGiftDocument,
  ClaimGoalRewardsDocument: types.ClaimGoalRewardsDocument,
  CompleteGoalDocument: types.CompleteGoalDocument,
  GetGoalDetailsDocument: types.GetGoalDetailsDocument,
  GetGoalMilestoneDetailsDocument: types.GetGoalMilestoneDetailsDocument,
  JoinGoalDocument: types.JoinGoalDocument,
  GetMobileHeroCardsDocument: types.GetMobileHeroCardsDocument,
  GetOptionsForGiftDocument: types.GetOptionsForGiftDocument,
  GetStatisticsDocument: types.GetStatisticsDocument,
  SendGiftToRecipientsDocument: types.SendGiftToRecipientsDocument,
  EquipItemDocument: types.EquipItemDocument,
  GetInventoryDocument: types.GetInventoryDocument,
  InventoryItemFragmentDoc: types.InventoryItemFragmentDoc,
  GetSduiJourneyDocument: types.GetSduiJourneyDocument,
  SubmitSduiJourneyDocument: types.SubmitSduiJourneyDocument,
  GetLeaderboardSettingsDocument: types.GetLeaderboardSettingsDocument,
  ChangeUserLocaleDocument: types.ChangeUserLocaleDocument,
  GetMediaDocument: types.GetMediaDocument,
  CollectAwardDocument: types.CollectAwardDocument,
  GetPendingUserFeedbackDocument: types.GetPendingUserFeedbackDocument,
  SearchLeaderboardUserDocument: types.SearchLeaderboardUserDocument,
  SubmitAppStoreReviewActionDocument: types.SubmitAppStoreReviewActionDocument,
  SubmitFeedbackFormDocument: types.SubmitFeedbackFormDocument,
  UpdateMemberConsentDocument: types.UpdateMemberConsentDocument,
  GetPotentialRewardsDocument: types.GetPotentialRewardsDocument,
  GetUserMoodSubmissionsDocument: types.GetUserMoodSubmissionsDocument,
  GetInboxNotificationsSettingsDocument: types.GetInboxNotificationsSettingsDocument,
  GetUserLeaderboardEnrollmentsDocument: types.GetUserLeaderboardEnrollmentsDocument,
  GetUserNotificationsSettingsDocument: types.GetUserNotificationsSettingsDocument,
  UpdateUserNotificationsSettingsDocument: types.UpdateUserNotificationsSettingsDocument,
  GetMobileWhatsNewModalDocument: types.GetMobileWhatsNewModalDocument,
  PerformMobileOnboardingStepDocument: types.PerformMobileOnboardingStepDocument,
  GetUserPathwayGoalsSectionDocument: types.GetUserPathwayGoalsSectionDocument,
  GetUserPathwaysDocument: types.GetUserPathwaysDocument,
  MarkPathwayGoalCompletedDocument: types.MarkPathwayGoalCompletedDocument,
  SubmitPathwayChallengeFeedbackDocument: types.SubmitPathwayChallengeFeedbackDocument,
  ConfirmPaymentCardDocument: types.ConfirmPaymentCardDocument,
  GetMobilePaymentCardSetupDocument: types.GetMobilePaymentCardSetupDocument,
  GetPerkSubscriptionInfoDocument: types.GetPerkSubscriptionInfoDocument,
  SubscribeToPerkDocument: types.SubscribeToPerkDocument,
  CreateOrUpdateBeneficiaryDocument: types.CreateOrUpdateBeneficiaryDocument,
  RemoveBeneficiaryFromProductDocument: types.RemoveBeneficiaryFromProductDocument,
  GetProductBeneficiariesDocument: types.GetProductBeneficiariesDocument,
  GetYuScreenProductDetailsDocument: types.GetYuScreenProductDetailsDocument,
  SetShareOfBenefitForProductDocument: types.SetShareOfBenefitForProductDocument,
  GetReferralInformationDocument: types.GetReferralInformationDocument,
  GetReferralOnboardingPopoverDocument: types.GetReferralOnboardingPopoverDocument,
  GetReferralRewardAmountDocument: types.GetReferralRewardAmountDocument,
  GetReferralHistoryDocument: types.GetReferralHistoryDocument,
  GetMobileGameShopfrontDocument: types.GetMobileGameShopfrontDocument,
  GetMobileGameUserWalletRewardItemsDocument: types.GetMobileGameUserWalletRewardItemsDocument,
  GetMobileGameUserWalletRewardsDocument: types.GetMobileGameUserWalletRewardsDocument,
  GetMobilePurchasesListDocument: types.GetMobilePurchasesListDocument,
  GetMobileRecentlyUsedRewardsListDocument: types.GetMobileRecentlyUsedRewardsListDocument,
  GetMobileRewardsListDocument: types.GetMobileRewardsListDocument,
  GetMobileRewardsListItemsDocument: types.GetMobileRewardsListItemsDocument,
  GetMobileUnlockableBattlePassVouchersDocument: types.GetMobileUnlockableBattlePassVouchersDocument,
  GetSduiStaticStepDocument: types.GetSduiStaticStepDocument,
  FeatureCardSectionContentFragmentDoc: types.FeatureCardSectionContentFragmentDoc,
  HeroCardSectionContentFragmentDoc: types.HeroCardSectionContentFragmentDoc,
  MaximiseYuSectionContentProgressFragmentDoc: types.MaximiseYuSectionContentProgressFragmentDoc,
  ProductCardCarouselSectionItemFragmentDoc: types.ProductCardCarouselSectionItemFragmentDoc,
  ReferralSectionContentFragmentDoc: types.ReferralSectionContentFragmentDoc,
  WellbeingHubSectionContentFragmentDoc: types.WellbeingHubSectionContentFragmentDoc,
  GetHealthSmokingStateDocument: types.GetHealthSmokingStateDocument,
  HealthSmokingStateFragmentDoc: types.HealthSmokingStateFragmentDoc,
  StartSmokingStreakDocument: types.StartSmokingStreakDocument,
  UpdateSmokingStateDocument: types.UpdateSmokingStateDocument,
  UpdateSmokingStreakDocument: types.UpdateSmokingStreakDocument,
  GetLeaderboardFullDocument: types.GetLeaderboardFullDocument,
  GetMobileSocialGroupLeaderboardItemsDocument: types.GetMobileSocialGroupLeaderboardItemsDocument,
  GetMobileSocialGroupLeaderboardsDocument: types.GetMobileSocialGroupLeaderboardsDocument,
  UpdateMobileSocialLeaderboardConsentsDocument: types.UpdateMobileSocialLeaderboardConsentsDocument,
  GetUserSurgeDocument: types.GetUserSurgeDocument,
  GetAllMobileGameThemesDocument: types.GetAllMobileGameThemesDocument,
  GetMobileGameThemeDocument: types.GetMobileGameThemeDocument,
  SetTestMobileGameThemeDocument: types.SetTestMobileGameThemeDocument,
  GetTodayEarningsDocument: types.GetTodayEarningsDocument,
  GetTournamentDetailsDocument: types.GetTournamentDetailsDocument,
  GetTournamentLeaderboardDocument: types.GetTournamentLeaderboardDocument,
  GetTournamentTeamLeaderboardDocument: types.GetTournamentTeamLeaderboardDocument,
  ClearUserProfileBadgeCountDocument: types.ClearUserProfileBadgeCountDocument,
  GetUserProfileBadgeCountDocument: types.GetUserProfileBadgeCountDocument,
  ActivateGameConsumableDocument: types.ActivateGameConsumableDocument,
  GetGameConsumablesDocument: types.GetGameConsumablesDocument,
  GetDailyPensionContributionDocument: types.GetDailyPensionContributionDocument,
  GetMobileHintsDocument: types.GetMobileHintsDocument,
  GetLinkedBusinessesDocument: types.GetLinkedBusinessesDocument,
  GetMagicLinkDocument: types.GetMagicLinkDocument,
  GetMobileUserActivityHistoryDocument: types.GetMobileUserActivityHistoryDocument,
  GetSessionDocument: types.GetSessionDocument,
  GetStreakDetailsDocument: types.GetStreakDetailsDocument,
  GetTotalCoinsDocument: types.GetTotalCoinsDocument,
  GetUserConnectionsDocument: types.GetUserConnectionsDocument,
  GetUserDailyChallengeAmountAvailableDocument: types.GetUserDailyChallengeAmountAvailableDocument,
  GetUserFeaturesDocument: types.GetUserFeaturesDocument,
  GetUserProfileDocument: types.GetUserProfileDocument,
  GetUserTodayScreenDocument: types.GetUserTodayScreenDocument,
  LoginUserDocument: types.LoginUserDocument,
  RefreshSessionDocument: types.RefreshSessionDocument,
  RestoreStreakDocument: types.RestoreStreakDocument,
  SendMagicLinkDocument: types.SendMagicLinkDocument,
  UpdateCyclingMeasurementDocument: types.UpdateCyclingMeasurementDocument,
  CompleteGame2048Document: types.CompleteGame2048Document,
  GetGame2048HighScoreDocument: types.GetGame2048HighScoreDocument,
  ClaimMobileGameWeeklyRewardsDocument: types.ClaimMobileGameWeeklyRewardsDocument,
  GetMobileGameWeekliesDocument: types.GetMobileGameWeekliesDocument,
  JoinWeeklyGoalDocument: types.JoinWeeklyGoalDocument,
  GetWellbeingHubItemsDocument: types.GetWellbeingHubItemsDocument,
  SendWellbeingHubItemDocumentsDocument: types.SendWellbeingHubItemDocumentsDocument,
  GetMobileUserWrappedDocument: types.GetMobileUserWrappedDocument,
  MarkMobileUserWrappedAsViewedDocument: types.MarkMobileUserWrappedAsViewedDocument,
  GetProductPaymentHistoryDocument: types.GetProductPaymentHistoryDocument,
  GetProductYumojiPartDocument: types.GetProductYumojiPartDocument,
  GetYuCoinPowerInfoDocument: types.GetYuCoinPowerInfoDocument,
  GetYumojiBuilderCategoryListDocument: types.GetYumojiBuilderCategoryListDocument,
  GetYumojiBuilderInitialPartsDocument: types.GetYumojiBuilderInitialPartsDocument,
  GetYumojiBuilderItemsForCategoryDocument: types.GetYumojiBuilderItemsForCategoryDocument,
  GetYumojiPartUrlSetDocument: types.GetYumojiPartUrlSetDocument,
  GetYumojiPartUrlSetSwiperDocument: types.GetYumojiPartUrlSetSwiperDocument,
  GetYumojiRemoteFittingRoomDocument: types.GetYumojiRemoteFittingRoomDocument,
  GetYumojiRemotePartsDocument: types.GetYumojiRemotePartsDocument,
  MobileGameRecentlyUsedRewardFragmentDoc: types.MobileGameRecentlyUsedRewardFragmentDoc,
  MobileRewardsListFragmentDoc: types.MobileRewardsListFragmentDoc,
  MobileRewardsListItemFragmentDoc: types.MobileRewardsListItemFragmentDoc,
  UpdateAvatarDocument: types.UpdateAvatarDocument,
  ProductPaymentHistoryInfoPanelButtonFragmentDoc: types.ProductPaymentHistoryInfoPanelButtonFragmentDoc,
  GetYuScreenV5Document: types.GetYuScreenV5Document,
  GetYuScreenV5SectionsDocument: types.GetYuScreenV5SectionsDocument,
  YuScreenSectionFragmentDoc: types.YuScreenSectionFragmentDoc,
  YumojiRemotePartFragmentDoc: types.YumojiRemotePartFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ApiConfigFragmentDoc"): (typeof documents)["ApiConfigFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileGameUserAchievementFragmentDoc"
): (typeof documents)["MobileGameUserAchievementFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileGameUserAchievementsFragmentDoc"
): (typeof documents)["MobileGameUserAchievementsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YumojiRemoteFilesFragmentDoc"): (typeof documents)["YumojiRemoteFilesFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserProfileBadgeCountsFragmentDoc"
): (typeof documents)["UserProfileBadgeCountsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MobileGameBattlePassFragmentDoc"): (typeof documents)["MobileGameBattlePassFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileBattlePassDonationTemplateFragmentDoc"
): (typeof documents)["MobileBattlePassDonationTemplateFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileGameBattlePassRewardInfoFragmentDoc"
): (typeof documents)["MobileGameBattlePassRewardInfoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileGameBattlePassProgressInfoFragmentDoc"
): (typeof documents)["MobileGameBattlePassProgressInfoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileGameBattlePassRewardFragmentDoc"
): (typeof documents)["MobileGameBattlePassRewardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileGameBattlePassRewardTeaserFragmentDoc"
): (typeof documents)["MobileGameBattlePassRewardTeaserFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ChallengeFragmentDoc"): (typeof documents)["ChallengeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ChallengeCompletionSummaryFragmentDoc"
): (typeof documents)["ChallengeCompletionSummaryFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MilestoneFragmentDoc"): (typeof documents)["MilestoneFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ChallengeTemplateFragmentDoc"): (typeof documents)["ChallengeTemplateFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserChallengesDoneTodayFragmentDoc"
): (typeof documents)["UserChallengesDoneTodayFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RewardChestDetailsFragmentDoc"): (typeof documents)["RewardChestDetailsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RewardChestItemFragmentDoc"): (typeof documents)["RewardChestItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RewardChestPrizeFragmentDoc"): (typeof documents)["RewardChestPrizeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ConditionalValueFragmentDoc"): (typeof documents)["ConditionalValueFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GameConsumableFragmentDoc"): (typeof documents)["GameConsumableFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "AbsoluteContentItemFragmentDoc"): (typeof documents)["AbsoluteContentItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemFragmentDoc"): (typeof documents)["ContentItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemAccordionFragmentDoc"): (typeof documents)["ContentItemAccordionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemBeneficiariesSectionFragmentDoc"
): (typeof documents)["ContentItemBeneficiariesSectionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemBlurredRaysWrapperFragmentDoc"
): (typeof documents)["ContentItemBlurredRaysWrapperFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemBoxFragmentDoc"): (typeof documents)["ContentItemBoxFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemBoxOptionCardFragmentDoc"
): (typeof documents)["ContentItemBoxOptionCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemButtonFragmentDoc"): (typeof documents)["ContentItemButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemChoiceFragmentDoc"): (typeof documents)["ContentItemChoiceFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemCollapsingGenericHeaderFragmentDoc"
): (typeof documents)["ContentItemCollapsingGenericHeaderFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemConfirmFragmentDoc"): (typeof documents)["ContentItemConfirmFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemDatePickerFragmentDoc"): (typeof documents)["ContentItemDatePickerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemDropdownInputFragmentDoc"
): (typeof documents)["ContentItemDropdownInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemDropdownInputOptionsFragmentDoc"
): (typeof documents)["ContentItemDropdownInputOptionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemFadeFragmentDoc"): (typeof documents)["ContentItemFadeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemFormFragmentDoc"): (typeof documents)["ContentItemFormFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormElementsFragmentDoc"
): (typeof documents)["ContentItemFormElementsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormInputValidationFragmentDoc"
): (typeof documents)["ContentItemFormInputValidationFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormSelectInputFragmentDoc"
): (typeof documents)["ContentItemFormSelectInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormSelectInputOptionsFragmentDoc"
): (typeof documents)["ContentItemFormSelectInputOptionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormSubmitButtonFragmentDoc"
): (typeof documents)["ContentItemFormSubmitButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormTextInputFragmentDoc"
): (typeof documents)["ContentItemFormTextInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemHeaderBarFragmentDoc"): (typeof documents)["ContentItemHeaderBarFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemHintFragmentDoc"): (typeof documents)["ContentItemHintFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemImageFragmentDoc"): (typeof documents)["ContentItemImageFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemImageChoiceFragmentDoc"
): (typeof documents)["ContentItemImageChoiceFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemInfoButtonFragmentDoc"): (typeof documents)["ContentItemInfoButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemInfoCardFragmentDoc"): (typeof documents)["ContentItemInfoCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemKeyValueBoxFragmentDoc"
): (typeof documents)["ContentItemKeyValueBoxFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemLinearGradientFragmentDoc"
): (typeof documents)["ContentItemLinearGradientFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemListFragmentDoc"): (typeof documents)["ContentItemListFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemLoaderFragmentDoc"): (typeof documents)["ContentItemLoaderFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemLottieFragmentDoc"): (typeof documents)["ContentItemLottieFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemMarkdownFragmentDoc"): (typeof documents)["ContentItemMarkdownFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemMediaFragmentDoc"): (typeof documents)["ContentItemMediaFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemMultiButtonFragmentDoc"
): (typeof documents)["ContentItemMultiButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemMultiSelectFragmentDoc"
): (typeof documents)["ContentItemMultiSelectFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemOverlayFragmentDoc"): (typeof documents)["ContentItemOverlayFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemPadFragmentDoc"): (typeof documents)["ContentItemPadFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPaymentButtonFragmentDoc"
): (typeof documents)["ContentItemPaymentButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProcessingTimerFragmentDoc"
): (typeof documents)["ContentItemProcessingTimerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHeaderFragmentDoc"
): (typeof documents)["ContentItemProductDetailsHeaderFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHeaderFundingFragmentDoc"
): (typeof documents)["ContentItemProductDetailsHeaderFundingFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHeaderFundingThemeFragmentDoc"
): (typeof documents)["ContentItemProductDetailsHeaderFundingThemeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHoldingHeaderFragmentDoc"
): (typeof documents)["ContentItemProductDetailsHoldingHeaderFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProgressBarFragmentDoc"
): (typeof documents)["ContentItemProgressBarFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProgressStepsFragmentDoc"
): (typeof documents)["ContentItemProgressStepsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProgressStepsThemeFragmentDoc"
): (typeof documents)["ContentItemProgressStepsThemeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProgressStepsThemeOptionFragmentDoc"
): (typeof documents)["ContentItemProgressStepsThemeOptionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemRadioFragmentDoc"): (typeof documents)["ContentItemRadioFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemRadioIconFragmentDoc"): (typeof documents)["ContentItemRadioIconFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemRowIconTextBannerFragmentDoc"
): (typeof documents)["ContentItemRowIconTextBannerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemRowIconTextBannerContainerActionsFragmentDoc"
): (typeof documents)["ContentItemRowIconTextBannerContainerActionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemScaleFragmentDoc"): (typeof documents)["ContentItemScaleFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemScrollPickerFragmentDoc"
): (typeof documents)["ContentItemScrollPickerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemSearchPostcodeFragmentDoc"
): (typeof documents)["ContentItemSearchPostcodeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemShowHideBalanceFragmentDoc"
): (typeof documents)["ContentItemShowHideBalanceFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemSliderInputFragmentDoc"
): (typeof documents)["ContentItemSliderInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemStackedShadowWrapperFragmentDoc"
): (typeof documents)["ContentItemStackedShadowWrapperFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemSwitchFragmentDoc"): (typeof documents)["ContentItemSwitchFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemTextFragmentDoc"): (typeof documents)["ContentItemTextFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemTextAreaInputFragmentDoc"
): (typeof documents)["ContentItemTextAreaInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemTextGroupFragmentDoc"): (typeof documents)["ContentItemTextGroupFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemTextInputFragmentDoc"): (typeof documents)["ContentItemTextInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemWrapperFragmentDoc"): (typeof documents)["ContentItemWrapperFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemYuCoinPowerFragmentDoc"
): (typeof documents)["ContentItemYuCoinPowerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserDailyChallengeAmountAvailableFragmentDoc"
): (typeof documents)["UserDailyChallengeAmountAvailableFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "DailyPensionContributionFragmentDoc"
): (typeof documents)["DailyPensionContributionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "DuelOpponentFragmentDoc"): (typeof documents)["DuelOpponentFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GiftFragmentDoc"): (typeof documents)["GiftFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GiftBackgroundAssetFragmentDoc"): (typeof documents)["GiftBackgroundAssetFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GiftParticipantFragmentDoc"): (typeof documents)["GiftParticipantFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GiftStickerAssetFragmentDoc"): (typeof documents)["GiftStickerAssetFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GoalDetailsFragmentDoc"): (typeof documents)["GoalDetailsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "HeroCardFragmentDoc"): (typeof documents)["HeroCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "HintFragmentDoc"): (typeof documents)["HintFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MobileInventoryInfoFragmentDoc"): (typeof documents)["MobileInventoryInfoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MediaFragmentDoc"): (typeof documents)["MediaFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MobileGameRewardPassFragmentDoc"): (typeof documents)["MobileGameRewardPassFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MobileGameThemeFragmentDoc"): (typeof documents)["MobileGameThemeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileWeeklyActivityProgressFragmentDoc"
): (typeof documents)["MobileWeeklyActivityProgressFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserMoodSubmissionFragmentDoc"): (typeof documents)["UserMoodSubmissionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserMoodSubmissionsResponseFragmentDoc"
): (typeof documents)["UserMoodSubmissionsResponseFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "NotificationSettingsPropsFragmentDoc"
): (typeof documents)["NotificationSettingsPropsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserProfileNotificationFragmentDoc"
): (typeof documents)["UserProfileNotificationFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserPathwayAdviceItemFragmentDoc"): (typeof documents)["UserPathwayAdviceItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserPathwaysFragmentDoc"): (typeof documents)["UserPathwaysFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserPathwaysItemFragmentDoc"): (typeof documents)["UserPathwaysItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserPathwaysReflectionProgressFragmentDoc"
): (typeof documents)["UserPathwaysReflectionProgressFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserWalletItemFragmentDoc"): (typeof documents)["UserWalletItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserWalletRewardFragmentDoc"): (typeof documents)["UserWalletRewardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserWalletSectionFragmentDoc"): (typeof documents)["UserWalletSectionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "LinearGradientOrientationFragmentDoc"
): (typeof documents)["LinearGradientOrientationFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ProductActionFragmentDoc"): (typeof documents)["ProductActionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RemoteImageFragmentDoc"): (typeof documents)["RemoteImageFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SduiActionFragmentDoc"): (typeof documents)["SduiActionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SduiSectionFragmentDoc"): (typeof documents)["SduiSectionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SduiStyleFragmentDoc"): (typeof documents)["SduiStyleFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SduiStyleDynamicFragmentDoc"): (typeof documents)["SduiStyleDynamicFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "VariableRemoteImageFragmentDoc"): (typeof documents)["VariableRemoteImageFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SocialGroupLeaderboardEnrollmentFragmentDoc"
): (typeof documents)["SocialGroupLeaderboardEnrollmentFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SocialGroupFragmentDoc"): (typeof documents)["SocialGroupFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SocialGroupLeaderboardFragmentDoc"
): (typeof documents)["SocialGroupLeaderboardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SocialGroupLeaderboardEnrollmentGroupFragmentDoc"
): (typeof documents)["SocialGroupLeaderboardEnrollmentGroupFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SocialGroupLeaderboardItemFragmentDoc"
): (typeof documents)["SocialGroupLeaderboardItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserFragmentDoc"): (typeof documents)["UserFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserActiveChallengeFragmentDoc"): (typeof documents)["UserActiveChallengeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserActiveStreakFragmentDoc"): (typeof documents)["UserActiveStreakFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserCoinLedgerFragmentDoc"): (typeof documents)["UserCoinLedgerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserConnectionsFragmentDoc"): (typeof documents)["UserConnectionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserFeatureFragmentDoc"): (typeof documents)["UserFeatureFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserPassiveChallengesEarnRateFragmentDoc"
): (typeof documents)["UserPassiveChallengesEarnRateFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserProfileEventsFragmentDoc"): (typeof documents)["UserProfileEventsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UserProfileTodayScreenFragmentDoc"
): (typeof documents)["UserProfileTodayScreenFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserStatisticDetailsFragmentDoc"): (typeof documents)["UserStatisticDetailsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserTodayActivitiesFragmentDoc"): (typeof documents)["UserTodayActivitiesFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserTodayActivityFragmentDoc"): (typeof documents)["UserTodayActivityFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MobileUserWrappedFragmentDoc"): (typeof documents)["MobileUserWrappedFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuHealthOptionsFragmentDoc"): (typeof documents)["YuHealthOptionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileGameUserAchievementsDocument"
): (typeof documents)["GetMobileGameUserAchievementsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MarkMobileGameUserAchievementsViewedDocument"
): (typeof documents)["MarkMobileGameUserAchievementsViewedDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateMobileGameUserAchievementDocument"
): (typeof documents)["UpdateMobileGameUserAchievementDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetInboxMessagesDocument"): (typeof documents)["GetInboxMessagesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MarkInboxMessagesAsSeenDocument"): (typeof documents)["MarkInboxMessagesAsSeenDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileAssetsWithVersionDocument"
): (typeof documents)["GetMobileAssetsWithVersionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "CompleteMobileGameBattlePassSeasonDocument"
): (typeof documents)["CompleteMobileGameBattlePassSeasonDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileBattlePassDonationProgressDetailsDocument"
): (typeof documents)["GetMobileBattlePassDonationProgressDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileBattlePassDonationTemplatesDocument"
): (typeof documents)["GetMobileBattlePassDonationTemplatesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileGameBattlePassDocument"): (typeof documents)["GetMobileGameBattlePassDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileGameBattlePassFullDocument"
): (typeof documents)["GetMobileGameBattlePassFullDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileGameBattlePassRewardInfoDocument"
): (typeof documents)["GetMobileGameBattlePassRewardInfoDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileUnlockableBattlePassTeasersDocument"
): (typeof documents)["GetMobileUnlockableBattlePassTeasersDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SubmitMobileGameBattlePassDonationsDocument"
): (typeof documents)["SubmitMobileGameBattlePassDonationsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSudokuBoardDocument"): (typeof documents)["GetSudokuBoardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSudokuPracticeDocument"): (typeof documents)["GetSudokuPracticeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSudokuStatsDocument"): (typeof documents)["GetSudokuStatsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SubmitMobileQuestLevelSudokuSolutionDocument"
): (typeof documents)["SubmitMobileQuestLevelSudokuSolutionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "CancelMobileQuestLevelChallengeDocument"
): (typeof documents)["CancelMobileQuestLevelChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CancelPathwayChallengeDocument"): (typeof documents)["CancelPathwayChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CompletePathwayChallengeDocument"): (typeof documents)["CompletePathwayChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "CreateMobileQuestLevelChallengeDocument"
): (typeof documents)["CreateMobileQuestLevelChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileQuestLevelChallengeDetailsDocument"
): (typeof documents)["GetMobileQuestLevelChallengeDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileQuestLevelMediaInternalContentDocument"
): (typeof documents)["GetMobileQuestLevelMediaInternalContentDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetPassiveChallengesLastUpdateDocument"
): (typeof documents)["GetPassiveChallengesLastUpdateDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPathwayChallengeDocument"): (typeof documents)["GetPathwayChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetQuestMapDocument"): (typeof documents)["GetQuestMapDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetQuestMapLevelDocument"): (typeof documents)["GetQuestMapLevelDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUnityRewardsDocument"): (typeof documents)["GetUnityRewardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetUserChallengesDoneTodayDocument"
): (typeof documents)["GetUserChallengesDoneTodayDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "StartPathwayChallengeDocument"): (typeof documents)["StartPathwayChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitUnityDocument"): (typeof documents)["SubmitUnityDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ToggleMobileQuestLevelChallengePauseDocument"
): (typeof documents)["ToggleMobileQuestLevelChallengePauseDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateMobileQuestLevelChallengeDocument"
): (typeof documents)["UpdateMobileQuestLevelChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateUserHourlyActivityDocument"): (typeof documents)["UpdateUserHourlyActivityDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpsertDailyPassivesDocument"): (typeof documents)["UpsertDailyPassivesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpsertOnboardingChallengeDocument"
): (typeof documents)["UpsertOnboardingChallengeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ClaimMobileRewardChestDocument"): (typeof documents)["ClaimMobileRewardChestDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileRewardChestDetailsDocument"
): (typeof documents)["GetMobileRewardChestDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "OpenMobileRewardChestDocument"): (typeof documents)["OpenMobileRewardChestDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPublicYuApiConfigDocument"): (typeof documents)["GetPublicYuApiConfigDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetPublicYuApiConfigWithFingerprintThemeDocument"
): (typeof documents)["GetPublicYuApiConfigWithFingerprintThemeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetPublicYuApiConfigWithThemeDocument"
): (typeof documents)["GetPublicYuApiConfigWithThemeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "DeleteConnectionDocument"): (typeof documents)["DeleteConnectionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetNewConnectionLinkDocument"): (typeof documents)["GetNewConnectionLinkDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileAvailableContentLocationsDocument"
): (typeof documents)["GetMobileAvailableContentLocationsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateMobileUserContentLocationDocument"
): (typeof documents)["UpdateMobileUserContentLocationDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "DebugEndTournamentEarlyDocument"): (typeof documents)["DebugEndTournamentEarlyDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "DebugGetActiveTournamentsDocument"
): (typeof documents)["DebugGetActiveTournamentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDebugCodesDocument"): (typeof documents)["GetDebugCodesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserDebugDataDocument"): (typeof documents)["GetUserDebugDataDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ResetDataDocument"): (typeof documents)["ResetDataDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SetFeatureDocument"): (typeof documents)["SetFeatureDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SetUserPathwayProgressDocument"): (typeof documents)["SetUserPathwayProgressDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SetUserQuestProgressDocument"): (typeof documents)["SetUserQuestProgressDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitChallengeDebugDataDocument"): (typeof documents)["SubmitChallengeDebugDataDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitUserDebugDataDocument"): (typeof documents)["SubmitUserDebugDataDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "AddDeviceTokenDocument"): (typeof documents)["AddDeviceTokenDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ConfirmDuelsScoreDocument"): (typeof documents)["ConfirmDuelsScoreDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelInvitationsDocument"): (typeof documents)["GetDuelInvitationsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelTemplatesDocument"): (typeof documents)["GetDuelTemplatesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuellerDetailsDocument"): (typeof documents)["GetDuellerDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsDocument"): (typeof documents)["GetDuelsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsCompletedDocument"): (typeof documents)["GetDuelsCompletedDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsTodayDocument"): (typeof documents)["GetDuelsTodayDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsTomorrowDocument"): (typeof documents)["GetDuelsTomorrowDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetRecentDuelOpponentsDocument"): (typeof documents)["GetRecentDuelOpponentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "InviteToDuelDocument"): (typeof documents)["InviteToDuelDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RespondToDuelDocument"): (typeof documents)["RespondToDuelDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SyncDuelScoreDocument"): (typeof documents)["SyncDuelScoreDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ClaimGiftDocument"): (typeof documents)["ClaimGiftDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGiftDocument"): (typeof documents)["GetGiftDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGiftingRecipientsDocument"): (typeof documents)["GetGiftingRecipientsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SendThanksForGiftDocument"): (typeof documents)["SendThanksForGiftDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ClaimGoalRewardsDocument"): (typeof documents)["ClaimGoalRewardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CompleteGoalDocument"): (typeof documents)["CompleteGoalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGoalDetailsDocument"): (typeof documents)["GetGoalDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGoalMilestoneDetailsDocument"): (typeof documents)["GetGoalMilestoneDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "JoinGoalDocument"): (typeof documents)["JoinGoalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileHeroCardsDocument"): (typeof documents)["GetMobileHeroCardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetOptionsForGiftDocument"): (typeof documents)["GetOptionsForGiftDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetStatisticsDocument"): (typeof documents)["GetStatisticsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SendGiftToRecipientsDocument"): (typeof documents)["SendGiftToRecipientsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "EquipItemDocument"): (typeof documents)["EquipItemDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetInventoryDocument"): (typeof documents)["GetInventoryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "InventoryItemFragmentDoc"): (typeof documents)["InventoryItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSduiJourneyDocument"): (typeof documents)["GetSduiJourneyDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitSduiJourneyDocument"): (typeof documents)["SubmitSduiJourneyDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetLeaderboardSettingsDocument"): (typeof documents)["GetLeaderboardSettingsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ChangeUserLocaleDocument"): (typeof documents)["ChangeUserLocaleDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMediaDocument"): (typeof documents)["GetMediaDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CollectAwardDocument"): (typeof documents)["CollectAwardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPendingUserFeedbackDocument"): (typeof documents)["GetPendingUserFeedbackDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SearchLeaderboardUserDocument"): (typeof documents)["SearchLeaderboardUserDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SubmitAppStoreReviewActionDocument"
): (typeof documents)["SubmitAppStoreReviewActionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitFeedbackFormDocument"): (typeof documents)["SubmitFeedbackFormDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateMemberConsentDocument"): (typeof documents)["UpdateMemberConsentDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPotentialRewardsDocument"): (typeof documents)["GetPotentialRewardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserMoodSubmissionsDocument"): (typeof documents)["GetUserMoodSubmissionsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetInboxNotificationsSettingsDocument"
): (typeof documents)["GetInboxNotificationsSettingsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetUserLeaderboardEnrollmentsDocument"
): (typeof documents)["GetUserLeaderboardEnrollmentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetUserNotificationsSettingsDocument"
): (typeof documents)["GetUserNotificationsSettingsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateUserNotificationsSettingsDocument"
): (typeof documents)["UpdateUserNotificationsSettingsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileWhatsNewModalDocument"): (typeof documents)["GetMobileWhatsNewModalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "PerformMobileOnboardingStepDocument"
): (typeof documents)["PerformMobileOnboardingStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetUserPathwayGoalsSectionDocument"
): (typeof documents)["GetUserPathwayGoalsSectionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserPathwaysDocument"): (typeof documents)["GetUserPathwaysDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MarkPathwayGoalCompletedDocument"): (typeof documents)["MarkPathwayGoalCompletedDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SubmitPathwayChallengeFeedbackDocument"
): (typeof documents)["SubmitPathwayChallengeFeedbackDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ConfirmPaymentCardDocument"): (typeof documents)["ConfirmPaymentCardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobilePaymentCardSetupDocument"
): (typeof documents)["GetMobilePaymentCardSetupDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPerkSubscriptionInfoDocument"): (typeof documents)["GetPerkSubscriptionInfoDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubscribeToPerkDocument"): (typeof documents)["SubscribeToPerkDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "CreateOrUpdateBeneficiaryDocument"
): (typeof documents)["CreateOrUpdateBeneficiaryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "RemoveBeneficiaryFromProductDocument"
): (typeof documents)["RemoveBeneficiaryFromProductDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetProductBeneficiariesDocument"): (typeof documents)["GetProductBeneficiariesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetYuScreenProductDetailsDocument"
): (typeof documents)["GetYuScreenProductDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SetShareOfBenefitForProductDocument"
): (typeof documents)["SetShareOfBenefitForProductDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetReferralInformationDocument"): (typeof documents)["GetReferralInformationDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetReferralOnboardingPopoverDocument"
): (typeof documents)["GetReferralOnboardingPopoverDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetReferralRewardAmountDocument"): (typeof documents)["GetReferralRewardAmountDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetReferralHistoryDocument"): (typeof documents)["GetReferralHistoryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileGameShopfrontDocument"): (typeof documents)["GetMobileGameShopfrontDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileGameUserWalletRewardItemsDocument"
): (typeof documents)["GetMobileGameUserWalletRewardItemsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileGameUserWalletRewardsDocument"
): (typeof documents)["GetMobileGameUserWalletRewardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobilePurchasesListDocument"): (typeof documents)["GetMobilePurchasesListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileRecentlyUsedRewardsListDocument"
): (typeof documents)["GetMobileRecentlyUsedRewardsListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileRewardsListDocument"): (typeof documents)["GetMobileRewardsListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileRewardsListItemsDocument"
): (typeof documents)["GetMobileRewardsListItemsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileUnlockableBattlePassVouchersDocument"
): (typeof documents)["GetMobileUnlockableBattlePassVouchersDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSduiStaticStepDocument"): (typeof documents)["GetSduiStaticStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "FeatureCardSectionContentFragmentDoc"
): (typeof documents)["FeatureCardSectionContentFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "HeroCardSectionContentFragmentDoc"
): (typeof documents)["HeroCardSectionContentFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MaximiseYuSectionContentProgressFragmentDoc"
): (typeof documents)["MaximiseYuSectionContentProgressFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ProductCardCarouselSectionItemFragmentDoc"
): (typeof documents)["ProductCardCarouselSectionItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ReferralSectionContentFragmentDoc"
): (typeof documents)["ReferralSectionContentFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "WellbeingHubSectionContentFragmentDoc"
): (typeof documents)["WellbeingHubSectionContentFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetHealthSmokingStateDocument"): (typeof documents)["GetHealthSmokingStateDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "HealthSmokingStateFragmentDoc"): (typeof documents)["HealthSmokingStateFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "StartSmokingStreakDocument"): (typeof documents)["StartSmokingStreakDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateSmokingStateDocument"): (typeof documents)["UpdateSmokingStateDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateSmokingStreakDocument"): (typeof documents)["UpdateSmokingStreakDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetLeaderboardFullDocument"): (typeof documents)["GetLeaderboardFullDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileSocialGroupLeaderboardItemsDocument"
): (typeof documents)["GetMobileSocialGroupLeaderboardItemsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileSocialGroupLeaderboardsDocument"
): (typeof documents)["GetMobileSocialGroupLeaderboardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateMobileSocialLeaderboardConsentsDocument"
): (typeof documents)["UpdateMobileSocialLeaderboardConsentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserSurgeDocument"): (typeof documents)["GetUserSurgeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetAllMobileGameThemesDocument"): (typeof documents)["GetAllMobileGameThemesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileGameThemeDocument"): (typeof documents)["GetMobileGameThemeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SetTestMobileGameThemeDocument"): (typeof documents)["SetTestMobileGameThemeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetTodayEarningsDocument"): (typeof documents)["GetTodayEarningsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetTournamentDetailsDocument"): (typeof documents)["GetTournamentDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetTournamentLeaderboardDocument"): (typeof documents)["GetTournamentLeaderboardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetTournamentTeamLeaderboardDocument"
): (typeof documents)["GetTournamentTeamLeaderboardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ClearUserProfileBadgeCountDocument"
): (typeof documents)["ClearUserProfileBadgeCountDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserProfileBadgeCountDocument"): (typeof documents)["GetUserProfileBadgeCountDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ActivateGameConsumableDocument"): (typeof documents)["ActivateGameConsumableDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGameConsumablesDocument"): (typeof documents)["GetGameConsumablesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetDailyPensionContributionDocument"
): (typeof documents)["GetDailyPensionContributionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileHintsDocument"): (typeof documents)["GetMobileHintsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetLinkedBusinessesDocument"): (typeof documents)["GetLinkedBusinessesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMagicLinkDocument"): (typeof documents)["GetMagicLinkDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileUserActivityHistoryDocument"
): (typeof documents)["GetMobileUserActivityHistoryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSessionDocument"): (typeof documents)["GetSessionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetStreakDetailsDocument"): (typeof documents)["GetStreakDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetTotalCoinsDocument"): (typeof documents)["GetTotalCoinsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserConnectionsDocument"): (typeof documents)["GetUserConnectionsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetUserDailyChallengeAmountAvailableDocument"
): (typeof documents)["GetUserDailyChallengeAmountAvailableDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserFeaturesDocument"): (typeof documents)["GetUserFeaturesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserProfileDocument"): (typeof documents)["GetUserProfileDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserTodayScreenDocument"): (typeof documents)["GetUserTodayScreenDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "LoginUserDocument"): (typeof documents)["LoginUserDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RefreshSessionDocument"): (typeof documents)["RefreshSessionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RestoreStreakDocument"): (typeof documents)["RestoreStreakDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SendMagicLinkDocument"): (typeof documents)["SendMagicLinkDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateCyclingMeasurementDocument"): (typeof documents)["UpdateCyclingMeasurementDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CompleteGame2048Document"): (typeof documents)["CompleteGame2048Document"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGame2048HighScoreDocument"): (typeof documents)["GetGame2048HighScoreDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ClaimMobileGameWeeklyRewardsDocument"
): (typeof documents)["ClaimMobileGameWeeklyRewardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileGameWeekliesDocument"): (typeof documents)["GetMobileGameWeekliesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "JoinWeeklyGoalDocument"): (typeof documents)["JoinWeeklyGoalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetWellbeingHubItemsDocument"): (typeof documents)["GetWellbeingHubItemsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SendWellbeingHubItemDocumentsDocument"
): (typeof documents)["SendWellbeingHubItemDocumentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileUserWrappedDocument"): (typeof documents)["GetMobileUserWrappedDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MarkMobileUserWrappedAsViewedDocument"
): (typeof documents)["MarkMobileUserWrappedAsViewedDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetProductPaymentHistoryDocument"): (typeof documents)["GetProductPaymentHistoryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetProductYumojiPartDocument"): (typeof documents)["GetProductYumojiPartDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYuCoinPowerInfoDocument"): (typeof documents)["GetYuCoinPowerInfoDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetYumojiBuilderCategoryListDocument"
): (typeof documents)["GetYumojiBuilderCategoryListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetYumojiBuilderInitialPartsDocument"
): (typeof documents)["GetYumojiBuilderInitialPartsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetYumojiBuilderItemsForCategoryDocument"
): (typeof documents)["GetYumojiBuilderItemsForCategoryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYumojiPartUrlSetDocument"): (typeof documents)["GetYumojiPartUrlSetDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetYumojiPartUrlSetSwiperDocument"
): (typeof documents)["GetYumojiPartUrlSetSwiperDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetYumojiRemoteFittingRoomDocument"
): (typeof documents)["GetYumojiRemoteFittingRoomDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYumojiRemotePartsDocument"): (typeof documents)["GetYumojiRemotePartsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileGameRecentlyUsedRewardFragmentDoc"
): (typeof documents)["MobileGameRecentlyUsedRewardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MobileRewardsListFragmentDoc"): (typeof documents)["MobileRewardsListFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MobileRewardsListItemFragmentDoc"): (typeof documents)["MobileRewardsListItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateAvatarDocument"): (typeof documents)["UpdateAvatarDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ProductPaymentHistoryInfoPanelButtonFragmentDoc"
): (typeof documents)["ProductPaymentHistoryInfoPanelButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYuScreenV5Document"): (typeof documents)["GetYuScreenV5Document"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYuScreenV5SectionsDocument"): (typeof documents)["GetYuScreenV5SectionsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenSectionFragmentDoc"): (typeof documents)["YuScreenSectionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YumojiRemotePartFragmentDoc"): (typeof documents)["YumojiRemotePartFragmentDoc"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
