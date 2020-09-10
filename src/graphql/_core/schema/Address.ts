/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Address
// ====================================================

export interface Address_findUserAddress {
  addressCity: string | null;
  addressCountry: string | null;
  addressFirstLine: string | null;
  addressSecondLine: string | null;
  addressThirdLine: string | null;
  addressPostCode: string | null;
  addressCounty: string | null;
}

export interface Address {
  findUserAddress: (Address_findUserAddress | null)[] | null;
}

export interface AddressVariables {
  postcode: string;
}
