/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: NormalisePersonalProductStep
// ====================================================

export interface NormalisePersonalProductStep {
  /**
   * Checks if the current step needs to be updated. E.g if you're on any step after checkout - once you quit, you need to be sent back to the main checkout step.
   */
  normalisePersonalProductStep: boolean | null;
}

export interface NormalisePersonalProductStepVariables {
  productId: string;
}
