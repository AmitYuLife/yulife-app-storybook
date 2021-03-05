import { DocumentNode } from "graphql";
import { QueryHookOptions, useQuery } from "@apollo/react-hooks";
import useNavigationComponentDidAppear from "./useNavigationComponentDidAppear";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
function useCacheFirstAndNetworkOnAppearQuery<TData, TVariables = {}>(
  query: DocumentNode,
  componentId: string,
  options: QueryHookOptions<TData, TVariables> = {}
) {
  const [fetchPolicy, setFetchPolicy] = useState<QueryHookOptions<TData, TVariables>["fetchPolicy"]>("cache-only");

  const mergedOptions: QueryHookOptions<TData, TVariables> = {
    ...options,
    fetchPolicy,
  };

  const { data, loading, error } = useQuery<TData, TVariables>(query, mergedOptions);

  useNavigationComponentDidAppear(() => {
    if (fetchPolicy === "cache-only") {
      setFetchPolicy("network-only");
    }
  }, componentId);

  return {
    data,
    loading,
    error,
  };
}

export default useCacheFirstAndNetworkOnAppearQuery;
