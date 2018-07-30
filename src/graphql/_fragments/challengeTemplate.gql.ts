import gql from "graphql-tag";
import { milestoneFragmentGql } from "./challengeMilestone.gql";

export const challengeTemplateFragmentGql = gql`
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
    ${milestoneFragmentGql}
`;
