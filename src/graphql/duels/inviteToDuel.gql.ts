import { gql } from "@apollo/client";
import { MutationTuple } from "@apollo/client";
import { InviteToDuel, InviteToDuelVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_INVITE_TO_DUEL = gql`
  mutation InviteToDuel(
    $opponentUserIds: [String!]
    $startDateTime: String!
    $duration: Int!
    $yucoin: Int!
    $requestLocation: String
    $leaderboardPlacement: Int
  ) {
    inviteToDuel(
      opponentUserIds: $opponentUserIds
      startDateTime: $startDateTime
      duration: $duration
      yucoin: $yucoin
      requestLocation: $requestLocation
      leaderboardPlacement: $leaderboardPlacement
    ) {
      id
    }
  }
`;

export type InviteToDuelMutationTuple = MutationTuple<InviteToDuel, InviteToDuelVariables>;
