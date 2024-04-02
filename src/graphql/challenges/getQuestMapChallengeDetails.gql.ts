import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export default (levelSlotId: string) =>
  client().query({
    query: gql("GetQuestMapLevelChallengeDetailsDocument"),
    variables: { levelSlotId },
    fetchPolicy: "cache-first",
  });
