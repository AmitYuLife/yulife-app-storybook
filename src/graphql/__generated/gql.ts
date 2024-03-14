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
 */
const documents = {
  YumojiRemoteFilesFragmentDoc: types.YumojiRemoteFilesFragmentDoc,
  ChallengeFragmentDoc: types.ChallengeFragmentDoc,
  MilestoneFragmentDoc: types.MilestoneFragmentDoc,
  ChallengeTemplateFragmentDoc: types.ChallengeTemplateFragmentDoc,
  AbsoluteContentItemFragmentDoc: types.AbsoluteContentItemFragmentDoc,
  ContentItemFragmentDoc: types.ContentItemFragmentDoc,
  ContentItemAccordionFragmentDoc: types.ContentItemAccordionFragmentDoc,
  ContentItemAgePercentCoverPickerFragmentDoc: types.ContentItemAgePercentCoverPickerFragmentDoc,
  ContentItemAgePercentCoverPickerAgeOptionFragmentDoc: types.ContentItemAgePercentCoverPickerAgeOptionFragmentDoc,
  ContentItemAgePercentCoverPickerPercentOptionFragmentDoc:
    types.ContentItemAgePercentCoverPickerPercentOptionFragmentDoc,
  ContentItemAnswerKeysFragmentDoc: types.ContentItemAnswerKeysFragmentDoc,
  ContentItemBeneficiariesSectionFragmentDoc: types.ContentItemBeneficiariesSectionFragmentDoc,
  ContentItemBoxFragmentDoc: types.ContentItemBoxFragmentDoc,
  ContentItemBoxOptionCardFragmentDoc: types.ContentItemBoxOptionCardFragmentDoc,
  ContentItemButtonFragmentDoc: types.ContentItemButtonFragmentDoc,
  ContentItemCollapsingGenericHeaderFragmentDoc: types.ContentItemCollapsingGenericHeaderFragmentDoc,
  ContentItemCollapsingHeaderAgePercentProductInfoFragmentDoc:
    types.ContentItemCollapsingHeaderAgePercentProductInfoFragmentDoc,
  ContentItemCollapsingHeaderProductInfoFragmentDoc: types.ContentItemCollapsingHeaderProductInfoFragmentDoc,
  ContentItemConfirmFragmentDoc: types.ContentItemConfirmFragmentDoc,
  ContentItemCostPayoutBenefitCardFragmentDoc: types.ContentItemCostPayoutBenefitCardFragmentDoc,
  ContentItemCoverListItemFragmentDoc: types.ContentItemCoverListItemFragmentDoc,
  ContentItemCoverPickerFragmentDoc: types.ContentItemCoverPickerFragmentDoc,
  ContentItemCoverPickerCustomCoverFragmentDoc: types.ContentItemCoverPickerCustomCoverFragmentDoc,
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
  ContentItemFullScreenLottieSwiperFragmentDoc: types.ContentItemFullScreenLottieSwiperFragmentDoc,
  ContentItemFullScreenSwiperFragmentDoc: types.ContentItemFullScreenSwiperFragmentDoc,
  ContentItemGpDetailsFragmentDoc: types.ContentItemGpDetailsFragmentDoc,
  ContentItemHeaderBarFragmentDoc: types.ContentItemHeaderBarFragmentDoc,
  ContentItemHintFragmentDoc: types.ContentItemHintFragmentDoc,
  ContentItemImageFragmentDoc: types.ContentItemImageFragmentDoc,
  ContentItemInfoButtonFragmentDoc: types.ContentItemInfoButtonFragmentDoc,
  ContentItemInfoCardFragmentDoc: types.ContentItemInfoCardFragmentDoc,
  ContentItemKeyValueBoxFragmentDoc: types.ContentItemKeyValueBoxFragmentDoc,
  ContentItemLinearGradientFragmentDoc: types.ContentItemLinearGradientFragmentDoc,
  ContentItemListFragmentDoc: types.ContentItemListFragmentDoc,
  ContentItemLottieFragmentDoc: types.ContentItemLottieFragmentDoc,
  ContentItemMarkdownFragmentDoc: types.ContentItemMarkdownFragmentDoc,
  ContentItemMediaFragmentDoc: types.ContentItemMediaFragmentDoc,
  ContentItemMultiButtonFragmentDoc: types.ContentItemMultiButtonFragmentDoc,
  ContentItemMultiSelectFragmentDoc: types.ContentItemMultiSelectFragmentDoc,
  ContentItemOverlayFragmentDoc: types.ContentItemOverlayFragmentDoc,
  ContentItemPackageCardPowerFragmentDoc: types.ContentItemPackageCardPowerFragmentDoc,
  ContentItemPackageCardSlotInfoFragmentDoc: types.ContentItemPackageCardSlotInfoFragmentDoc,
  ContentItemPackageCardsFragmentDoc: types.ContentItemPackageCardsFragmentDoc,
  ContentItemPadFragmentDoc: types.ContentItemPadFragmentDoc,
  ContentItemPersonalProductDocumentsFragmentDoc: types.ContentItemPersonalProductDocumentsFragmentDoc,
  ContentItemPersonalProductFaqsFragmentDoc: types.ContentItemPersonalProductFaqsFragmentDoc,
  ContentItemPersonalProductInfoFragmentDoc: types.ContentItemPersonalProductInfoFragmentDoc,
  ContentItemPersonalProductPreviewFragmentDoc: types.ContentItemPersonalProductPreviewFragmentDoc,
  ContentItemPersonalProductReviewItemFragmentDoc: types.ContentItemPersonalProductReviewItemFragmentDoc,
  ContentItemPersonalProductSelectPaymentButtonFragmentDoc:
    types.ContentItemPersonalProductSelectPaymentButtonFragmentDoc,
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
  ContentItemScrollPickerFragmentDoc: types.ContentItemScrollPickerFragmentDoc,
  ContentItemScrollableItemsPickerFragmentDoc: types.ContentItemScrollableItemsPickerFragmentDoc,
  ContentItemSearchPostcodeFragmentDoc: types.ContentItemSearchPostcodeFragmentDoc,
  ContentItemSelectedPackageAccordionFragmentDoc: types.ContentItemSelectedPackageAccordionFragmentDoc,
  ContentItemSelectedPackageCardFragmentDoc: types.ContentItemSelectedPackageCardFragmentDoc,
  ContentItemSelectedPackageCardProviderLogoFragmentDoc: types.ContentItemSelectedPackageCardProviderLogoFragmentDoc,
  ContentItemSelectedPackageCardsFragmentDoc: types.ContentItemSelectedPackageCardsFragmentDoc,
  ContentItemShowHideBalanceFragmentDoc: types.ContentItemShowHideBalanceFragmentDoc,
  ContentItemSliderInputFragmentDoc: types.ContentItemSliderInputFragmentDoc,
  ContentItemSwitchFragmentDoc: types.ContentItemSwitchFragmentDoc,
  ContentItemTextFragmentDoc: types.ContentItemTextFragmentDoc,
  ContentItemTextAreaInputFragmentDoc: types.ContentItemTextAreaInputFragmentDoc,
  ContentItemTextGroupFragmentDoc: types.ContentItemTextGroupFragmentDoc,
  ContentItemTextInputFragmentDoc: types.ContentItemTextInputFragmentDoc,
  ContentItemWrapperFragmentDoc: types.ContentItemWrapperFragmentDoc,
  ContentItemYuCoinPowerFragmentDoc: types.ContentItemYuCoinPowerFragmentDoc,
  ContentItemYugiConfirmFragmentDoc: types.ContentItemYugiConfirmFragmentDoc,
  YuScreenItemSlotFragmentDoc: types.YuScreenItemSlotFragmentDoc,
  DailyPensionContributionFragmentDoc: types.DailyPensionContributionFragmentDoc,
  DuelOpponentFragmentDoc: types.DuelOpponentFragmentDoc,
  GoalDetailsFragmentDoc: types.GoalDetailsFragmentDoc,
  HintFragmentDoc: types.HintFragmentDoc,
  MediaFragmentDoc: types.MediaFragmentDoc,
  MobileWeeklyActivityProgressFragmentDoc: types.MobileWeeklyActivityProgressFragmentDoc,
  LinearGradientOrientationFragmentDoc: types.LinearGradientOrientationFragmentDoc,
  ProductActionFragmentDoc: types.ProductActionFragmentDoc,
  RemoteImageFragmentDoc: types.RemoteImageFragmentDoc,
  SduiActionFragmentDoc: types.SduiActionFragmentDoc,
  SduiStyleFragmentDoc: types.SduiStyleFragmentDoc,
  SduiStyleDynamicFragmentDoc: types.SduiStyleDynamicFragmentDoc,
  VariableRemoteImageFragmentDoc: types.VariableRemoteImageFragmentDoc,
  SocialGroupFragmentDoc: types.SocialGroupFragmentDoc,
  SocialGroupLeaderboardFragmentDoc: types.SocialGroupLeaderboardFragmentDoc,
  SudokuLeaderboardFragmentDoc: types.SudokuLeaderboardFragmentDoc,
  UserFragmentDoc: types.UserFragmentDoc,
  UserActiveChallengeFragmentDoc: types.UserActiveChallengeFragmentDoc,
  UserActiveStreakFragmentDoc: types.UserActiveStreakFragmentDoc,
  UserCoinLedgerFragmentDoc: types.UserCoinLedgerFragmentDoc,
  UserFeatureFragmentDoc: types.UserFeatureFragmentDoc,
  UserProfileEventsFragmentDoc: types.UserProfileEventsFragmentDoc,
  UserStatisticDetailsFragmentDoc: types.UserStatisticDetailsFragmentDoc,
  UserTodayActivityFragmentDoc: types.UserTodayActivityFragmentDoc,
  GetAdBannersDocument: types.GetAdBannersDocument,
  GetMobileAssetsWithVersionDocument: types.GetMobileAssetsWithVersionDocument,
  GetSudokuBoardDocument: types.GetSudokuBoardDocument,
  GetSudokuPracticeDocument: types.GetSudokuPracticeDocument,
  GetSudokuStatsDocument: types.GetSudokuStatsDocument,
  SubmitSudokuSolutionDocument: types.SubmitSudokuSolutionDocument,
  GetActiveBuffsOverlayDocument: types.GetActiveBuffsOverlayDocument,
  GetPublicYuApiConfigDocument: types.GetPublicYuApiConfigDocument,
  DeleteConnectionDocument: types.DeleteConnectionDocument,
  GetConnectionsDocument: types.GetConnectionsDocument,
  GetNewConnectionLinkDocument: types.GetNewConnectionLinkDocument,
  GetDailyScreenCustomIconDocument: types.GetDailyScreenCustomIconDocument,
  GetDebugCodesDocument: types.GetDebugCodesDocument,
  GetUserDebugDataDocument: types.GetUserDebugDataDocument,
  ResetDataDocument: types.ResetDataDocument,
  SetUserQuestProgressDocument: types.SetUserQuestProgressDocument,
  SubmitUserDebugDataDocument: types.SubmitUserDebugDataDocument,
  AddDeviceTokenDocument: types.AddDeviceTokenDocument,
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
  SearchForDuelOpponentDocument: types.SearchForDuelOpponentDocument,
  ClaimGoalRewardsDocument: types.ClaimGoalRewardsDocument,
  CompleteGoalDocument: types.CompleteGoalDocument,
  GetGoalDetailsDocument: types.GetGoalDetailsDocument,
  GetGoalMilestoneDetailsDocument: types.GetGoalMilestoneDetailsDocument,
  JoinGoalDocument: types.JoinGoalDocument,
  ChangeUserLocaleDocument: types.ChangeUserLocaleDocument,
  GetMediaDocument: types.GetMediaDocument,
  CollectAwardDocument: types.CollectAwardDocument,
  GetPendingUserFeedbackDocument: types.GetPendingUserFeedbackDocument,
  SearchLeaderboardUserDocument: types.SearchLeaderboardUserDocument,
  SubmitAppStoreReviewActionDocument: types.SubmitAppStoreReviewActionDocument,
  SubmitFeedbackFormDocument: types.SubmitFeedbackFormDocument,
  UpdateMemberConsentDocument: types.UpdateMemberConsentDocument,
  MarkMobileNotificationsAsViewedByTypeDocument: types.MarkMobileNotificationsAsViewedByTypeDocument,
  GetMobileWhatsNewModalDocument: types.GetMobileWhatsNewModalDocument,
  PerformMobileOnboardingStepDocument: types.PerformMobileOnboardingStepDocument,
  ConfirmPaymentCardDocument: types.ConfirmPaymentCardDocument,
  GetMobilePaymentCardSetupDocument: types.GetMobilePaymentCardSetupDocument,
  GetPerkSubscriptionInfoDocument: types.GetPerkSubscriptionInfoDocument,
  SubscribeToPerkDocument: types.SubscribeToPerkDocument,
  BackPersonalProductStepDocument: types.BackPersonalProductStepDocument,
  GetPersonalProductStepDocument: types.GetPersonalProductStepDocument,
  GetPersonalProductStepContinueModalDocument: types.GetPersonalProductStepContinueModalDocument,
  GetPersonalProductStepDetachedDocument: types.GetPersonalProductStepDetachedDocument,
  GetPersonalProductStepDetachedDocumentsDocument: types.GetPersonalProductStepDetachedDocumentsDocument,
  GetPersonalProductStepDetachedFaqsDocument: types.GetPersonalProductStepDetachedFaqsDocument,
  NormalisePersonalProductStepDocument: types.NormalisePersonalProductStepDocument,
  ResetPersonalProductStepDocument: types.ResetPersonalProductStepDocument,
  SubmitPersonalProductStepDocument: types.SubmitPersonalProductStepDocument,
  CreateOrUpdateBeneficiaryDocument: types.CreateOrUpdateBeneficiaryDocument,
  RemoveBeneficiaryFromProductDocument: types.RemoveBeneficiaryFromProductDocument,
  MedicalPracticesDocument: types.MedicalPracticesDocument,
  GetProductBeneficiariesDocument: types.GetProductBeneficiariesDocument,
  GetYuScreenProductDetailsDocument: types.GetYuScreenProductDetailsDocument,
  SetShareOfBenefitForProductDocument: types.SetShareOfBenefitForProductDocument,
  GetUserNotificationsSettingsDocument: types.GetUserNotificationsSettingsDocument,
  UpdateUserNotificationsSettingsDocument: types.UpdateUserNotificationsSettingsDocument,
  GetReferralBackgroundDocument: types.GetReferralBackgroundDocument,
  GetReferralOnboardingPopoverDocument: types.GetReferralOnboardingPopoverDocument,
  GetReferralInformationDocument: types.GetReferralInformationDocument,
  GetMobilePurchasesListDocument: types.GetMobilePurchasesListDocument,
  GetMobileRewardStoreLocationsDocument: types.GetMobileRewardStoreLocationsDocument,
  GetMobileRewardsGoalProductMilestonesDocument: types.GetMobileRewardsGoalProductMilestonesDocument,
  GetMobileRewardsListDocument: types.GetMobileRewardsListDocument,
  GetRewardsProductsListDocument: types.GetRewardsProductsListDocument,
  UpdateMobileRewardStoreLocationDocument: types.UpdateMobileRewardStoreLocationDocument,
  GetSduiStaticStepDocument: types.GetSduiStaticStepDocument,
  GetMobileSocialGroupLeaderboardItemsDocument: types.GetMobileSocialGroupLeaderboardItemsDocument,
  GetMobileSocialGroupLeaderboardsDocument: types.GetMobileSocialGroupLeaderboardsDocument,
  UpdateMobileSocialLeaderboardConsentsDocument: types.UpdateMobileSocialLeaderboardConsentsDocument,
  GetStatisticsDocument: types.GetStatisticsDocument,
  GetUserSurgeDocument: types.GetUserSurgeDocument,
  GetTodayEarningsDocument: types.GetTodayEarningsDocument,
  GetMobileUserActivityHistoryDocument: types.GetMobileUserActivityHistoryDocument,
  GetStreakDetailsDocument: types.GetStreakDetailsDocument,
  ClaimMobileGameWeeklyRewardsDocument: types.ClaimMobileGameWeeklyRewardsDocument,
  GetMobileGameWeekliesDocument: types.GetMobileGameWeekliesDocument,
  JoinWeeklyGoalDocument: types.JoinWeeklyGoalDocument,
  GetWellbeingHubItemsDocument: types.GetWellbeingHubItemsDocument,
  SendWellbeingHubItemDocumentsDocument: types.SendWellbeingHubItemDocumentsDocument,
  CompleteInAppYuniversityModuleChapterDocument: types.CompleteInAppYuniversityModuleChapterDocument,
  GetInAppYuniversityCoursesDocument: types.GetInAppYuniversityCoursesDocument,
  GetInAppYuniversityCourseModuleDetailsDocument: types.GetInAppYuniversityCourseModuleDetailsDocument,
  GetYuScreenV5Document: types.GetYuScreenV5Document,
  GetProductYumojiPartDocument: types.GetProductYumojiPartDocument,
  GetYuScreenDocument: types.GetYuScreenDocument,
  GetYuScreenProductListDocument: types.GetYuScreenProductListDocument,
  GetYumojiPartUrlSetDocument: types.GetYumojiPartUrlSetDocument,
  GetYumojiPartUrlSetSwiperDocument: types.GetYumojiPartUrlSetSwiperDocument,
  GetYumojiRemoteFittingRoomDocument: types.GetYumojiRemoteFittingRoomDocument,
  GetYumojiRemotePartsDocument: types.GetYumojiRemotePartsDocument,
  UpdateAvatarDocument: types.UpdateAvatarDocument,
  YuScreenBoxOptionCardFragmentDoc: types.YuScreenBoxOptionCardFragmentDoc,
  YuScreenCarouselFragmentDoc: types.YuScreenCarouselFragmentDoc,
  YuScreenEnrolTimerFragmentDoc: types.YuScreenEnrolTimerFragmentDoc,
  YuScreenEnrollCopyFragmentDoc: types.YuScreenEnrollCopyFragmentDoc,
  YuScreenPopoverFragmentDoc: types.YuScreenPopoverFragmentDoc,
  YuScreenOnboardingFragmentDoc: types.YuScreenOnboardingFragmentDoc,
  YuScreenProductFragmentDoc: types.YuScreenProductFragmentDoc,
  YuScreenSpanningProductSlotFragmentDoc: types.YuScreenSpanningProductSlotFragmentDoc,
  YuScreenSurveyFooterFragmentDoc: types.YuScreenSurveyFooterFragmentDoc,
  YuScreenYumojiPromptFragmentDoc: types.YuScreenYumojiPromptFragmentDoc,
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
export function gql(source: "YumojiRemoteFilesFragmentDoc"): typeof documents["YumojiRemoteFilesFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ChallengeFragmentDoc"): typeof documents["ChallengeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MilestoneFragmentDoc"): typeof documents["MilestoneFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ChallengeTemplateFragmentDoc"): typeof documents["ChallengeTemplateFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "AbsoluteContentItemFragmentDoc"): typeof documents["AbsoluteContentItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemFragmentDoc"): typeof documents["ContentItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemAccordionFragmentDoc"): typeof documents["ContentItemAccordionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemAgePercentCoverPickerFragmentDoc"
): typeof documents["ContentItemAgePercentCoverPickerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemAgePercentCoverPickerAgeOptionFragmentDoc"
): typeof documents["ContentItemAgePercentCoverPickerAgeOptionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemAgePercentCoverPickerPercentOptionFragmentDoc"
): typeof documents["ContentItemAgePercentCoverPickerPercentOptionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemAnswerKeysFragmentDoc"): typeof documents["ContentItemAnswerKeysFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemBeneficiariesSectionFragmentDoc"
): typeof documents["ContentItemBeneficiariesSectionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemBoxFragmentDoc"): typeof documents["ContentItemBoxFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemBoxOptionCardFragmentDoc"
): typeof documents["ContentItemBoxOptionCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemButtonFragmentDoc"): typeof documents["ContentItemButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemCollapsingGenericHeaderFragmentDoc"
): typeof documents["ContentItemCollapsingGenericHeaderFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemCollapsingHeaderAgePercentProductInfoFragmentDoc"
): typeof documents["ContentItemCollapsingHeaderAgePercentProductInfoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemCollapsingHeaderProductInfoFragmentDoc"
): typeof documents["ContentItemCollapsingHeaderProductInfoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemConfirmFragmentDoc"): typeof documents["ContentItemConfirmFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemCostPayoutBenefitCardFragmentDoc"
): typeof documents["ContentItemCostPayoutBenefitCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemCoverListItemFragmentDoc"
): typeof documents["ContentItemCoverListItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemCoverPickerFragmentDoc"): typeof documents["ContentItemCoverPickerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemCoverPickerCustomCoverFragmentDoc"
): typeof documents["ContentItemCoverPickerCustomCoverFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemDatePickerFragmentDoc"): typeof documents["ContentItemDatePickerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemDropdownInputFragmentDoc"
): typeof documents["ContentItemDropdownInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemDropdownInputOptionsFragmentDoc"
): typeof documents["ContentItemDropdownInputOptionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemFadeFragmentDoc"): typeof documents["ContentItemFadeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemFormFragmentDoc"): typeof documents["ContentItemFormFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormElementsFragmentDoc"
): typeof documents["ContentItemFormElementsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormInputValidationFragmentDoc"
): typeof documents["ContentItemFormInputValidationFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormSelectInputFragmentDoc"
): typeof documents["ContentItemFormSelectInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormSelectInputOptionsFragmentDoc"
): typeof documents["ContentItemFormSelectInputOptionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormSubmitButtonFragmentDoc"
): typeof documents["ContentItemFormSubmitButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFormTextInputFragmentDoc"
): typeof documents["ContentItemFormTextInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFullScreenLottieSwiperFragmentDoc"
): typeof documents["ContentItemFullScreenLottieSwiperFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemFullScreenSwiperFragmentDoc"
): typeof documents["ContentItemFullScreenSwiperFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemGpDetailsFragmentDoc"): typeof documents["ContentItemGpDetailsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemHeaderBarFragmentDoc"): typeof documents["ContentItemHeaderBarFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemHintFragmentDoc"): typeof documents["ContentItemHintFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemImageFragmentDoc"): typeof documents["ContentItemImageFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemInfoButtonFragmentDoc"): typeof documents["ContentItemInfoButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemInfoCardFragmentDoc"): typeof documents["ContentItemInfoCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemKeyValueBoxFragmentDoc"): typeof documents["ContentItemKeyValueBoxFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemLinearGradientFragmentDoc"
): typeof documents["ContentItemLinearGradientFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemListFragmentDoc"): typeof documents["ContentItemListFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemLottieFragmentDoc"): typeof documents["ContentItemLottieFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemMarkdownFragmentDoc"): typeof documents["ContentItemMarkdownFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemMediaFragmentDoc"): typeof documents["ContentItemMediaFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemMultiButtonFragmentDoc"): typeof documents["ContentItemMultiButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemMultiSelectFragmentDoc"): typeof documents["ContentItemMultiSelectFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemOverlayFragmentDoc"): typeof documents["ContentItemOverlayFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPackageCardPowerFragmentDoc"
): typeof documents["ContentItemPackageCardPowerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPackageCardSlotInfoFragmentDoc"
): typeof documents["ContentItemPackageCardSlotInfoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPackageCardsFragmentDoc"
): typeof documents["ContentItemPackageCardsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemPadFragmentDoc"): typeof documents["ContentItemPadFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPersonalProductDocumentsFragmentDoc"
): typeof documents["ContentItemPersonalProductDocumentsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPersonalProductFaqsFragmentDoc"
): typeof documents["ContentItemPersonalProductFaqsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPersonalProductInfoFragmentDoc"
): typeof documents["ContentItemPersonalProductInfoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPersonalProductPreviewFragmentDoc"
): typeof documents["ContentItemPersonalProductPreviewFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPersonalProductReviewItemFragmentDoc"
): typeof documents["ContentItemPersonalProductReviewItemFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemPersonalProductSelectPaymentButtonFragmentDoc"
): typeof documents["ContentItemPersonalProductSelectPaymentButtonFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProcessingTimerFragmentDoc"
): typeof documents["ContentItemProcessingTimerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHeaderFragmentDoc"
): typeof documents["ContentItemProductDetailsHeaderFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHeaderFundingFragmentDoc"
): typeof documents["ContentItemProductDetailsHeaderFundingFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHeaderFundingThemeFragmentDoc"
): typeof documents["ContentItemProductDetailsHeaderFundingThemeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProductDetailsHoldingHeaderFragmentDoc"
): typeof documents["ContentItemProductDetailsHoldingHeaderFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemProgressBarFragmentDoc"): typeof documents["ContentItemProgressBarFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProgressStepsFragmentDoc"
): typeof documents["ContentItemProgressStepsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProgressStepsThemeFragmentDoc"
): typeof documents["ContentItemProgressStepsThemeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemProgressStepsThemeOptionFragmentDoc"
): typeof documents["ContentItemProgressStepsThemeOptionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemRadioFragmentDoc"): typeof documents["ContentItemRadioFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemRadioIconFragmentDoc"): typeof documents["ContentItemRadioIconFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemRowIconTextBannerFragmentDoc"
): typeof documents["ContentItemRowIconTextBannerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemRowIconTextBannerContainerActionsFragmentDoc"
): typeof documents["ContentItemRowIconTextBannerContainerActionsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemScrollPickerFragmentDoc"
): typeof documents["ContentItemScrollPickerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemScrollableItemsPickerFragmentDoc"
): typeof documents["ContentItemScrollableItemsPickerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemSearchPostcodeFragmentDoc"
): typeof documents["ContentItemSearchPostcodeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemSelectedPackageAccordionFragmentDoc"
): typeof documents["ContentItemSelectedPackageAccordionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemSelectedPackageCardFragmentDoc"
): typeof documents["ContentItemSelectedPackageCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemSelectedPackageCardProviderLogoFragmentDoc"
): typeof documents["ContentItemSelectedPackageCardProviderLogoFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemSelectedPackageCardsFragmentDoc"
): typeof documents["ContentItemSelectedPackageCardsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemShowHideBalanceFragmentDoc"
): typeof documents["ContentItemShowHideBalanceFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemSliderInputFragmentDoc"): typeof documents["ContentItemSliderInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemSwitchFragmentDoc"): typeof documents["ContentItemSwitchFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemTextFragmentDoc"): typeof documents["ContentItemTextFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ContentItemTextAreaInputFragmentDoc"
): typeof documents["ContentItemTextAreaInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemTextGroupFragmentDoc"): typeof documents["ContentItemTextGroupFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemTextInputFragmentDoc"): typeof documents["ContentItemTextInputFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemWrapperFragmentDoc"): typeof documents["ContentItemWrapperFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemYuCoinPowerFragmentDoc"): typeof documents["ContentItemYuCoinPowerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ContentItemYugiConfirmFragmentDoc"): typeof documents["ContentItemYugiConfirmFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenItemSlotFragmentDoc"): typeof documents["YuScreenItemSlotFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "DailyPensionContributionFragmentDoc"
): typeof documents["DailyPensionContributionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "DuelOpponentFragmentDoc"): typeof documents["DuelOpponentFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GoalDetailsFragmentDoc"): typeof documents["GoalDetailsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "HintFragmentDoc"): typeof documents["HintFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MediaFragmentDoc"): typeof documents["MediaFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MobileWeeklyActivityProgressFragmentDoc"
): typeof documents["MobileWeeklyActivityProgressFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "LinearGradientOrientationFragmentDoc"
): typeof documents["LinearGradientOrientationFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ProductActionFragmentDoc"): typeof documents["ProductActionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RemoteImageFragmentDoc"): typeof documents["RemoteImageFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SduiActionFragmentDoc"): typeof documents["SduiActionFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SduiStyleFragmentDoc"): typeof documents["SduiStyleFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SduiStyleDynamicFragmentDoc"): typeof documents["SduiStyleDynamicFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "VariableRemoteImageFragmentDoc"): typeof documents["VariableRemoteImageFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SocialGroupFragmentDoc"): typeof documents["SocialGroupFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SocialGroupLeaderboardFragmentDoc"): typeof documents["SocialGroupLeaderboardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SudokuLeaderboardFragmentDoc"): typeof documents["SudokuLeaderboardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserFragmentDoc"): typeof documents["UserFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserActiveChallengeFragmentDoc"): typeof documents["UserActiveChallengeFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserActiveStreakFragmentDoc"): typeof documents["UserActiveStreakFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserCoinLedgerFragmentDoc"): typeof documents["UserCoinLedgerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserFeatureFragmentDoc"): typeof documents["UserFeatureFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserProfileEventsFragmentDoc"): typeof documents["UserProfileEventsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserStatisticDetailsFragmentDoc"): typeof documents["UserStatisticDetailsFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UserTodayActivityFragmentDoc"): typeof documents["UserTodayActivityFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetAdBannersDocument"): typeof documents["GetAdBannersDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileAssetsWithVersionDocument"
): typeof documents["GetMobileAssetsWithVersionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSudokuBoardDocument"): typeof documents["GetSudokuBoardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSudokuPracticeDocument"): typeof documents["GetSudokuPracticeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSudokuStatsDocument"): typeof documents["GetSudokuStatsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitSudokuSolutionDocument"): typeof documents["SubmitSudokuSolutionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetActiveBuffsOverlayDocument"): typeof documents["GetActiveBuffsOverlayDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPublicYuApiConfigDocument"): typeof documents["GetPublicYuApiConfigDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "DeleteConnectionDocument"): typeof documents["DeleteConnectionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetConnectionsDocument"): typeof documents["GetConnectionsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetNewConnectionLinkDocument"): typeof documents["GetNewConnectionLinkDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDailyScreenCustomIconDocument"): typeof documents["GetDailyScreenCustomIconDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDebugCodesDocument"): typeof documents["GetDebugCodesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserDebugDataDocument"): typeof documents["GetUserDebugDataDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ResetDataDocument"): typeof documents["ResetDataDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SetUserQuestProgressDocument"): typeof documents["SetUserQuestProgressDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitUserDebugDataDocument"): typeof documents["SubmitUserDebugDataDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "AddDeviceTokenDocument"): typeof documents["AddDeviceTokenDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelInvitationsDocument"): typeof documents["GetDuelInvitationsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelTemplatesDocument"): typeof documents["GetDuelTemplatesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuellerDetailsDocument"): typeof documents["GetDuellerDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsDocument"): typeof documents["GetDuelsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsCompletedDocument"): typeof documents["GetDuelsCompletedDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsTodayDocument"): typeof documents["GetDuelsTodayDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetDuelsTomorrowDocument"): typeof documents["GetDuelsTomorrowDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetRecentDuelOpponentsDocument"): typeof documents["GetRecentDuelOpponentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "InviteToDuelDocument"): typeof documents["InviteToDuelDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "RespondToDuelDocument"): typeof documents["RespondToDuelDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SearchForDuelOpponentDocument"): typeof documents["SearchForDuelOpponentDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ClaimGoalRewardsDocument"): typeof documents["ClaimGoalRewardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CompleteGoalDocument"): typeof documents["CompleteGoalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGoalDetailsDocument"): typeof documents["GetGoalDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetGoalMilestoneDetailsDocument"): typeof documents["GetGoalMilestoneDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "JoinGoalDocument"): typeof documents["JoinGoalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ChangeUserLocaleDocument"): typeof documents["ChangeUserLocaleDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMediaDocument"): typeof documents["GetMediaDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CollectAwardDocument"): typeof documents["CollectAwardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPendingUserFeedbackDocument"): typeof documents["GetPendingUserFeedbackDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SearchLeaderboardUserDocument"): typeof documents["SearchLeaderboardUserDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SubmitAppStoreReviewActionDocument"
): typeof documents["SubmitAppStoreReviewActionDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitFeedbackFormDocument"): typeof documents["SubmitFeedbackFormDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateMemberConsentDocument"): typeof documents["UpdateMemberConsentDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "MarkMobileNotificationsAsViewedByTypeDocument"
): typeof documents["MarkMobileNotificationsAsViewedByTypeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileWhatsNewModalDocument"): typeof documents["GetMobileWhatsNewModalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "PerformMobileOnboardingStepDocument"
): typeof documents["PerformMobileOnboardingStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ConfirmPaymentCardDocument"): typeof documents["ConfirmPaymentCardDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobilePaymentCardSetupDocument"): typeof documents["GetMobilePaymentCardSetupDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPerkSubscriptionInfoDocument"): typeof documents["GetPerkSubscriptionInfoDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubscribeToPerkDocument"): typeof documents["SubscribeToPerkDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "BackPersonalProductStepDocument"): typeof documents["BackPersonalProductStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetPersonalProductStepDocument"): typeof documents["GetPersonalProductStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetPersonalProductStepContinueModalDocument"
): typeof documents["GetPersonalProductStepContinueModalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetPersonalProductStepDetachedDocument"
): typeof documents["GetPersonalProductStepDetachedDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetPersonalProductStepDetachedDocumentsDocument"
): typeof documents["GetPersonalProductStepDetachedDocumentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetPersonalProductStepDetachedFaqsDocument"
): typeof documents["GetPersonalProductStepDetachedFaqsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "NormalisePersonalProductStepDocument"
): typeof documents["NormalisePersonalProductStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "ResetPersonalProductStepDocument"): typeof documents["ResetPersonalProductStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SubmitPersonalProductStepDocument"): typeof documents["SubmitPersonalProductStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "CreateOrUpdateBeneficiaryDocument"): typeof documents["CreateOrUpdateBeneficiaryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "RemoveBeneficiaryFromProductDocument"
): typeof documents["RemoveBeneficiaryFromProductDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "MedicalPracticesDocument"): typeof documents["MedicalPracticesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetProductBeneficiariesDocument"): typeof documents["GetProductBeneficiariesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYuScreenProductDetailsDocument"): typeof documents["GetYuScreenProductDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SetShareOfBenefitForProductDocument"
): typeof documents["SetShareOfBenefitForProductDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetUserNotificationsSettingsDocument"
): typeof documents["GetUserNotificationsSettingsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateUserNotificationsSettingsDocument"
): typeof documents["UpdateUserNotificationsSettingsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetReferralBackgroundDocument"): typeof documents["GetReferralBackgroundDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetReferralOnboardingPopoverDocument"
): typeof documents["GetReferralOnboardingPopoverDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetReferralInformationDocument"): typeof documents["GetReferralInformationDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobilePurchasesListDocument"): typeof documents["GetMobilePurchasesListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileRewardStoreLocationsDocument"
): typeof documents["GetMobileRewardStoreLocationsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileRewardsGoalProductMilestonesDocument"
): typeof documents["GetMobileRewardsGoalProductMilestonesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileRewardsListDocument"): typeof documents["GetMobileRewardsListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetRewardsProductsListDocument"): typeof documents["GetRewardsProductsListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateMobileRewardStoreLocationDocument"
): typeof documents["UpdateMobileRewardStoreLocationDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetSduiStaticStepDocument"): typeof documents["GetSduiStaticStepDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileSocialGroupLeaderboardItemsDocument"
): typeof documents["GetMobileSocialGroupLeaderboardItemsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileSocialGroupLeaderboardsDocument"
): typeof documents["GetMobileSocialGroupLeaderboardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "UpdateMobileSocialLeaderboardConsentsDocument"
): typeof documents["UpdateMobileSocialLeaderboardConsentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetStatisticsDocument"): typeof documents["GetStatisticsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetUserSurgeDocument"): typeof documents["GetUserSurgeDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetTodayEarningsDocument"): typeof documents["GetTodayEarningsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetMobileUserActivityHistoryDocument"
): typeof documents["GetMobileUserActivityHistoryDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetStreakDetailsDocument"): typeof documents["GetStreakDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "ClaimMobileGameWeeklyRewardsDocument"
): typeof documents["ClaimMobileGameWeeklyRewardsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetMobileGameWeekliesDocument"): typeof documents["GetMobileGameWeekliesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "JoinWeeklyGoalDocument"): typeof documents["JoinWeeklyGoalDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetWellbeingHubItemsDocument"): typeof documents["GetWellbeingHubItemsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "SendWellbeingHubItemDocumentsDocument"
): typeof documents["SendWellbeingHubItemDocumentsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "CompleteInAppYuniversityModuleChapterDocument"
): typeof documents["CompleteInAppYuniversityModuleChapterDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetInAppYuniversityCoursesDocument"
): typeof documents["GetInAppYuniversityCoursesDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetInAppYuniversityCourseModuleDetailsDocument"
): typeof documents["GetInAppYuniversityCourseModuleDetailsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYuScreenV5Document"): typeof documents["GetYuScreenV5Document"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetProductYumojiPartDocument"): typeof documents["GetProductYumojiPartDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYuScreenDocument"): typeof documents["GetYuScreenDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYuScreenProductListDocument"): typeof documents["GetYuScreenProductListDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYumojiPartUrlSetDocument"): typeof documents["GetYumojiPartUrlSetDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYumojiPartUrlSetSwiperDocument"): typeof documents["GetYumojiPartUrlSetSwiperDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "GetYumojiRemoteFittingRoomDocument"
): typeof documents["GetYumojiRemoteFittingRoomDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GetYumojiRemotePartsDocument"): typeof documents["GetYumojiRemotePartsDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "UpdateAvatarDocument"): typeof documents["UpdateAvatarDocument"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenBoxOptionCardFragmentDoc"): typeof documents["YuScreenBoxOptionCardFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenCarouselFragmentDoc"): typeof documents["YuScreenCarouselFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenEnrolTimerFragmentDoc"): typeof documents["YuScreenEnrolTimerFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenEnrollCopyFragmentDoc"): typeof documents["YuScreenEnrollCopyFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenPopoverFragmentDoc"): typeof documents["YuScreenPopoverFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenOnboardingFragmentDoc"): typeof documents["YuScreenOnboardingFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenProductFragmentDoc"): typeof documents["YuScreenProductFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "YuScreenSpanningProductSlotFragmentDoc"
): typeof documents["YuScreenSpanningProductSlotFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenSurveyFooterFragmentDoc"): typeof documents["YuScreenSurveyFooterFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YuScreenYumojiPromptFragmentDoc"): typeof documents["YuScreenYumojiPromptFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "YumojiRemotePartFragmentDoc"): typeof documents["YumojiRemotePartFragmentDoc"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
