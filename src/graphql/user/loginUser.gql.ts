import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

import { loginUser, loginUserVariables } from "../_core/schema";
import { challengeFragmentGql } from "../_fragments/challenge.gql";
import { challengeTemplateFragmentGql } from "../_fragments/challengeTemplate.gql";

export const loginUserGql = gql`
    mutation loginUser($email: String!, $password: String!, $method: LoginMethod, $tokenExpiration: Int) {
        loginUser(email: $email, password: $password, method: $method, tokenExpiration: $tokenExpiration) {
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

export type LoginUserMutationType = MutationFn<loginUser, loginUserVariables>;

export type LoginUserResultType = MutationResult<loginUser>;

export default class LoginUserMutation extends Mutation<loginUser, loginUserVariables> {}
