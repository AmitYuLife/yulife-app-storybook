import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

export const usePathwayChallenge = () => {
  const dispatch = useDispatch();

  const { data: pathwayChallengeData, loading: pathwayChallengeLoading } = useQuery(
    gql("GetPathwayChallengeDocument"),
    {
      fetchPolicy: "cache-and-network",
    }
  );

  const handlePathwayTilePress = useCallback(() => {
    const action = pathwayChallengeData?.getPathwayChallenge?.action;
    if (action?.type) {
      dispatch({
        type: action.type,
        payload: { serverPayload: action.payload },
      });
    }
  }, [dispatch, pathwayChallengeData?.getPathwayChallenge?.action]);

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
