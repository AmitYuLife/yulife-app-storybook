import gql from "graphql-tag";
import client from "../_core/client";

import { CancelActiveChallenge, CancelActiveChallengeVariables } from "../_core/schema";

export const GQL_MUTATION_CANCEL_ACTIVE_CHALLENGE = gql`
  mutation CancelActiveChallenge($levelSlotId: String!) {
    cancelActiveChallenge(levelSlotId: $levelSlotId) {
      levelSlotId
      status
    }
  }
`;

export default (levelSlotId: string) =>
  client().mutate<CancelActiveChallenge, CancelActiveChallengeVariables>({
    mutation: GQL_MUTATION_CANCEL_ACTIVE_CHALLENGE,
    variables: { levelSlotId },
    errorPolicy: "ignore",
  });
