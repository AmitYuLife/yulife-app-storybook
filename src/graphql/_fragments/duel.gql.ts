import gql from "graphql-tag";

export const GQL_FRAGMENT_DUEL_OPPONENTS = gql`
  fragment DuelOpponent on DuelOpponent {
    userId
    score
    status
    startDateTime
    name {
      firstName
      lastName
    }
    avatar
    duelId
    lastTimeOpponentDataRetrieved
  }
`;
