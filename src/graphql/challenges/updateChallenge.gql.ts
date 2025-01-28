import client from "@graphql/_core/client";
import { gql, ChallengePayload, UpdateMobileQuestLevelChallengeMutation } from "@graphql/__generated";
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

type Args = {
  payload: ChallengePayload;
  level?: number;
  yuniversalMap?: number | null;
  challengeId?: string;
};

export const updateChallengeToggle = ({
  payload,
  yuniversalMap,
  level,
  challengeId,
}: Args): Promise<FetchResult<UpdateMobileQuestLevelChallengeMutation>> => {
  if (challengeId) {
    return updateMobileQuestLevelChallenge({ challengeId, payload, level, yuniversalMap });
  }

  return Promise.resolve({ data: null });
};

export type UpdateChallengeData = UpdateMobileQuestLevelChallengeMutation["updateMobileQuestLevelChallenge"];

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
