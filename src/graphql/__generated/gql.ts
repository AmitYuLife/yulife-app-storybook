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
  GetAdBannersDocument: types.GetAdBannersDocument,
  GetMobileAssetsWithVersionDocument: types.GetMobileAssetsWithVersionDocument,
  GetSudokuBoardDocument: types.GetSudokuBoardDocument,
  GetSudokuPracticeDocument: types.GetSudokuPracticeDocument,
  GetSudokuStatsDocument: types.GetSudokuStatsDocument,
  SubmitSudokuSolutionDocument: types.SubmitSudokuSolutionDocument,
  GetPublicYuApiConfigDocument: types.GetPublicYuApiConfigDocument,
  DeleteConnectionDocument: types.DeleteConnectionDocument,
  GetConnectionsDocument: types.GetConnectionsDocument,
  GetNewConnectionLinkDocument: types.GetNewConnectionLinkDocument,
  GetDailyScreenCustomIconDocument: types.GetDailyScreenCustomIconDocument,
  AddDeviceTokenDocument: types.AddDeviceTokenDocument,
  GetUserNotificationsSettingsDocument: types.GetUserNotificationsSettingsDocument,
  UpdateUserNotificationsSettingsDocument: types.UpdateUserNotificationsSettingsDocument,
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
export function gql(source: "AddDeviceTokenDocument"): typeof documents["AddDeviceTokenDocument"];
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

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
