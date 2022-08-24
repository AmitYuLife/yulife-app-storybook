/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemRowIconTextBannerContainerActions
// ====================================================

export interface ContentItemRowIconTextBannerContainerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemRowIconTextBannerContainerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemRowIconTextBannerContainerActions {
  id: string;
  event: ContentItemRowIconTextBannerContainerActions_event | null;
  onPress: ContentItemRowIconTextBannerContainerActions_onPress;
}
