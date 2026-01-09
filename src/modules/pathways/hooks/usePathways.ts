import moment from "moment";
import { useQueryOnScreenSeen } from "@hooks";
import { gql } from "@graphql/__generated";
import { WatchQueryFetchPolicy } from "@apollo/client";
import { isPathwaysDayCompleted } from "../utils/pathways.util";

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

  return { data, loading, reflectionProgress, isStreakComplete, todayReward, currentProgress };
};
