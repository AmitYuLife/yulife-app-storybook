import gql from "graphql-tag";
import { userStatusFragmentGql } from "./userStatus.gql";

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
        __typename
        userFeatures {
            name
            value
        }
        userStatus {
            ...UserStatus
        }
    }
    ${userStatusFragmentGql}
`;
