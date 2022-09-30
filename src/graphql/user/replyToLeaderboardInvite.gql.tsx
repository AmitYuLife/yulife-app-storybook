import { gql } from "@apollo/client";
import { MutationTuple } from "@apollo/client";
import { ReplyToLeaderboardInvite, ReplyToLeaderboardInviteVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_REPLY_TO_LEADERBOARD_INVITE = gql`
  mutation ReplyToLeaderboardInvite($leaderboardId: String!, $hasAccepted: Boolean!) {
    replyToLeaderboardInvite(leaderboardId: $leaderboardId, hasAccepted: $hasAccepted)
  }
`;

export type ReplyToLeaderboardInviteMutationTuple = MutationTuple<
  ReplyToLeaderboardInvite,
  ReplyToLeaderboardInviteVariables
>;
