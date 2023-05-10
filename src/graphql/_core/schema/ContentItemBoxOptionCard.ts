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

export interface ContentItemBoxOptionCard {
  id: string;
  contentItemBoxOptionCardTitle: string | null;
  contentItemBoxOptionCardDescription: string | null;
  contentItemBoxOptionCardDescriptionTextType: string | null;
  image: ContentItemBoxOptionCard_image | null;
  onPress: ContentItemBoxOptionCard_onPress | null;
  styles: ContentItemBoxOptionCard_styles[] | null;
}
