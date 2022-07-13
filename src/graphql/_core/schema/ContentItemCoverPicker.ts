/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, ContentItemButtonType, SduiActionType, ContentItemButtonSize } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCoverPicker
// ====================================================

export interface ContentItemCoverPicker_styles {
  property: string;
  value: string;
}

export interface ContentItemCoverPicker_options {
  value: number;
  coverType: CoverType;
  subheading: string;
  heading: string;
}

export interface ContentItemCoverPicker_coverPickerTitle_styles {
  property: string;
  value: string;
}

export interface ContentItemCoverPicker_coverPickerTitle {
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: ContentItemCoverPicker_coverPickerTitle_styles[] | null;
}

export interface ContentItemCoverPicker_customCover_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemCoverPicker_customCover_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemCoverPicker_customCover_button_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemCoverPicker_customCover_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemCoverPicker_customCover_button_styles {
  property: string;
  value: string;
}

export interface ContentItemCoverPicker_customCover_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItemCoverPicker_customCover_button_onPress | null;
  event: ContentItemCoverPicker_customCover_button_event | null;
  icon: ContentItemCoverPicker_customCover_button_icon | null;
  rightIcon: ContentItemCoverPicker_customCover_button_rightIcon | null;
  styles: ContentItemCoverPicker_customCover_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_styles {
  property: string;
  value: string;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_range {
  min: number;
  max: number;
  step: number;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_coverMap {
  coverType: CoverType;
  max: number;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_styleVariants_item {
  color: string;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles {
  property: string;
  value: string;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay {
  backdropStyles: ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles[] | null;
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles:
    | ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles[]
    | null;
}

export interface ContentItemCoverPicker_customCover_itemsPicker_styleVariants {
  id: string;
  minVisibleIndex: number | null;
  maxVisibleIndex: number | null;
  item: ContentItemCoverPicker_customCover_itemsPicker_styleVariants_item;
  overlay: ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay;
}

export interface ContentItemCoverPicker_customCover_itemsPicker {
  id: string;
  answerKey: string;
  styles: ContentItemCoverPicker_customCover_itemsPicker_styles[] | null;
  range: ContentItemCoverPicker_customCover_itemsPicker_range;
  coverMap: ContentItemCoverPicker_customCover_itemsPicker_coverMap[];
  styleVariants: ContentItemCoverPicker_customCover_itemsPicker_styleVariants[] | null;
}

export interface ContentItemCoverPicker_customCover {
  title: string;
  button: ContentItemCoverPicker_customCover_button;
  itemsPicker: ContentItemCoverPicker_customCover_itemsPicker;
}

export interface ContentItemCoverPicker {
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  hasSelectedCustomCover: boolean;
  styles: ContentItemCoverPicker_styles[] | null;
  options: ContentItemCoverPicker_options[] | null;
  coverPickerTitle: ContentItemCoverPicker_coverPickerTitle;
  customCover: ContentItemCoverPicker_customCover | null;
}
