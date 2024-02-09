import { gql } from "@apollo/client";

export const GQL_FRAGMENT_YU_HEALTH_OPTIONS = gql`
  fragment YuHealthOptions on YuHealthOptions {
    dataType
    capabilities
  }
`;
