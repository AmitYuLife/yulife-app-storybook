/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemBoxOptionCard
// ====================================================

export interface ContentItemBoxOptionCard_image {
  id: string;
  uri: string | null;
}

export interface ContentItemBoxOptionCard_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface ContentItemBoxOptionCard_styles {
  property: string;
  value: string;
}

export interface ContentItemBoxOptionCard_titleWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemBoxOptionCard_subtitleWrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemBoxOptionCard {
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: ContentItemBoxOptionCard_image | null;
  onPress: ContentItemBoxOptionCard_onPress | null;
  styles: ContentItemBoxOptionCard_styles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  innerHeight: number | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitle: string | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitleTextType: string | null;
  /**
   * Supported RN version 3.96.0
   */
  titleWrapperStyles: ContentItemBoxOptionCard_titleWrapperStyles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  subtitleWrapperStyles: ContentItemBoxOptionCard_subtitleWrapperStyles[] | null;
  /**
   * Supported RN version 3.96.0
   */
  descriptionNumberOfLines: number | null;
  /**
   * Supported RN version 3.96.0
   */
  titleNumberOfLines: number | null;
}
