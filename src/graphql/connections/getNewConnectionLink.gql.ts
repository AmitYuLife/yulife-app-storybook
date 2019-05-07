import gql from "graphql-tag";
import { MutationFn, MutationResult } from "react-apollo";
import client from "../_core/client";
import { GetNewConnectionLink, GetNewConnectionLinkVariables } from "../_core/schema";

export const getNewConnectionLinkGql = gql`
    mutation GetNewConnectionLink($name: String!) {
        getNewConnectionLink(name: $name)
    }
`;

export type GetNewConnectionLinkFunctionType = MutationFn<GetNewConnectionLink, GetNewConnectionLinkVariables>;

export type GetNewConnectionLinkResultType = MutationResult<GetNewConnectionLink>;

export default (name: string) =>
    client.mutate<GetNewConnectionLink, GetNewConnectionLinkVariables>({
        mutation: getNewConnectionLinkGql,
        variables: { name }
    });
