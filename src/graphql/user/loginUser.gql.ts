import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

import { LoginUser, LoginUserVariables } from "../_core/schema";

export const loginUserGql = gql`
    mutation LoginUser(
        $email: String!,
        $password: String!,
        $method: LoginMethod,
        $tokenExpiration: Int,
        $intercomHashMethod: IntercomHashMethod
    ) {
        loginUser(
            email: $email,
            password: $password,
            method: $method,
            tokenExpiration: $tokenExpiration,
            intercomHashMethod: $intercomHashMethod
        ) {
            token
            expiresAt
            message
            intercomHash
            user {
                __typename
                id
                businessAccountId
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
                coinLedger {
                    currentBalance
                    currentLevel
                    currentStreak
                    nextLevelAvailableAt
                    nextStreakAvailableAt
                }
                activeStreak {
                    id
                    type
                    value
                    maxStreak
                }
                challengesToday {
                    yuCoinAwarded
                    rating
                    subtype
                    incomingData {
                        steps
                        meditation
                    }
                }
                leaderboards {
                    leaderboardId
                    name
                    consent
                }
            }
        }
    }
`;

export type LoginUserResultType = MutationResult<LoginUser>;
export type LoginUserMutationFunction = MutationFn<LoginUser, LoginUserVariables>;

export default class LoginUserMutation extends Mutation<LoginUser, LoginUserVariables> { }
