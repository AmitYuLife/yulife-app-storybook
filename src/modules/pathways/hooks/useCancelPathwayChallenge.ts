import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { pathwayChallengeCancel } from "../redux/pathways.actions";

interface UseCancelPathwayChallengeArgs {
  challengeId: string;
}

export const useCancelPathwayChallenge = ({ challengeId }: UseCancelPathwayChallengeArgs) => {
  const dispatch = useDispatch();
  const isCompletedRef = useRef(false);

  const markAsCompleted = useCallback(() => {
    isCompletedRef.current = true;
  }, []);

  useEffect(() => {
    return () => {
      if (challengeId && !isCompletedRef.current) {
        dispatch(pathwayChallengeCancel());
      }
    };
  }, [challengeId, dispatch]);

  return { markAsCompleted };
};
