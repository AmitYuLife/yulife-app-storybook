/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenBoxOptionCard
// ====================================================

export interface YuScreenBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface YuScreenBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenBoxOptionCard {
  title: string | null;
  description: string | null;
  image: YuScreenBoxOptionCard_image | null;
  onPress: YuScreenBoxOptionCard_onPress | null;
}
