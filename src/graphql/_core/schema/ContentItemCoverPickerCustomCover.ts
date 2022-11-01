/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContentItemButtonType, SduiActionType, ContentItemButtonSize, CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCoverPickerCustomCover
// ====================================================

export interface ContentItemCoverPickerCustomCover_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemCoverPickerCustomCover_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemCoverPickerCustomCover_button_icon {
  id: string;
  uri: string | null;
}

export interface ContentItemCoverPickerCustomCover_button_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface ContentItemCoverPickerCustomCover_button_styles {
  property: string;
  value: string;
}

export interface ContentItemCoverPickerCustomCover_button {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: ContentItemCoverPickerCustomCover_button_onPress | null;
  event: ContentItemCoverPickerCustomCover_button_event | null;
  icon: ContentItemCoverPickerCustomCover_button_icon | null;
  contentItemButtonRightIcon: ContentItemCoverPickerCustomCover_button_contentItemButtonRightIcon | null;
  styles: ContentItemCoverPickerCustomCover_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_styles {
  property: string;
  value: string;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_range {
  min: number;
  max: number;
  step: number;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_coverMap {
  coverType: CoverType;
  max: number;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_item {
  color: string;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_overlay_backdropStyles {
  property: string;
  value: string;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_overlay {
  backdropStyles: ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_overlay_backdropStyles[] | null;
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles:
    | ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles[]
    | null;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker_styleVariants {
  id: string;
  minVisibleIndex: number | null;
  maxVisibleIndex: number | null;
  item: ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_item;
  overlay: ContentItemCoverPickerCustomCover_itemsPicker_styleVariants_overlay;
}

export interface ContentItemCoverPickerCustomCover_itemsPicker {
  id: string;
  answerKey: string;
  styles: ContentItemCoverPickerCustomCover_itemsPicker_styles[] | null;
  range: ContentItemCoverPickerCustomCover_itemsPicker_range;
  coverMap: ContentItemCoverPickerCustomCover_itemsPicker_coverMap[];
  styleVariants: ContentItemCoverPickerCustomCover_itemsPicker_styleVariants[] | null;
}

export interface ContentItemCoverPickerCustomCover {
  contentItemCoverPickerCustomCoverTitle: string;
  button: ContentItemCoverPickerCustomCover_button;
  itemsPicker: ContentItemCoverPickerCustomCover_itemsPicker;
}
