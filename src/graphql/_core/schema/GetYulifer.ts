/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetYulifer
// ====================================================

export interface GetYulifer_getYulifer_products_employer {
  productId: string | null;
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
}

export interface GetYulifer_getYulifer_products_personal {
  productId: string | null;
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
}

export interface GetYulifer_getYulifer_products_charms {
  productId: string | null;
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
}

export interface GetYulifer_getYulifer_products {
  employer: (GetYulifer_getYulifer_products_employer | null)[] | null;
  personal: (GetYulifer_getYulifer_products_personal | null)[] | null;
  charms: (GetYulifer_getYulifer_products_charms | null)[] | null;
}

export interface GetYulifer_getYulifer {
  userId: string | null;
  earnRate: number | null;
  isAvatarCreated: boolean | null;
  avatarRemoteFile: string | null;
  products: GetYulifer_getYulifer_products | null;
}

export interface GetYulifer {
  getYulifer: GetYulifer_getYulifer | null;
}
