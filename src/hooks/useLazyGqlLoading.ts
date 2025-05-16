import { useCallback, useEffect, useRef, useState } from "react";
import { DocumentNode, TypedDocumentNode, useLazyQuery } from "@apollo/client";

export type LazyGqlLoadingArgs<TData, TRes, TVars> = {
  gql: DocumentNode | TypedDocumentNode<TData, TVars>;
  buildVariables: (page: number) => TVars;
  buildFullData: (newData: TRes, prevData: TData[]) => TData[];
  checkIfReachedEnd: (data: TRes) => boolean;
  isLazy?: boolean;
};

export function useLazyGqlLoading<TData, TRes, TVars>(args: LazyGqlLoadingArgs<TData, TRes, TVars>) {
  const { gql, buildVariables, checkIfReachedEnd, buildFullData, isLazy } = args;

  const [fullData, setFullData] = useState<TData[]>([]);
  const [page, setPage] = useState(0);

  const hasReachedTheEnd = useRef(false);

  const [fetchLazyQuery, { data, loading, error }] = useLazyQuery<TRes, TVars>(gql, {
    fetchPolicy: "cache-and-network",
    variables: buildVariables(page),
    onError: () => (hasReachedTheEnd.current = true),
    onCompleted: (req) => {
      const isDone = checkIfReachedEnd(req);
      hasReachedTheEnd.current = isDone;

      if (!isDone) {
        setFullData((s) => buildFullData(req, s));
      }
    },
  });

  useEffect(() => {
    if (isLazy) {
      return;
    }

    fetchLazyQuery(buildVariables(0));
  }, [isLazy]);

  const handleEndReached = useCallback(() => {
    if (!hasReachedTheEnd.current) {
      setPage((s) => s + 1);
      fetchLazyQuery();
    }
  }, [fetchLazyQuery]);

  const handleRefresh = useCallback(() => {
    hasReachedTheEnd.current = false;
    setPage((p) => {
      if (p) {
        // setting page as 0 is gonna trigger a refetch which will push the same items into the state array
        // we're avoiding it by setting purchases as an empty array and page as 0
        // then useQuery's gonna do the rest
        setFullData([]);
        return 0;
      }

      // we need to force the refetch otherwise
      fetchLazyQuery(buildVariables(0));
      return p;
    });
  }, [fetchLazyQuery, buildVariables]);

  return {
    loading,
    error,
    data,
    fullData,
    handleRefresh,
    handleEndReached,
  };
}
