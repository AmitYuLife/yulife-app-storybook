/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserConnections
// ====================================================

export interface GetUserConnections_getUserConnections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
}

export interface GetUserConnections {
  getUserConnections: (GetUserConnections_getUserConnections | null)[] | null;
}
