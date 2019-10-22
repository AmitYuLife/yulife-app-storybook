import { userFragmentGql } from "@graphql/_fragments/user.gql";
import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { Platform } from "react-native";
import client from "../_core/client";
import { GetCurrentUser, IntercomHashMethod } from "../_core/schema";

export const getCurrentUserGql = gql`
    ${userFragmentGql}

    query GetCurrentUser($intercomHashMethod: IntercomHashMethod!) {
        getIntercomHash(method: $intercomHashMethod)
        getCurrentUser {
            ...User
        }
    }
`;

export type GetCurrentUserResultType = QueryResult<GetCurrentUser>;

export class GetCurrentUserQuery extends Query<GetCurrentUser> {}

export default function getCurrentUserWithClient() {
    return client().query<GetCurrentUser>({
        fetchPolicy: "network-only",
        query: getCurrentUserGql,
        variables: {
            intercomHashMethod: Platform.OS as IntercomHashMethod
        }
    });
}
