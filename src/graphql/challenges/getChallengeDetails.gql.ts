import client from "@graphql/_core/client";
import { GetMobileQuestLevelChallengeDetailsQueryVariables, gql } from "@graphql/__generated";

export const getMobileQuestLevelDetails = ({
  level,
  yuniversalMap,
  levelSlotTemplateId,
}: GetMobileQuestLevelChallengeDetailsQueryVariables) =>
  client().query({
    query: gql("GetMobileQuestLevelChallengeDetailsDocument"),
    variables: { level, levelSlotTemplateId, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
    fetchPolicy: "cache-first",
  });
