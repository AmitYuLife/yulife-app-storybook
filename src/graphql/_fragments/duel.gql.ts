import { gql } from "@apollo/client";

export const GQL_FRAGMENT_DUEL_OPPONENTS = gql`
  fragment DuelOpponent on DuelOpponent {
    userId
    score
    status
    startDateTime
    name {
      firstName
      lastName
      fullName
    }
    avatar
    duelId
    lastTimeOpponentDataRetrieved
  }
`;
