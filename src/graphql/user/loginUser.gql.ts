import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

import { LoginUser, LoginUserVariables } from "../_core/schema";
import { challengeFragmentGql } from "../_fragments/challenge.gql";
import { challengeTemplateFragmentGql } from "../_fragments/challengeTemplate.gql";

export const loginUserGql = gql`
    mutation LoginUser($email: String!, $password: String!, $method: LoginMethod, $tokenExpiration: Int) {
        loginUser(email: $email, password: $password, method: $method, tokenExpiration: $tokenExpiration) {
            token
            expiresAt
            message
            user {
                __typename
                id
                businessAccountId
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
                mobileConsent {
                    mobileHealth
                    marketing
                    pushNotifications
                    companyLeaderboard
                    workspaceLeaderboard
                }
                redeemedOnboarding
            }
        }
    }
    ${challengeFragmentGql}
    ${challengeTemplateFragmentGql}
`;

export type LoginUserResultType = MutationResult<LoginUser>;
export type LoginUserMutationFunction = MutationFn<LoginUser, LoginUserVariables>;

export default class LoginUserMutation extends Mutation<LoginUser, LoginUserVariables> {}
