import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { useCallback } from "react";

export const useChallengePause = () => {
  const [pause] = useMutation(gql("ToggleMobileQuestLevelChallengePauseDocument"));

  const mutate = useCallback(
    ({ paused, challengeId }: { paused: boolean; challengeId?: string; levelSlotId?: string }) => {
      return pause({
        variables: {
          challengeId,
          paused,
        },
      });
    },
    [pause]
  );

  return mutate;
};
