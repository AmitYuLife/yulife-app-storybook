import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { useCallback } from "react";

export const useChallengePause = (tempGameUseSettingsConfigForQuestMapV3: boolean) => {
  const [oldPause] = useMutation(gql("ToggleChallengePauseDocument"));

  const [newPause] = useMutation(gql("ToggleMobileQuestLevelChallengePauseDocument"));

  const mutate = useCallback(
    ({ paused, challengeId, levelSlotId }: { paused: boolean; challengeId?: string; levelSlotId?: string }) => {
      if (!tempGameUseSettingsConfigForQuestMapV3 && levelSlotId) {
        return oldPause({
          variables: {
            levelSlotId,
            paused,
          },
        });
      }

      return newPause({
        variables: {
          challengeId,
          paused,
        },
      });
    },
    [newPause, oldPause, tempGameUseSettingsConfigForQuestMapV3]
  );

  return mutate;
};
