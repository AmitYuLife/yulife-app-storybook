import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";
import client from "../_core/client";
import { SyncConnections } from "../_core/schema";

export const syncConnectionsGql = gql`
    mutation SyncConnections {
        syncConnections
    }
`;

export type SyncConnectionsResultType = MutationResult<SyncConnections>;
export type SyncConnectionsMutationFunction = MutationFn<SyncConnections>;

export class SyncConnectionsMutation extends Mutation<SyncConnections> {}

export default () =>
    client.mutate<SyncConnections>({
        mutation: syncConnectionsGql
    });
