import React, { useCallback, useEffect } from "react";
import { DocumentNode } from "graphql";
import { useLazyQuery, LazyQueryHookOptions } from "@apollo/client";
import { QueryResult } from "@apollo/client";

export function useDebouncedQuery<TData, TVariables>(
  gql: DocumentNode,
  options?: LazyQueryHookOptions<TData, TVariables>,
  timeout = 750,
  initialQuery?: TVariables
): [(variables?: TVariables) => void, QueryResult<TData, TVariables>] {
  const timerId = React.useRef<ReturnType<typeof setTimeout>>(null);
  const [query, res] = useLazyQuery<TData, TVariables>(gql, options);

  const fireQuery = useCallback((variables: TVariables) => {
    if (timerId?.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      query({ variables });
    }, timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initialQuery) {
      fireQuery(initialQuery);
    }

    return () => {
      if (timerId?.current) {
        clearTimeout(timerId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fireQuery, res];
}
