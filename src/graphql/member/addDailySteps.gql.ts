import gql from "graphql-tag";
import client from "../_core/client";
import { ActionPayload, AddDailySteps, AddDailyStepsVariables } from "../_core/schema";
import { challengeFragmentGql } from "../_fragments/challenge.gql";

export const addDailyStepsGql = gql`
    mutation AddDailySteps($payload: [ActionPayload]) {
        challengeAction(actionInput: {
            type: "passiveSteps",
            actionPayload: $payload
        }) {
            completedActiveChallenges {
                ...Challenge
            }
            currentPassiveChallenge {
                ...Challenge
            }
            timestamp
            userStatus {
                totalCoins
            }
        }
    }
    ${challengeFragmentGql}
`;

export default (payload: ActionPayload[]) => client.mutate<AddDailySteps, AddDailyStepsVariables>({
    mutation: addDailyStepsGql,
    variables: { payload }
});
