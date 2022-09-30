import { gql } from "@apollo/client";
import { GQL_FRAGMENT_MILESTONE } from "./challengeMilestone.gql";

export const GQL_FRAGMENT_CHALLENGE_TEMPLATE = gql`
  fragment ChallengeTemplate on ChallengeTemplate {
    id
    name
    description
    type
    subtype
    level
    passive
    actions
    target
    totalCoins
    totalXP
    timelimit
    successTitle
    successDescription
    failureTitle
    failureDescription
    challengeCompleteText
    unit
    milestones {
      ...Milestone
    }
    __typename
  }
  ${GQL_FRAGMENT_MILESTONE}
`;
