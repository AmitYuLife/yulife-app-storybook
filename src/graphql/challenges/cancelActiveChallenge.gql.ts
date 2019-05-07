import gql from "graphql-tag";
import client from "../_core/client";

import { CancelActiveChallenge, CancelActiveChallengeVariables } from "../_core/schema";

export const cancelActiveChallengeGql = gql`
    mutation CancelActiveChallenge($levelSlotId: String!) {
        cancelActiveChallenge(levelSlotId: $levelSlotId) {
            levelSlotId
            status
        }
    }
`;

export default (levelSlotId: string) =>
    client().mutate<CancelActiveChallenge, CancelActiveChallengeVariables>({
        mutation: cancelActiveChallengeGql,
        variables: { levelSlotId }
    });
