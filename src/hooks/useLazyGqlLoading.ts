import { useCallback, useRef, useState } from "react";
import { DocumentNode } from "graphql";
import { useQuery } from "@apollo/client";

export type LazyGqlLoadingArgs<TData, TRes, TVars> = {
  gql: DocumentNode;
  buildVariables: (page: number) => TVars;
  buildFullData: (newData: TRes, prevData: TData[]) => TData[];
  checkIfReachedEnd: (data: TRes) => boolean;
};

export function useLazyGqlLoading<TData, TRes, TVars>(args: LazyGqlLoadingArgs<TData, TRes, TVars>) {
  const { gql, buildVariables, checkIfReachedEnd, buildFullData } = args;

  const [fullData, setFullData] = useState<TData[]>([]);
  const [page, setPage] = useState(0);

  const hasReachedTheEnd = useRef(false);

  const handleEndReached = useCallback(() => {
    if (!hasReachedTheEnd.current) {
      setPage((s) => s + 1);
    }
  }, []);

  const { data, loading, refetch, error } = useQuery<TRes, TVars>(gql, {
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
      refetch(buildVariables(0));
      return p;
    });
  }, [refetch, buildVariables]);

  return {
    loading,
    error,
    data,
    fullData,
    handleRefresh,
    handleEndReached,
  };
}
