/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenProductButtonAction
// ====================================================

export interface YuScreenProductButtonAction_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface YuScreenProductButtonAction_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenProductButtonAction {
  productAction: YuScreenProductButtonAction_productAction | null;
  sduiAction: YuScreenProductButtonAction_sduiAction | null;
}
