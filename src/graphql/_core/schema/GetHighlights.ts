/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHighlights
// ====================================================

export interface GetHighlights_getUserStats_data_graphData_weekData {
  day: number | null;
  value: number | null;
}

export interface GetHighlights_getUserStats_data_graphData {
  weekData: (GetHighlights_getUserStats_data_graphData_weekData | null)[] | null;
  averageLineColor: string | null;
  graphColor: string | null;
}

export interface GetHighlights_getUserStats_data_comparisonData {
  firstTitle: string | null;
  firstTitleColor: string | null;
  firstValue: number | null;
  secondTitle: string | null;
  secondTitleColor: string | null;
  secondValue: number | null;
}

export interface GetHighlights_getUserStats_data {
  cardType: string | null;
  title: string | null;
  value: string | null;
  titleColor: string | null;
  unit: string | null;
  date: string | null;
  subTitleColor: string | null;
  dateText: string | null;
  graphData: GetHighlights_getUserStats_data_graphData | null;
  comparisonData: GetHighlights_getUserStats_data_comparisonData | null;
}

export interface GetHighlights_getUserStats {
  category: string | null;
  title: string | null;
  titleColor: string | null;
  index: number | null;
  data: (GetHighlights_getUserStats_data | null)[] | null;
}

export interface GetHighlights {
  getUserStats: (GetHighlights_getUserStats | null)[] | null;
}
