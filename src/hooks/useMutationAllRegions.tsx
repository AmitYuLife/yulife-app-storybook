import { useState, useCallback, useRef } from "react";
import { REGION, REGION_LIST } from "@locale";
import { DocumentNode, FetchResult, MutationOptions } from "@apollo/client";
import { clients as clientsRoot } from "@graphql/_core/client";

/**
 * Sends a mutation to all available regions
 * Returns an array of results back for all successful
 * Otherwise, the latest error is set on the `latestError` field
 *
 * @param mutation - GQL mutation
 * @param options - same as useMutation options
 * @param regions - allows restriction of which regions to call
 * @returns
 */
export const useMutatationAllRegions = <T = object,>(
  mutation: DocumentNode,
  options?: Partial<MutationOptions>,
  regions?: REGION[]
) => {
  const [clients] = useState(clientsRoot);
  const [responseCount, setResponseCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const results = useRef([] as (FetchResult<T> & { region: REGION })[]);
  const [error, setError] = useState("");

  const mutate = useCallback(
    async (inlineOptions: Partial<MutationOptions>) => {
      setResponseCount(0);
      setLoading(true);
      setError("");
      results.current = [];

      const funcs = (regions || REGION_LIST).map((r) => async () => {
        const client = clients[r];
        try {
          const data = await client.mutate<T>({
            mutation,
            ...inlineOptions,
            ...options,
          });
          results.current.push({ region: r, ...data });
        } catch (e) {
          setError(e?.message);
        } finally {
          setResponseCount(responseCount + 1);
        }
      });

      // send in parallel
      await Promise.all(funcs.map((f) => f()));

      setLoading(false);

      return results.current;
    },
    [clients, mutation, responseCount, setResponseCount, options, setLoading, setError, regions]
  );

  return {
    mutate,
    result: {
      loading,
      responseCount,
      lastError: !loading && results.current.length === 0 && error ? error : "",
      data: results.current,
    },
  };
};
