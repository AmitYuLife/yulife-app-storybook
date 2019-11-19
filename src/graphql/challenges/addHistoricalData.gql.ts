import gql from "graphql-tag";
import client from "../_core/client";
import { AddHistoricalData, AddHistoricalDataVariables, ChallengePayload, PassiveChallengeType } from "../_core/schema";

export const addHistoricalDataGql = gql`
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
        mutation: addHistoricalDataGql,
        variables: { payload, type }
    });

export default addHistoricalData;
