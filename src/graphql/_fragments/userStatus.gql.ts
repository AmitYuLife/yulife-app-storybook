import gql from "graphql-tag";

export const userStatusFragmentGql = gql`
  fragment UserStatus on UserStatus {
    currentActiveChallenge {
        challengeId
        challengeTemplateId
    }
    customerId
    totalCoins
    totalXP
    level
    __typename
  }
`;
