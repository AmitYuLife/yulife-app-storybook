import gql from "graphql-tag";
import { MutationTuple } from "@apollo/react-hooks";
import { InviteToDuel, InviteToDuelVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_INVITE_TO_DUEL = gql`
  mutation InviteToDuel($opponentUserIds: [String!], $startDateTime: String!, $duration: Int!, $yucoin: Int!) {
    inviteToDuel(
      opponentUserIds: $opponentUserIds
      startDateTime: $startDateTime
      duration: $duration
      yucoin: $yucoin
    ) {
      id
    }
  }
`;

export type InviteToDuelMutationTuple = MutationTuple<InviteToDuel, InviteToDuelVariables>;
