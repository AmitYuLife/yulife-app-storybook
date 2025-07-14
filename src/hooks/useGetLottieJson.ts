import Logger from "@services/logging/logger";
import { useEffect, useRef, useState } from "react";

const LOTTIE_CACHE = new Map<string, any>();

export function useGetLottieJson(uri: string) {
  const [loading, setLoading] = useState(false);
  const isFetching = useRef(false);

  useEffect(() => {
    if (LOTTIE_CACHE.has(uri)) {
      return;
    }

    if (uri && !isFetching.current) {
      (async () => {
        isFetching.current = true;

        try {
          setLoading(true);
          const response = await fetch(uri, { method: "GET" });
          const responseInJson = await response.json();
          LOTTIE_CACHE.set(uri, responseInJson);
        } catch (error) {
          Logger.error(error, { file: "useGetLottieJson" });
        } finally {
          setLoading(false);
        }

        isFetching.current = false;
      })();
    }
  }, [uri]);

  return { uri: LOTTIE_CACHE.get(uri), loading };
}
