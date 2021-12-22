import gql from "graphql-tag";
import client from "../_core/client";

import { CancelActiveChallenge, CancelActiveChallengeVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE = gql`
  mutation CancelQuestMapLevelChallenge($levelSlotId: String!) {
    cancelQuestMapLevelChallenge(levelSlotId: $levelSlotId) {
      levelSlotId
      status
    }
  }
`;

export default (levelSlotId: string) =>
  client().mutate<CancelActiveChallenge, CancelActiveChallengeVariables>({
    mutation: GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE,
    variables: { levelSlotId },
    errorPolicy: "ignore",
  });
