/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemInfoButton
// ====================================================

export interface ContentItemInfoButton_infoBtnLeftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemInfoButton_infoBtnRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemInfoButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemInfoButton_active_leftIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemInfoButton_active_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemInfoButton_active {
  label: string;
  leftIcon: ContentItemInfoButton_active_leftIcon | null;
  rightIcon: ContentItemInfoButton_active_rightIcon | null;
}

export interface ContentItemInfoButton {
  id: string;
  /**
   * Default passive label(placeholder)
   */
  label: string;
  infoBtnLeftIcon: ContentItemInfoButton_infoBtnLeftIcon | null;
  infoBtnRightIcon: ContentItemInfoButton_infoBtnRightIcon | null;
  onPress: ContentItemInfoButton_onPress | null;
  active: ContentItemInfoButton_active;
  answerKeys: string[] | null;
}
