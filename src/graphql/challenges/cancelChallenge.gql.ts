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
  challengeId: string;
};

export const cancelChallengeToggle = ({
  challengeId,
}: Args): Promise<FetchResult<CancelMobileQuestLevelChallengeMutation>> => {
  return cancelMobileQuestLevelChallenge(challengeId);
};
