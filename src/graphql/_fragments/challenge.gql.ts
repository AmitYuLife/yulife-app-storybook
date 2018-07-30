import gql from "graphql-tag";

export const challengeFragmentGql = gql`
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
