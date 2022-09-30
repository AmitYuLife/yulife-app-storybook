import { gql } from "@apollo/client";
import client from "../_core/client";

import { CollectAward, CollectAwardVariables } from "../_core/schema";
import { MutationTuple } from "@apollo/client";

export const GQL_MUTATION_COLLECT_AWARD = gql`
  mutation CollectAward($awardId: String!) {
    collectAward(awardId: $awardId)
  }
`;

export type CollectAwardMutationTuple = MutationTuple<CollectAward, CollectAwardVariables>;

export const collectAwardWithClient = (awardId: string) =>
  client().mutate<CollectAward, CollectAwardVariables>({
    mutation: GQL_MUTATION_COLLECT_AWARD,
    variables: { awardId },
  });
