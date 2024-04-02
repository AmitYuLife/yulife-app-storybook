import client from "@graphql/_core/client";
import { ChallengePayload } from "@graphql/_core/schema/globalTypes";
import { gql } from "@graphql/__generated";

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

export default updateQuestMapLevelChallenge;
