/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetYuScreenProductSurvey
// ====================================================

export interface GetYuScreenProductSurvey_getYuScreenProductSurvey_options {
  id: string;
  label: string;
}

export interface GetYuScreenProductSurvey_getYuScreenProductSurvey {
  id: string;
  title: string;
  description: string;
  postSubmissionMessage: string;
  options: GetYuScreenProductSurvey_getYuScreenProductSurvey_options[];
}

export interface GetYuScreenProductSurvey {
  getYuScreenProductSurvey: GetYuScreenProductSurvey_getYuScreenProductSurvey;
}
