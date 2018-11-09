import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";
import client from "../_core/client";

import { CollectAward, CollectAwardVariables } from "../_core/schema";

export const collectAwardGql = gql`
    mutation CollectAward($awardId: String!) {
        collectAward(awardId: $awardId)
    }
`;

export const collectAwardWithClient = (awardId: string) =>
    client.mutate<CollectAward, CollectAwardVariables>({
        mutation: collectAwardGql,
        variables: { awardId }
    });

export type CollectAwardResultType = MutationResult<CollectAward>;
export type CollectAwardMutationFunction = MutationFn<CollectAward, CollectAwardVariables>;

export default class CollectAwardMutation extends Mutation<CollectAward, CollectAwardVariables> {}
