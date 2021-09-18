/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvatarPartType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProductYumojiPart
// ====================================================

export interface GetProductYumojiPart_getProductYumojiPart {
  yumojiPartType: AvatarPartType;
}

export interface GetProductYumojiPart {
  /**
   * Gets yumoji part type (e.g. Chest) associated to a product
   */
  getProductYumojiPart: GetProductYumojiPart_getProductYumojiPart;
}

export interface GetProductYumojiPartVariables {
  customerProductId: string;
}
