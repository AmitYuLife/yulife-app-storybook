import gql from "graphql-tag";

export const GQL_QUERY_GET_USER_PROFILE = gql`
  query GetUserProfile {
    getUserProfile {
      gameSettings {
        cyclingMeasurement
      }
    }
  }
`;
