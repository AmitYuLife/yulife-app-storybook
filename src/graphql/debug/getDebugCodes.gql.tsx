import { gql } from "@apollo/client";

export const GQL_QUERY_DEBUG_CODES = gql`
  query GetDebugCodes {
    getDebugCodes
  }
`;
