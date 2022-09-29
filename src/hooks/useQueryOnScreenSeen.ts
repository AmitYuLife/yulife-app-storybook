import { OperationVariables } from "@apollo/client";
import { LazyQueryHookOptions, QueryTuple, useLazyQuery } from "@apollo/client";
import { getRouteState } from "@redux/app/app.selectors";
import { DocumentNode } from "graphql";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

/**
 *
 * @param gqlQuery GQL query
 * @param activeView ROUTES or MODALS values
 */
export function useQueryOnScreenSeen<T = any, TVariables = OperationVariables>(
  gqlQuery: DocumentNode,
  screenName: string,
  queryOptions: LazyQueryHookOptions<T, TVariables> = {}
): QueryTuple<T, TVariables> {
  const hasBeenQueried = useRef(false);
  const currentScreen = useSelector(getRouteState);
  const isScreenActive = currentScreen === screenName;

  const [query, queryResult] = useLazyQuery<T, TVariables>(gqlQuery, {
    fetchPolicy: "cache-and-network",
    ...queryOptions,
  });

  useEffect(() => {
    if (isScreenActive) {
      if (!hasBeenQueried.current) {
        query();
        hasBeenQueried.current = true;
      } else {
        queryResult.refetch();
      }
    }
  }, [isScreenActive]);

  return [query, queryResult];
}
