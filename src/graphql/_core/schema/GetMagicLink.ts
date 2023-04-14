/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { MagicLinkSite } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMagicLink
// ====================================================

export interface GetMagicLink {
  getMagicLink: string | null;
}

export interface GetMagicLinkVariables {
  goToMyAccount?: boolean | null;
  site?: MagicLinkSite | null;
  redirectUrl?: string | null;
}
