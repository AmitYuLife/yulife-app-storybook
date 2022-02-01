/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ContentItemProgressSteps
// ====================================================

export interface ContentItemProgressSteps_theme_barColour {
  active: string;
  inactive: string;
}

export interface ContentItemProgressSteps_theme_barBorderColour {
  active: string;
  inactive: string;
}

export interface ContentItemProgressSteps_theme_stepBackgroundColour {
  active: string;
  inactive: string;
}

export interface ContentItemProgressSteps_theme_stepTextColour {
  active: string;
  inactive: string;
}

export interface ContentItemProgressSteps_theme {
  barColour: ContentItemProgressSteps_theme_barColour;
  barBorderColour: ContentItemProgressSteps_theme_barBorderColour;
  stepBackgroundColour: ContentItemProgressSteps_theme_stepBackgroundColour;
  stepTextColour: ContentItemProgressSteps_theme_stepTextColour;
}

export interface ContentItemProgressSteps_wrapperStyles {
  property: string;
  value: string;
}

export interface ContentItemProgressSteps {
  id: string;
  currentStep: number;
  numberOfSteps: number;
  theme: ContentItemProgressSteps_theme | null;
  wrapperStyles: ContentItemProgressSteps_wrapperStyles[] | null;
}
