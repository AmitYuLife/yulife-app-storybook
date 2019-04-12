import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn, MutationProps, MutationResult } from "react-apollo";
import { ReplyToLeaderboardInvite, ReplyToLeaderboardInviteVariables } from "../_core/schema";

export const replyToLeaderboardInviteGql = gql`
    mutation ReplyToLeaderboardInvite($leaderboardId: String!, $hasAccepted: Boolean!) {
        replyToLeaderboardInvite(leaderboardId: $leaderboardId, hasAccepted: $hasAccepted)
    }
`;

export type ReplyToLeaderboardInviteResultType = MutationResult<ReplyToLeaderboardInvite>;
export type ReplyToLeaderboardInviteMutationFunction = MutationFn<
    ReplyToLeaderboardInvite,
    ReplyToLeaderboardInviteVariables
>;

export default function ReplyToLeaderboardInviteMutation(
    props: Partial<MutationProps<ReplyToLeaderboardInvite, ReplyToLeaderboardInviteVariables>>
) {
    return <Mutation {...props as any} mutation={replyToLeaderboardInviteGql} />;
}
