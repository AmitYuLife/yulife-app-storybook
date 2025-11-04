import client from "@graphql/_core/client";
import { ChallengesPayload, gql } from "@graphql/__generated";

const upsertDailyPassives = (payload: ChallengesPayload[], sessionId?: string, hasLastItem?: boolean) =>
  client().mutate({
    mutation: gql("UpsertDailyPassivesDocument"),
    variables: { payload, sessionId, hasLastItem },
    errorPolicy: "ignore",
  });

export default upsertDailyPassives;
