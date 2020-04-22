import gql from "graphql-tag";
import client from "../_core/client";
import { UpsertPassiveChallenge, UpsertPassiveChallengeVariables } from "../_core/schema";
import { ChallengePayload, PassiveChallengeType } from "../_core/schema/globalTypes";

export const GQL_MUTATION_UPSERT_PASSIVE_CHALLENGE = gql`
  mutation UpsertPassiveChallenge($payload: [ChallengePayload], $type: PassiveChallengeType!) {
    upsertPassiveChallenge(type: $type, payload: $payload) {
      challenge {
        updatedAt
        yuCoinAwarded
        incomingData {
          steps
          meditation
        }
      }
      totalCoins
    }
  }
`;

const upsertPassiveChallenge = (payload: ChallengePayload[], type = PassiveChallengeType.STEPS) =>
  client().mutate<UpsertPassiveChallenge, UpsertPassiveChallengeVariables>({
    mutation: GQL_MUTATION_UPSERT_PASSIVE_CHALLENGE,
    variables: { payload, type },
    errorPolicy: "ignore",
  });

export default upsertPassiveChallenge;
