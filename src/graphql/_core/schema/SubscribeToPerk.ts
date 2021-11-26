/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubscribeToPerkField } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubscribeToPerk
// ====================================================

export interface SubscribeToPerk_subscribeToPerk {
  title: string;
  description: string;
  buttonLabel: string;
}

export interface SubscribeToPerk {
  subscribeToPerk: SubscribeToPerk_subscribeToPerk;
}

export interface SubscribeToPerkVariables {
  perkId: string;
  perkFields: (SubscribeToPerkField | null)[];
}
