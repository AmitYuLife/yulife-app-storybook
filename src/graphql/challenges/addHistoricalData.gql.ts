import gql from "graphql-tag";
import client from "../_core/client";
import { AddHistoricalData, AddHistoricalDataVariables } from "../_core/schema";
import { ChallengePayload, PassiveChallengeType } from "../_core/schema/globalTypes";

export const GQL_MUTATION_ADD_HISTORICAL_DATA = gql`
    mutation AddHistoricalData($payload: [ChallengePayload], $type: PassiveChallengeType) {
        addHistoricalData(payload: $payload, type: $type) {
            endDateTime
            startDateTime
            yucoin
        }
    }
`;

const addHistoricalData = (payload: ChallengePayload[], type: PassiveChallengeType) =>
    client().mutate<AddHistoricalData, AddHistoricalDataVariables>({
        mutation: GQL_MUTATION_ADD_HISTORICAL_DATA,
        variables: { payload, type }
    });

export default addHistoricalData;
