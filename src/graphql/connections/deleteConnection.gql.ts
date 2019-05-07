import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";
import client from "../_core/client";
import { DeleteConnection, DeleteConnectionVariables } from "../_core/schema";

export const deleteConnectionGql = gql`
    mutation DeleteConnection($name: String!) {
        deleteConnection(name: $name)
    }
`;

export type DeleteConnectionResultType = MutationResult<DeleteConnection>;
export type DeleteConnectionMutationFunction = MutationFn<DeleteConnection>;

export class DeleteConnectionMutation extends Mutation<DeleteConnection, DeleteConnectionVariables> {}

export default (name: string) =>
    client.mutate<DeleteConnection, DeleteConnectionVariables>({
        mutation: deleteConnectionGql,
        variables: { name }
    });
