/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, ContentItemButtonType, SduiActionType, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemAgePercentCoverPicker
// ====================================================

export interface ContentItemAgePercentCoverPicker_styles {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_contentItemAgePercentCoverPickerOptions_contentItemAgePercentCoverPickerAgeOptions {
  contentItemAgePercentCoverPickerPercentOptionValue: number;
  cost: string;
  monthlyPayout: string;
  coverType: CoverType;
}

export interface ContentItemAgePercentCoverPicker_contentItemAgePercentCoverPickerOptions {
  age: number;
  contentItemAgePercentCoverPickerAgeOptions: ContentItemAgePercentCoverPicker_contentItemAgePercentCoverPickerOptions_contentItemAgePercentCoverPickerAgeOptions[];
}

export interface ContentItemAgePercentCoverPicker_restictedPercentInfoCardText_styles {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_restictedPercentInfoCardText_markdownContainerStyle {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_restictedPercentInfoCardText {
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  styles: ContentItemAgePercentCoverPicker_restictedPercentInfoCardText_styles[] | null;
  markdownContainerStyle: ContentItemAgePercentCoverPicker_restictedPercentInfoCardText_markdownContainerStyle[] | null;
}

export interface ContentItemAgePercentCoverPicker_ageText_styles {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_ageText_markdownContainerStyle {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_ageText {
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  styles: ContentItemAgePercentCoverPicker_ageText_styles[] | null;
  markdownContainerStyle: ContentItemAgePercentCoverPicker_ageText_markdownContainerStyle[] | null;
}

export interface ContentItemAgePercentCoverPicker_customCover_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemAgePercentCoverPicker_customCover_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemAgePercentCoverPicker_customCover_button_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemAgePercentCoverPicker_customCover_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemAgePercentCoverPicker_customCover_button_styles {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_customCover_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: ContentItemAgePercentCoverPicker_customCover_button_onPress | null;
  event: ContentItemAgePercentCoverPicker_customCover_button_event | null;
  icon: ContentItemAgePercentCoverPicker_customCover_button_icon | null;
  rightIcon: ContentItemAgePercentCoverPicker_customCover_button_rightIcon | null;
  styles: ContentItemAgePercentCoverPicker_customCover_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_styles {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_range {
  min: number;
  max: number;
  step: number;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_coverMap {
  coverType: CoverType;
  max: number;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_item {
  color: string;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_overlay {
  backdropStyles:
    | ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles[]
    | null;
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles:
    | ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles[]
    | null;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants {
  id: string;
  minVisibleIndex: number | null;
  maxVisibleIndex: number | null;
  item: ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_item;
  overlay: ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants_overlay;
}

export interface ContentItemAgePercentCoverPicker_customCover_itemsPicker {
  id: string;
  answerKey: string;
  styles: ContentItemAgePercentCoverPicker_customCover_itemsPicker_styles[] | null;
  range: ContentItemAgePercentCoverPicker_customCover_itemsPicker_range;
  coverMap: ContentItemAgePercentCoverPicker_customCover_itemsPicker_coverMap[];
  styleVariants: ContentItemAgePercentCoverPicker_customCover_itemsPicker_styleVariants[] | null;
}

export interface ContentItemAgePercentCoverPicker_customCover {
  contentItemCoverPickerCustomCoverTitle: string;
  button: ContentItemAgePercentCoverPicker_customCover_button;
  itemsPicker: ContentItemAgePercentCoverPicker_customCover_itemsPicker;
}

export interface ContentItemAgePercentCoverPicker {
  id: string;
  styles: ContentItemAgePercentCoverPicker_styles[] | null;
  percentsToDefault: number[];
  contentItemAgePercentCoverPickerOptions: ContentItemAgePercentCoverPicker_contentItemAgePercentCoverPickerOptions[];
  /**
   * what percentage of your...
   */
  topHeading: string | null;
  /**
   * Based on your info you can only have ${percent}
   */
  restictedPercentInfoCardText: ContentItemAgePercentCoverPicker_restictedPercentInfoCardText | null;
  /**
   * In the event of your passing...
   */
  costPayoutBenefitHeading: string | null;
  /**
   * a month until
   */
  costPayoutBenefitPayoutSchedule: string | null;
  /**
   * per month
   */
  costPayoutBenefitCostSchedule: string | null;
  /**
   * Your policy will stop when you are ${age}
   */
  ageText: ContentItemAgePercentCoverPicker_ageText | null;
  answerKeyPercent: string;
  answerKeyPercentDefaultValue: number;
  answerKeyAge: string;
  answerKeyAgeDefaultValue: number;
  answerKeyCoverType: string;
  answerKeyCoverTypeDefaultValue: CoverType;
  answerKeyMaxSalaryPercent: string;
  answerKeyMaxSalaryPercentDefaultValue: number;
  customCover: ContentItemAgePercentCoverPicker_customCover | null;
  /**
   * User age
   */
  userAge: number;
  agePickerButtonRightIconImageUrl: string;
}
