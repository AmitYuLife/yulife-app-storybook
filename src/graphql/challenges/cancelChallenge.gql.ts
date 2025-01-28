import client from "@graphql/_core/client";
import { CancelMobileQuestLevelChallengeMutation, gql } from "@graphql/__generated";
import { FetchResult } from "@apollo/client";

const cancelMobileQuestLevelChallenge = (challengeId: string) =>
  client().mutate({
    mutation: gql("CancelMobileQuestLevelChallengeDocument"),
    variables: { challengeId },
    errorPolicy: "ignore",
  });

type Args = {
  levelSlotId: string;
  challengeId: string;
};

export const cancelChallengeToggle = ({
  challengeId,
  levelSlotId,
}: Args): Promise<FetchResult<CancelMobileQuestLevelChallengeMutation>> => {
  if (!levelSlotId) {
    return cancelMobileQuestLevelChallenge(challengeId);
  }
};
