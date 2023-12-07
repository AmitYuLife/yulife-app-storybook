/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetRewardsProductsList
// ====================================================

export interface GetRewardsProductsList_getRewardsProductsList_backgroundImage {
  id: string;
  uri: string | null;
}

export interface GetRewardsProductsList_getRewardsProductsList_imageOverlay_styles {
  property: string;
  value: string;
}

export interface GetRewardsProductsList_getRewardsProductsList_imageOverlay {
  text: string;
  color: string;
  styles: GetRewardsProductsList_getRewardsProductsList_imageOverlay_styles[] | null;
}

export interface GetRewardsProductsList_getRewardsProductsList_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetRewardsProductsList_getRewardsProductsList_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetRewardsProductsList_getRewardsProductsList_onPress {
  productAction: GetRewardsProductsList_getRewardsProductsList_onPress_productAction | null;
  sduiAction: GetRewardsProductsList_getRewardsProductsList_onPress_sduiAction | null;
}

export interface GetRewardsProductsList_getRewardsProductsList_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetRewardsProductsList_getRewardsProductsList {
  id: string;
  backgroundImage: GetRewardsProductsList_getRewardsProductsList_backgroundImage;
  yuCoinPowerIncrease: number | null;
  title: string;
  cta: string;
  imageOverlay: GetRewardsProductsList_getRewardsProductsList_imageOverlay | null;
  onPress: GetRewardsProductsList_getRewardsProductsList_onPress | null;
  event: GetRewardsProductsList_getRewardsProductsList_event | null;
}

export interface GetRewardsProductsList {
  getRewardsProductsList: GetRewardsProductsList_getRewardsProductsList[];
}
