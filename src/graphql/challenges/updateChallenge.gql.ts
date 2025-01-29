import client from "@graphql/_core/client";
import {
  gql,
  ChallengePayload,
  UpdateMobileQuestLevelChallengeMutation,
  UpdateQuestMapLevelChallengeMutation,
} from "@graphql/__generated";
import { FetchResult } from "@apollo/client";

interface UpdateMobileQuestLevelChallengeArgs {
  challengeId: string;
  payload: ChallengePayload;
  contentId?: string;
  level?: number;
  yuniversalMap?: number;
}

const updateMobileQuestLevelChallenge = ({
  challengeId,
  payload,
  contentId,
  level,
  yuniversalMap,
}: UpdateMobileQuestLevelChallengeArgs) =>
  client().mutate({
    mutation: gql("UpdateMobileQuestLevelChallengeDocument"),
    variables: { challengeId, payload, contentId },
    errorPolicy: "ignore",
    ...(!level
      ? {}
      : {
          refetchQueries: [
            { query: gql("GetQuestMapLevelDocument"), variables: { level, yuniversalMap: yuniversalMap || null } },
          ],
        }),
  });

interface UpdateQuestMapLevelChallengeArgs {
  levelSlotId: string;
  payload: ChallengePayload;
  level?: number;
  yuniversalMap?: number;
  contentId?: string;
}

const updateQuestMapLevelChallenge = ({
  levelSlotId,
  payload,
  level,
  yuniversalMap,
  contentId,
}: UpdateQuestMapLevelChallengeArgs) =>
  client().mutate({
    mutation: gql("UpdateQuestMapLevelChallengeDocument"),
    variables: { levelSlotId, payload, contentId },
    errorPolicy: "ignore",
    ...(!level
      ? {}
      : {
          refetchQueries: [
            { query: gql("GetQuestMapLevelDocument"), variables: { level, yuniversalMap: yuniversalMap || null } },
          ],
        }),
  });

type Args = {
  tempGameUseSettingsConfigForQuestMapV3: boolean;
  payload: ChallengePayload;
  level?: number;
  yuniversalMap?: number | null;
  challengeId?: string;
  levelSlotId?: string;
};

export const updateChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMapV3 = false,
  payload,
  yuniversalMap,
  level,
  challengeId,
  levelSlotId,
}: Args): Promise<FetchResult<UpdateMobileQuestLevelChallengeMutation | UpdateQuestMapLevelChallengeMutation>> => {
  if (tempGameUseSettingsConfigForQuestMapV3) {
    if (challengeId) {
      return updateMobileQuestLevelChallenge({ challengeId, payload, level, yuniversalMap });
    }
  }

  if (levelSlotId) {
    return updateQuestMapLevelChallenge({ levelSlotId, payload, level, yuniversalMap });
  }

  return Promise.resolve({ data: null });
};

export type UpdateChallengeData =
  | UpdateMobileQuestLevelChallengeMutation["updateMobileQuestLevelChallenge"]
  | UpdateQuestMapLevelChallengeMutation["updateQuestMapLevelChallenge"];

type Data = Awaited<ReturnType<typeof updateChallengeToggle>>["data"];

export const getUpdateChallengeData = (data: Data): UpdateChallengeData => {
  if (!data) {
    return null;
  }

  if ("updateMobileQuestLevelChallenge" in data) {
    return data?.updateMobileQuestLevelChallenge;
  }

  if ("updateQuestMapLevelChallenge" in data) {
    return data?.updateQuestMapLevelChallenge;
  }
};
