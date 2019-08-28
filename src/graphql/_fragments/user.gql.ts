import gql from "graphql-tag";

export const userFragmentGql = gql`
    fragment User on User {
        id
        businessAccountId
        membershipType
        email
        firstName
        lastName
        dateOfBirth
        smokerStatus
        bmi
        connections {
            name
            isConnected
            lastUpdated
        }
        __typename
        userFeatures {
            name
            value
        }
    }
`;
