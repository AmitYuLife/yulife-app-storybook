import client from "@graphql/_core/client";
import {
  GetMobileQuestLevelChallengeDetailsQuery,
  GetMobileQuestLevelChallengeDetailsQueryVariables,
  GetQuestMapLevelChallengeDetailsQuery,
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
    variables: { level, yuniversalMap, levelSlotTemplateId },
    fetchPolicy: "cache-first",
  });

const getQuestMapLevelDetails = (levelSlotId: string) =>
  client().query({
    query: gql("GetQuestMapLevelChallengeDetailsDocument"),
    variables: { levelSlotId },
    fetchPolicy: "cache-first",
  });

type Args = {
  tempGameUseSettingsConfigForQuestMapV2: boolean;
  levelSlotId: string;
  getDetailsToggleVariables: {
    level: number;
    levelSlotTemplateId: string;
    yuniversalMap?: number;
  };
};

export const getChallengeDetailsToggle = ({
  tempGameUseSettingsConfigForQuestMapV2 = false,
  getDetailsToggleVariables,
  levelSlotId,
}: Args): Promise<FetchResult<GetQuestMapLevelChallengeDetailsQuery | GetMobileQuestLevelChallengeDetailsQuery>> => {
  if (tempGameUseSettingsConfigForQuestMapV2) {
    return getMobileQuestLevelDetails(getDetailsToggleVariables);
  }

  return getQuestMapLevelDetails(levelSlotId);
};
