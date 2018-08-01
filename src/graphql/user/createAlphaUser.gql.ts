import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

import { createAlphaUser, createAlphaUserVariables } from "../_core/schema";
import { challengeFragmentGql } from "../_fragments/challenge.gql";
import { challengeTemplateFragmentGql } from "../_fragments/challengeTemplate.gql";

export const createAlphaUserGql = gql`
    mutation createAlphaUser($email: String!, $password: String!, $firstName: String, $lastName: String, $dateOfBirth: String) {
        createAlphaUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth) {
            token
            expiresAt
            message
            user {
                __typename
                id
                businessAccountId
                membershipType
                email
                firstName
                lastName
                dateOfBirth
                smokerStatus
                bmi
                userStatus {
                    totalCoins
                    challenges {
                        passive {
                            ...Challenge
                            challengeTemplate {
                                ...ChallengeTemplate
                            }
                        }
                        nextActiveAvailable
                        active {
                            ...Challenge
                            challengeTemplate {
                                ...ChallengeTemplate
                            }
                        }
                    }
                }
                userFeatures {
                    name
                    value
                }
            }
        }
    }
    ${challengeFragmentGql}
    ${challengeTemplateFragmentGql}
`;

export type CreateAlphaUserMutationType = MutationFn<createAlphaUser, createAlphaUserVariables>;

export type CreateAlphaUserResultType = MutationResult<createAlphaUser>;

export default class CreateAlphaUserMutation extends Mutation<createAlphaUser, createAlphaUserVariables> {}
