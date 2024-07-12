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
  tempGameUseSettingsConfigForQuestMapV3: boolean;
  levelSlotId: string;
  challengeId: string;
};

export const cancelChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMapV3 = false,
  challengeId,
  levelSlotId,
}: Args): Promise<FetchResult<CancelMobileQuestLevelChallengeMutation | CancelQuestMapLevelChallengeMutation>> => {
  if (!levelSlotId || tempGameUseSettingsConfigForQuestMapV3) {
    return cancelMobileQuestLevelChallenge(challengeId);
  }

  return cancelQuestMapLevelChallenge(levelSlotId);
};
