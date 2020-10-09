import gql from "graphql-tag";

const GQL_DUEL_HUB_DATA = gql`
  fragment DuelHubData on DuelHubData {
    id
    status
    yucoin
    date
    opponents {
      userId
      score
      status
      startDateTime
      avatar
      name {
        firstName
        lastName
      }
    }
    isResponseRequired
  }
`;

export const GQL_QUERY_GET_DUELS_HUB_DATA = gql`
  ${GQL_DUEL_HUB_DATA}
  query GetDuelsHubData {
    getDuelsHubData {
      activeDuels {
        ...DuelHubData
      }
      upcomingDuels {
        ...DuelHubData
      }
      duelInvitations {
        ...DuelHubData
      }
      pastDuels {
        ...DuelHubData
      }
    }
  }
`;
