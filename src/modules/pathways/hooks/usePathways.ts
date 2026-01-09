import moment from "moment";
import { useQueryOnScreenSeen } from "@hooks";
import { gql } from "@graphql/__generated";
import { WatchQueryFetchPolicy } from "@apollo/client";

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
  const isStreakComplete = reflectionProgress?.currentProgress >= reflectionProgress?.maxProgress;

  return { data, loading, reflectionProgress, isStreakComplete };
};
