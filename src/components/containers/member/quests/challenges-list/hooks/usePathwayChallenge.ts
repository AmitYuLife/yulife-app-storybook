import { useCallback, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

interface UsePathwayChallengeArgs {
  componentId: string;
}

export const usePathwayChallenge = ({ componentId }: UsePathwayChallengeArgs) => {
  const { data: pathwayChallengeData, loading: pathwayChallengeLoading } = useQuery(
    gql("GetPathwayChallengeDocument"),
    {
      fetchPolicy: "cache-and-network",
    }
  );

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
  }, [componentId, pathwayChallengeData?.getPathwayChallenge?.action]);

  const pathwayChallenge = useMemo(() => {
    if (!pathwayChallengeData?.getPathwayChallenge) {
      return undefined;
    }

    return {
      ...pathwayChallengeData.getPathwayChallenge,
      onPress: handlePathwayTilePress,
    };
  }, [pathwayChallengeData?.getPathwayChallenge, handlePathwayTilePress]);

  return {
    pathwayChallenge,
    pathwayChallengeLoading,
  };
};
