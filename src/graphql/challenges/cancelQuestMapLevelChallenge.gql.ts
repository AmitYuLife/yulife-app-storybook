import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

const cancelQuestMapLevelChallenge = (levelSlotId: string) =>
  client().mutate({
    mutation: gql("CancelQuestMapLevelChallengeDocument"),
    variables: { levelSlotId },
    errorPolicy: "ignore",
  });

export default cancelQuestMapLevelChallenge;
