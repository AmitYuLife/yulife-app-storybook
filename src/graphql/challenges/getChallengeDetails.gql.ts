import client from "@graphql/_core/client";
import {
  GetMobileQuestLevelChallengeDetailsQuery,
  GetMobileQuestLevelChallengeDetailsQueryVariables,
  gql,
} from "@graphql/__generated";
import { FetchResult } from "@apollo/client";

const getMobileQuestLevelDetails = ({
  level,
  yuniversalMap,
  levelSlotTemplateId,
}: GetMobileQuestLevelChallengeDetailsQueryVariables) =>
  client().query({
    query: gql("GetMobileQuestLevelChallengeDetailsDocument"),
    variables: { level, levelSlotTemplateId, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
    fetchPolicy: "cache-first",
  });

type Args = {
  getDetailsToggleVariables: {
    level: number;
    levelSlotTemplateId: string;
    yuniversalMap?: number;
  };
};

export const getChallengeDetailsToggle = ({
  getDetailsToggleVariables,
}: Args): Promise<FetchResult<GetMobileQuestLevelChallengeDetailsQuery>> => {
  return getMobileQuestLevelDetails(getDetailsToggleVariables);
};
