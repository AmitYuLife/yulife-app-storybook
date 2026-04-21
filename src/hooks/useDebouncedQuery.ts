/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import React, { useCallback, useEffect, useMemo } from "react";
import { useLazyQuery, LazyQueryHookOptions, DocumentNode, TypedDocumentNode } from "@apollo/client";
import { QueryResult } from "@apollo/client";

export function useDebouncedQuery<TData, TVariables>(
  gql: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: LazyQueryHookOptions<TData, TVariables>,
  timeout = 750,
  initialQuery?: TVariables
): [(variables?: TVariables) => void, QueryResult<TData, TVariables>] {
  "use no memo";
  const timerId = React.useRef<ReturnType<typeof setTimeout>>(null);
  const [query, res] = useLazyQuery<TData, TVariables>(gql, options);

  const [waiting, setWaiting] = React.useState(false);

  const fireQuery = useCallback((variables: TVariables) => {
    setWaiting(true);
    if (timerId?.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      query({ variables });
      setWaiting(false);
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

  const loading = useMemo(() => {
    if (waiting) {
      return true;
    }

    return res.loading;
  }, [res.loading, waiting]);

  return [fireQuery, { ...res, loading }];
}
