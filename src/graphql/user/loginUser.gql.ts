import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

import { loginUser, loginUserVariables } from "../_core/schema";

export const loginUserGql = gql`
    mutation loginUser($email: String!, $password: String!, $method: LoginMethod, $tokenExpiration: Int) {
        loginUser(email: $email, password: $password, method: $method, tokenExpiration: $tokenExpiration) {
            token
            expiresAt
            message
            user {
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
                }
                userFeatures {
                    name
                    value
                }
            }
        }
    }
`;

export type LoginUserMutationType = MutationFn<loginUser, loginUserVariables>;

export type LoginUserResultType = MutationResult<loginUser>;

export default class LoginUserMutation extends Mutation<loginUser, loginUserVariables> {}
