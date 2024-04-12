import client from "@graphql/_core/client";
import {
  CancelMobileQuestLevelChallengeMutation,
  CancelQuestMapLevelChallengeMutation,
  gql,
} from "@graphql/__generated";
import { FetchResult } from "@apollo/client";

const cancelQuestMapLevelChallenge = (levelSlotId: string) =>
  client().mutate({
    mutation: gql("CancelQuestMapLevelChallengeDocument"),
    variables: { levelSlotId },
    errorPolicy: "ignore",
  });

const cancelMobileQuestLevelChallenge = (challengeId: string) =>
  client().mutate({
    mutation: gql("CancelMobileQuestLevelChallengeDocument"),
    variables: { challengeId },
    errorPolicy: "ignore",
  });

type Args = {
  tempGameUseSettingsConfigForQuestMap: boolean;
  levelSlotId: string;
  challengeId: string;
};

export const cancelChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMap = false,
  challengeId,
  levelSlotId,
}: Args): Promise<FetchResult<CancelMobileQuestLevelChallengeMutation | CancelQuestMapLevelChallengeMutation>> => {
  if (!tempGameUseSettingsConfigForQuestMap) {
    return cancelQuestMapLevelChallenge(levelSlotId);
  }

  return cancelMobileQuestLevelChallenge(challengeId);
};
