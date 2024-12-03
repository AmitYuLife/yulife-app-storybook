import { useMemo } from "react";
import { useApolloClient } from "@apollo/client";

export const useUpdateGqlFragment = () => {
  const client = useApolloClient();

  const fn = useMemo(() => client.cache.updateFragment, [client]);

  return fn;
};
