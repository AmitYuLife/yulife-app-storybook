import client from "@graphql/_core/client";
import {
  ActiveChallengeSourceType,
  CreateMobileQuestLevelChallengeMutation,
  CreateMobileQuestLevelChallengeMutationVariables,
  gql,
} from "@graphql/__generated";

type Args = {
  createMobileQuestLevelChallengeVariables: CreateMobileQuestLevelChallengeMutationVariables;
};

export const createChallengeToggle = ({ createMobileQuestLevelChallengeVariables }: Args) => {
  return client().mutate({
    mutation: gql("CreateMobileQuestLevelChallengeDocument"),
    variables: {
      ...createMobileQuestLevelChallengeVariables,
      createdBySource: ActiveChallengeSourceType.Phone,
    },
  });
};

export type CreateChallengeData = CreateMobileQuestLevelChallengeMutation["createMobileQuestLevelChallenge"];

type Data = Awaited<ReturnType<typeof createChallengeToggle>>["data"];

export const getCreateChallengeData = (data: Data): CreateChallengeData => {
  if (!data) {
    return null;
  }

  return data?.createMobileQuestLevelChallenge;
};
