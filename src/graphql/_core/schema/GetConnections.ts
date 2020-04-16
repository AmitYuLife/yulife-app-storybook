/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetConnections
// ====================================================

export interface GetConnections_getCurrentUser_connections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
}

export interface GetConnections_getCurrentUser {
  __typename: "User";
  id: string | null;
  connections: (GetConnections_getCurrentUser_connections | null)[] | null;
}

export interface GetConnections {
  getCurrentUser: GetConnections_getCurrentUser | null;
}
