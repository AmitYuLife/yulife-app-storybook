import gql from "graphql-tag";

export const GQL_QUERY_GET_DUEL_TEMPLATES = gql`
  query GetDuelTemplates {
    getDuelTemplates {
      challengeTemplate {
        id
        type
        description
        duration
      }
      wagerTemplate {
        id
        yucoin
      }
    }
  }
`;
