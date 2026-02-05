import moment from "moment";
import { useQueryOnScreenSeen } from "@hooks";
import { gql } from "@graphql/__generated";
import { WatchQueryFetchPolicy } from "@apollo/client";
import { isPathwaysDayCompleted } from "../utils/pathways.util";
import { useCallback } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

interface UsePathwaysOptions {
  fetchPolicy?: WatchQueryFetchPolicy;
}

export const usePathways = (componentId: string, { fetchPolicy = "cache-and-network" }: UsePathwaysOptions = {}) => {
  const [, { data, loading }] = useQueryOnScreenSeen(
    gql("GetUserPathwaysDocument"),
    componentId,
    {
      fetchPolicy,
      variables: {
        startDate: moment().startOf("week").format("YYYY-MM-DD"),
        endDate: moment().endOf("week").format("YYYY-MM-DD"),
      },
    },
    {
      fetchImmediately: true,
    }
  );

  const reflectionProgress = data?.getUserPathways?.reflectionProgress;
  const isStreakComplete = isPathwaysDayCompleted({
    reflectedToday: reflectionProgress?.reflectedToday ?? false,
    currentStreak: reflectionProgress?.currentProgress ?? 0,
    index: reflectionProgress?.maxProgress - 1,
  });

  const currentProgress = isStreakComplete ? reflectionProgress?.maxProgress : reflectionProgress?.currentProgress;
  const todayReward = reflectionProgress?.coinAwards[currentProgress - 1] ?? 0;

  const hasPathwayAdviceItems = data?.getUserPathwayAdviceSection?.items?.length > 0;

  const onReflectionComplete = useCallback(async () => {
    //  Because we are able to complete a reflection from the hero card from the daily-steps screen
    //  Pathways route is not always on the stack and the `popTo` will throw an error
    //  This solution allows us to keep going to the pathways screen when possible, and otherwise just go to the root
    //  Which in this case will be daily-steps screen
    try {
      await Navigation.popTo(ROUTES.pathways);
    } catch (error) {
      await Navigation.popToRoot(componentId);
    }
  }, [componentId]);

  return {
    data,
    loading,
    reflectionProgress,
    isStreakComplete,
    todayReward,
    currentProgress,
    onReflectionComplete,
    hasPathwayAdviceItems,
  };
};
