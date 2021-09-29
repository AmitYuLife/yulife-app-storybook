/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMobilePaymentCardSetup
// ====================================================

export interface GetMobilePaymentCardSetup_setup {
  /**
   * Internal paymentId
   */
  paymentId: string;
  /**
   * External customerId
   */
  providerCustomerId: string;
  /**
   * Signing secrets
   */
  clientSecret: string;
  ephemeralSecret: string;
}

export interface GetMobilePaymentCardSetup {
  setup: GetMobilePaymentCardSetup_setup;
}
