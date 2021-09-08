/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemScrollableItemsPicker
// ====================================================

export interface ContentItemScrollableItemsPicker_styles {
  property: string;
  value: string;
}

export interface ContentItemScrollableItemsPicker_range {
  min: number;
  max: number;
  step: number;
}

export interface ContentItemScrollableItemsPicker_styleVariants_item {
  color: string;
}

export interface ContentItemScrollableItemsPicker_styleVariants_overlay_backdropStyles {
  property: string;
  value: string;
}

export interface ContentItemScrollableItemsPicker_styleVariants_overlay_overlayTitleWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemScrollableItemsPicker_styleVariants_overlay {
  backdropStyles: ContentItemScrollableItemsPicker_styleVariants_overlay_backdropStyles[] | null;
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles: ContentItemScrollableItemsPicker_styleVariants_overlay_overlayTitleWrapperStyles[] | null;
}

export interface ContentItemScrollableItemsPicker_styleVariants {
  id: string;
  minVisibleIndex: number | null;
  maxVisibleIndex: number | null;
  item: ContentItemScrollableItemsPicker_styleVariants_item;
  overlay: ContentItemScrollableItemsPicker_styleVariants_overlay;
}

export interface ContentItemScrollableItemsPicker {
  id: string;
  answerKey: string;
  styles: ContentItemScrollableItemsPicker_styles[] | null;
  range: ContentItemScrollableItemsPicker_range;
  styleVariants: ContentItemScrollableItemsPicker_styleVariants[] | null;
}
