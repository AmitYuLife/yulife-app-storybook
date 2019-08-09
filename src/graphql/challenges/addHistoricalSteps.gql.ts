import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";
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

export type AddHistoricalStepsResultType = MutationResult<AddHistoricalSteps>;
export type AddHistoricalStepsMutationFunction = MutationFn<AddHistoricalSteps, AddHistoricalStepsVariables>;

export class AddHistoricalStepsMutation extends Mutation<AddHistoricalSteps, AddHistoricalStepsVariables> {}

const addHistoricalSteps = (payload: ChallengePayload[], shouldAward: boolean = true) =>
    client().mutate<AddHistoricalSteps, AddHistoricalStepsVariables>({
        mutation: addHistoricalStepsGql,
        variables: { payload, shouldAward }
    });

export default addHistoricalSteps;
