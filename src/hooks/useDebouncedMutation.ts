/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import React, { useCallback, useEffect, useMemo } from "react";
import { MutationHookOptions, DocumentNode, TypedDocumentNode, useMutation, MutationResult } from "@apollo/client";

export function useDebouncedMutation<TData, TVariables>(
  gql: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<TData, TVariables>,
  { timeout = 750, beforeMutateHook }: { timeout?: number; beforeMutateHook?: () => void } = {}
): [(variables?: TVariables) => void, MutationResult<TData>] {
  "use no memo";
  const timerId = React.useRef<ReturnType<typeof setTimeout>>(null);
  const [mutate, res] = useMutation<TData, TVariables>(gql, options);

  const [waiting, setWaiting] = React.useState(false);

  const fireMutation = useCallback((variables: TVariables) => {
    setWaiting(true);
    if (timerId?.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      beforeMutateHook?.();
      mutate({ variables });
      setWaiting(false);
    }, timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (timerId?.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  const loading = useMemo(() => {
    if (waiting) {
      return true;
    }

    return res.loading;
  }, [res.loading, waiting]);

  return [fireMutation, { ...res, loading }];
}
