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
import get from "lodash/get";

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
  tempGameUseSettingsConfigForQuestMap: boolean;
  updateMobileQuestLevelChallengeVariables: MutationUpdateMobileQuestLevelChallengeArgs & CommonPayload;
  updateQuestMapLevelChallengeVariables: MutationUpdateQuestMapLevelChallengeArgs & CommonPayload;
};

export const updateChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMap = false,
  updateMobileQuestLevelChallengeVariables,
  updateQuestMapLevelChallengeVariables,
}: Args): Promise<FetchResult<UpdateMobileQuestLevelChallengeMutation | UpdateQuestMapLevelChallengeMutation>> => {
  if (!tempGameUseSettingsConfigForQuestMap) {
    return updateQuestMapLevelChallenge(updateQuestMapLevelChallengeVariables);
  }

  return updateMobileQuestLevelChallenge(updateMobileQuestLevelChallengeVariables);
};

export type UpdateChallengeData =
  | UpdateMobileQuestLevelChallengeMutation["updateMobileQuestLevelChallenge"]
  | UpdateQuestMapLevelChallengeMutation["updateQuestMapLevelChallenge"];

type UpdateChallengeKeyType =
  | keyof Omit<UpdateMobileQuestLevelChallengeMutation, "__typename">
  | keyof Omit<UpdateQuestMapLevelChallengeMutation, "__typename">;

type Data = Awaited<ReturnType<typeof updateChallengeToggle>>["data"];

export const getUpdateChallengeData = (
  data: Data,
  tempGameUseSettingsConfigForQuestMap: boolean
): UpdateChallengeData => {
  return get<Data, UpdateChallengeKeyType>(
    data,
    tempGameUseSettingsConfigForQuestMap ? "updateMobileQuestLevelChallenge" : "updateQuestMapLevelChallenge"
  );
};
