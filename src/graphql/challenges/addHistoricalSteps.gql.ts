import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";
import client from "../_core/client";
import { AddHistoricalSteps, AddHistoricalStepsVariables } from "../_core/schema";
import { ChallengePayload } from "../_core/schema/globalTypes";

export const GQL_MUTATION_ADD_HISTORICAL_STEPS = gql`
    mutation AddHistoricalSteps($payload: [ChallengePayload], $shouldAward: Boolean, $refreshWearables: Boolean) {
        addHistoricalSteps(payload: $payload, shouldAward: $shouldAward, refreshWearables: $refreshWearables) {
            endDateTime
            startDateTime
            yucoin
        }
    }
`;

export type AddHistoricalStepsMutationTuple = MutationTuple<AddHistoricalSteps, AddHistoricalStepsVariables>;

const addHistoricalSteps = (
    payload: ChallengePayload[],
    shouldAward: boolean = true,
    refreshWearables: boolean = false
) =>
    client().mutate<AddHistoricalSteps, AddHistoricalStepsVariables>({
        mutation: GQL_MUTATION_ADD_HISTORICAL_STEPS,
        variables: { payload, shouldAward, refreshWearables }
    });

export default addHistoricalSteps;
