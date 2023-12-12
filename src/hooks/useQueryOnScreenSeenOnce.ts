import { OperationVariables, TypedDocumentNode, DocumentNode } from "@apollo/client";
import { LazyQueryHookOptions, QueryTuple, useLazyQuery } from "@apollo/client";
import { getRouteState } from "@redux/app/app.selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";

/**
 *
 * @param gqlQuery GQL query
 * @param activeView ROUTES or MODALS values
 */
export function useQueryOnScreenSeenOnce<T = any, TVariables = OperationVariables>(
  gqlQuery: DocumentNode | TypedDocumentNode<T, TVariables>,
  screenName: string,
  queryOptions: LazyQueryHookOptions<T, TVariables> = {}
): QueryTuple<T, TVariables> {
  const currentScreen = useSelector(getRouteState);
  const isScreenActive = currentScreen === screenName;

  const [query, queryResult] = useLazyQuery<T, TVariables>(gqlQuery, {
    fetchPolicy: "cache-and-network",
    ...queryOptions,
  });

  const { data } = queryResult;

  useEffect(() => {
    if (!data && isScreenActive) {
      query();
    }
  }, [isScreenActive]);

  return [query, queryResult];
}
