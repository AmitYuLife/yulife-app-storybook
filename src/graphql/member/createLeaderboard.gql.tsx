import gql from "graphql-tag";
import { MutationTuple } from "@apollo/react-hooks";
import { CreateLeaderboard, CreateLeaderboardVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_CREATE_LEADERBOARD = gql`
  mutation CreateLeaderboard($name: String!, $invitees: [String]!) {
    createLeaderboard(name: $name, invitees: $invitees) {
      email
      status
    }
  }
`;

export type CreateLeaderboardMutationTuple = MutationTuple<CreateLeaderboard, CreateLeaderboardVariables>;
