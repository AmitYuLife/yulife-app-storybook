import Logger from "@services/logging/logger";
import { useEffect, useState } from "react";

export function useGetLottieJson(uri: string) {
  const [json, setJson] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (uri) {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch(uri, { method: "GET" });
          const responseInJson = await response.json();
          setJson(responseInJson);
        } catch (error) {
          Logger.error(error, { file: "useGetLottieJson" });
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [uri]);

  return { uri: json, loading };
}
