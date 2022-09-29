import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CHALLENGE = gql`
  fragment Challenge on Challenge {
    id
    actions
    challengeTemplateId
    currentData
    currentTarget
    customerId
    data
    endTime
    milestoneLog {
      id
      completed
      completionData
      description
    }
    startTime
    status
    target
    updatedAt
    XPAwarded
    yuCoinAwarded
    __typename
  }
`;
