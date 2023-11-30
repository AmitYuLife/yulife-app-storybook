/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMagicLink
// ====================================================

export interface SendMagicLink_sendMagicLink {
  message: string | null;
}

export interface SendMagicLink {
  sendMagicLink: SendMagicLink_sendMagicLink | null;
}

export interface SendMagicLinkVariables {
  email: string;
  isResetPasswordRequest?: boolean | null;
}
