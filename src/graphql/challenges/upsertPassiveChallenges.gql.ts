import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";
import client from "../_core/client";
import { UpsertPassiveChallenges, UpsertPassiveChallengesVariables } from "../_core/schema";
import { ChallengesPayload } from "../_core/schema/globalTypes";

export const GQL_MUTATION_UPSERT_PASSIVE_CHALLENGES = gql`
  mutation UpsertPassiveChallenges($payload: [ChallengesPayload!]!) {
    upsertPassiveChallenges(payload: $payload) {
      challenges {
        updatedAt
        yuCoinAwarded
        incomingData {
          steps
          meditation
          distance
        }
      }
      totalCoins
      currentBalance
    }
  }
`;

export type UpsertPassiveChallengesMutationTuple = MutationTuple<
  UpsertPassiveChallenges,
  UpsertPassiveChallengesVariables
>;

const upsertPassiveChallenges = (payload: ChallengesPayload[]) =>
  client().mutate<UpsertPassiveChallenges, UpsertPassiveChallengesVariables>({
    mutation: GQL_MUTATION_UPSERT_PASSIVE_CHALLENGES,
    variables: { payload },
    errorPolicy: "ignore",
  });

export default upsertPassiveChallenges;
