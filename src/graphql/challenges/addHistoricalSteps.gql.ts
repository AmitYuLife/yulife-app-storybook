import gql from "graphql-tag";
import client from "../_core/client";
import { AddHistoricalSteps, AddHistoricalStepsVariables, ChallengePayload } from "../_core/schema";

export const addHistoricalStepsGql = gql`
    mutation AddHistoricalSteps($payload: [ChallengePayload], $shouldAward: Boolean) {
        addHistoricalSteps(payload: $payload, shouldAward: $shouldAward) {
            endDateTime
            startDateTime
            yucoin
        }
    }
`;

export default (payload: ChallengePayload[], shouldAward: boolean = true) =>
    client.mutate<AddHistoricalSteps, AddHistoricalStepsVariables>({
        mutation: addHistoricalStepsGql,
        variables: { payload, shouldAward }
    });
