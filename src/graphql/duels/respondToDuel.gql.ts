import gql from "graphql-tag";
import { MutationTuple } from "@apollo/react-hooks";
import { RespondToDuel, RespondToDuelVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_RESPOND_TO_DUEL = gql`
  mutation RespondToDuel($duelId: String!, $startDateTime: String!, $hasAccepted: Boolean!) {
    respondToDuel(duelId: $duelId, startDateTime: $startDateTime, hasAccepted: $hasAccepted) {
      id
    }
  }
`;

export type RespondToDuelMutationTuple = MutationTuple<RespondToDuel, RespondToDuelVariables>;
