import { useCallback, useMemo } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { AppDataType } from "@redux/user/user.types";
import { getUserDataStart } from "@redux/user/user.actions";
import { updateInAppMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { pathwayChallengeStarted, pathwayChallengeEnded } from "@modules/pathways/redux/pathways.actions";

interface UsePathwayChallengeArgs {
  componentId: string;
  challengeId?: string;
  skipQuery?: boolean;
}

interface CompleteChallengeArgs {
  durationInSeconds: number;
  challengeType: "mindfulness" | "workout";
}

export type PathwayChallenge = ReturnType<typeof usePathwayChallenge>["pathwayChallenge"];

export const usePathwayChallenge = ({ componentId, challengeId, skipQuery = false }: UsePathwayChallengeArgs) => {
  const dispatch = useDispatch();

  const { data: pathwayChallengeData, loading: pathwayChallengeLoading } = useQuery(
    gql("GetPathwayChallengeDocument"),
    {
      fetchPolicy: "cache-and-network",
      skip: skipQuery,
    }
  );

  const [startPathwayChallenge] = useMutation(gql("StartPathwayChallengeDocument"));
  const [completePathwayChallenge] = useMutation(gql("CompletePathwayChallengeDocument"), {
    refetchQueries: [{ query: gql("GetPathwayChallengeDocument") }],
  });
  const [submitPathwayChallengeFeedback] = useMutation(gql("SubmitPathwayChallengeFeedbackDocument"));

  const handlePathwayTilePress = useCallback(() => {
    const action = pathwayChallengeData?.getPathwayChallenge?.action;

    Navigation.push(componentId, {
      component: {
        id: ROUTES.pathwayChallengeIntro,
        name: ROUTES.pathwayChallengeIntro,
        passProps: {
          onPress: action,
          componentId,
        },
      },
    });
  }, [componentId, pathwayChallengeData]);

  const startChallenge = useCallback(async () => {
    if (!challengeId) {
      return;
    }

    dispatch(pathwayChallengeStarted({ pathwayChallengeId: challengeId }));
    await startPathwayChallenge({ variables: { challengeId } });
  }, [challengeId, startPathwayChallenge, dispatch]);

  const completeChallenge = useCallback(
    async ({ durationInSeconds, challengeType }: CompleteChallengeArgs) => {
      if (!challengeId) {
        return;
      }

      dispatch(pathwayChallengeEnded());
      const result = await completePathwayChallenge({ variables: { challengeId } });

      if (challengeType === "mindfulness") {
        dispatch(updateInAppMeditation({ duration: durationInSeconds, createdAt: Date.now() / 1000 }));
      }

      dispatch(
        getUserDataStart({
          types: [AppDataType.coinLedger, AppDataType.dailyChallengeAmountAvailable, AppDataType.todayActivity],
        })
      );

      const yuCoinAwarded = result.data?.completePathwayChallenge?.yuCoinAwarded || 0;

      Navigation.push(componentId, {
        component: {
          name: ROUTES.pathwayChallengeSuccess,
          passProps: {
            reward: yuCoinAwarded,
            componentId,
            challengeId,
          },
        },
      });
    },
    [challengeId, completePathwayChallenge, componentId, dispatch]
  );

  const submitChallengeFeedback = useCallback(
    async (feedbackRating: number) => {
      if (!challengeId) {
        return;
      }

      await submitPathwayChallengeFeedback({
        variables: {
          challengeId,
          feedbackRating,
        },
      });
    },
    [challengeId, submitPathwayChallengeFeedback]
  );

  const pathwayChallenge = useMemo(() => {
    const challenge = pathwayChallengeData?.getPathwayChallenge;

    if (!challenge) {
      return undefined;
    }

    return {
      ...challenge,
      onPress: challenge.isCompleted ? undefined : handlePathwayTilePress,
    };
  }, [pathwayChallengeData?.getPathwayChallenge, handlePathwayTilePress]);

  return {
    pathwayChallenge,
    pathwayChallengeLoading,
    startChallenge,
    completeChallenge,
    submitChallengeFeedback,
  };
};
