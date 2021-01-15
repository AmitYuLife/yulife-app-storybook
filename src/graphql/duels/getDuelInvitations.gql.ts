import gql from "graphql-tag";

export const GQL_QUERY_GET_DUEL_INVITATIONS = gql`
  query GetDuelInvitations {
    getDuelInvitations {
      id
      opponents {
        userId
        score
        status
        startDateTime
        name {
          firstName
          lastName
        }
      }
      duration
      type
      yucoin
      status
      inviteStatus
    }
  }
`;
