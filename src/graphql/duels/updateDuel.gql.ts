import gql from "graphql-tag";
import client from "../_core/client";
import { MutationTuple } from "@apollo/react-hooks";
import { UpdateDuel, UpdateDuelVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_UPDATE_DUEL = gql`
  mutation UpdateDuel($duelId: String!, $score: Int!) {
    updateDuel(duelId: $duelId, score: $score)
  }
`;

export type UpdateDuelMutationTuple = MutationTuple<UpdateDuel, UpdateDuelVariables>;

const updateDuelWithClient = (duelId: string, score: number) =>
  client().mutate<UpdateDuel, UpdateDuelVariables>({
    mutation: GQL_MUTATION_UPDATE_DUEL,
    variables: { duelId, score },
  });

export default updateDuelWithClient;
