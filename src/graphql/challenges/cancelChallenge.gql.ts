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
  tempGameUseSettingsConfigForQuestMapV2: boolean;
  levelSlotId: string;
  challengeId: string;
};

export const cancelChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMapV2 = false,
  challengeId,
  levelSlotId,
}: Args): Promise<FetchResult<CancelMobileQuestLevelChallengeMutation | CancelQuestMapLevelChallengeMutation>> => {
  if (!tempGameUseSettingsConfigForQuestMapV2) {
    return cancelQuestMapLevelChallenge(levelSlotId);
  }

  return cancelMobileQuestLevelChallenge(challengeId);
};
