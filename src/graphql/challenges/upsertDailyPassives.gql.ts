import client from "@graphql/_core/client";
import { ChallengesPayload, gql } from "@graphql/__generated";

const upsertDailyPassives = (payload: ChallengesPayload[]) =>
  client().mutate({
    mutation: gql("UpsertDailyPassivesDocument"),
    variables: { payload },
    errorPolicy: "ignore",
  });

export default upsertDailyPassives;
