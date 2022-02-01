import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";
import client from "../_core/client";
import { UpsertDailyPassives, UpsertDailyPassivesVariables } from "../_core/schema";
import { ChallengesPayload } from "../_core/schema/globalTypes";

export const GQL_MUTATION_UPSERT_DAILY_PASSIVES = gql`
  mutation UpsertDailyPassives($payload: [ChallengesPayload!]!) {
    upsertDailyPassives(payload: $payload) {
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
    }
  }
`;

export type UpsertDailyPassivesMutationTuple = MutationTuple<UpsertDailyPassives, UpsertDailyPassivesVariables>;

const upsertDailyPassives = (payload: ChallengesPayload[]) =>
  client().mutate<UpsertDailyPassives, UpsertDailyPassivesVariables>({
    mutation: GQL_MUTATION_UPSERT_DAILY_PASSIVES,
    variables: { payload },
    errorPolicy: "ignore",
  });

export default upsertDailyPassives;
