import Logger from "@services/logger/logger";
import type { AnimationObject } from "lottie-react-native";
import { useEffect, useState } from "react";

export function useGetLottieJson(uri: string | null | undefined) {
  const [json, setJson] = useState<AnimationObject | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (uri) {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch(uri, { method: "GET" });
          const responseInJson = (await response.json()) as AnimationObject;
          setJson(responseInJson);
        } catch (error) {
          Logger.notify(error, { file: "useGetLottieJson" });
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [uri]);

  return { uri: json, loading };
}
