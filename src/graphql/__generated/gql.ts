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
  ContentItemLottieFragmentDoc: types.ContentItemLottieFragmentDoc,
  GoalDetailsFragmentDoc: types.GoalDetailsFragmentDoc,
  MediaFragmentDoc: types.MediaFragmentDoc,
  MobileWeeklyActivityProgressFragmentDoc: types.MobileWeeklyActivityProgressFragmentDoc,
  RemoteImageFragmentDoc: types.RemoteImageFragmentDoc,
  SduiActionFragmentDoc: types.SduiActionFragmentDoc,
  SduiStyleFragmentDoc: types.SduiStyleFragmentDoc,
  SocialGroupFragmentDoc: types.SocialGroupFragmentDoc,
  SocialGroupLeaderboardFragmentDoc: types.SocialGroupLeaderboardFragmentDoc,
  UserProfileEventsFragmentDoc: types.UserProfileEventsFragmentDoc,
  UserStatisticDetailsFragmentDoc: types.UserStatisticDetailsFragmentDoc,
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
  ClaimGoalRewardsDocument: types.ClaimGoalRewardsDocument,
  CompleteGoalDocument: types.CompleteGoalDocument,
  GetGoalDetailsDocument: types.GetGoalDetailsDocument,
  GetGoalMilestoneDetailsDocument: types.GetGoalMilestoneDetailsDocument,
  JoinGoalDocument: types.JoinGoalDocument,
  ChangeUserLocaleDocument: types.ChangeUserLocaleDocument,
  GetMediaDocument: types.GetMediaDocument,
  MarkMobileNotificationsAsViewedByTypeDocument: types.MarkMobileNotificationsAsViewedByTypeDocument,
  GetMobileWhatsNewModalDocument: types.GetMobileWhatsNewModalDocument,
  PerformMobileOnboardingStepDocument: types.PerformMobileOnboardingStepDocument,
  ConfirmPaymentCardDocument: types.ConfirmPaymentCardDocument,
  GetMobilePaymentCardSetupDocument: types.GetMobilePaymentCardSetupDocument,
  GetUserNotificationsSettingsDocument: types.GetUserNotificationsSettingsDocument,
  UpdateUserNotificationsSettingsDocument: types.UpdateUserNotificationsSettingsDocument,
  GetReferralBackgroundDocument: types.GetReferralBackgroundDocument,
  GetReferralOnboardingPopoverDocument: types.GetReferralOnboardingPopoverDocument,
  GetReferralInformationDocument: types.GetReferralInformationDocument,
  GetMobileSocialGroupLeaderboardItemsDocument: types.GetMobileSocialGroupLeaderboardItemsDocument,
  GetMobileSocialGroupLeaderboardsDocument: types.GetMobileSocialGroupLeaderboardsDocument,
  UpdateMobileSocialLeaderboardConsentsDocument: types.UpdateMobileSocialLeaderboardConsentsDocument,
  GetStatisticsDocument: types.GetStatisticsDocument,
  GetUserSurgeDocument: types.GetUserSurgeDocument,
  GetTodayEarningsDocument: types.GetTodayEarningsDocument,
  ClaimMobileGameWeeklyRewardsDocument: types.ClaimMobileGameWeeklyRewardsDocument,
  GetMobileGameWeekliesDocument: types.GetMobileGameWeekliesDocument,
  JoinWeeklyGoalDocument: types.JoinWeeklyGoalDocument,
  CompleteInAppYuniversityModuleChapterDocument: types.CompleteInAppYuniversityModuleChapterDocument,
  GetInAppYuniversityCoursesDocument: types.GetInAppYuniversityCoursesDocument,
  GetInAppYuniversityCourseModuleDetailsDocument: types.GetInAppYuniversityCourseModuleDetailsDocument,
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
export function gql(source: "ContentItemLottieFragmentDoc"): typeof documents["ContentItemLottieFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "GoalDetailsFragmentDoc"): typeof documents["GoalDetailsFragmentDoc"];
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
export function gql(source: "SocialGroupFragmentDoc"): typeof documents["SocialGroupFragmentDoc"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "SocialGroupLeaderboardFragmentDoc"): typeof documents["SocialGroupLeaderboardFragmentDoc"];
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

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
