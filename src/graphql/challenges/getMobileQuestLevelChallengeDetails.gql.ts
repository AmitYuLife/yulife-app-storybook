import client from "@graphql/_core/client";
import { GetMobileQuestLevelChallengeDetailsQueryVariables, gql } from "@graphql/__generated";

export default ({ level, yuniversalMap, levelSlotTemplateId }: GetMobileQuestLevelChallengeDetailsQueryVariables) =>
  client().query({
    query: gql("GetMobileQuestLevelChallengeDetailsDocument"),
    variables: { level, yuniversalMap, levelSlotTemplateId },
    fetchPolicy: "cache-first",
  });
