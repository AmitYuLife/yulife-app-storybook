/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YuProductStatus, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenProduct
// ====================================================

export interface YuScreenProduct_leftBackgroundImage {
  id: string;
  uri: string | null;
}

export interface YuScreenProduct_rightIcon {
  id: string;
  uri: string | null;
}

export interface YuScreenProduct_rightStatusIcon {
  id: string;
  uri: string | null;
}

export interface YuScreenProduct_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenProduct_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenProduct {
  id: string;
  leftText: string | null;
  leftTextColour: string | null;
  status: YuProductStatus;
  title: string;
  titleColour: string;
  backgroundColour: string;
  topShadowColour: string;
  bottomShadowColour: string;
  leftBackgroundImage: YuScreenProduct_leftBackgroundImage | null;
  rightIcon: YuScreenProduct_rightIcon | null;
  rightStatusIcon: YuScreenProduct_rightStatusIcon | null;
  onPress: YuScreenProduct_onPress | null;
  event: YuScreenProduct_event | null;
}
