import client from "@graphql/_core/client";
import {
  gql,
  ChallengePayload,
  MutationUpdateMobileQuestLevelChallengeArgs,
  MutationUpdateQuestMapLevelChallengeArgs,
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

type CommonPayload = { payload: ChallengePayload; level?: number; yuniversalMap?: number | null };

type Args = {
  tempGameUseSettingsConfigForQuestMapV2: boolean;
  updateMobileQuestLevelChallengeVariables: MutationUpdateMobileQuestLevelChallengeArgs & CommonPayload;
  updateQuestMapLevelChallengeVariables: MutationUpdateQuestMapLevelChallengeArgs & CommonPayload;
};

export const updateChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMapV2 = false,
  updateMobileQuestLevelChallengeVariables,
  updateQuestMapLevelChallengeVariables,
}: Args): Promise<FetchResult<UpdateMobileQuestLevelChallengeMutation | UpdateQuestMapLevelChallengeMutation>> => {
  if (!updateQuestMapLevelChallengeVariables?.levelSlotId || tempGameUseSettingsConfigForQuestMapV2) {
    return updateMobileQuestLevelChallenge(updateMobileQuestLevelChallengeVariables);
  }

  return updateQuestMapLevelChallenge(updateQuestMapLevelChallengeVariables);
};

export type UpdateChallengeData =
  | UpdateMobileQuestLevelChallengeMutation["updateMobileQuestLevelChallenge"]
  | UpdateQuestMapLevelChallengeMutation["updateQuestMapLevelChallenge"];

type Data = Awaited<ReturnType<typeof updateChallengeToggle>>["data"];

export const getUpdateChallengeData = (data: Data): UpdateChallengeData => {
  if ("updateMobileQuestLevelChallenge" in data) {
    return data?.updateMobileQuestLevelChallenge;
  }

  if ("updateQuestMapLevelChallenge" in data) {
    return data?.updateQuestMapLevelChallenge;
  }
};
