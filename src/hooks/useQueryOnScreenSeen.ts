import { OperationVariables, TypedDocumentNode, DocumentNode } from "@apollo/client";
import { LazyQueryHookOptions, QueryTuple, useLazyQuery } from "@apollo/client";
import { getRouteState } from "@redux/app/app.selectors";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

type ScreenSeenHookOptions = {
  refetch?: boolean;
  disabled?: boolean;
  // if set to true, the query will be fetched immediately when the hook fires (potentially before the screen is active)
  fetchImmediately?: boolean;
};

const DEFAULT_SCREEN_SEEN_HOOK_OPTIONS = {
  refetch: true,
  disabled: false,
  fetchImmediately: false,
};

/**
 *
 * @param gqlQuery GQL query
 * @param activeView ROUTES or MODALS values
 */
export function useQueryOnScreenSeen<T = any, TVariables = OperationVariables>(
  gqlQuery: DocumentNode | TypedDocumentNode<T, TVariables>,
  screenName: string,
  lazyQueryHookOptions?: LazyQueryHookOptions<T, TVariables>,
  screenSeenHookOptionsArgs: ScreenSeenHookOptions = { refetch: true }
): QueryTuple<T, TVariables> {
  const hasBeenQueried = useRef(false);
  const currentScreen = useSelector(getRouteState);
  const isScreenActive = currentScreen === screenName;
  const screenSeenHookOptions = { ...DEFAULT_SCREEN_SEEN_HOOK_OPTIONS, ...screenSeenHookOptionsArgs };

  const [query, queryResult] = useLazyQuery<T, TVariables>(gqlQuery, {
    fetchPolicy: "cache-and-network",
    ...lazyQueryHookOptions,
  });

  useEffect(() => {
    if (screenSeenHookOptions.disabled) {
      return;
    }

    if (!isScreenActive && !screenSeenHookOptions.fetchImmediately) {
      return;
    }

    if (!hasBeenQueried.current) {
      query();
      hasBeenQueried.current = true;
    }

    if (!isScreenActive) {
      // query has been queried at least once and screen is not active, so we don't need to refetch
      return;
    }

    if (screenSeenHookOptions.refetch) {
      queryResult.refetch();
    }
  }, [isScreenActive, screenSeenHookOptions.refetch, screenSeenHookOptions.fetchImmediately]);

  return [query, queryResult];
}
