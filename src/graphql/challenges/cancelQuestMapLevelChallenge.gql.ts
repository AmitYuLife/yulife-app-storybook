import { gql } from "@apollo/client";
import client from "../_core/client";

import { CancelQuestMapLevelChallenge, CancelQuestMapLevelChallengeVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE = gql`
  mutation CancelQuestMapLevelChallenge($levelSlotId: String!) {
    cancelQuestMapLevelChallenge(levelSlotId: $levelSlotId) {
      levelSlotId
      status
    }
  }
`;

const cancelQuestMapLevelChallenge = (levelSlotId: string) =>
  client().mutate<CancelQuestMapLevelChallenge, CancelQuestMapLevelChallengeVariables>({
    mutation: GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE,
    variables: { levelSlotId },
    errorPolicy: "ignore",
  });

export default cancelQuestMapLevelChallenge;
