import { useState, useCallback, useRef } from "react";
import { REGION } from "@locale";
import { DocumentNode, FetchResult, MutationOptions, OperationVariables, TypedDocumentNode } from "@apollo/client";
import { regionalClients } from "@graphql/_core/client";

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
export const useMutatationAllRegions = <T = object, TVariables = OperationVariables>(
  mutation: DocumentNode | TypedDocumentNode<T, TVariables>,
  options?: Partial<MutationOptions>,
  regions?: REGION[]
) => {
  const [responseCount, setResponseCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const errors = useRef<string[]>([]);
  const results = useRef([] as (FetchResult<T> & { region: REGION })[]);
  const [error, setError] = useState("");

  const mutate = useCallback(
    async (inlineOptions: Partial<MutationOptions>) => {
      setResponseCount(0);
      setLoading(true);
      setError("");
      results.current = [];
      errors.current = [];

      const funcs = regionalClients
        .filter((client) => client && (!regions?.length || regions.includes(client.__REGION)))
        .map((client) =>
          (async () => {
            try {
              const data = await client.mutate<T>({
                mutation,
                ...inlineOptions,
                ...options,
              });

              if (data?.errors?.length) {
                errors.current.push(data.errors[0].originalError?.message);
              } else {
                results.current.push({ region: client.__REGION, ...data });
              }
            } catch (e) {
              errors.current.push(e?.message);
            } finally {
              setResponseCount((c) => c + 1);
            }
          })()
        );

      // send in parallel
      await Promise.all(funcs);

      const leastOccurringError = findLeastOccurringError(errors.current);

      if (leastOccurringError) {
        setError(leastOccurringError);
      }

      setLoading(false);

      return results.current;
    },
    [mutation, options, regions]
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

/**
 * if someone's trying to query 4 data centres, it will most likely get 3 of the same errors from 3 different data centres
 * and 1 error from the one they belong to
 */
function findLeastOccurringError(arr: string[]): string {
  if (!arr.length) {
    return;
  }

  const frequencyMap = arr.reduce<Record<string, number>>((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(frequencyMap).reduce((a, b) => (a[1] < b[1] ? a : b))[0];
}
