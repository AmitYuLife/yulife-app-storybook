/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemProcessingTimer
// ====================================================

export interface ContentItemProcessingTimer_onClose {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemProcessingTimer {
  id: string;
  secondsUntilTarget: number;
  backgroundUrl: string | null;
  contentItemProcessingTimerHeading: string | null;
  onClose: ContentItemProcessingTimer_onClose | null;
}
