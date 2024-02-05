/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import {
  SduiActionType,
  MobileOnboardingStepPerformed,
  YuProductStatus,
  YuScreenSlotBorderStyle,
  YuScreenCarouselItemVariant,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuScreen
// ====================================================

export interface GetYuScreen_getYuScreen_boxOptionCards_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_boxOptionCards_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_boxOptionCards_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_boxOptionCards {
  title: string | null;
  description: string | null;
  image: GetYuScreen_getYuScreen_boxOptionCards_image | null;
  onPress: GetYuScreen_getYuScreen_boxOptionCards_onPress | null;
  event: GetYuScreen_getYuScreen_boxOptionCards_event | null;
}

export interface GetYuScreen_getYuScreen_onboarding_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_button_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetYuScreen_getYuScreen_onboarding_button_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_button_onPress {
  productAction: GetYuScreen_getYuScreen_onboarding_button_onPress_productAction | null;
  sduiAction: GetYuScreen_getYuScreen_onboarding_button_onPress_sduiAction | null;
}

export interface GetYuScreen_getYuScreen_onboarding_button {
  event: GetYuScreen_getYuScreen_onboarding_button_event | null;
  label: string;
  onPress: GetYuScreen_getYuScreen_onboarding_button_onPress | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder_leftBackgroundImage {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder_rightStatusIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder_onPress {
  productAction: GetYuScreen_getYuScreen_onboarding_placeholder_onPress_productAction | null;
  sduiAction: GetYuScreen_getYuScreen_onboarding_placeholder_onPress_sduiAction | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_placeholder {
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
  borderStyle: YuScreenSlotBorderStyle | null;
  borderWidth: number | null;
  borderColor: string | null;
  leftBackgroundImage: GetYuScreen_getYuScreen_onboarding_placeholder_leftBackgroundImage | null;
  rightIcon: GetYuScreen_getYuScreen_onboarding_placeholder_rightIcon | null;
  rightStatusIcon: GetYuScreen_getYuScreen_onboarding_placeholder_rightStatusIcon | null;
  onPress: GetYuScreen_getYuScreen_onboarding_placeholder_onPress | null;
  event: GetYuScreen_getYuScreen_onboarding_placeholder_event | null;
  showOnOnboarding: boolean | null;
  depressed: boolean | null;
}

export interface GetYuScreen_getYuScreen_onboarding_overlayImage {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots_leftBackgroundImage {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots_rightStatusIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots_onPress {
  productAction: GetYuScreen_getYuScreen_onboarding_productSlots_onPress_productAction | null;
  sduiAction: GetYuScreen_getYuScreen_onboarding_productSlots_onPress_sduiAction | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_onboarding_productSlots {
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
  borderStyle: YuScreenSlotBorderStyle | null;
  borderWidth: number | null;
  borderColor: string | null;
  leftBackgroundImage: GetYuScreen_getYuScreen_onboarding_productSlots_leftBackgroundImage | null;
  rightIcon: GetYuScreen_getYuScreen_onboarding_productSlots_rightIcon | null;
  rightStatusIcon: GetYuScreen_getYuScreen_onboarding_productSlots_rightStatusIcon | null;
  onPress: GetYuScreen_getYuScreen_onboarding_productSlots_onPress | null;
  event: GetYuScreen_getYuScreen_onboarding_productSlots_event | null;
  showOnOnboarding: boolean | null;
  depressed: boolean | null;
}

export interface GetYuScreen_getYuScreen_onboarding {
  id: MobileOnboardingStepPerformed;
  heading: string;
  text: string;
  button: GetYuScreen_getYuScreen_onboarding_button;
  placeholder: GetYuScreen_getYuScreen_onboarding_placeholder;
  dismissByPlaceholder: boolean;
  isYuCoinPowerDisplayed: boolean | null;
  overlayImage: GetYuScreen_getYuScreen_onboarding_overlayImage | null;
  productSlots: GetYuScreen_getYuScreen_onboarding_productSlots[] | null;
}

export interface GetYuScreen_getYuScreen_productSlots_leftBackgroundImage {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_rightStatusIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetYuScreen_getYuScreen_productSlots_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots_onPress {
  productAction: GetYuScreen_getYuScreen_productSlots_onPress_productAction | null;
  sduiAction: GetYuScreen_getYuScreen_productSlots_onPress_sduiAction | null;
}

export interface GetYuScreen_getYuScreen_productSlots_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productSlots {
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
  borderStyle: YuScreenSlotBorderStyle | null;
  borderWidth: number | null;
  borderColor: string | null;
  leftBackgroundImage: GetYuScreen_getYuScreen_productSlots_leftBackgroundImage | null;
  rightIcon: GetYuScreen_getYuScreen_productSlots_rightIcon | null;
  rightStatusIcon: GetYuScreen_getYuScreen_productSlots_rightStatusIcon | null;
  onPress: GetYuScreen_getYuScreen_productSlots_onPress | null;
  event: GetYuScreen_getYuScreen_productSlots_event | null;
  showOnOnboarding: boolean | null;
  depressed: boolean | null;
}

export interface GetYuScreen_getYuScreen_spanningProductSlot_images_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_spanningProductSlot_images {
  image: GetYuScreen_getYuScreen_spanningProductSlot_images_image;
  width: number;
  height: number | null;
}

export interface GetYuScreen_getYuScreen_spanningProductSlot {
  heading: string | null;
  images: GetYuScreen_getYuScreen_spanningProductSlot_images[] | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button_onPress_productAction {
  productId: string;
  nextRouteId: string | null;
  nextModalId: string | null;
  shouldBeNormalised: boolean | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button_onPress_sduiAction {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button_onPress {
  productAction: GetYuScreen_getYuScreen_productCarousel_items_button_onPress_productAction | null;
  sduiAction: GetYuScreen_getYuScreen_productCarousel_items_button_onPress_sduiAction | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_button {
  label: string;
  onPress: GetYuScreen_getYuScreen_productCarousel_items_button_onPress;
  event: GetYuScreen_getYuScreen_productCarousel_items_button_event | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_contentContainerStyles {
  property: string;
  value: string;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_descriptionMarkdownStyles {
  property: string;
  value: string;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_images_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_images {
  image: GetYuScreen_getYuScreen_productCarousel_items_images_image;
  width: number;
  height: number | null;
}

export interface GetYuScreen_getYuScreen_productCarousel_items_titleMarkdownStyles {
  property: string;
  value: string;
}

export interface GetYuScreen_getYuScreen_productCarousel_items {
  backgroundColor: string | null;
  button: GetYuScreen_getYuScreen_productCarousel_items_button | null;
  contentContainerStyles: GetYuScreen_getYuScreen_productCarousel_items_contentContainerStyles[] | null;
  descriptionMarkdown: string | null;
  descriptionMarkdownStyles: GetYuScreen_getYuScreen_productCarousel_items_descriptionMarkdownStyles[] | null;
  images: GetYuScreen_getYuScreen_productCarousel_items_images[] | null;
  titleMarkdown: string | null;
  titleMarkdownStyles: GetYuScreen_getYuScreen_productCarousel_items_titleMarkdownStyles[] | null;
  variant: YuScreenCarouselItemVariant | null;
}

export interface GetYuScreen_getYuScreen_productCarousel {
  heading: string | null;
  items: (GetYuScreen_getYuScreen_productCarousel_items | null)[];
}

export interface GetYuScreen_getYuScreen_surveyFooter_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter_button {
  label: string;
  onPress: GetYuScreen_getYuScreen_surveyFooter_button_onPress;
  event: GetYuScreen_getYuScreen_surveyFooter_button_event | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_surveyFooter {
  markdown: string;
  backgroundColour: string;
  button: GetYuScreen_getYuScreen_surveyFooter_button;
  image: GetYuScreen_getYuScreen_surveyFooter_image;
}

export interface GetYuScreen_getYuScreen_yumojiPrompt {
  buttonText: string;
  heading: string;
  text: string;
}

export interface GetYuScreen_getYuScreen_carrierLogo_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreen_getYuScreen_carrierLogo {
  image: GetYuScreen_getYuScreen_carrierLogo_image;
  width: number;
  height: number | null;
}

export interface GetYuScreen_getYuScreen_enrollCopy_styles {
  property: string;
  value: string;
}

export interface GetYuScreen_getYuScreen_enrollCopy {
  title: string;
  description: string;
  styles: GetYuScreen_getYuScreen_enrollCopy_styles[] | null;
}

export interface GetYuScreen_getYuScreen_enrolTimer_styles {
  property: string;
  value: string;
}

export interface GetYuScreen_getYuScreen_enrolTimer_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_enrolTimer_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreen_getYuScreen_enrolTimer_button {
  label: string;
  onPress: GetYuScreen_getYuScreen_enrolTimer_button_onPress;
  event: GetYuScreen_getYuScreen_enrolTimer_button_event | null;
}

export interface GetYuScreen_getYuScreen_enrolTimer {
  heading: string | null;
  secondsUntilTarget: number;
  styles: GetYuScreen_getYuScreen_enrolTimer_styles[] | null;
  button: GetYuScreen_getYuScreen_enrolTimer_button | null;
  backgroundGradientList: string[] | null;
}

export interface GetYuScreen_getYuScreen {
  boxOptionCards: (GetYuScreen_getYuScreen_boxOptionCards | null)[] | null;
  onboarding: GetYuScreen_getYuScreen_onboarding | null;
  productSlots: (GetYuScreen_getYuScreen_productSlots | null)[];
  spanningProductSlot: GetYuScreen_getYuScreen_spanningProductSlot | null;
  productCarousel: GetYuScreen_getYuScreen_productCarousel | null;
  surveyFooter: GetYuScreen_getYuScreen_surveyFooter | null;
  yumojiPrompt: GetYuScreen_getYuScreen_yumojiPrompt;
  carrierLogo: GetYuScreen_getYuScreen_carrierLogo | null;
  enrollCopy: GetYuScreen_getYuScreen_enrollCopy | null;
  enrolTimer: GetYuScreen_getYuScreen_enrolTimer | null;
}

export interface GetYuScreen {
  getYuScreen: GetYuScreen_getYuScreen | null;
}
