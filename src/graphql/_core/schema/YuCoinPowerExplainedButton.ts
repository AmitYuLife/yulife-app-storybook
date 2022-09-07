/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuCoinPowerExplainedButton
// ====================================================

export interface YuCoinPowerExplainedButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuCoinPowerExplainedButton {
  label: string;
  event: YuCoinPowerExplainedButton_event | null;
}
