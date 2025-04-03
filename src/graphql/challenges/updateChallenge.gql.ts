import client from "@graphql/_core/client";
import { gql, ChallengePayload } from "@graphql/__generated";

interface UpdateMobileQuestLevelChallengeArgs {
  challengeId: string;
  payload: ChallengePayload;
  contentId?: string;
  level?: number;
  yuniversalMap?: number;
}

export const updateMobileQuestLevelChallenge = ({
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
