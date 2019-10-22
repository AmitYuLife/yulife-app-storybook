import { userFragmentGql } from "@graphql/_fragments/user.gql";
import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";
import { LoginUser, LoginUserVariables } from "../_core/schema";

export const loginUserGql = gql`
    ${userFragmentGql}

    mutation LoginUser(
        $email: String!
        $password: String!
        $method: LoginMethod
        $tokenExpiration: Int
        $intercomHashMethod: IntercomHashMethod
    ) {
        loginUser(
            email: $email
            password: $password
            method: $method
            tokenExpiration: $tokenExpiration
            intercomHashMethod: $intercomHashMethod
        ) {
            token
            expiresAt
            message
            intercomHash
            user {
                ...User
            }
        }
    }
`;

export type LoginUserResultType = MutationResult<LoginUser>;
export type LoginUserMutationFunction = MutationFn<LoginUser, LoginUserVariables>;

export default class LoginUserMutation extends Mutation<LoginUser, LoginUserVariables> {}
