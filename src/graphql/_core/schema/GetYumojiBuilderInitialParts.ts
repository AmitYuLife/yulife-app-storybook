/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { AvatarBodyType, AvatarPartType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYumojiBuilderInitialParts
// ====================================================

export interface GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts_remoteUrl {
  uri: string | null;
  id: string;
}

export interface GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts {
  colorSchemeId: string | null;
  categoryId: string | null;
  partId: string | null;
  partType: string;
  order: number;
  hidesPartTypes: AvatarPartType[] | null;
  remoteUrl: GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts_remoteUrl;
}

export interface GetYumojiBuilderInitialParts {
  /**
   * Gets the default avatar/current avatar for the user
   */
  getYumojiBuilderInitialParts: GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts[];
}

export interface GetYumojiBuilderInitialPartsVariables {
  bodyType: AvatarBodyType;
}
