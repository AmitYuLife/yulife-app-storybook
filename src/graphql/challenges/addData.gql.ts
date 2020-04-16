import gql from "graphql-tag";
import client from "../_core/client";
import { AddData, AddDataVariables } from "../_core/schema";
import { ChallengePayload, PassiveChallengeType } from "../_core/schema/globalTypes";

export const GQL_MUTATION_ADD_DATA = gql`
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
        mutation: GQL_MUTATION_ADD_DATA,
        variables: { payload, type }
    });

export default addData;
