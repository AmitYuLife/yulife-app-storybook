import gql from "graphql-tag";
import client from "../_core/client";
import { AddData, AddDataVariables, ChallengePayload, PassiveChallengeType } from "../_core/schema";

export const addDataGql = gql`
    mutation AddData($payload: [ChallengePayload], $type: PassiveChallengeType) {
        addData(payload: $payload, type: $type) {
            endDateTime
            startDateTime
            yucoin
        }
    }
`;

const addData = (payload: ChallengePayload[], type: PassiveChallengeType) =>
    client().mutate<AddData, AddDataVariables>({
        mutation: addDataGql,
        variables: { payload, type }
    });

export default addData;
