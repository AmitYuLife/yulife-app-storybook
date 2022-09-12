/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MobileOnboardingStepPerformed, SduiActionType, YuProductStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: YuScreenOnboarding
// ====================================================

export interface YuScreenOnboarding_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenOnboarding_button {
  event: YuScreenOnboarding_button_event | null;
  label: string;
}

export interface YuScreenOnboarding_placeholder_leftBackgroundImage {
  id: string;
  uri: string | null;
}

export interface YuScreenOnboarding_placeholder_rightIcon {
  id: string;
  uri: string | null;
}

export interface YuScreenOnboarding_placeholder_rightStatusIcon {
  id: string;
  uri: string | null;
}

export interface YuScreenOnboarding_placeholder_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface YuScreenOnboarding_placeholder_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenOnboarding_placeholder_onPress {
  productAction: YuScreenOnboarding_placeholder_onPress_productAction | null;
  sduiAction: YuScreenOnboarding_placeholder_onPress_sduiAction | null;
}

export interface YuScreenOnboarding_placeholder_event {
  type: SduiActionType;
  payload: string | null;
}

export interface YuScreenOnboarding_placeholder {
  id: string;
  leftText: string | null;
  leftTextColour: string | null;
  status: YuProductStatus | null;
  title: string;
  titleColour: string;
  text: string | null;
  backgroundColour: string;
  topShadowColour: string;
  bottomShadowColour: string;
  leftBackgroundImage: YuScreenOnboarding_placeholder_leftBackgroundImage | null;
  rightIcon: YuScreenOnboarding_placeholder_rightIcon | null;
  rightStatusIcon: YuScreenOnboarding_placeholder_rightStatusIcon | null;
  onPress: YuScreenOnboarding_placeholder_onPress | null;
  event: YuScreenOnboarding_placeholder_event | null;
  showOnOnboarding: boolean | null;
}

export interface YuScreenOnboarding {
  id: MobileOnboardingStepPerformed;
  heading: string;
  text: string;
  button: YuScreenOnboarding_button;
  placeholder: YuScreenOnboarding_placeholder;
  dismissByPlaceholder: boolean;
}
