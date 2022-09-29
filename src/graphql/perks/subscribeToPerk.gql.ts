import { gql } from "@apollo/client";
import { MutationTuple } from "@apollo/client";
import { SubscribeToPerk, SubscribeToPerkVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_SUBSCRIBE_TO_PERK = gql`
  mutation SubscribeToPerk($perkId: ID!, $perkFields: [SubscribeToPerkField]!) {
    subscribeToPerk(perkId: $perkId, perkFields: $perkFields) {
      title
      description
      buttonLabel
    }
  }
`;

export type SubscribeToPerkMutationTuple = MutationTuple<SubscribeToPerk, SubscribeToPerkVariables>;
