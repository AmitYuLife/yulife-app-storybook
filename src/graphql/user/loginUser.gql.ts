import { MutationTuple } from "@apollo/react-hooks";
import { LoginUserVariables, LoginUser } from "@graphql/_core/schema";
import { GQL_FRAGMENT_USER } from "@graphql/_fragments/user.gql";
import gql from "graphql-tag";

export const GQL_MUTATION_LOGIN_USER = gql`
    ${GQL_FRAGMENT_USER}

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

export type LoginUserMutationTuple = MutationTuple<LoginUser, LoginUserVariables>;
