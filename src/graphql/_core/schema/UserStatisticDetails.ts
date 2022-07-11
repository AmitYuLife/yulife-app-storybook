/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserStatisticDetails
// ====================================================

export interface UserStatisticDetails_icon {
  id: string;
  uri: string | null;
}

export interface UserStatisticDetails {
  id: string;
  type: string;
  icon: UserStatisticDetails_icon;
  name: string;
  label: string;
  value: number;
  info: string | null;
}
