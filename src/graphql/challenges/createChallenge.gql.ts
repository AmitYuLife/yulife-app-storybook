import client from "@graphql/_core/client";
import {
  ActiveChallengeSourceType,
  CreateMobileQuestLevelChallengeMutation,
  CreateMobileQuestLevelChallengeMutationVariables,
  CreateQuestMapLevelChallengeMutation,
  CreateQuestMapLevelChallengeMutationVariables,
  gql,
} from "@graphql/__generated";

type Args = {
  tempGameUseSettingsConfigForQuestMapV3: boolean;
  createMobileQuestLevelChallengeVariables: CreateMobileQuestLevelChallengeMutationVariables;
  createQuestMapLevelChallengeVariables: CreateQuestMapLevelChallengeMutationVariables;
};

export const createChallengeToggle = ({
  tempGameUseSettingsConfigForQuestMapV3 = false,
  createQuestMapLevelChallengeVariables,
  createMobileQuestLevelChallengeVariables,
}: Args) => {
  if (!createQuestMapLevelChallengeVariables?.levelSlotId || tempGameUseSettingsConfigForQuestMapV3) {
    return client().mutate({
      mutation: gql("CreateMobileQuestLevelChallengeDocument"),
      variables: {
        ...createMobileQuestLevelChallengeVariables,
        createdBySource: ActiveChallengeSourceType.Phone,
      },
    });
  }

  return client().mutate({
    mutation: gql("CreateQuestMapLevelChallengeDocument"),
    variables: {
      ...createQuestMapLevelChallengeVariables,
      createdBySource: ActiveChallengeSourceType.Phone,
    },
  });
};

export type CreateChallengeData =
  | CreateMobileQuestLevelChallengeMutation["createMobileQuestLevelChallenge"]
  | CreateQuestMapLevelChallengeMutation["createQuestMapLevelChallenge"];

type Data = Awaited<ReturnType<typeof createChallengeToggle>>["data"];

export const getCreateChallengeData = (data: Data): CreateChallengeData => {
  if (!data) {
    return null;
  }

  if ("createMobileQuestLevelChallenge" in data) {
    return data?.createMobileQuestLevelChallenge;
  }

  if ("createQuestMapLevelChallenge" in data) {
    return data?.createQuestMapLevelChallenge;
  }
};
