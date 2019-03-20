import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn, MutationProps, MutationResult } from "react-apollo";
import { CreateLeaderboard, CreateLeaderboardVariables } from "../_core/schema";

export const createLeaderboardGql = gql`
    mutation CreateLeaderboard($name: String!, $invitees: [String]!) {
        createLeaderboard(name: $name, invitees: $invitees) {
            email
            status
        }
    }
`;

export type CreateLeaderboardResultType = MutationResult<CreateLeaderboard>;
export type CreateLeaderboardMutationFunction = MutationFn<CreateLeaderboard, CreateLeaderboardVariables>;

export default function CreateLeaderboardMutation(
    props: Partial<MutationProps<CreateLeaderboard, CreateLeaderboardVariables>>
) {
    return <Mutation {...props as any} mutation={createLeaderboardGql} />;
}
