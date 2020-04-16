import gql from "graphql-tag";
import client from "../_core/client";
import { DeleteConnection, DeleteConnectionVariables } from "../_core/schema";

export const GQL_MUTATION_DELETE_CONNECTION = gql`
    mutation DeleteConnection($name: String!) {
        deleteConnection(name: $name)
    }
`;

export const deleteConnectionWithClient = (name: string) =>
    client().mutate<DeleteConnection, DeleteConnectionVariables>({
        mutation: GQL_MUTATION_DELETE_CONNECTION,
        variables: { name }
    });
